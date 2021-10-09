import { dew as _indexDewDew } from "depd/index.dew.js";
import { dew as _jsonDewDew } from "./lib/types/json.dew.js";
import { dew as _rawDewDew } from "./lib/types/raw.dew.js";
import { dew as _textDewDew } from "./lib/types/text.dew.js";
import { dew as _urlencodedDewDew } from "./lib/types/urlencoded.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /**
   * Module dependencies.
   * @private
   */
  var deprecate = _indexDewDew()('body-parser');
  /**
   * Cache of loaded parsers.
   * @private
   */


  var parsers = Object.create(null);
  /**
   * @typedef Parsers
   * @type {function}
   * @property {function} json
   * @property {function} raw
   * @property {function} text
   * @property {function} urlencoded
   */

  /**
   * Module exports.
   * @type {Parsers}
   */

  exports = exports = deprecate.function(bodyParser, 'bodyParser: use individual json/urlencoded middlewares');
  /**
   * JSON parser.
   * @public
   */

  Object.defineProperty(exports, 'json', {
    configurable: true,
    enumerable: true,
    get: createParserGetter('json')
  });
  /**
   * Raw parser.
   * @public
   */

  Object.defineProperty(exports, 'raw', {
    configurable: true,
    enumerable: true,
    get: createParserGetter('raw')
  });
  /**
   * Text parser.
   * @public
   */

  Object.defineProperty(exports, 'text', {
    configurable: true,
    enumerable: true,
    get: createParserGetter('text')
  });
  /**
   * URL-encoded parser.
   * @public
   */

  Object.defineProperty(exports, 'urlencoded', {
    configurable: true,
    enumerable: true,
    get: createParserGetter('urlencoded')
  });
  /**
   * Create a middleware to parse json and urlencoded bodies.
   *
   * @param {object} [options]
   * @return {function}
   * @deprecated
   * @public
   */

  function bodyParser(options) {
    var opts = {}; // exclude type option

    if (options) {
      for (var prop in options) {
        if (prop !== 'type') {
          opts[prop] = options[prop];
        }
      }
    }

    var _urlencoded = exports.urlencoded(opts);

    var _json = exports.json(opts);

    return function bodyParser(req, res, next) {
      _json(req, res, function (err) {
        if (err) return next(err);

        _urlencoded(req, res, next);
      });
    };
  }
  /**
   * Create a getter for loading a parser.
   * @private
   */


  function createParserGetter(name) {
    return function get() {
      return loadParser(name);
    };
  }
  /**
   * Load a parser module.
   * @private
   */


  function loadParser(parserName) {
    var parser = parsers[parserName];

    if (parser !== undefined) {
      return parser;
    } // this uses a switch for static require analysis


    switch (parserName) {
      case 'json':
        parser = _jsonDewDew();
        break;

      case 'raw':
        parser = _rawDewDew();
        break;

      case 'text':
        parser = _textDewDew();
        break;

      case 'urlencoded':
        parser = _urlencodedDewDew();
        break;
    } // store to prevent invoking require()


    return parsers[parserName] = parser;
  }

  return exports;
}