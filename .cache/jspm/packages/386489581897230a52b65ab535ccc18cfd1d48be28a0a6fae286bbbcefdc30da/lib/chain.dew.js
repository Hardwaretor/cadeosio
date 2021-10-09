import { dew as _bindActorDewDew } from "./bind-actor.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = chain;

  var bindActor = _bindActorDewDew();

  chain.first = {};
  chain.last = {};

  function chain(things, cb) {
    var res = [];

    (function LOOP(i, len) {
      if (i >= len) return cb(null, res);
      if (Array.isArray(things[i])) things[i] = bindActor.apply(null, things[i].map(function (i) {
        return i === chain.first ? res[0] : i === chain.last ? res[res.length - 1] : i;
      }));
      if (!things[i]) return LOOP(i + 1, len);
      things[i](function (er, data) {
        if (er) return cb(er, res);
        if (data !== undefined) res = res.concat(data);
        LOOP(i + 1, len);
      });
    })(0, things.length);
  }

  return exports;
}