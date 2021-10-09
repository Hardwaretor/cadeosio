import _fs from "fs";
import _path from "path";
import { dew as _parserDewDew } from "../parser.dew.js";
import { dew as _indexDewDew } from "jsesc/index.dew.js";
import _process from "process";
import _module from "module";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  var result;
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

  (function () {
    var fs = _fs;
    var path = _path;

    var parse = _parserDewDew().parse;

    var jsesc = _indexDewDew();

    var regexes = process.argv.splice(2);
    var first = regexes[0];
    var data;
    var log = console.log;
    var flags = '';

    var main = function () {
      if (/^(?:-h|--help|undefined)$/.test(first)) {
        log(['\nUsage:\n', '\tregjsparser [regex ...]', '\tregjsparser [-f | --flags] u [regex ...]', '\tregjsparser [-v | --version]', '\tregjsparser [-h | --help]', '\nExamples:\n', '\tregjsparser \'^foo.bar$\'', '\tregjsparser \'[a-zA-Z0-9]\''].join('\n'));
        return process.exit(1);
      }

      if (/^(?:-v|--version)$/.test(first)) {
        log('v%s', _nodeRequire(path.resolve(import.meta.url.startsWith('file:') ? decodeURI(import.meta.url.slice(0, import.meta.url.lastIndexOf('/')).slice(7 + (typeof process !== 'undefined' && process.platform === 'win32'))) : new URL(import.meta.url.slice(0, import.meta.url.lastIndexOf('/'))).pathname, '../package.json')).version);
        return process.exit(1);
      }

      if (/^(?:-f|--flags)$/.test(first)) {
        flags = regexes[1];
        regexes = regexes.slice(2);
      }

      regexes.forEach(function (snippet) {
        try {
          _global.result = result = parse(snippet, flags);
          log(jsesc(result, {
            'json': true,
            'compact': false,
            'indent': '\t'
          }));
        } catch (error) {
          log(error.message + '\n');
          log('Error: failed to parse. Make sure the regular expression is valid.');
          log('If you think this is a bug in regjsparser, please report it:');
          log('\thttps://github.com/jviereck/regjsparser/issues/new');
          log('\nStack trace:\n');
          log(error.stack);
          return process.exit(1);
        }
      }); // Return with exit status 0 outside of the `forEach` loop, in case
      // multiple regular expressions were passed in.

      return process.exit(0);
    };

    main();
  })();

  return exports;
}