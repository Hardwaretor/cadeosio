import _url from "url";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var url = _url;

  function resolveUrl()
  /* ...urls */
  {
    return Array.prototype.reduce.call(arguments, function (resolved, nextUrl) {
      return url.resolve(resolved, nextUrl);
    });
  }

  exports = resolveUrl;
  return exports;
}