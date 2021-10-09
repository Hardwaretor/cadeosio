import { dew as _implementationDewDew } from "./implementation.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var implementation = _implementationDewDew();

  var lacksProperEnumerationOrder = function () {
    if (!Object.assign) {
      return false;
    }
    /*
     * v8, specifically in node 4.x, has a bug with incorrect property enumeration order
     * note: this does not detect the bug unless there's 20 characters
     */


    var str = 'abcdefghijklmnopqrst';
    var letters = str.split('');
    var map = {};

    for (var i = 0; i < letters.length; ++i) {
      map[letters[i]] = letters[i];
    }

    var obj = Object.assign({}, map);
    var actual = '';

    for (var k in obj) {
      actual += k;
    }

    return str !== actual;
  };

  var assignHasPendingExceptions = function () {
    if (!Object.assign || !Object.preventExtensions) {
      return false;
    }
    /*
     * Firefox 37 still has "pending exception" logic in its Object.assign implementation,
     * which is 72% slower than our shim, and Firefox 40's native implementation.
     */


    var thrower = Object.preventExtensions({
      1: 2
    });

    try {
      Object.assign(thrower, 'xy');
    } catch (e) {
      return thrower[1] === 'y';
    }

    return false;
  };

  exports = function getPolyfill() {
    if (!Object.assign) {
      return implementation;
    }

    if (lacksProperEnumerationOrder()) {
      return implementation;
    }

    if (assignHasPendingExceptions()) {
      return implementation;
    }

    return Object.assign;
  };

  return exports;
}