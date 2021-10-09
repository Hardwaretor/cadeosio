import _url from "url";
import { dew as _base64DewDew } from "./base64.dew.js";
import { dew as _indexDewDew } from "rc/index.dew.js";
import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;
  var url = _url;

  var base64 = _base64DewDew();

  var decodeBase64 = base64.decodeBase64;
  var encodeBase64 = base64.encodeBase64;
  var tokenKey = ':_authToken';
  var userKey = ':username';
  var passwordKey = ':_password';

  exports = function () {
    var checkUrl;
    var options;

    if (arguments.length >= 2) {
      checkUrl = arguments[0];
      options = arguments[1];
    } else if (typeof arguments[0] === 'string') {
      checkUrl = arguments[0];
    } else {
      options = arguments[0];
    }

    options = options || {};
    options.npmrc = options.npmrc || _indexDewDew()('npm', {
      registry: 'https://registry.npmjs.org/'
    });
    checkUrl = checkUrl || options.npmrc.registry;
    return getRegistryAuthInfo(checkUrl, options) || getLegacyAuthInfo(options.npmrc);
  };

  function getRegistryAuthInfo(checkUrl, options) {
    var parsed = url.parse(checkUrl, false, true);
    var pathname;

    while (pathname !== '/' && parsed.pathname !== pathname) {
      pathname = parsed.pathname || '/';
      var regUrl = '//' + parsed.host + pathname.replace(/\/$/, '');
      var authInfo = getAuthInfoForUrl(regUrl, options.npmrc);

      if (authInfo) {
        return authInfo;
      } // break if not recursive


      if (!options.recursive) {
        return /\/$/.test(checkUrl) ? undefined : getRegistryAuthInfo(url.resolve(checkUrl, '.'), options);
      }

      parsed.pathname = url.resolve(normalizePath(pathname), '..') || '/';
    }

    return undefined;
  }

  function getLegacyAuthInfo(npmrc) {
    if (!npmrc._auth) {
      return undefined;
    }

    var token = replaceEnvironmentVariable(npmrc._auth);
    return {
      token: token,
      type: 'Basic'
    };
  }

  function normalizePath(path) {
    return path[path.length - 1] === '/' ? path : path + '/';
  }

  function getAuthInfoForUrl(regUrl, npmrc) {
    // try to get bearer token
    var bearerAuth = getBearerToken(npmrc[regUrl + tokenKey] || npmrc[regUrl + '/' + tokenKey]);

    if (bearerAuth) {
      return bearerAuth;
    } // try to get basic token


    var username = npmrc[regUrl + userKey] || npmrc[regUrl + '/' + userKey];
    var password = npmrc[regUrl + passwordKey] || npmrc[regUrl + '/' + passwordKey];
    var basicAuth = getTokenForUsernameAndPassword(username, password);

    if (basicAuth) {
      return basicAuth;
    }

    return undefined;
  }

  function replaceEnvironmentVariable(token) {
    return token.replace(/^\$\{?([^}]*)\}?$/, function (fullMatch, envVar) {
      return process.env[envVar];
    });
  }

  function getBearerToken(tok) {
    if (!tok) {
      return undefined;
    } // check if bearer token is set as environment variable


    var token = replaceEnvironmentVariable(tok);
    return {
      token: token,
      type: 'Bearer'
    };
  }

  function getTokenForUsernameAndPassword(username, password) {
    if (!username || !password) {
      return undefined;
    } // passwords are base64 encoded, so we need to decode it
    // See https://github.com/npm/npm/blob/v3.10.6/lib/config/set-credentials-by-uri.js#L26


    var pass = decodeBase64(replaceEnvironmentVariable(password)); // a basic auth token is base64 encoded 'username:password'
    // See https://github.com/npm/npm/blob/v3.10.6/lib/config/get-credentials-by-uri.js#L70

    var token = encodeBase64(username + ':' + pass); // we found a basicToken token so let's exit the loop

    return {
      token: token,
      type: 'Basic',
      password: pass,
      username: username
    };
  }

  return exports;
}