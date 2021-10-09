import { dew as _indexDewDew } from "@sinonjs/commons/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var slice = _indexDewDew().prototypes.string.slice;

  var typeOf = _indexDewDew().typeOf;

  var valueToString = _indexDewDew().valueToString;

  exports = function iterableToString(obj) {
    var representation = "";

    function stringify(item) {
      return typeof item === "string" ? "'" + item + "'" : valueToString(item);
    }

    function mapToString(map) {
      /* eslint-disable-next-line local-rules/no-prototype-methods */
      map.forEach(function (value, key) {
        representation += "[" + stringify(key) + "," + stringify(value) + "],";
      });
      representation = slice(representation, 0, -1);
      return representation;
    }

    function genericIterableToString(iterable) {
      /* eslint-disable-next-line local-rules/no-prototype-methods */
      iterable.forEach(function (value) {
        representation += stringify(value) + ",";
      });
      representation = slice(representation, 0, -1);
      return representation;
    }

    if (typeOf(obj) === "map") {
      return mapToString(obj);
    }

    return genericIterableToString(obj);
  };

  return exports;
}