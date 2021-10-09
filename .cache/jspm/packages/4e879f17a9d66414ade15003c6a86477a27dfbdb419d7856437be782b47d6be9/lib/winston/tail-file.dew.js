import _fs from "fs";
import _string_decoder from "string_decoder";
import { dew as _indexDewDew } from "readable-stream/index.dew.js";
import _buffer from "buffer";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var Buffer = _buffer.Buffer;
  const fs = _fs;
  const {
    StringDecoder
  } = _string_decoder;

  const {
    Stream
  } = _indexDewDew();
  /**
   * Simple no-op function.
   * @returns {undefined}
   */


  function noop() {}
  /**
   * TODO: add function description.
   * @param {Object} options - Options for tail.
   * @param {function} iter - Iterator function to execute on every line.
  * `tail -f` a file. Options must include file.
   * @returns {mixed} - TODO: add return description.
   */


  exports = (options, iter) => {
    const buffer = Buffer.alloc(64 * 1024);
    const decode = new StringDecoder('utf8');
    const stream = new Stream();
    let buff = '';
    let pos = 0;
    let row = 0;

    if (options.start === -1) {
      delete options.start;
    }

    stream.readable = true;

    stream.destroy = () => {
      stream.destroyed = true;
      stream.emit('end');
      stream.emit('close');
    };

    fs.open(options.file, 'a+', '0644', (err, fd) => {
      if (err) {
        if (!iter) {
          stream.emit('error', err);
        } else {
          iter(err);
        }

        stream.destroy();
        return;
      }

      (function read() {
        if (stream.destroyed) {
          fs.close(fd, noop);
          return;
        }

        return fs.read(fd, buffer, 0, buffer.length, pos, (error, bytes) => {
          if (error) {
            if (!iter) {
              stream.emit('error', error);
            } else {
              iter(error);
            }

            stream.destroy();
            return;
          }

          if (!bytes) {
            if (buff) {
              // eslint-disable-next-line eqeqeq
              if (options.start == null || row > options.start) {
                if (!iter) {
                  stream.emit('line', buff);
                } else {
                  iter(null, buff);
                }
              }

              row++;
              buff = '';
            }

            return setTimeout(read, 1000);
          }

          let data = decode.write(buffer.slice(0, bytes));

          if (!iter) {
            stream.emit('data', data);
          }

          data = (buff + data).split(/\n+/);
          const l = data.length - 1;
          let i = 0;

          for (; i < l; i++) {
            // eslint-disable-next-line eqeqeq
            if (options.start == null || row > options.start) {
              if (!iter) {
                stream.emit('line', data[i]);
              } else {
                iter(null, data[i]);
              }
            }

            row++;
          }

          buff = data[l];
          pos += bytes;
          return read();
        });
      })();
    });

    if (!iter) {
      return stream;
    }

    return stream.destroy;
  };

  return exports;
}