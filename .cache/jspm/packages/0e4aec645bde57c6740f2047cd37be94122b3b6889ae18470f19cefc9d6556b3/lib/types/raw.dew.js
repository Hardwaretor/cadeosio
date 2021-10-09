import { dew as _indexDewDew } from "bytes/index.dew.js";
import { dew as _indexDew2Dew } from "debug/index.dew.js";
import { dew as _readDewDew } from "../read.dew.js";
import { dew as _indexDew3Dew } from "type-is/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /**
   * Module dependencies.
   */
  var bytes = _indexDewDew();

  var debug = _indexDew2Dew()('body-parser:raw');

  var read = _readDewDew();

  var typeis = _indexDew3Dew();
  /**
   * Module exports.
   */


  exports = raw;
  /**
   * Create a middleware to parse raw bodies.
   *
   * @param {object} [options]
   * @return {function}
   * @api public
   */

  function raw(options) {
    var opts = options || {};
    var inflate = opts.inflate !== false;
    var limit = typeof opts.limit !== 'number' ? bytes.parse(opts.limit || '100kb') : opts.limit;
    var type = opts.type || 'application/octet-stream';
    var verify = opts.verify || false;

    if (verify !== false && typeof verify !== 'function') {
      throw new TypeError('option verify must be function');
    } // create the appropriate type checking function


    var shouldParse = typeof type !== 'function' ? typeChecker(type) : type;

    function parse(buf) {
      return buf;
    }

    return function rawParser(req, res, next) {
      if (req._body) {
        debug('body already parsed');
        next();
        return;
      }

      req.body = req.body || {}; // skip requests without bodies

      if (!typeis.hasBody(req)) {
        debug('skip empty body');
        next();
        return;
      }

      debug('content-type %j', req.headers['content-type']); // determine if request should be parsed

      if (!shouldParse(req)) {
        debug('skip parsing');
        next();
        return;
      } // read


      read(req, res, next, parse, debug, {
        encoding: null,
        inflate: inflate,
        limit: limit,
        verify: verify
      });
    };
  }
  /**
   * Get the simple type checker.
   *
   * @param {string} type
   * @return {function}
   */


  function typeChecker(type) {
    return function checkType(req) {
      return Boolean(typeis(req, type));
    };
  }

  return exports;
}