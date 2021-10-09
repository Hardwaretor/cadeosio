import { dew as _indexDewDew } from "decode-uri-component/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var decodeUriComponent = _indexDewDew();

  function customDecodeUriComponent(string) {
    // `decodeUriComponent` turns `+` into ` `, but that's not wanted.
    return decodeUriComponent(string.replace(/\+/g, "%2B"));
  }

  exports = customDecodeUriComponent;
  return exports;
}