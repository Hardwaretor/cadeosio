export function dew () {
  return exports;
}
var exports = {"author":"Isaac Z. Schlueter <i@izs.me> (http://blog.izs.me/)","name":"glob","description":"a little globber","version":"7.1.6","repository":{"type":"git","url":"git://github.com/isaacs/node-glob.git"},"main":"glob.js","files":["glob.js","sync.js","common.js"],"engines":{"node":"*"},"dependencies":{"fs.realpath":"^1.0.0","inflight":"^1.0.4","inherits":"2","minimatch":"^3.0.4","once":"^1.3.0","path-is-absolute":"^1.0.0"},"devDependencies":{"mkdirp":"0","rimraf":"^2.2.8","tap":"^12.0.1","tick":"0.0.6"},"scripts":{"prepublish":"npm run benchclean","profclean":"rm -f v8.log profile.txt","test":"tap test/*.js --cov","test-regen":"npm run profclean && TEST_REGEN=1 node test/00-setup.js","bench":"bash benchmark.sh","prof":"bash prof.sh && cat profile.txt","benchclean":"node benchclean.js"},"license":"ISC","funding":{"url":"https://github.com/sponsors/isaacs"},"peerDependencies":{"@jspm/core":"npm:jspm/core@^1.0.0"}};
