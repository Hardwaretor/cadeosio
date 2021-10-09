import _fs from "fs";
import _path from "path";
import _assert from "assert";
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
  var fs = _fs;
  var path = _path;

  var mocha = _nodeRequire('mocha');

  var assert = _assert;

  var requireUncached = _nodeRequire('require-uncached');

  var npmRcPath = path.join(import.meta.url.startsWith('file:') ? decodeURI(import.meta.url.slice(0, import.meta.url.lastIndexOf('/')).slice(7 + (typeof process !== 'undefined' && process.platform === 'win32'))) : new URL(import.meta.url.slice(0, import.meta.url.lastIndexOf('/'))).pathname, '..', '.npmrc');
  var afterEach = mocha.afterEach;
  var describe = mocha.describe;
  var it = mocha.it;
  describe('registry-url', function () {
    afterEach(function (done) {
      fs.unlink(npmRcPath, function () {
        done();
      });
    });
    it('should read global if no local is found', function () {
      var getRegistryUrl = requireUncached('../registry-url');
      getRegistryUrl();
    });
    it('should return default registry if no url is given for scope', function (done) {
      fs.writeFile(npmRcPath, 'registry=https://registry.npmjs.org/', function (err) {
        var getRegistryUrl = requireUncached('../registry-url');
        assert(!err, err);
        assert.equal(getRegistryUrl('@somescope'), 'https://registry.npmjs.org/');
        done();
      });
    });
    it('should return registry url if url is given for scope ', function (done) {
      fs.writeFile(npmRcPath, '@somescope:registry=https://some.registry/', function (err) {
        var getRegistryUrl = requireUncached('../registry-url');
        assert(!err, err);
        assert.equal(getRegistryUrl('@somescope'), 'https://some.registry/');
        done();
      });
    });
    it('should append trailing slash if not present', function (done) {
      fs.writeFile(npmRcPath, '@somescope:registry=https://some.registry', function (err) {
        var getRegistryUrl = requireUncached('../registry-url');
        assert(!err, err);
        assert.equal(getRegistryUrl('@somescope'), 'https://some.registry/');
        done();
      });
    });
    it('should return configured global registry if given', function (done) {
      var content = ['registry=http://registry.foobar.eu/', '@somescope:registry=https://some.url/', ''].join('\n');
      fs.writeFile(npmRcPath, content, function (err) {
        var getRegistryUrl = requireUncached('../registry-url');
        assert(!err, err);
        assert.equal(getRegistryUrl(), 'http://registry.foobar.eu/');
        done();
      });
    });
  });
  return exports;
}