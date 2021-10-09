import { dew as _indexDewDew } from "./index.dew.js";
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

  describe('enabled', function () {
    'use strict';

    var assume = _nodeRequire('assume'),
        enabled = _indexDewDew();

    it('supports wildcards', function () {
      var variable = 'b*';
      assume(enabled('bigpipe', variable)).to.be.true();
      assume(enabled('bro-fist', variable)).to.be.true();
      assume(enabled('ro-fist', variable)).to.be.false();
    });
    it('is disabled by default', function () {
      assume(enabled('bigpipe', '')).to.be.false();
      assume(enabled('bigpipe', 'bigpipe')).to.be.true();
    });
    it('can ignore loggers using a -', function () {
      var variable = 'bigpipe,-primus,sack,-other';
      assume(enabled('bigpipe', variable)).to.be.true();
      assume(enabled('sack', variable)).to.be.true();
      assume(enabled('primus', variable)).to.be.false();
      assume(enabled('other', variable)).to.be.false();
      assume(enabled('unknown', variable)).to.be.false();
    });
    it('supports multiple ranges', function () {
      var variable = 'bigpipe*,primus*';
      assume(enabled('bigpipe:', variable)).to.be.true();
      assume(enabled('bigpipes', variable)).to.be.true();
      assume(enabled('primus:', variable)).to.be.true();
      assume(enabled('primush', variable)).to.be.true();
      assume(enabled('unknown', variable)).to.be.false();
    });
  });
  return exports;
}