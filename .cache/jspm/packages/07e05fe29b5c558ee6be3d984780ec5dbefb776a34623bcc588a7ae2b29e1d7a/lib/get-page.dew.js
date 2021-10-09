import { dew as _deprecateDewDew } from "./deprecate.dew.js";
import { dew as _getPageLinksDewDew } from "./get-page-links.dew.js";
import { dew as _httpErrorDewDew } from "./http-error.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = getPage;

  const deprecate = _deprecateDewDew();

  const getPageLinks = _getPageLinksDewDew();

  const HttpError = _httpErrorDewDew();

  function getPage(octokit, link, which, headers) {
    deprecate(`octokit.get${which.charAt(0).toUpperCase() + which.slice(1)}Page() – You can use octokit.paginate or async iterators instead: https://github.com/octokit/rest.js#pagination.`);
    const url = getPageLinks(link)[which];

    if (!url) {
      const urlError = new HttpError(`No ${which} page found`, 404);
      return Promise.reject(urlError);
    }

    const requestOptions = {
      url,
      headers: applyAcceptHeader(link, headers)
    };
    const promise = octokit.request(requestOptions);
    return promise;
  }

  function applyAcceptHeader(res, headers) {
    const previous = res.headers && res.headers['x-github-media-type'];

    if (!previous || headers && headers.accept) {
      return headers;
    }

    headers = headers || {};
    headers.accept = 'application/vnd.' + previous.replace('; param=', '.').replace('; format=', '+');
    return headers;
  }

  return exports;
}