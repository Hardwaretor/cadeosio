import { dew as _identicalDewDew } from "./identical.dew.js";
import { dew as _isArgumentsDewDew } from "./is-arguments.dew.js";
import { dew as _isElementDewDew } from "./is-element.dew.js";
import { dew as _isNegZeroDewDew } from "./is-neg-zero.dew.js";
import { dew as _isSetDewDew } from "./is-set.dew.js";
import { dew as _matchDewDew } from "./match.dew.js";
import { dew as _deepEqualDewDew } from "./deep-equal.dew.js";
import { dew as _matcherDewDew } from "./matcher.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var identical = _identicalDewDew();

  var isArguments = _isArgumentsDewDew();

  var isElement = _isElementDewDew();

  var isNegZero = _isNegZeroDewDew();

  var isSet = _isSetDewDew();

  var match = _matchDewDew();

  var deepEqualCyclic = _deepEqualDewDew().use(match);

  var createMatcher = _matcherDewDew();

  exports = {
    createMatcher: createMatcher,
    deepEqual: deepEqualCyclic,
    identical: identical,
    isArguments: isArguments,
    isElement: isElement,
    isNegZero: isNegZero,
    isSet: isSet,
    match: match
  };
  return exports;
}