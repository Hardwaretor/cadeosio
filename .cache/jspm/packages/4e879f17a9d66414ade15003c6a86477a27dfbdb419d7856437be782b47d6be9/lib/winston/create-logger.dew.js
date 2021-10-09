import { dew as _indexDewDew } from "triple-beam/index.dew.js";
import { dew as _indexDew2Dew } from "./config/index.dew.js";
import { dew as _loggerDewDew } from "./logger.dew.js";
import { dew as _indexDew3Dew } from "@dabh/diagnostics/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  const {
    LEVEL
  } = _indexDewDew();

  const config = _indexDew2Dew();

  const Logger = _loggerDewDew();

  const debug = _indexDew3Dew()('winston:create-logger');

  function isLevelEnabledFunctionName(level) {
    return 'is' + level.charAt(0).toUpperCase() + level.slice(1) + 'Enabled';
  }
  /**
   * Create a new instance of a winston Logger. Creates a new
   * prototype for each instance.
   * @param {!Object} opts - Options for the created logger.
   * @returns {Logger} - A newly created logger instance.
   */


  exports = function (opts = {}) {
    //
    // Default levels: npm
    //
    opts.levels = opts.levels || config.npm.levels;
    /**
     * DerivedLogger to attach the logs level methods.
     * @type {DerivedLogger}
     * @extends {Logger}
     */

    class DerivedLogger extends Logger {
      /**
       * Create a new class derived logger for which the levels can be attached to
       * the prototype of. This is a V8 optimization that is well know to increase
       * performance of prototype functions.
       * @param {!Object} options - Options for the created logger.
       */
      constructor(options) {
        super(options);
      }

    }

    const logger = new DerivedLogger(opts); //
    // Create the log level methods for the derived logger.
    //

    Object.keys(opts.levels).forEach(function (level) {
      debug('Define prototype method for "%s"', level);

      if (level === 'log') {
        // eslint-disable-next-line no-console
        console.warn('Level "log" not defined: conflicts with the method "log". Use a different level name.');
        return;
      } //
      // Define prototype methods for each log level e.g.:
      // logger.log('info', msg) implies these methods are defined:
      // - logger.info(msg)
      // - logger.isInfoEnabled()
      //
      // Remark: to support logger.child this **MUST** be a function
      // so it'll always be called on the instance instead of a fixed
      // place in the prototype chain.
      //


      DerivedLogger.prototype[level] = function (...args) {
        // Prefer any instance scope, but default to "root" logger
        const self = this || logger; // Optimize the hot-path which is the single object.

        if (args.length === 1) {
          const [msg] = args;
          const info = msg && msg.message && msg || {
            message: msg
          };
          info.level = info[LEVEL] = level;

          self._addDefaultMeta(info);

          self.write(info);
          return this || logger;
        } // When provided nothing assume the empty string


        if (args.length === 0) {
          self.log(level, '');
          return self;
        } // Otherwise build argument list which could potentially conform to
        // either:
        // . v3 API: log(obj)
        // 2. v1/v2 API: log(level, msg, ... [string interpolate], [{metadata}], [callback])


        return self.log(level, ...args);
      };

      DerivedLogger.prototype[isLevelEnabledFunctionName(level)] = function () {
        return (this || logger).isLevelEnabled(level);
      };
    });
    return logger;
  };

  return exports;
}