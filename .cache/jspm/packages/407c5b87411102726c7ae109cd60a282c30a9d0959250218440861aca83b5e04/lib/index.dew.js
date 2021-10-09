import { dew as _readDewDew } from "./actions/read.dew.js";
import { dew as _readJsonDewDew } from "./actions/read-json.dew.js";
import { dew as _existsDewDew } from "./actions/exists.dew.js";
import { dew as _writeDewDew } from "./actions/write.dew.js";
import { dew as _writeJsonDewDew } from "./actions/write-json.dew.js";
import { dew as _extendJsonDewDew } from "./actions/extend-json.dew.js";
import { dew as _appendDewDew } from "./actions/append.dew.js";
import { dew as _deleteDewDew } from "./actions/delete.dew.js";
import { dew as _copyDewDew } from "./actions/copy.dew.js";
import { dew as _copyTplDewDew } from "./actions/copy-tpl.dew.js";
import { dew as _moveDewDew } from "./actions/move.dew.js";
import { dew as _commitDewDew } from "./actions/commit.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  function EditionInterface(store) {
    this.store = store;
  }

  EditionInterface.prototype.read = _readDewDew();
  EditionInterface.prototype.readJSON = _readJsonDewDew();
  EditionInterface.prototype.exists = _existsDewDew();
  EditionInterface.prototype.write = _writeDewDew();
  EditionInterface.prototype.writeJSON = _writeJsonDewDew();
  EditionInterface.prototype.extendJSON = _extendJsonDewDew();
  EditionInterface.prototype.append = _appendDewDew();
  EditionInterface.prototype.delete = _deleteDewDew();
  EditionInterface.prototype.copy = _copyDewDew().copy;
  EditionInterface.prototype._copySingle = _copyDewDew()._copySingle;
  EditionInterface.prototype.copyTpl = _copyTplDewDew();
  EditionInterface.prototype.move = _moveDewDew();
  EditionInterface.prototype.commit = _commitDewDew();

  exports.create = function (store) {
    return new EditionInterface(store);
  };

  return exports;
}