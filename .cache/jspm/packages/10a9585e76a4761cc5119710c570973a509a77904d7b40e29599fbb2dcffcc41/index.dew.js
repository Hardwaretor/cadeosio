import { dew as _charsetDewDew } from "./lib/charset.dew.js";
import { dew as _encodingDewDew } from "./lib/encoding.dew.js";
import { dew as _languageDewDew } from "./lib/language.dew.js";
import { dew as _mediaTypeDewDew } from "./lib/mediaType.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /**
   * Cached loaded submodules.
   * @private
   */
  var modules = Object.create(null);
  /**
   * Module exports.
   * @public
   */

  exports = Negotiator;
  exports.Negotiator = Negotiator;
  /**
   * Create a Negotiator instance from a request.
   * @param {object} request
   * @public
   */

  function Negotiator(request) {
    if (!(this instanceof Negotiator)) {
      return new Negotiator(request);
    }

    this.request = request;
  }

  Negotiator.prototype.charset = function charset(available) {
    var set = this.charsets(available);
    return set && set[0];
  };

  Negotiator.prototype.charsets = function charsets(available) {
    var preferredCharsets = loadModule('charset').preferredCharsets;
    return preferredCharsets(this.request.headers['accept-charset'], available);
  };

  Negotiator.prototype.encoding = function encoding(available) {
    var set = this.encodings(available);
    return set && set[0];
  };

  Negotiator.prototype.encodings = function encodings(available) {
    var preferredEncodings = loadModule('encoding').preferredEncodings;
    return preferredEncodings(this.request.headers['accept-encoding'], available);
  };

  Negotiator.prototype.language = function language(available) {
    var set = this.languages(available);
    return set && set[0];
  };

  Negotiator.prototype.languages = function languages(available) {
    var preferredLanguages = loadModule('language').preferredLanguages;
    return preferredLanguages(this.request.headers['accept-language'], available);
  };

  Negotiator.prototype.mediaType = function mediaType(available) {
    var set = this.mediaTypes(available);
    return set && set[0];
  };

  Negotiator.prototype.mediaTypes = function mediaTypes(available) {
    var preferredMediaTypes = loadModule('mediaType').preferredMediaTypes;
    return preferredMediaTypes(this.request.headers.accept, available);
  }; // Backwards compatibility


  Negotiator.prototype.preferredCharset = Negotiator.prototype.charset;
  Negotiator.prototype.preferredCharsets = Negotiator.prototype.charsets;
  Negotiator.prototype.preferredEncoding = Negotiator.prototype.encoding;
  Negotiator.prototype.preferredEncodings = Negotiator.prototype.encodings;
  Negotiator.prototype.preferredLanguage = Negotiator.prototype.language;
  Negotiator.prototype.preferredLanguages = Negotiator.prototype.languages;
  Negotiator.prototype.preferredMediaType = Negotiator.prototype.mediaType;
  Negotiator.prototype.preferredMediaTypes = Negotiator.prototype.mediaTypes;
  /**
   * Load the given module.
   * @private
   */

  function loadModule(moduleName) {
    var module = modules[moduleName];

    if (module !== undefined) {
      return module;
    } // This uses a switch for static require analysis


    switch (moduleName) {
      case 'charset':
        module = _charsetDewDew();
        break;

      case 'encoding':
        module = _encodingDewDew();
        break;

      case 'language':
        module = _languageDewDew();
        break;

      case 'mediaType':
        module = _mediaTypeDewDew();
        break;

      default:
        throw new Error('Cannot find module \'' + moduleName + '\'');
    } // Store to prevent invoking require()


    modules[moduleName] = module;
    return module;
  }

  return exports;
}