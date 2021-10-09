import _events from "events";
import _util from "util";
import _buffer from "buffer";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var Buffer = _buffer.Buffer;

  /*
    Based heavily on the Streaming Boyer-Moore-Horspool C++ implementation
    by Hongli Lai at: https://github.com/FooBarWidget/boyer-moore-horspool
  */
  var EventEmitter = _events.EventEmitter,
      inherits = _util.inherits;

  function jsmemcmp(buf1, pos1, buf2, pos2, num) {
    for (var i = 0; i < num; ++i, ++pos1, ++pos2) if (buf1[pos1] !== buf2[pos2]) return false;

    return true;
  }

  function SBMH(needle) {
    if (typeof needle === 'string') needle = new Buffer(needle);
    var i,
        j,
        needle_len = needle.length;
    (this || _global).maxMatches = Infinity;
    (this || _global).matches = 0;
    (this || _global)._occ = new Array(256);
    (this || _global)._lookbehind_size = 0;
    (this || _global)._needle = needle;
    (this || _global)._bufpos = 0;
    (this || _global)._lookbehind = new Buffer(needle_len); // Initialize occurrence table.

    for (j = 0; j < 256; ++j) (this || _global)._occ[j] = needle_len; // Populate occurrence table with analysis of the needle,
    // ignoring last letter.


    if (needle_len >= 1) {
      for (i = 0; i < needle_len - 1; ++i) (this || _global)._occ[needle[i]] = needle_len - 1 - i;
    }
  }

  inherits(SBMH, EventEmitter);

  SBMH.prototype.reset = function () {
    (this || _global)._lookbehind_size = 0;
    (this || _global).matches = 0;
    (this || _global)._bufpos = 0;
  };

  SBMH.prototype.push = function (chunk, pos) {
    var r, chlen;
    if (!Buffer.isBuffer(chunk)) chunk = new Buffer(chunk, 'binary');
    chlen = chunk.length;
    (this || _global)._bufpos = pos || 0;

    while (r !== chlen && (this || _global).matches < (this || _global).maxMatches) r = this._sbmh_feed(chunk);

    return r;
  };

  SBMH.prototype._sbmh_feed = function (data) {
    var len = data.length,
        needle = (this || _global)._needle,
        needle_len = needle.length; // Positive: points to a position in `data`
    //           pos == 3 points to data[3]
    // Negative: points to a position in the lookbehind buffer
    //           pos == -2 points to lookbehind[lookbehind_size - 2]

    var pos = -(this || _global)._lookbehind_size,
        last_needle_char = needle[needle_len - 1],
        occ = (this || _global)._occ,
        lookbehind = (this || _global)._lookbehind;

    if (pos < 0) {
      // Lookbehind buffer is not empty. Perform Boyer-Moore-Horspool
      // search with character lookup code that considers both the
      // lookbehind buffer and the current round's haystack data.
      //
      // Loop until
      //   there is a match.
      // or until
      //   we've moved past the position that requires the
      //   lookbehind buffer. In this case we switch to the
      //   optimized loop.
      // or until
      //   the character to look at lies outside the haystack.
      while (pos < 0 && pos <= len - needle_len) {
        var ch = this._sbmh_lookup_char(data, pos + needle_len - 1);

        if (ch === last_needle_char && this._sbmh_memcmp(data, pos, needle_len - 1)) {
          (this || _global)._lookbehind_size = 0;
          ++(this || _global).matches;
          if (pos > -(this || _global)._lookbehind_size) this.emit('info', true, lookbehind, 0, (this || _global)._lookbehind_size + pos);else this.emit('info', true);
          (this || _global)._bufpos = pos + needle_len;
          return pos + needle_len;
        } else pos += occ[ch];
      } // No match.


      if (pos < 0) {
        // There's too few data for Boyer-Moore-Horspool to run,
        // so let's use a different algorithm to skip as much as
        // we can.
        // Forward pos until
        //   the trailing part of lookbehind + data
        //   looks like the beginning of the needle
        // or until
        //   pos == 0
        while (pos < 0 && !this._sbmh_memcmp(data, pos, len - pos)) pos++;
      }

      if (pos >= 0) {
        // Discard lookbehind buffer.
        this.emit('info', false, lookbehind, 0, (this || _global)._lookbehind_size);
        (this || _global)._lookbehind_size = 0;
      } else {
        // Cut off part of the lookbehind buffer that has
        // been processed and append the entire haystack
        // into it.
        var bytesToCutOff = (this || _global)._lookbehind_size + pos;

        if (bytesToCutOff > 0) {
          // The cut off data is guaranteed not to contain the needle.
          this.emit('info', false, lookbehind, 0, bytesToCutOff);
        }

        lookbehind.copy(lookbehind, 0, bytesToCutOff, (this || _global)._lookbehind_size - bytesToCutOff);
        (this || _global)._lookbehind_size -= bytesToCutOff;
        data.copy(lookbehind, (this || _global)._lookbehind_size);
        (this || _global)._lookbehind_size += len;
        (this || _global)._bufpos = len;
        return len;
      }
    }

    if (pos >= 0) pos += (this || _global)._bufpos; // Lookbehind buffer is now empty. Perform Boyer-Moore-Horspool
    // search with optimized character lookup code that only considers
    // the current round's haystack data.

    while (pos <= len - needle_len) {
      var ch = data[pos + needle_len - 1];

      if (ch === last_needle_char && data[pos] === needle[0] && jsmemcmp(needle, 0, data, pos, needle_len - 1)) {
        ++(this || _global).matches;
        if (pos > 0) this.emit('info', true, data, (this || _global)._bufpos, pos);else this.emit('info', true);
        (this || _global)._bufpos = pos + needle_len;
        return pos + needle_len;
      } else pos += occ[ch];
    } // There was no match. If there's trailing haystack data that we cannot
    // match yet using the Boyer-Moore-Horspool algorithm (because the trailing
    // data is less than the needle size) then match using a modified
    // algorithm that starts matching from the beginning instead of the end.
    // Whatever trailing data is left after running this algorithm is added to
    // the lookbehind buffer.


    if (pos < len) {
      while (pos < len && (data[pos] !== needle[0] || !jsmemcmp(data, pos, needle, 0, len - pos))) {
        ++pos;
      }

      if (pos < len) {
        data.copy(lookbehind, 0, pos, pos + (len - pos));
        (this || _global)._lookbehind_size = len - pos;
      }
    } // Everything until pos is guaranteed not to contain needle data.


    if (pos > 0) this.emit('info', false, data, (this || _global)._bufpos, pos < len ? pos : len);
    (this || _global)._bufpos = len;
    return len;
  };

  SBMH.prototype._sbmh_lookup_char = function (data, pos) {
    if (pos < 0) return (this || _global)._lookbehind[(this || _global)._lookbehind_size + pos];else return data[pos];
  };

  SBMH.prototype._sbmh_memcmp = function (data, pos, len) {
    var i = 0;

    while (i < len) {
      if (this._sbmh_lookup_char(data, pos + i) === (this || _global)._needle[i]) ++i;else return false;
    }

    return true;
  };

  exports = SBMH;
  return exports;
}