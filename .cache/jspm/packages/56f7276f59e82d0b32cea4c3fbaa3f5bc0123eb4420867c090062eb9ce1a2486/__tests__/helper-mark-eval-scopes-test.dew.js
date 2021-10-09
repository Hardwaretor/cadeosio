import { dew as _indexDewDew } from "../src/index.dew.js";
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

  jest.autoMockOff();

  const babel = _nodeRequire("@babel/core");

  const helper = _indexDewDew();

  function getPath(source) {
    let path;
    babel.transform(source, {
      babelrc: false,
      plugins: [function ({
        traverse
      }) {
        (traverse.clearCache || traverse.cache.clear)();
        return {
          visitor: {
            Program(programPath) {
              path = programPath;
            }

          }
        };
      }]
    });
    return path;
  }

  describe("babel-helper-mark-eval-scopes", () => {
    it("getEvalScopes - should give a set of scopes which contains eval", () => {
      const source = `
      function foo() {
        function bar() {
          eval(";");
        }
        function baz() {
          noeval();
        }
      }
    `;
      const program = getPath(source);
      const evalScopes = [...helper.getEvalScopes(program)];
      expect(evalScopes).toContain(program.scope);
      expect(evalScopes).toContain(program.get("body.0.body.body.0").scope);
      expect(evalScopes).not.toContain(program.get("body.0.body.body.1").scope);
    });
  });
  return exports;
}