import { dew as _setPrototypeOfDewDew } from "es5-ext/object/set-prototype-of.dew.js";
import { dew as _containsDewDew } from "es5-ext/string/#/contains.dew.js";
import { dew as _indexDewDew } from "d/index.dew.js";
import { dew as _indexDew2Dew } from "es6-symbol/index.dew.js";
import { dew as _indexDew3Dew } from "./index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var setPrototypeOf = _setPrototypeOfDewDew(),
      contains = _containsDewDew(),
      d = _indexDewDew(),
      Symbol = _indexDew2Dew(),
      Iterator = _indexDew3Dew();

  var defineProperty = Object.defineProperty,
      ArrayIterator;

  ArrayIterator = exports = function (arr, kind) {
    if (!(this instanceof ArrayIterator)) throw new TypeError("Constructor requires 'new'");
    Iterator.call(this, arr);
    if (!kind) kind = "value";else if (contains.call(kind, "key+value")) kind = "key+value";else if (contains.call(kind, "key")) kind = "key";else kind = "value";
    defineProperty(this, "__kind__", d("", kind));
  };

  if (setPrototypeOf) setPrototypeOf(ArrayIterator, Iterator); // Internal %ArrayIteratorPrototype% doesn't expose its constructor

  delete ArrayIterator.prototype.constructor;
  ArrayIterator.prototype = Object.create(Iterator.prototype, {
    _resolve: d(function (i) {
      if (this.__kind__ === "value") return this.__list__[i];
      if (this.__kind__ === "key+value") return [i, this.__list__[i]];
      return i;
    })
  });
  defineProperty(ArrayIterator.prototype, Symbol.toStringTag, d("c", "Array Iterator"));
  return exports;
}