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

  // Which Unicode version should be used?
  const version = "9.0.0";

  const start = _nodeRequire("unicode-" + version + "/Binary_Property/ID_Start/code-points.js").filter(function (ch) {
    return ch > 0x7f;
  });

  let last = -1;
  const cont = [0x200c, 0x200d].concat(_nodeRequire("unicode-" + version + "/Binary_Property/ID_Continue/code-points.js").filter(function (ch) {
    return ch > 0x7f && search(start, ch, last + 1) == -1;
  }));

  function search(arr, ch, starting) {
    for (let i = starting; arr[i] <= ch && i < arr.length; last = i++) if (arr[i] === ch) return i;

    return -1;
  }

  function pad(str, width) {
    while (str.length < width) str = "0" + str;

    return str;
  }

  function esc(code) {
    const hex = code.toString(16);
    if (hex.length <= 2) return "\\x" + pad(hex, 2);else return "\\u" + pad(hex, 4);
  }

  function generate(chars) {
    const astral = [];
    let re = "";

    for (let i = 0, at = 0x10000; i < chars.length; i++) {
      const from = chars[i];
      let to = from;

      while (i < chars.length - 1 && chars[i + 1] == to + 1) {
        i++;
        to++;
      }

      if (to <= 0xffff) {
        if (from == to) re += esc(from);else if (from + 1 == to) re += esc(from) + esc(to);else re += esc(from) + "-" + esc(to);
      } else {
        astral.push(from - at, to - from);
        at = to;
      }
    }

    return {
      nonASCII: re,
      astral: astral
    };
  }

  const startData = generate(start);
  const contData = generate(cont);
  console.log("let nonASCIIidentifierStartChars = \"" + startData.nonASCII + "\";");
  console.log("let nonASCIIidentifierChars = \"" + contData.nonASCII + "\";");
  console.log("const astralIdentifierStartCodes = " + JSON.stringify(startData.astral) + ";");
  console.log("const astralIdentifierCodes = " + JSON.stringify(contData.astral) + ";");
  return exports;
}