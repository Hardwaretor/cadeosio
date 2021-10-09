import { dew as _setPrototypeOfDewDew } from "es5-ext/object/set-prototype-of.dew.js";
import { dew as _indexDewDew } from "d/index.dew.js";
import { dew as _indexDew2Dew } from "../index.dew.js";
import { dew as _validIterableDewDew } from "../valid-iterable.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var setPrototypeOf = _setPrototypeOfDewDew(),
      d = _indexDewDew(),
      Iterator = _indexDew2Dew(),
      validIterable = _validIterableDewDew(),
      push = Array.prototype.push,
      defineProperties = Object.defineProperties,
      IteratorChain;

  IteratorChain = function (iterators) {
    defineProperties(this, {
      __iterators__: d("", iterators),
      __current__: d("w", iterators.shift())
    });
  };

  if (setPrototypeOf) setPrototypeOf(IteratorChain, Iterator);
  IteratorChain.prototype = Object.create(Iterator.prototype, {
    constructor: d(IteratorChain),
    next: d(function () {
      var result;
      if (!this.__current__) return {
        done: true,
        value: undefined
      };
      result = this.__current__.next();

      while (result.done) {
        this.__current__ = this.__iterators__.shift();
        if (!this.__current__) return {
          done: true,
          value: undefined
        };
        result = this.__current__.next();
      }

      return result;
    })
  });

  exports = function () {
    var iterators = [this];
    push.apply(iterators, arguments);
    iterators.forEach(validIterable);
    return new IteratorChain(iterators);
  };

  return exports;
}