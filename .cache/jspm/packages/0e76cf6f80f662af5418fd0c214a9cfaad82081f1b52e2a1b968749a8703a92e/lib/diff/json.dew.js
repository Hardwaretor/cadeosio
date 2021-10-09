import { dew as _baseDewDew } from "./base.dew.js";
import { dew as _lineDewDew } from "./line.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports.__esModule = true;
  exports.jsonDiff = undefined;

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
  };

  exports.
  /*istanbul ignore end*/
  diffJson = diffJson;
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  canonicalize = canonicalize;

  var
  /*istanbul ignore start*/
  _base = _baseDewDew()
  /*istanbul ignore end*/
  ;
  /*istanbul ignore start*/


  var _base2 = _interopRequireDefault(_base);
  /*istanbul ignore end*/


  var
  /*istanbul ignore start*/
  _line = _lineDewDew()
  /*istanbul ignore end*/
  ;
  /*istanbul ignore start*/


  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  /*istanbul ignore end*/


  var objectPrototypeToString = Object.prototype.toString;
  var jsonDiff =
  /*istanbul ignore start*/
  exports.
  /*istanbul ignore end*/
  jsonDiff = new
  /*istanbul ignore start*/
  _base2.default()
  /*istanbul ignore end*/
  ; // Discriminate between two lines of pretty-printed, serialized JSON where one of them has a
  // dangling comma and the other doesn't. Turns out including the dangling comma yields the nicest output:

  jsonDiff.useLongestToken = true;
  jsonDiff.tokenize =
  /*istanbul ignore start*/
  _line.lineDiff.
  /*istanbul ignore end*/
  tokenize;

  jsonDiff.castInput = function (value) {
    return typeof value === 'string' ? value : JSON.stringify(canonicalize(value), undefined, '  ');
  };

  jsonDiff.equals = function (left, right) {
    return (
      /*istanbul ignore start*/
      _base2.default.
      /*istanbul ignore end*/
      prototype.equals(left.replace(/,([\r\n])/g, '$1'), right.replace(/,([\r\n])/g, '$1'))
    );
  };

  function diffJson(oldObj, newObj, callback) {
    return jsonDiff.diff(oldObj, newObj, callback);
  } // This function handles the presence of circular references by bailing out when encountering an
  // object that is already on the "stack" of items being processed.


  function canonicalize(obj, stack, replacementStack) {
    stack = stack || [];
    replacementStack = replacementStack || [];
    var i =
    /*istanbul ignore start*/
    void 0
    /*istanbul ignore end*/
    ;

    for (i = 0; i < stack.length; i += 1) {
      if (stack[i] === obj) {
        return replacementStack[i];
      }
    }

    var canonicalizedObj =
    /*istanbul ignore start*/
    void 0
    /*istanbul ignore end*/
    ;

    if ('[object Array]' === objectPrototypeToString.call(obj)) {
      stack.push(obj);
      canonicalizedObj = new Array(obj.length);
      replacementStack.push(canonicalizedObj);

      for (i = 0; i < obj.length; i += 1) {
        canonicalizedObj[i] = canonicalize(obj[i], stack, replacementStack);
      }

      stack.pop();
      replacementStack.pop();
      return canonicalizedObj;
    }

    if (obj && obj.toJSON) {
      obj = obj.toJSON();
    }

    if (
    /*istanbul ignore start*/
    (typeof
    /*istanbul ignore end*/
    obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj !== null) {
      stack.push(obj);
      canonicalizedObj = {};
      replacementStack.push(canonicalizedObj);
      var sortedKeys = [],
          key =
      /*istanbul ignore start*/
      void 0
      /*istanbul ignore end*/
      ;

      for (key in obj) {
        /* istanbul ignore else */
        if (obj.hasOwnProperty(key)) {
          sortedKeys.push(key);
        }
      }

      sortedKeys.sort();

      for (i = 0; i < sortedKeys.length; i += 1) {
        key = sortedKeys[i];
        canonicalizedObj[key] = canonicalize(obj[key], stack, replacementStack);
      }

      stack.pop();
      replacementStack.pop();
    } else {
      canonicalizedObj = obj;
    }

    return canonicalizedObj;
  }

  return exports;
}