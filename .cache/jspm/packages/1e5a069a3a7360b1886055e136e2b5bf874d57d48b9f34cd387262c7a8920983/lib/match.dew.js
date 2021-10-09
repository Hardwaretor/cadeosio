import { dew as _indexDewDew } from "@sinonjs/commons/index.dew.js";
import { dew as _deepEqualDewDew } from "./deep-equal.dew.js";
import { dew as _getClassDewDew } from "./get-class.dew.js";
import { dew as _isDateDewDew } from "./is-date.dew.js";
import { dew as _isSetDewDew } from "./is-set.dew.js";
import { dew as _isSubsetDewDew } from "./is-subset.dew.js";
import { dew as _matcherDewDew } from "./matcher.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var valueToString = _indexDewDew().valueToString;

  var deepEqual = _deepEqualDewDew().use(match); // eslint-disable-line no-use-before-define


  var getClass = _getClassDewDew();

  var isDate = _isDateDewDew();

  var isSet = _isSetDewDew();

  var isSubset = _isSubsetDewDew();

  var createMatcher = _matcherDewDew();

  function arrayContains(array, subset, compare) {
    if (subset.length === 0) {
      return true;
    }

    var i, l, j, k;

    for (i = 0, l = array.length; i < l; ++i) {
      if (compare(array[i], subset[0])) {
        for (j = 0, k = subset.length; j < k; ++j) {
          if (i + j >= l) {
            return false;
          }

          if (!compare(array[i + j], subset[j])) {
            return false;
          }
        }

        return true;
      }
    }

    return false;
  }
  /**
   * @name samsam.match
   * @param Object object
   * @param Object matcher
   *
   * Compare arbitrary value ``object`` with matcher.
   */


  function match(object, matcher) {
    if (matcher && typeof matcher.test === "function") {
      return matcher.test(object);
    }

    if (typeof matcher === "function") {
      return matcher(object) === true;
    }

    if (typeof matcher === "string") {
      matcher = matcher.toLowerCase();
      var notNull = typeof object === "string" || !!object;
      return notNull && valueToString(object).toLowerCase().indexOf(matcher) >= 0;
    }

    if (typeof matcher === "number") {
      return matcher === object;
    }

    if (typeof matcher === "boolean") {
      return matcher === object;
    }

    if (typeof matcher === "undefined") {
      return typeof object === "undefined";
    }

    if (matcher === null) {
      return object === null;
    }

    if (object === null) {
      return false;
    }

    if (isSet(object)) {
      return isSubset(matcher, object, match);
    }

    if (getClass(object) === "Array" && getClass(matcher) === "Array") {
      return arrayContains(object, matcher, match);
    }

    if (isDate(matcher)) {
      return isDate(object) && object.getTime() === matcher.getTime();
    }

    if (matcher && typeof matcher === "object") {
      if (matcher === object) {
        return true;
      }

      if (typeof object !== "object") {
        return false;
      }

      var prop; // eslint-disable-next-line guard-for-in

      for (prop in matcher) {
        var value = object[prop];

        if (typeof value === "undefined" && typeof object.getAttribute === "function") {
          value = object.getAttribute(prop);
        }

        if (matcher[prop] === null || typeof matcher[prop] === "undefined") {
          if (value !== matcher[prop]) {
            return false;
          }
        } else if (typeof value === "undefined" || !deepEqual(value, matcher[prop])) {
          return false;
        }
      }

      return true;
    }

    throw new Error("Matcher was not a string, a number, a " + "function, a boolean or an object");
  }

  Object.keys(createMatcher).forEach(function (key) {
    match[key] = createMatcher[key];
  });
  exports = match;
  return exports;
}