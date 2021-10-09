import _stream from "stream";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var stream = _stream;

  function DuplexWrapper(options, writable, readable) {
    if (typeof readable === "undefined") {
      readable = writable;
      writable = options;
      options = null;
    }

    stream.Duplex.call(this, options);

    if (typeof readable.read !== "function") {
      readable = new stream.Readable(options).wrap(readable);
    }

    this._writable = writable;
    this._readable = readable;
    this._waiting = false;
    var self = this;
    writable.once("finish", function () {
      self.end();
    });
    this.once("finish", function () {
      writable.end();
    });
    readable.on("readable", function () {
      if (self._waiting) {
        self._waiting = false;

        self._read();
      }
    });
    readable.once("end", function () {
      self.push(null);
    });

    if (!options || typeof options.bubbleErrors === "undefined" || options.bubbleErrors) {
      writable.on("error", function (err) {
        self.emit("error", err);
      });
      readable.on("error", function (err) {
        self.emit("error", err);
      });
    }
  }

  DuplexWrapper.prototype = Object.create(stream.Duplex.prototype, {
    constructor: {
      value: DuplexWrapper
    }
  });

  DuplexWrapper.prototype._write = function _write(input, encoding, done) {
    this._writable.write(input, encoding, done);
  };

  DuplexWrapper.prototype._read = function _read() {
    var buf;
    var reads = 0;

    while ((buf = this._readable.read()) !== null) {
      this.push(buf);
      reads++;
    }

    if (reads === 0) {
      this._waiting = true;
    }
  };

  exports = function duplex2(options, writable, readable) {
    return new DuplexWrapper(options, writable, readable);
  };

  exports.DuplexWrapper = DuplexWrapper;
  return exports;
}