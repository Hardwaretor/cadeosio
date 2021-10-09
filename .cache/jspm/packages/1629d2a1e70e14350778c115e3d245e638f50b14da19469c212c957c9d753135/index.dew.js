import { dew as _bufferStreamDewDew } from "./buffer-stream.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  const bufferStream = _bufferStreamDewDew();

  function getStream(inputStream, opts) {
    if (!inputStream) {
      return Promise.reject(new Error('Expected a stream'));
    }

    opts = Object.assign({
      maxBuffer: Infinity
    }, opts);
    const maxBuffer = opts.maxBuffer;
    let stream;
    let clean;
    const p = new Promise((resolve, reject) => {
      const error = err => {
        if (err) {
          // null check
          err.bufferedData = stream.getBufferedValue();
        }

        reject(err);
      };

      stream = bufferStream(opts);
      inputStream.once('error', error);
      inputStream.pipe(stream);
      stream.on('data', () => {
        if (stream.getBufferedLength() > maxBuffer) {
          reject(new Error('maxBuffer exceeded'));
        }
      });
      stream.once('error', error);
      stream.on('end', resolve);

      clean = () => {
        // some streams doesn't implement the `stream.Readable` interface correctly
        if (inputStream.unpipe) {
          inputStream.unpipe(stream);
        }
      };
    });
    p.then(clean, clean);
    return p.then(() => stream.getBufferedValue());
  }

  exports = getStream;

  exports.buffer = (stream, opts) => getStream(stream, Object.assign({}, opts, {
    encoding: 'buffer'
  }));

  exports.array = (stream, opts) => getStream(stream, Object.assign({}, opts, {
    array: true
  }));

  return exports;
}