import _path from "path";
import _fs from "fs";
import _util from "util";
import _process from "process";
import _module from "module";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var _nodeRequire = function () {
    var Module = _module.Module;

    if (Module) {
      var m = new Module("");
      m.filename = import.meta.url.substr(7 + (Module._nodeModulePaths("/")[0].length > 13));
      m.paths = Module._nodeModulePaths(m.filename.substr(0, m.filename.lastIndexOf("/")));
      return m.require.bind(m);
    } else {
      return function _nodeRequire(id) {
        var e = new Error("Cannot find module '" + id + "'");
        e.code = "MODULE_NOT_FOUND";
        throw e;
      };
    }
  }();

  var process = _process;
  var path = _path;
  var fs = _fs;
  var util = _util;

  var Benchmark = _nodeRequire('benchmark');

  var ansi = _nodeRequire('ansi');

  var cursor = ansi(process.stdout);
  var variant = path.join(import.meta.url.startsWith('file:') ? decodeURI(import.meta.url.slice(0, import.meta.url.lastIndexOf('/')).slice(7 + (typeof process !== 'undefined' && process.platform === 'win32'))) : new URL(import.meta.url.slice(0, import.meta.url.lastIndexOf('/'))).pathname, 'implementations');
  var filename = {};
  var files = [];
  fs.readdirSync(variant).sort().forEach(function (name) {
    var file = path.join(variant, name);

    var code = _nodeRequire(file);

    filename[name] = file;
    files.push({
      name: name,
      code: code
    });
  });
  var samples = path.join(import.meta.url.startsWith('file:') ? decodeURI(import.meta.url.slice(0, import.meta.url.lastIndexOf('/')).slice(7 + (typeof process !== 'undefined' && process.platform === 'win32'))) : new URL(import.meta.url.slice(0, import.meta.url.lastIndexOf('/'))).pathname, 'samples');
  var SAMPLES = [];
  fs.readdirSync(samples).sort().forEach(function (sample) {
    var filepath = path.join(samples, sample),
        extname = path.extname(filepath),
        basename = path.basename(filepath, extname);
    var content = {};
    content.string = fs.readFileSync(filepath, 'utf8');
    var title = util.format('(%d bytes)', content.string.length);

    function onComplete() {
      cursor.write('\n');
    }

    var suite = new Benchmark.Suite(title, {
      onStart: function onStart() {
        console.log('\nSample: %s %s', sample, title);
      },
      onComplete: onComplete
    });
    files.forEach(function (impl) {
      suite.add(impl.name, {
        onCycle: function onCycle(event) {
          cursor.horizontalAbsolute();
          cursor.eraseLine();
          cursor.write(' > ' + event.target);
        },
        onComplete: onComplete,
        fn: function () {
          impl.code(content.string);
          return;
        }
      });
    });
    SAMPLES.push({
      name: basename,
      title: title,
      content: content,
      suite: suite
    });
  });

  function select(patterns) {
    var result = [];

    if (!Array.isArray(patterns)) {
      patterns = [patterns];
    }

    function verify(name) {
      return patterns.length === 0 || patterns.some(function (regexp) {
        return regexp.test(name);
      });
    }

    SAMPLES.forEach(function (sample) {
      if (verify(sample.name)) {
        result.push(sample);
      }
    });
    return result;
  }

  function run(patterns) {
    var selected = select(patterns);
    var len = selected.length;

    if (len > 0) {
      console.log('Selected fixture' + (len > 1 ? 's' : '') + ': (%d of %d)', len, SAMPLES.length);
      selected.forEach(function (sample) {
        console.log(' > %s', sample.name);
      });
    } else {
      console.log('There aren\'t any samples matching the given patterns: %s', util.inspect(patterns));
    }

    selected.forEach(function (sample) {
      // console.log('sample:', sample)
      sample.suite.run();
    });
  }

  exports.variant = variant;
  exports.filename = filename;
  exports.files = files;
  exports.samples = samples;
  exports.SAMPLES = SAMPLES;
  exports.select = select;
  exports.run = run;
  /**
   * Provide regex patterns for the samples to run against.
   *
   * @param  {[type]} patterns
   * @return {[type]}
   */

  run(process.argv.slice(2).map(function (patterns) {
    return new RegExp(patterns, 'i');
  }));
  return exports;
}