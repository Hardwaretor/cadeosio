import _fs from "fs";
import { dew as _indexDewDew } from "source-map/index.dew.js";
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
      return Object.assign(m.require.bind(m), {
        resolve: function (id) {
          return Module._resolveFilename(id, m);
        }
      });
    } else {
      return function _nodeRequire(id) {
        var e = new Error("Cannot find module '" + id + "'");
        e.code = "MODULE_NOT_FOUND";
        throw e;
      };
    }
  }();

  var fs = _fs;
  exports.FILES = ["../lib/utils.js", "../lib/ast.js", "../lib/parse.js", "../lib/transform.js", "../lib/scope.js", "../lib/output.js", "../lib/compress.js", "../lib/sourcemap.js", "../lib/mozilla-ast.js", "../lib/propmangle.js", "../lib/minify.js", "./exports.js"].map(function (file) {
    return (_nodeRequire.resolve || _nodeRequire)(file);
  });
  new Function("MOZ_SourceMap", "exports", function () {
    var code = exports.FILES.map(function (file) {
      return fs.readFileSync(file, "utf8");
    });
    code.push("exports.describe_ast = " + describe_ast.toString());
    return code.join("\n\n");
  }())(_indexDewDew(), exports);

  function describe_ast() {
    var out = OutputStream({
      beautify: true
    });

    function doitem(ctor) {
      out.print("AST_" + ctor.TYPE);
      var props = ctor.SELF_PROPS.filter(function (prop) {
        return !/^\$/.test(prop);
      });

      if (props.length > 0) {
        out.space();
        out.with_parens(function () {
          props.forEach(function (prop, i) {
            if (i) out.space();
            out.print(prop);
          });
        });
      }

      if (ctor.documentation) {
        out.space();
        out.print_string(ctor.documentation);
      }

      if (ctor.SUBCLASSES.length > 0) {
        out.space();
        out.with_block(function () {
          ctor.SUBCLASSES.forEach(function (ctor, i) {
            out.indent();
            doitem(ctor);
            out.newline();
          });
        });
      }
    }

    ;
    doitem(AST_Node);
    return out + "\n";
  }

  function infer_options(options) {
    var result = exports.minify("", options);
    return result.error && result.error.defs;
  }

  exports.default_options = function () {
    var defs = {};
    Object.keys(infer_options({
      0: 0
    })).forEach(function (component) {
      var options = {};
      options[component] = {
        0: 0
      };

      if (options = infer_options(options)) {
        defs[component] = options;
      }
    });
    return defs;
  };

  return exports;
}