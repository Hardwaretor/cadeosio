import { dew as _deprecateDewDew } from "./deprecate.dew.js";
import { dew as _getPageLinksDewDew } from "./get-page-links.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = hasPreviousPage;

  const deprecate = _deprecateDewDew();

  const getPageLinks = _getPageLinksDewDew();

  function hasPreviousPage(link) {
    deprecate(`octokit.hasPreviousPage() – You can use octokit.paginate or async iterators instead: https://github.com/octokit/rest.js#pagination.`);
    return getPageLinks(link).prev;
  }

  return exports;
}