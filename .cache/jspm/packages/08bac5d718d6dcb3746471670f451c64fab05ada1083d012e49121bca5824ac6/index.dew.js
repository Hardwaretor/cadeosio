var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var nargs = /\{([0-9a-zA-Z]+)\}/g;
  var slice = Array.prototype.slice;
  exports = template;

  function template(string) {
    var args;

    if (arguments.length === 2 && typeof arguments[1] === "object") {
      args = arguments[1];
    } else {
      args = slice.call(arguments, 1);
    }

    if (!args || !args.hasOwnProperty) {
      args = {};
    }

    return string.replace(nargs, function replaceArg(match, i, index) {
      var result;

      if (string[index - 1] === "{" && string[index + match.length] === "}") {
        return i;
      } else {
        result = args.hasOwnProperty(i) ? args[i] : null;

        if (result === null || result === undefined) {
          return "";
        }

        return result;
      }
    });
  }

  return exports;
}