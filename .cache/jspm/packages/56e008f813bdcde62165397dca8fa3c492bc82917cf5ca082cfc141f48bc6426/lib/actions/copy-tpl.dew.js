import { dew as _indexDewDew } from "ejs/index.dew.js";
import { dew as _indexDew2Dew } from "isbinaryfile/index.dew.js";
import _buffer from "buffer";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var Buffer = _buffer.Buffer;

  var ejs = _indexDewDew();

  var isBinaryFileSync = _indexDew2Dew().isBinaryFileSync;

  function render(contents, filename, context, tplSettings) {
    let result;
    const contentsBuffer = Buffer.from(contents, 'binary');

    if (isBinaryFileSync(contentsBuffer, contentsBuffer.length)) {
      result = contentsBuffer;
    } else {
      result = ejs.render(contents.toString(), context, // Setting filename by default allow including partials.
      {
        filename: filename,
        ...tplSettings
      });
    }

    return result;
  }

  exports = function (from, to, context, tplSettings, options) {
    context = context || {};
    tplSettings = tplSettings || {};
    this.copy(from, to, {
      processDestinationPath: path => path.replace(/.ejs$/, ''),
      ...options,
      process: function (contents, filename) {
        return render(contents, filename, context, tplSettings);
      }
    }, context, tplSettings);
  };

  return exports;
}