import { dew as _karmaSauceDewDew } from "./karma.sauce.dew.js";
import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;

  exports = function (config) {
    config.set({
      frameworks: ['mocha'],
      files: ['chai.js', 'test/bootstrap/index.js', 'test/*.js'],
      reporters: ['progress'],
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: false,
      browsers: ['PhantomJS'],
      browserDisconnectTimeout: 10000,
      browserDisconnectTolerance: 2,
      browserNoActivityTimeout: 20000,
      singleRun: true
    });

    switch (process.env.CHAI_TEST_ENV) {
      case 'sauce':
        _karmaSauceDewDew()(config);

        break;

      default:
        // ...
        break;
    }

    ;
  };

  return exports;
}