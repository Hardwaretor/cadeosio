import _assert from "assert";
import _buffer from "buffer";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var Buffer = _buffer.Buffer;
  var assert = _assert;

  exports = function (filepath, contents, stat) {
    assert(typeof contents === 'string' || contents instanceof Buffer, 'Expected `contents` to be a String or a Buffer');
    var file = this.store.get(filepath);
    file.isNew = file.contents === null;
    file.state = 'modified';
    file.contents = typeof contents === 'string' ? Buffer.from(contents) : contents;
    file.stat = stat;
    this.store.add(file);
    return file.contents.toString();
  };

  return exports;
}