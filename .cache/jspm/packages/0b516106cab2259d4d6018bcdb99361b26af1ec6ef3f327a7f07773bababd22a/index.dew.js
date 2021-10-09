import { dew as _indexDewDew } from "pinkie-promise/index.dew.js";
import { dew as _indexDew2Dew } from "array-union/index.dew.js";
import { dew as _indexDew3Dew } from "object-assign/index.dew.js";
import { dew as _indexDew4Dew } from "glob/index.dew.js";
import { dew as _indexDew5Dew } from "pify/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var Promise = _indexDewDew();

  var arrayUnion = _indexDew2Dew();

  var objectAssign = _indexDew3Dew();

  var glob = _indexDew4Dew();

  var pify = _indexDew5Dew();

  var globP = pify(glob, Promise).bind(glob);

  function isNegative(pattern) {
    return pattern[0] === '!';
  }

  function isString(value) {
    return typeof value === 'string';
  }

  function assertPatternsInput(patterns) {
    if (!patterns.every(isString)) {
      throw new TypeError('patterns must be a string or an array of strings');
    }
  }

  function generateGlobTasks(patterns, opts) {
    patterns = [].concat(patterns);
    assertPatternsInput(patterns);
    var globTasks = [];
    opts = objectAssign({
      cache: Object.create(null),
      statCache: Object.create(null),
      realpathCache: Object.create(null),
      symlinks: Object.create(null),
      ignore: []
    }, opts);
    patterns.forEach(function (pattern, i) {
      if (isNegative(pattern)) {
        return;
      }

      var ignore = patterns.slice(i).filter(isNegative).map(function (pattern) {
        return pattern.slice(1);
      });
      globTasks.push({
        pattern: pattern,
        opts: objectAssign({}, opts, {
          ignore: opts.ignore.concat(ignore)
        })
      });
    });
    return globTasks;
  }

  exports = function (patterns, opts) {
    var globTasks;

    try {
      globTasks = generateGlobTasks(patterns, opts);
    } catch (err) {
      return Promise.reject(err);
    }

    return Promise.all(globTasks.map(function (task) {
      return globP(task.pattern, task.opts);
    })).then(function (paths) {
      return arrayUnion.apply(null, paths);
    });
  };

  exports.sync = function (patterns, opts) {
    var globTasks = generateGlobTasks(patterns, opts);
    return globTasks.reduce(function (matches, task) {
      return arrayUnion(matches, glob.sync(task.pattern, task.opts));
    }, []);
  };

  exports.generateGlobTasks = generateGlobTasks;

  exports.hasMagic = function (patterns, opts) {
    return [].concat(patterns).some(function (pattern) {
      return glob.hasMagic(pattern, opts);
    });
  };

  return exports;
}