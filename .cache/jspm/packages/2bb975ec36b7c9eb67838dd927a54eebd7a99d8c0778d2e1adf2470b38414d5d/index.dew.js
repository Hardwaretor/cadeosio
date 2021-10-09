import { dew as _indexDewDew } from "has-to-string-tag-x/index.dew.js";
import { dew as _indexDew2Dew } from "is-object/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  const hasToStringTag = _indexDewDew();

  const isObject = _indexDew2Dew();

  const toString = Object.prototype.toString;
  const urlClass = "[object URL]";
  const hash = "hash";
  const host = "host";
  const hostname = "hostname";
  const href = "href";
  const password = "password";
  const pathname = "pathname";
  const port = "port";
  const protocol = "protocol";
  const search = "search";
  const username = "username";

  const isURL = (url, supportIncomplete
  /*=false*/
  ) => {
    if (!isObject(url)) return false; // Native implementation in older browsers

    if (!hasToStringTag && toString.call(url) === urlClass) return true;
    if (!(href in url)) return false;
    if (!(protocol in url)) return false;
    if (!(username in url)) return false;
    if (!(password in url)) return false;
    if (!(hostname in url)) return false;
    if (!(port in url)) return false;
    if (!(host in url)) return false;
    if (!(pathname in url)) return false;
    if (!(search in url)) return false;
    if (!(hash in url)) return false;

    if (supportIncomplete !== true) {
      if (!isObject(url.searchParams)) return false; // TODO :: write a separate isURLSearchParams ?
    }

    return true;
  };

  isURL.lenient = url => {
    return isURL(url, true);
  };

  exports = isURL;
  return exports;
}