var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  // Copied from https://github.com/nodejs/node/blob/master/lib/internal/url.js
  function urlToOptions(url) {
    var options = {
      protocol: url.protocol,
      hostname: url.hostname,
      hash: url.hash,
      search: url.search,
      pathname: url.pathname,
      path: `${url.pathname}${url.search}`,
      href: url.href
    };

    if (url.port !== '') {
      options.port = Number(url.port);
    }

    if (url.username || url.password) {
      options.auth = `${url.username}:${url.password}`;
    }

    return options;
  }

  exports = urlToOptions;
  return exports;
}