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

  const {
    it,
    describe
  } = _nodeRequire('mocha');

  const assume = _nodeRequire('assume');

  const kuler = _indexDewDew();

  describe('kuler', function () {
    it('renders colors in the terminal', function () {
      console.log('     VISUAL INSPECTION');
      console.log('     ' + kuler('red').style('F00'));
      console.log('     ' + kuler('black').style('#000'));
      console.log('     ' + kuler('white').style('#FFFFFF'));
      console.log('     ' + kuler('lime').style('AAFF5B'));
      console.log('     ' + kuler('violet').style('#ee82ee'));
      console.log('     ' + kuler('purple').style('#800080'));
      console.log('     ' + kuler('purple').style('#800080'), 'correctly reset to normal color');
      console.log('     ' + kuler('green', '#008000'));
    });
    describe('#style', function () {
      it('has a style method', function () {
        assume(kuler('what').style).is.a('function');
      });
    });
  });
  return exports;
}