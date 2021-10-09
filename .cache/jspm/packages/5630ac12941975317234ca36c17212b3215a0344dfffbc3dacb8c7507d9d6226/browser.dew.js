var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  exports = function (global) {
    var uint32 = ('Uint32Array' in global);
    var crypto = global.crypto || global.msCrypto;
    var rando = crypto && typeof crypto.getRandomValues === 'function';
    var good = uint32 && rando;
    if (!good) return Math.random;
    var arr = new Uint32Array(1);
    var max = Math.pow(2, 32);

    function random() {
      crypto.getRandomValues(arr);
      return arr[0] / max;
    }

    random.cryptographic = true;
    return random;
  }(typeof self !== 'undefined' ? self : window);

  return exports;
}