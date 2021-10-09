import { dew as _indexDewDew } from "pump/index.dew.js";
import { dew as _bufferStreamDewDew } from "./buffer-stream.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  const pump = _indexDewDew();

  const bufferStream = _bufferStreamDewDew();

  class MaxBufferError extends Error {
    constructor() {
      super('maxBuffer exceeded');
      this.name = 'MaxBufferError';
    }

  }

  function getStream(inputStream, options) {
    if (!inputStream) {
      return Promise.reject(new Error('Expected a stream'));
    }

    options = Object.assign({
      maxBuffer: Infinity
    }, options);
    const {
      maxBuffer
    } = options;
    let stream;
    return new Promise((resolve, reject) => {
      const rejectPromise = error => {
        if (error) {
          // A null check
          error.bufferedData = stream.getBufferedValue();
        }

        reject(error);
      };

      stream = pump(inputStream, bufferStream(options), error => {
        if (error) {
          rejectPromise(error);
          return;
        }

        resolve();
      });
      stream.on('data', () => {
        if (stream.getBufferedLength() > maxBuffer) {
          rejectPromise(new MaxBufferError());
        }
      });
    }).then(() => stream.getBufferedValue());
  }

  exports = getStream;

  exports.buffer = (stream, options) => getStream(stream, Object.assign({}, options, {
    encoding: 'buffer'
  }));

  exports.array = (stream, options) => getStream(stream, Object.assign({}, options, {
    array: true
  }));

  exports.MaxBufferError = MaxBufferError;
  return exports;
}