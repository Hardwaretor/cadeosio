import _path from "path";
import { dew as _indexDewDew } from "filename-regex/index.dew.js";
import { dew as _indexDew2Dew } from "arr-diff/index.dew.js";
import { dew as _indexDew3Dew } from "array-unique/index.dew.js";
import { dew as _indexDew4Dew } from "braces/index.dew.js";
import { dew as _indexDew5Dew } from "expand-brackets/index.dew.js";
import { dew as _indexDew6Dew } from "extglob/index.dew.js";
import { dew as _indexDew7Dew } from "is-extglob/index.dew.js";
import { dew as _indexDew8Dew } from "is-glob/index.dew.js";
import { dew as _indexDew9Dew } from "kind-of/index.dew.js";
import { dew as _indexDew10Dew } from "normalize-path/index.dew.js";
import { dew as _indexDew11Dew } from "object.omit/index.dew.js";
import { dew as _indexDew12Dew } from "parse-glob/index.dew.js";
import { dew as _indexDew13Dew } from "regex-cache/index.dew.js";
import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;
  var win32 = process && process.platform === 'win32';
  var path = _path;

  var fileRe = _indexDewDew();

  var utils = exports;
  /**
   * Module dependencies
   */

  utils.diff = _indexDew2Dew();
  utils.unique = _indexDew3Dew();
  utils.braces = _indexDew4Dew();
  utils.brackets = _indexDew5Dew();
  utils.extglob = _indexDew6Dew();
  utils.isExtglob = _indexDew7Dew();
  utils.isGlob = _indexDew8Dew();
  utils.typeOf = _indexDew9Dew();
  utils.normalize = _indexDew10Dew();
  utils.omit = _indexDew11Dew();
  utils.parseGlob = _indexDew12Dew();
  utils.cache = _indexDew13Dew();
  /**
   * Get the filename of a filepath
   *
   * @param {String} `string`
   * @return {String}
   */

  utils.filename = function filename(fp) {
    var seg = fp.match(fileRe());
    return seg && seg[0];
  };
  /**
   * Returns a function that returns true if the given
   * pattern is the same as a given `filepath`
   *
   * @param {String} `pattern`
   * @return {Function}
   */


  utils.isPath = function isPath(pattern, opts) {
    opts = opts || {};
    return function (fp) {
      var unixified = utils.unixify(fp, opts);

      if (opts.nocase) {
        return pattern.toLowerCase() === unixified.toLowerCase();
      }

      return pattern === unixified;
    };
  };
  /**
   * Returns a function that returns true if the given
   * pattern contains a `filepath`
   *
   * @param {String} `pattern`
   * @return {Function}
   */


  utils.hasPath = function hasPath(pattern, opts) {
    return function (fp) {
      return utils.unixify(pattern, opts).indexOf(fp) !== -1;
    };
  };
  /**
   * Returns a function that returns true if the given
   * pattern matches or contains a `filepath`
   *
   * @param {String} `pattern`
   * @return {Function}
   */


  utils.matchPath = function matchPath(pattern, opts) {
    var fn = opts && opts.contains ? utils.hasPath(pattern, opts) : utils.isPath(pattern, opts);
    return fn;
  };
  /**
   * Returns a function that returns true if the given
   * regex matches the `filename` of a file path.
   *
   * @param {RegExp} `re`
   * @return {Boolean}
   */


  utils.hasFilename = function hasFilename(re) {
    return function (fp) {
      var name = utils.filename(fp);
      return name && re.test(name);
    };
  };
  /**
   * Coerce `val` to an array
   *
   * @param  {*} val
   * @return {Array}
   */


  utils.arrayify = function arrayify(val) {
    return !Array.isArray(val) ? [val] : val;
  };
  /**
   * Normalize all slashes in a file path or glob pattern to
   * forward slashes.
   */


  utils.unixify = function unixify(fp, opts) {
    if (opts && opts.unixify === false) return fp;

    if (opts && opts.unixify === true || win32 || path.sep === '\\') {
      return utils.normalize(fp, false);
    }

    if (opts && opts.unescape === true) {
      return fp ? fp.toString().replace(/\\(\w)/g, '$1') : '';
    }

    return fp;
  };
  /**
   * Escape/unescape utils
   */


  utils.escapePath = function escapePath(fp) {
    return fp.replace(/[\\.]/g, '\\$&');
  };

  utils.unescapeGlob = function unescapeGlob(fp) {
    return fp.replace(/[\\"']/g, '');
  };

  utils.escapeRe = function escapeRe(str) {
    return str.replace(/[-[\\$*+?.#^\s{}(|)\]]/g, '\\$&');
  };
  /**
   * Expose `utils`
   */


  exports = utils;
  return exports;
}