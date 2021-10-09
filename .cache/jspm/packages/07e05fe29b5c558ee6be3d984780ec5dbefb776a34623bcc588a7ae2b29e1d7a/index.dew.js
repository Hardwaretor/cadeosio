import { dew as _getFirstPageDewDew } from "./lib/get-first-page.dew.js";
import { dew as _getLastPageDewDew } from "./lib/get-last-page.dew.js";
import { dew as _getNextPageDewDew } from "./lib/get-next-page.dew.js";
import { dew as _getPreviousPageDewDew } from "./lib/get-previous-page.dew.js";
import { dew as _hasFirstPageDewDew } from "./lib/has-first-page.dew.js";
import { dew as _hasLastPageDewDew } from "./lib/has-last-page.dew.js";
import { dew as _hasNextPageDewDew } from "./lib/has-next-page.dew.js";
import { dew as _hasPreviousPageDewDew } from "./lib/has-previous-page.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = paginationMethodsPlugin;

  function paginationMethodsPlugin(octokit) {
    octokit.getFirstPage = _getFirstPageDewDew().bind(null, octokit);
    octokit.getLastPage = _getLastPageDewDew().bind(null, octokit);
    octokit.getNextPage = _getNextPageDewDew().bind(null, octokit);
    octokit.getPreviousPage = _getPreviousPageDewDew().bind(null, octokit);
    octokit.hasFirstPage = _hasFirstPageDewDew();
    octokit.hasLastPage = _hasLastPageDewDew();
    octokit.hasNextPage = _hasNextPageDewDew();
    octokit.hasPreviousPage = _hasPreviousPageDewDew();
  }

  return exports;
}