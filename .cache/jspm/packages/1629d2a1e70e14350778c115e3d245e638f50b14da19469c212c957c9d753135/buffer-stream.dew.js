import _stream from "stream";
import _buffer from "buffer";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var Buffer = _buffer.Buffer;
  const PassThrough = _stream.PassThrough;

  exports = opts => {
    opts = Object.assign({}, opts);
    const array = opts.array;
    let encoding = opts.encoding;
    const buffer = encoding === 'buffer';
    let objectMode = false;

    if (array) {
      objectMode = !(encoding || buffer);
    } else {
      encoding = encoding || 'utf8';
    }

    if (buffer) {
      encoding = null;
    }

    let len = 0;
    const ret = [];
    const stream = new PassThrough({
      objectMode
    });

    if (encoding) {
      stream.setEncoding(encoding);
    }

    stream.on('data', chunk => {
      ret.push(chunk);

      if (objectMode) {
        len = ret.length;
      } else {
        len += chunk.length;
      }
    });

    stream.getBufferedValue = () => {
      if (array) {
        return ret;
      }

      return buffer ? Buffer.concat(ret, len) : ret.join('');
    };

    stream.getBufferedLength = () => len;

    return stream;
  };

  return exports;
}