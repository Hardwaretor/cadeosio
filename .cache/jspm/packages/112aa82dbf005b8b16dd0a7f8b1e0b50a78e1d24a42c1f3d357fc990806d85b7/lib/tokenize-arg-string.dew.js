var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  // take an un-split argv string and tokenize it.
  exports = function (argString) {
    if (Array.isArray(argString)) return argString;
    var i = 0;
    var c = null;
    var opening = null;
    var args = [];

    for (var ii = 0; ii < argString.length; ii++) {
      c = argString.charAt(ii); // split on spaces unless we're in quotes.

      if (c === ' ' && !opening) {
        i++;
        continue;
      } // don't split the string if we're in matching
      // opening or closing single and double quotes.


      if (c === opening) {
        opening = null;
        continue;
      } else if ((c === "'" || c === '"') && !opening) {
        opening = c;
        continue;
      }

      if (!args[i]) args[i] = '';
      args[i] += c;
    }

    return args;
  };

  return exports;
}