import _path from "path";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  // Copyright 2014 Simon Lydell
  // X11 (“MIT”) Licensed. (See LICENSE.)
  var path = _path;
  "use strict";

  function urix(aPath) {
    if (path.sep === "\\") {
      return aPath.replace(/\\/g, "/").replace(/^[a-z]:\/?/i, "/");
    }

    return aPath;
  }

  exports = urix;
  return exports;
}