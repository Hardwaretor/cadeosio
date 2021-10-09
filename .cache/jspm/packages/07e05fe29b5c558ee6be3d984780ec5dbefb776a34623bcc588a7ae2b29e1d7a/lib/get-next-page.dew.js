import { dew as _getPageDewDew } from "./get-page.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = getNextPage;

  const getPage = _getPageDewDew();

  function getNextPage(octokit, link, headers) {
    return getPage(octokit, link, 'next', headers);
  }

  return exports;
}