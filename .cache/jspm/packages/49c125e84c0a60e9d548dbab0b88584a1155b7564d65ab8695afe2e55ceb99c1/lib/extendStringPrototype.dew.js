import { dew as _colorsDewDew } from "./colors.dew.js";
import { dew as _stylesDewDew } from "./styles.dew.js";
import _module from "module";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

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

  var colors = _colorsDewDew(),
      styles = _stylesDewDew();

  exports = function () {
    //
    // Extends prototype of native string object to allow for "foo".red syntax
    //
    var addProperty = function (color, func) {
      String.prototype.__defineGetter__(color, func);
    };

    var sequencer = function sequencer(map, str) {
      return function () {
        var exploded = this.split(""),
            i = 0;
        exploded = exploded.map(map);
        return exploded.join("");
      };
    };

    var stylize = function stylize(str, style) {
      return styles[style].open + str + styles[style].close;
    };

    addProperty('strip', function () {
      return colors.strip(this || _global);
    });
    addProperty('stripColors', function () {
      return colors.strip(this || _global);
    });
    addProperty("trap", function () {
      return colors.trap(this || _global);
    });
    addProperty("zalgo", function () {
      return colors.zalgo(this || _global);
    });
    addProperty("zebra", function () {
      return colors.zebra(this || _global);
    });
    addProperty("rainbow", function () {
      return colors.rainbow(this || _global);
    });
    addProperty("random", function () {
      return colors.random(this || _global);
    });
    addProperty("america", function () {
      return colors.america(this || _global);
    }); //
    // Iterate through all default styles and colors
    //

    var x = Object.keys(colors.styles);
    x.forEach(function (style) {
      addProperty(style, function () {
        return stylize(this || _global, style);
      });
    });

    function applyTheme(theme) {
      //
      // Remark: This is a list of methods that exist
      // on String that you should not overwrite.
      //
      var stringPrototypeBlacklist = ['__defineGetter__', '__defineSetter__', '__lookupGetter__', '__lookupSetter__', 'charAt', 'constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf', 'charCodeAt', 'indexOf', 'lastIndexof', 'length', 'localeCompare', 'match', 'replace', 'search', 'slice', 'split', 'substring', 'toLocaleLowerCase', 'toLocaleUpperCase', 'toLowerCase', 'toUpperCase', 'trim', 'trimLeft', 'trimRight'];
      Object.keys(theme).forEach(function (prop) {
        if (stringPrototypeBlacklist.indexOf(prop) !== -1) {
          console.log('warn: '.red + ('String.prototype' + prop).magenta + ' is probably something you don\'t want to override. Ignoring style name');
        } else {
          if (typeof theme[prop] === 'string') {
            colors[prop] = colors[theme[prop]];
            addProperty(prop, function () {
              return colors[theme[prop]](this || _global);
            });
          } else {
            addProperty(prop, function () {
              var ret = this || _global;

              for (var t = 0; t < theme[prop].length; t++) {
                ret = exports[theme[prop][t]](ret);
              }

              return ret;
            });
          }
        }
      });
    }

    colors.setTheme = function (theme) {
      if (typeof theme === 'string') {
        try {
          colors.themes[theme] = _nodeRequire(theme);
          applyTheme(colors.themes[theme]);
          return colors.themes[theme];
        } catch (err) {
          console.log(err);
          return err;
        }
      } else {
        applyTheme(theme);
      }
    };
  };

  return exports;
}