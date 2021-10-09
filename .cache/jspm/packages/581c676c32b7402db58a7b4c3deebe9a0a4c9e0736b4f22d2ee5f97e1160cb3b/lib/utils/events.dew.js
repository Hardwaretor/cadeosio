import { dew as _indexDewDew } from "rx/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var rx = _indexDewDew();

  function normalizeKeypressEvents(value, key) {
    return {
      value: value,
      key: key || {}
    };
  }

  exports = function (rl) {
    var keypress = rx.Observable.fromEvent(rl.input, 'keypress', normalizeKeypressEvents).filter(function (e) {
      // Ignore `enter` key. On the readline, we only care about the `line` event.
      return e.key.name !== 'enter' && e.key.name !== 'return';
    });
    return {
      line: rx.Observable.fromEvent(rl, 'line'),
      keypress: keypress,
      normalizedUpKey: keypress.filter(function (e) {
        return e.key.name === 'up' || e.key.name === 'k' || e.key.name === 'p' && e.key.ctrl;
      }).share(),
      normalizedDownKey: keypress.filter(function (e) {
        return e.key.name === 'down' || e.key.name === 'j' || e.key.name === 'n' && e.key.ctrl;
      }).share(),
      numberKey: keypress.filter(function (e) {
        return e.value && '123456789'.indexOf(e.value) >= 0;
      }).map(function (e) {
        return Number(e.value);
      }).share(),
      spaceKey: keypress.filter(function (e) {
        return e.key && e.key.name === 'space';
      }).share(),
      aKey: keypress.filter(function (e) {
        return e.key && e.key.name === 'a';
      }).share(),
      iKey: keypress.filter(function (e) {
        return e.key && e.key.name === 'i';
      }).share()
    };
  };

  return exports;
}