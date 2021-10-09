import _stream from "stream";
import _path from "path";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var Stream = _stream;
  var Path = _path;

  function gulpRename(obj, options) {
    options = options || {};
    var stream = new Stream.Transform({
      objectMode: true
    });

    function parsePath(path) {
      var extname = options.multiExt ? Path.basename(path).slice(Path.basename(path).indexOf('.')) : Path.extname(path);
      return {
        dirname: Path.dirname(path),
        basename: Path.basename(path, extname),
        extname: extname
      };
    }

    stream._transform = function (originalFile, unused, callback) {
      var file = originalFile.clone({
        contents: false
      });
      var parsedPath = parsePath(file.relative);
      var path;
      var type = typeof obj;

      if (type === 'string' && obj !== '') {
        path = obj;
      } else if (type === 'function') {
        obj(parsedPath, file);
        path = Path.join(parsedPath.dirname, parsedPath.basename + parsedPath.extname);
      } else if (type === 'object' && obj !== undefined && obj !== null) {
        var dirname = 'dirname' in obj ? obj.dirname : parsedPath.dirname,
            prefix = obj.prefix || '',
            suffix = obj.suffix || '',
            basename = 'basename' in obj ? obj.basename : parsedPath.basename,
            extname = 'extname' in obj ? obj.extname : parsedPath.extname;
        path = Path.join(dirname, prefix + basename + suffix + extname);
      } else {
        callback(new Error('Unsupported renaming parameter type supplied'), undefined);
        return;
      }

      file.path = Path.join(file.base, path); // Rename sourcemap if present

      if (file.sourceMap) {
        file.sourceMap.file = file.relative;
      }

      callback(null, file);
    };

    return stream;
  }

  exports = gulpRename;
  return exports;
}