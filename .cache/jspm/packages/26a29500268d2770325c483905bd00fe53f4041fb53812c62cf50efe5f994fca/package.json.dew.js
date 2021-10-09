export function dew () {
  return exports;
}
var exports = {"name":"cliui","version":"3.2.0","description":"easily create complex multi-column command-line-interfaces","main":"index.js","scripts":{"pretest":"standard","test":"nyc mocha","coverage":"nyc --reporter=text-lcov mocha | coveralls","version":"standard-version"},"repository":{"type":"git","url":"http://github.com/yargs/cliui.git"},"config":{"blanket":{"pattern":["index.js"],"data-cover-never":["node_modules","test"],"output-reporter":"spec"}},"standard":{"ignore":["**/example/**"],"globals":["it"]},"keywords":["cli","command-line","layout","design","console","wrap","table"],"author":"Ben Coe <ben@npmjs.com>","license":"ISC","dependencies":{"string-width":"^1.0.1","strip-ansi":"^3.0.1","wrap-ansi":"^2.0.0"},"devDependencies":{"chai":"^3.5.0","chalk":"^1.1.2","coveralls":"^2.11.8","mocha":"^2.4.5","nyc":"^6.4.0","standard":"^6.0.8","standard-version":"^2.1.2"},"files":["index.js"],"peerDependencies":{"@jspm/core":"npm:jspm/core@^1.0.0"}};
