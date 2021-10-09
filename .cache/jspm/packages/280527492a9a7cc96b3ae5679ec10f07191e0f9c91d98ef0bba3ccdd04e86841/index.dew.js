import _path from "path";
import { dew as _indexDewDew } from "graceful-fs/index.dew.js";
import { dew as _indexDew2Dew } from "strip-bom/index.dew.js";
import { dew as _indexDew3Dew } from "parse-json/index.dew.js";
import { dew as _indexDew4Dew } from "pinkie-promise/index.dew.js";
import { dew as _indexDew5Dew } from "pify/index.dew.js";
import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;
  var path = _path;

  var fs = _indexDewDew();

  var stripBom = _indexDew2Dew();

  var parseJson = _indexDew3Dew();

  var Promise = _indexDew4Dew();

  var pify = _indexDew5Dew();

  function parse(x, fp) {
    return parseJson(stripBom(x), path.relative(process.cwd(), fp));
  }

  exports = function (fp) {
    return pify(fs.readFile, Promise)(fp, 'utf8').then(function (data) {
      return parse(data, fp);
    });
  };

  exports.sync = function (fp) {
    return parse(fs.readFileSync(fp, 'utf8'), fp);
  };

  return exports;
}