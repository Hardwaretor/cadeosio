import _fs from "fs";
import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;
  exports = isexe;
  isexe.sync = sync;
  var fs = _fs;

  function isexe(path, options, cb) {
    fs.stat(path, function (er, stat) {
      cb(er, er ? false : checkStat(stat, options));
    });
  }

  function sync(path, options) {
    return checkStat(fs.statSync(path), options);
  }

  function checkStat(stat, options) {
    return stat.isFile() && checkMode(stat, options);
  }

  function checkMode(stat, options) {
    var mod = stat.mode;
    var uid = stat.uid;
    var gid = stat.gid;
    var myUid = options.uid !== undefined ? options.uid : process.getuid && process.getuid();
    var myGid = options.gid !== undefined ? options.gid : process.getgid && process.getgid();
    var u = parseInt('100', 8);
    var g = parseInt('010', 8);
    var o = parseInt('001', 8);
    var ug = u | g;
    var ret = mod & o || mod & g && gid === myGid || mod & u && uid === myUid || mod & ug && myUid === 0;
    return ret;
  }

  return exports;
}