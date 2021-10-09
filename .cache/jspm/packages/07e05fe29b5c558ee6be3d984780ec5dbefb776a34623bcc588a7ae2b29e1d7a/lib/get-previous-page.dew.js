import { dew as _getPageDewDew } from "./get-page.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = getPreviousPage;

  const getPage = _getPageDewDew();

  function getPreviousPage(octokit, link, headers) {
    return getPage(octokit, link, 'prev', headers);
  }

  return exports;
}