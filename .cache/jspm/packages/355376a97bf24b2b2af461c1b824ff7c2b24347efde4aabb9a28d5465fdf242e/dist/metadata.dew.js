import { dew as _formatDewDew } from "./format.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var format = _formatDewDew();

  function fillExcept(info, fillExceptKeys, metadataKey) {
    var savedKeys = fillExceptKeys.reduce(function (acc, key) {
      acc[key] = info[key];
      delete info[key];
      return acc;
    }, {});
    var metadata = Object.keys(info).reduce(function (acc, key) {
      acc[key] = info[key];
      delete info[key];
      return acc;
    }, {});
    Object.assign(info, savedKeys, _defineProperty({}, metadataKey, metadata));
    return info;
  }

  function fillWith(info, fillWithKeys, metadataKey) {
    info[metadataKey] = fillWithKeys.reduce(function (acc, key) {
      acc[key] = info[key];
      delete info[key];
      return acc;
    }, {});
    return info;
  }
  /**
   * Adds in a "metadata" object to collect extraneous data, similar to the metadata
   * object in winston 2.x.
   */


  exports = format(function (info) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var metadataKey = 'metadata';

    if (opts.key) {
      metadataKey = opts.key;
    }

    var fillExceptKeys = [];

    if (!opts.fillExcept && !opts.fillWith) {
      fillExceptKeys.push('level');
      fillExceptKeys.push('message');
    }

    if (opts.fillExcept) {
      fillExceptKeys = opts.fillExcept;
    }

    if (fillExceptKeys.length > 0) {
      return fillExcept(info, fillExceptKeys, metadataKey);
    }

    if (opts.fillWith) {
      return fillWith(info, opts.fillWith, metadataKey);
    }

    return info;
  });
  return exports;
}