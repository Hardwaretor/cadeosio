import _path from "path";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var path = _path;

  function replaceExt(npath, ext) {
    if (typeof npath !== 'string') {
      return npath;
    }

    if (npath.length === 0) {
      return npath;
    }

    var nFileName = path.basename(npath, path.extname(npath)) + ext;
    var nFilepath = path.join(path.dirname(npath), nFileName); // Because `path.join` removes the head './' from the given path.
    // This removal can cause a problem when passing the result to `require` or
    // `import`.

    if (startsWithSingleDot(npath)) {
      return '.' + path.sep + nFilepath;
    }

    return nFilepath;
  }

  function startsWithSingleDot(fpath) {
    var first2chars = fpath.slice(0, 2);
    return first2chars === '.' + path.sep || first2chars === './';
  }

  exports = replaceExt;
  return exports;
}