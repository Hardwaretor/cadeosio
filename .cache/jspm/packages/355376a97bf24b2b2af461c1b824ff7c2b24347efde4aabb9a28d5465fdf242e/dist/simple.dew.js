import { dew as _formatDewDew } from "./format.dew.js";
import { dew as _indexDewDew } from "triple-beam/index.dew.js";
import { dew as _indexDew2Dew } from "fast-safe-stringify/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var format = _formatDewDew();

  var _require = _indexDewDew(),
      MESSAGE = _require.MESSAGE;

  var jsonStringify = _indexDew2Dew();
  /*
   * function simple (info)
   * Returns a new instance of the simple format TransformStream
   * which writes a simple representation of logs.
   *
   *    const { level, message, splat, ...rest } = info;
   *
   *    ${level}: ${message}                            if rest is empty
   *    ${level}: ${message} ${JSON.stringify(rest)}    otherwise
   */


  exports = format(function (info) {
    var stringifiedRest = jsonStringify(Object.assign({}, info, {
      level: undefined,
      message: undefined,
      splat: undefined
    }));
    var padding = info.padding && info.padding[info.level] || '';

    if (stringifiedRest !== '{}') {
      info[MESSAGE] = info.level + ':' + padding + ' ' + info.message + ' ' + stringifiedRest;
    } else {
      info[MESSAGE] = info.level + ':' + padding + ' ' + info.message;
    }

    return info;
  });
  return exports;
}