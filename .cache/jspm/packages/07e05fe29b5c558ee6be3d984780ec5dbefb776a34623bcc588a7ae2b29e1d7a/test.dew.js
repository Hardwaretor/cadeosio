import { dew as _indexDewDew } from "./index.dew.js";
import _module from "module";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var _nodeRequire = function () {
    var Module = _module.Module;

    if (Module) {
      var m = new Module("");
      m.filename = import.meta.url.substr(7 + (Module._nodeModulePaths("/")[0].length > 13));
      m.paths = Module._nodeModulePaths(m.filename.substr(0, m.filename.lastIndexOf("/")));
      return m.require.bind(m);
    } else {
      return function _nodeRequire(id) {
        var e = new Error("Cannot find module '" + id + "'");
        e.code = "MODULE_NOT_FOUND";
        throw e;
      };
    }
  }();

  const test = _nodeRequire('tap').test;

  const nock = _nodeRequire('nock');

  const Octokit = _nodeRequire('@octokit/rest').plugin(_indexDewDew());

  test('@octokit/pagination-methods', t => {
    nock('https://api.github.com', {
      reqheaders: {
        authorization: 'token secrettoken123'
      }
    }).get('/organizations').query({
      page: 3,
      per_page: 1
    }).reply(200, [{}], {
      'Link': '<https://api.github.com/organizations?page=4&per_page=1>; rel="next", <https://api.github.com/organizations?page=1&per_page=1>; rel="first", <https://api.github.com/organizations?page=2&per_page=1>; rel="prev"',
      'X-GitHub-Media-Type': 'octokit.v3; format=json'
    }).get('/organizations').query({
      page: 1,
      per_page: 1
    }).reply(200, [{}]).get('/organizations').query({
      page: 2,
      per_page: 1
    }).reply(200, [{}]).get('/organizations').query({
      page: 4,
      per_page: 1
    }).reply(404, {});
    const octokit = new Octokit();
    octokit.authenticate({
      type: 'token',
      token: 'secrettoken123'
    });
    return octokit.orgs.getAll({
      page: 3,
      per_page: 1
    }).then(response => {
      t.ok(octokit.hasNextPage(response));
      t.ok(octokit.hasPreviousPage(response));
      t.ok(octokit.hasFirstPage(response));
      t.notOk(octokit.hasLastPage(response));

      const noop = () => {};

      return Promise.all([octokit.getFirstPage(response).then(response => {
        t.doesNotThrow(() => {
          octokit.hasPreviousPage(response);
        });
        t.notOk(octokit.hasPreviousPage(response));
      }), octokit.getPreviousPage(response, {
        foo: 'bar',
        accept: 'application/vnd.octokit.v3+json'
      }), octokit.getNextPage(response).catch(noop), octokit.getLastPage(response, {
        foo: 'bar'
      }).catch(error => {
        t.equals(error.code, 404);
      }), // test error with promise
      octokit.getLastPage(response).catch(noop)]);
    }).catch(t.error);
  });
  test('carries accept header correctly', () => {
    nock('https://api.github.com', {
      reqheaders: {
        accept: 'application/vnd.github.hellcat-preview+json'
      }
    }).get('/user/teams').query({
      per_page: 1
    }).reply(200, [{}], {
      'Link': '<https://api.github.com/user/teams?page=2&per_page=1>; rel="next"',
      'X-GitHub-Media-Type': 'github; param=hellcat-preview; format=json'
    }).get('/user/teams').query({
      page: 2,
      per_page: 1
    }).reply(200, []);
    const octokit = new Octokit();
    return octokit.users.getTeams({
      per_page: 1
    }).then(response => {
      return octokit.getNextPage(response);
    });
  });
  return exports;
}