import { dew as _indexDewDew } from "deep-extend/index.dew.js";
import { dew as _indexDew2Dew } from "ejs/index.dew.js";
import { dew as _indexDew3Dew } from "isbinaryfile/index.dew.js";
import _buffer from "buffer";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var Buffer = _buffer.Buffer;

  var extend = _indexDewDew();

  var ejs = _indexDew2Dew();

  var isBinaryFile = _indexDew3Dew();

  function render(contents, filename, context, tplSettings) {
    let result;
    const contentsBuffer = Buffer.from(contents, 'binary');

    if (isBinaryFile.sync(contentsBuffer, contentsBuffer.length)) {
      result = contentsBuffer;
    } else {
      result = ejs.render(contents.toString(), context, // Setting filename by default allow including partials.
      extend({
        filename: filename
      }, tplSettings));
    }

    return result;
  }

  exports = function (from, to, context, tplSettings, options) {
    context = context || {};
    tplSettings = tplSettings || {};
    this.copy(from, to, extend(options || {}, {
      process: function (contents, filename) {
        return render(contents, filename, context, tplSettings);
      }
    }), context, tplSettings);
  };

  return exports;
}