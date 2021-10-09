import _stream from "stream";
import _process from "process";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;
  var Stream = _stream.Stream;
  exports = legacy;

  function legacy(fs) {
    return {
      ReadStream: ReadStream,
      WriteStream: WriteStream
    };

    function ReadStream(path, options) {
      if (!((this || _global) instanceof ReadStream)) return new ReadStream(path, options);
      Stream.call(this || _global);
      var self = this || _global;
      (this || _global).path = path;
      (this || _global).fd = null;
      (this || _global).readable = true;
      (this || _global).paused = false;
      (this || _global).flags = 'r';
      (this || _global).mode = 438;
      /*=0666*/

      (this || _global).bufferSize = 64 * 1024;
      options = options || {}; // Mixin options into this

      var keys = Object.keys(options);

      for (var index = 0, length = keys.length; index < length; index++) {
        var key = keys[index];
        (this || _global)[key] = options[key];
      }

      if ((this || _global).encoding) this.setEncoding((this || _global).encoding);

      if ((this || _global).start !== undefined) {
        if ('number' !== typeof (this || _global).start) {
          throw TypeError('start must be a Number');
        }

        if ((this || _global).end === undefined) {
          (this || _global).end = Infinity;
        } else if ('number' !== typeof (this || _global).end) {
          throw TypeError('end must be a Number');
        }

        if ((this || _global).start > (this || _global).end) {
          throw new Error('start must be <= end');
        }

        (this || _global).pos = (this || _global).start;
      }

      if ((this || _global).fd !== null) {
        process.nextTick(function () {
          self._read();
        });
        return;
      }

      fs.open((this || _global).path, (this || _global).flags, (this || _global).mode, function (err, fd) {
        if (err) {
          self.emit('error', err);
          self.readable = false;
          return;
        }

        self.fd = fd;
        self.emit('open', fd);

        self._read();
      });
    }

    function WriteStream(path, options) {
      if (!((this || _global) instanceof WriteStream)) return new WriteStream(path, options);
      Stream.call(this || _global);
      (this || _global).path = path;
      (this || _global).fd = null;
      (this || _global).writable = true;
      (this || _global).flags = 'w';
      (this || _global).encoding = 'binary';
      (this || _global).mode = 438;
      /*=0666*/

      (this || _global).bytesWritten = 0;
      options = options || {}; // Mixin options into this

      var keys = Object.keys(options);

      for (var index = 0, length = keys.length; index < length; index++) {
        var key = keys[index];
        (this || _global)[key] = options[key];
      }

      if ((this || _global).start !== undefined) {
        if ('number' !== typeof (this || _global).start) {
          throw TypeError('start must be a Number');
        }

        if ((this || _global).start < 0) {
          throw new Error('start must be >= zero');
        }

        (this || _global).pos = (this || _global).start;
      }

      (this || _global).busy = false;
      (this || _global)._queue = [];

      if ((this || _global).fd === null) {
        (this || _global)._open = fs.open;

        (this || _global)._queue.push([(this || _global)._open, (this || _global).path, (this || _global).flags, (this || _global).mode, undefined]);

        this.flush();
      }
    }
  }

  return exports;
}