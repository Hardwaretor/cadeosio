import { dew as _asyncMapDewDew } from "./async-map.dew.js";
import { dew as _bindActorDewDew } from "./bind-actor.dew.js";
import { dew as _chainDewDew } from "./chain.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports.asyncMap = _asyncMapDewDew();
  exports.bindActor = _bindActorDewDew();
  exports.chain = _chainDewDew();
  return exports;
}