export function dew () {
  return exports;
}
var exports = {"name":"semver","version":"5.7.1","description":"The semantic version parser used by npm.","main":"semver.js","scripts":{"test":"tap","preversion":"npm test","postversion":"npm publish","postpublish":"git push origin --all; git push origin --tags"},"devDependencies":{"tap":"^13.0.0-rc.18"},"license":"ISC","repository":"https://github.com/npm/node-semver","bin":{"semver":"bin/semver"},"files":["bin","range.bnf","semver.js"],"tap":{"check-coverage":true},"peerDependencies":{"@jspm/core":"npm:jspm/core@^1.0.0"}};
