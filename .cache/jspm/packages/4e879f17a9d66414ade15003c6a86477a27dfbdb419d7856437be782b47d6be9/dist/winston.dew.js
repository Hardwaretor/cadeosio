import { dew as _indexDewDew } from "logform/index.dew.js";
import { dew as _commonDewDew } from "./winston/common.dew.js";
import { dew as _packageJsonDewDew } from "../package.json.dew.js";
import { dew as _indexDew2Dew } from "./winston/transports/index.dew.js";
import { dew as _indexDew3Dew } from "./winston/config/index.dew.js";
import { dew as _createLoggerDewDew } from "./winston/create-logger.dew.js";
import { dew as _exceptionHandlerDewDew } from "./winston/exception-handler.dew.js";
import { dew as _rejectionHandlerDewDew } from "./winston/rejection-handler.dew.js";
import { dew as _containerDewDew } from "./winston/container.dew.js";
import { dew as _indexDew4Dew } from "winston-transport/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var logform = _indexDewDew();

  var _require = _commonDewDew(),
      warn = _require.warn;
  /**
   * Setup to expose.
   * @type {Object}
   */


  var winston = exports;
  /**
   * Expose version. Use `require` method for `webpack` support.
   * @type {string}
   */

  winston.version = _packageJsonDewDew().version;
  /**
   * Include transports defined by default by winston
   * @type {Array}
   */

  winston.transports = _indexDew2Dew();
  /**
   * Expose utility methods
   * @type {Object}
   */

  winston.config = _indexDew3Dew();
  /**
   * Hoist format-related functionality from logform.
   * @type {Object}
   */

  winston.addColors = logform.levels;
  /**
   * Hoist format-related functionality from logform.
   * @type {Object}
   */

  winston.format = logform.format;
  /**
   * Expose core Logging-related prototypes.
   * @type {function}
   */

  winston.createLogger = _createLoggerDewDew();
  /**
   * Expose core Logging-related prototypes.
   * @type {Object}
   */

  winston.ExceptionHandler = _exceptionHandlerDewDew();
  /**
   * Expose core Logging-related prototypes.
   * @type {Object}
   */

  winston.RejectionHandler = _rejectionHandlerDewDew();
  /**
   * Expose core Logging-related prototypes.
   * @type {Container}
   */

  winston.Container = _containerDewDew();
  /**
   * Expose core Logging-related prototypes.
   * @type {Object}
   */

  winston.Transport = _indexDew4Dew();
  /**
   * We create and expose a default `Container` to `winston.loggers` so that the
   * programmer may manage multiple `winston.Logger` instances without any
   * additional overhead.
   * @example
   *   // some-file1.js
   *   const logger = require('winston').loggers.get('something');
   *
   *   // some-file2.js
   *   const logger = require('winston').loggers.get('something');
   */

  winston.loggers = new winston.Container();
  /**
   * We create and expose a 'defaultLogger' so that the programmer may do the
   * following without the need to create an instance of winston.Logger directly:
   * @example
   *   const winston = require('winston');
   *   winston.log('info', 'some message');
   *   winston.error('some error');
   */

  var defaultLogger = winston.createLogger(); // Pass through the target methods onto `winston.

  Object.keys(winston.config.npm.levels).concat(['log', 'query', 'stream', 'add', 'remove', 'clear', 'profile', 'startTimer', 'handleExceptions', 'unhandleExceptions', 'handleRejections', 'unhandleRejections', 'configure', 'child']).forEach(function (method) {
    return winston[method] = function () {
      return defaultLogger[method].apply(defaultLogger, arguments);
    };
  });
  /**
   * Define getter / setter for the default logger level which need to be exposed
   * by winston.
   * @type {string}
   */

  Object.defineProperty(winston, 'level', {
    get: function get() {
      return defaultLogger.level;
    },
    set: function set(val) {
      defaultLogger.level = val;
    }
  });
  /**
   * Define getter for `exceptions` which replaces `handleExceptions` and
   * `unhandleExceptions`.
   * @type {Object}
   */

  Object.defineProperty(winston, 'exceptions', {
    get: function get() {
      return defaultLogger.exceptions;
    }
  });
  /**
   * Define getters / setters for appropriate properties of the default logger
   * which need to be exposed by winston.
   * @type {Logger}
   */

  ['exitOnError'].forEach(function (prop) {
    Object.defineProperty(winston, prop, {
      get: function get() {
        return defaultLogger[prop];
      },
      set: function set(val) {
        defaultLogger[prop] = val;
      }
    });
  });
  /**
   * The default transports and exceptionHandlers for the default winston logger.
   * @type {Object}
   */

  Object.defineProperty(winston, 'default', {
    get: function get() {
      return {
        exceptionHandlers: defaultLogger.exceptionHandlers,
        rejectionHandlers: defaultLogger.rejectionHandlers,
        transports: defaultLogger.transports
      };
    }
  }); // Have friendlier breakage notices for properties that were exposed by default
  // on winston < 3.0.

  warn.deprecated(winston, 'setLevels');
  warn.forFunctions(winston, 'useFormat', ['cli']);
  warn.forProperties(winston, 'useFormat', ['padLevels', 'stripColors']);
  warn.forFunctions(winston, 'deprecated', ['addRewriter', 'addFilter', 'clone', 'extend']);
  warn.forProperties(winston, 'deprecated', ['emitErrs', 'levelLength']); // Throw a useful error when users attempt to run `new winston.Logger`.

  warn.moved(winston, 'createLogger', 'Logger');
  return exports;
}