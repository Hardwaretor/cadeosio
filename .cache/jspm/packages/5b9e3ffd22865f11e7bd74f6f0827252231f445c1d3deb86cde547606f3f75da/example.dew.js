import { dew as _indexDewDew } from "./index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var BigInteger = _indexDewDew();

  var a = new BigInteger('91823918239182398123');
  console.log(a.bitLength());
  return exports;
}