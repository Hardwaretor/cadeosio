import { dew as _indexDewDew } from "pinkie-promise/index.dew.js";
import { dew as _indexDew2Dew } from "array-union/index.dew.js";
import { dew as _indexDew3Dew } from "object-assign/index.dew.js";
import { dew as _indexDew4Dew } from "glob/index.dew.js";
import { dew as _indexDew5Dew } from "arrify/index.dew.js";
import { dew as _indexDew6Dew } from "pify/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var Promise = _indexDewDew();

  var arrayUnion = _indexDew2Dew();

  var objectAssign = _indexDew3Dew();

  var glob = _indexDew4Dew();

  var arrify = _indexDew5Dew();

  var pify = _indexDew6Dew();

  var globP = pify(glob, Promise).bind(glob);

  function isNegative(pattern) {
    return pattern[0] === '!';
  }

  function generateGlobTasks(patterns, opts) {
    var globTasks = [];
    patterns = arrify(patterns);
    opts = objectAssign({
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
    var globTasks = generateGlobTasks(patterns, opts);
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
  return exports;
}