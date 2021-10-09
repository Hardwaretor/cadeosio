export function dew () {
  return exports;
}
var exports = {"name":"vinyl-fs","description":"Vinyl adapter for the file system","version":"2.4.4","homepage":"http://github.com/wearefractal/vinyl-fs","repository":"git://github.com/wearefractal/vinyl-fs.git","author":"Fractal <contact@wearefractal.com> (http://wearefractal.com/)","main":"index.js","files":["index.js","lib"],"dependencies":{"duplexify":"^3.2.0","glob-stream":"^5.3.2","graceful-fs":"^4.0.0","gulp-sourcemaps":"1.6.0","is-valid-glob":"~0.3.0","lazystream":"^1.0.0","lodash.isequal":"^4.0.0","merge-stream":"^1.0.0","mkdirp":"~0.5.0","object-assign":"^4.0.0","readable-stream":"^2.0.4","strip-bom":"^2.0.0","strip-bom-stream":"^1.0.0","through2":"^2.0.0","through2-filter":"^2.0.0","vali-date":"^1.0.0","vinyl":"^1.0.0"},"devDependencies":{"buffer-equal":"^0.0.1","default-resolution":"^1.0.1","del":"^2.2.0","eslint":"^1.10.3","eslint-config-gulp":"^2.0.0","expect":"^1.14.0","github-changes":"^1.0.1","istanbul":"^0.3.0","istanbul-coveralls":"^1.0.1","jscs":"^2.4.0","jscs-preset-gulp":"^1.0.0","mocha":"^2.0.0","mocha-lcov-reporter":"^1.0.0","rimraf":"^2.2.5","should":"^7.0.0","sinon":"^1.10.3"},"scripts":{"lint":"eslint . && jscs index.js lib/ test/","test":"npm run lint && mocha","cover":"istanbul cover _mocha","coveralls":"npm run cover && istanbul-coveralls","changelog":"github-changes -o gulpjs -r vinyl-fs -b master -f ./CHANGELOG.md --order-semver --use-commit-body"},"engines":{"node":">=0.10"},"license":"MIT","peerDependencies":{"@jspm/core":"npm:jspm/core@^1.0.0"}};
