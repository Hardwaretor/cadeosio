import { dew as _indexDewDew } from "@sinonjs/commons/index.dew.js";
import { dew as _getClassDewDew } from "./get-class.dew.js";
import { dew as _identicalDewDew } from "./identical.dew.js";
import { dew as _isArgumentsDewDew } from "./is-arguments.dew.js";
import { dew as _isDateDewDew } from "./is-date.dew.js";
import { dew as _isElementDewDew } from "./is-element.dew.js";
import { dew as _isMapDewDew } from "./is-map.dew.js";
import { dew as _isNanDewDew } from "./is-nan.dew.js";
import { dew as _isObjectDewDew } from "./is-object.dew.js";
import { dew as _isSetDewDew } from "./is-set.dew.js";
import { dew as _isSubsetDewDew } from "./is-subset.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var valueToString = _indexDewDew().valueToString;

  var className = _indexDewDew().className;

  var arrayProto = _indexDewDew().prototypes.array;

  var objectProto = _indexDewDew().prototypes.object;

  var getClass = _getClassDewDew();

  var identical = _identicalDewDew();

  var isArguments = _isArgumentsDewDew();

  var isDate = _isDateDewDew();

  var isElement = _isElementDewDew();

  var isMap = _isMapDewDew();

  var isNaN = _isNanDewDew();

  var isObject = _isObjectDewDew();

  var isSet = _isSetDewDew();

  var isSubset = _isSubsetDewDew();

  var every = arrayProto.every;
  var getTime = Date.prototype.getTime;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var indexOf = arrayProto.indexOf;
  var keys = Object.keys;
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  /**
   * @name samsam.deepEqual
   * @param Object actual
   * @param Object expectation
   *
   * Deep equal comparison. Two values are "deep equal" if:
   *
   *   - They are equal, according to samsam.identical
   *   - They are both date objects representing the same time
   *   - They are both arrays containing elements that are all deepEqual
   *   - They are objects with the same set of properties, and each property
   *     in ``actual`` is deepEqual to the corresponding property in ``expectation``
   *
   * Supports cyclic objects.
   */

  function deepEqualCyclic(actual, expectation, match) {
    // used for cyclic comparison
    // contain already visited objects
    var actualObjects = [];
    var expectationObjects = []; // contain pathes (position in the object structure)
    // of the already visited objects
    // indexes same as in objects arrays

    var actualPaths = [];
    var expectationPaths = []; // contains combinations of already compared objects
    // in the manner: { "$1['ref']$2['ref']": true }

    var compared = {}; // does the recursion for the deep equal check

    return function deepEqual(actualObj, expectationObj, actualPath, expectationPath) {
      // If both are matchers they must be the same instance in order to be
      // considered equal If we didn't do that we would end up running one
      // matcher against the other
      if (match && match.isMatcher(expectationObj)) {
        if (match.isMatcher(actualObj)) {
          return actualObj === expectationObj;
        }

        return expectationObj.test(actualObj);
      }

      var actualType = typeof actualObj;
      var expectationType = typeof expectationObj; // == null also matches undefined

      if (actualObj === expectationObj || isNaN(actualObj) || isNaN(expectationObj) || actualObj == null || expectationObj == null || actualType !== "object" || expectationType !== "object") {
        return identical(actualObj, expectationObj);
      } // Elements are only equal if identical(expected, actual)


      if (isElement(actualObj) || isElement(expectationObj)) {
        return false;
      }

      var isActualDate = isDate(actualObj);
      var isExpectationDate = isDate(expectationObj);

      if (isActualDate || isExpectationDate) {
        if (!isActualDate || !isExpectationDate || getTime.call(actualObj) !== getTime.call(expectationObj)) {
          return false;
        }
      }

      if (actualObj instanceof RegExp && expectationObj instanceof RegExp) {
        if (valueToString(actualObj) !== valueToString(expectationObj)) {
          return false;
        }
      }

      if (actualObj instanceof Error && expectationObj instanceof Error) {
        return actualObj === expectationObj;
      }

      var actualClass = getClass(actualObj);
      var expectationClass = getClass(expectationObj);
      var actualKeys = keys(actualObj);
      var expectationKeys = keys(expectationObj);
      var actualName = className(actualObj);
      var expectationName = className(expectationObj);
      var expectationSymbols = typeof getOwnPropertySymbols === "function" ? getOwnPropertySymbols(expectationObj) : [];
      var expectationKeysAndSymbols = expectationKeys.concat(expectationSymbols);

      if (isArguments(actualObj) || isArguments(expectationObj)) {
        if (actualObj.length !== expectationObj.length) {
          return false;
        }
      } else {
        if (actualType !== expectationType || actualClass !== expectationClass || actualKeys.length !== expectationKeys.length || actualName && expectationName && actualName !== expectationName) {
          return false;
        }
      }

      if (isSet(actualObj) || isSet(expectationObj)) {
        if (!isSet(actualObj) || !isSet(expectationObj) || actualObj.size !== expectationObj.size) {
          return false;
        }

        return isSubset(actualObj, expectationObj, deepEqual);
      }

      if (isMap(actualObj) || isMap(expectationObj)) {
        if (!isMap(actualObj) || !isMap(expectationObj) || actualObj.size !== expectationObj.size) {
          return false;
        }

        var mapsDeeplyEqual = true;
        actualObj.forEach(function (value, key) {
          mapsDeeplyEqual = mapsDeeplyEqual && deepEqualCyclic(value, expectationObj.get(key));
        });
        return mapsDeeplyEqual;
      }

      return every(expectationKeysAndSymbols, function (key) {
        if (!hasOwnProperty(actualObj, key)) {
          return false;
        }

        var actualValue = actualObj[key];
        var expectationValue = expectationObj[key];
        var actualObject = isObject(actualValue);
        var expectationObject = isObject(expectationValue); // determines, if the objects were already visited
        // (it's faster to check for isObject first, than to
        // get -1 from getIndex for non objects)

        var actualIndex = actualObject ? indexOf(actualObjects, actualValue) : -1;
        var expectationIndex = expectationObject ? indexOf(expectationObjects, expectationValue) : -1; // determines the new paths of the objects
        // - for non cyclic objects the current path will be extended
        //   by current property name
        // - for cyclic objects the stored path is taken

        var newActualPath = actualIndex !== -1 ? actualPaths[actualIndex] : actualPath + "[" + JSON.stringify(key) + "]";
        var newExpectationPath = expectationIndex !== -1 ? expectationPaths[expectationIndex] : expectationPath + "[" + JSON.stringify(key) + "]";
        var combinedPath = newActualPath + newExpectationPath; // stop recursion if current objects are already compared

        if (compared[combinedPath]) {
          return true;
        } // remember the current objects and their paths


        if (actualIndex === -1 && actualObject) {
          actualObjects.push(actualValue);
          actualPaths.push(newActualPath);
        }

        if (expectationIndex === -1 && expectationObject) {
          expectationObjects.push(expectationValue);
          expectationPaths.push(newExpectationPath);
        } // remember that the current objects are already compared


        if (actualObject && expectationObject) {
          compared[combinedPath] = true;
        } // End of cyclic logic
        // neither actualValue nor expectationValue is a cycle
        // continue with next level


        return deepEqual(actualValue, expectationValue, newActualPath, newExpectationPath);
      });
    }(actual, expectation, "$1", "$2");
  }

  deepEqualCyclic.use = function (match) {
    return function (a, b) {
      return deepEqualCyclic(a, b, match);
    };
  };

  exports = deepEqualCyclic;
  return exports;
}