import { dew as _getPageDewDew } from "./get-page.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = getLastPage;

  const getPage = _getPageDewDew();

  function getLastPage(octokit, link, headers) {
    return getPage(octokit, link, 'last', headers);
  }

  return exports;
}