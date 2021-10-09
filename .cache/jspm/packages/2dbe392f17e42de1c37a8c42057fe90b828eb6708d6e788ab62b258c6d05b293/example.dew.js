import { dew as _indexDewDew } from "./index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var ForkStream = _indexDewDew();

  var fork = new ForkStream({
    classifier: function classify(e, done) {
      return done(null, e >= 5);
    }
  });
  fork.a.on("data", console.log.bind(null, "a"));
  fork.b.on("data", console.log.bind(null, "b"));

  for (var i = 0; i < 20; ++i) {
    fork.write(Math.round(Math.random() * 10));
  }

  return exports;
}