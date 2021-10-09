import { dew as _indexDewDew } from "./index.dew.js";
import { dew as _coreDewDew } from "./core.dew.js";
import { dew as _es2015DewDew } from "./es2015.dew.js";
import { dew as _flowDewDew } from "./flow.dew.js";
import { dew as _jsxDewDew } from "./jsx.dew.js";
import { dew as _miscDewDew } from "./misc.dew.js";
import { dew as _experimentalDewDew } from "./experimental.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  _indexDewDew();

  _coreDewDew();

  _es2015DewDew();

  _flowDewDew();

  _jsxDewDew();

  _miscDewDew();

  _experimentalDewDew();

  return exports;
}