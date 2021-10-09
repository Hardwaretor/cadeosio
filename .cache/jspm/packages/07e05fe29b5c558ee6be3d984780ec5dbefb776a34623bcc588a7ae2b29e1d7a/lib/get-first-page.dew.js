import { dew as _getPageDewDew } from "./get-page.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = getFirstPage;

  const getPage = _getPageDewDew();

  function getFirstPage(octokit, link, headers) {
    return getPage(octokit, link, 'first', headers);
  }

  return exports;
}