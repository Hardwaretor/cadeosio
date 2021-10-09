import _path from "path";
import _fs from "fs";
import { dew as _typesJsonDewDew } from "./types.json.dew.js";
import _process from "process";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;
  var path = _path;
  var fs = _fs;

  function Mime() {
    // Map of extension -> mime type
    (this || _global).types = Object.create(null); // Map of mime type -> extension

    (this || _global).extensions = Object.create(null);
  }
  /**
   * Define mimetype -> extension mappings.  Each key is a mime-type that maps
   * to an array of extensions associated with the type.  The first extension is
   * used as the default extension for the type.
   *
   * e.g. mime.define({'audio/ogg', ['oga', 'ogg', 'spx']});
   *
   * @param map (Object) type definitions
   */


  Mime.prototype.define = function (map) {
    for (var type in map) {
      var exts = map[type];

      for (var i = 0; i < exts.length; i++) {
        if (process.env.DEBUG_MIME && (this || _global).types[exts[i]]) {
          console.warn(((this || _global)._loading || "define()").replace(/.*\//, ''), 'changes "' + exts[i] + '" extension type from ' + (this || _global).types[exts[i]] + ' to ' + type);
        }

        (this || _global).types[exts[i]] = type;
      } // Default extension is the first one we encounter


      if (!(this || _global).extensions[type]) {
        (this || _global).extensions[type] = exts[0];
      }
    }
  };
  /**
   * Load an Apache2-style ".types" file
   *
   * This may be called multiple times (it's expected).  Where files declare
   * overlapping types/extensions, the last file wins.
   *
   * @param file (String) path of file to load.
   */


  Mime.prototype.load = function (file) {
    (this || _global)._loading = file; // Read file and split into lines

    var map = {},
        content = fs.readFileSync(file, 'ascii'),
        lines = content.split(/[\r\n]+/);
    lines.forEach(function (line) {
      // Clean up whitespace/comments, and split into fields
      var fields = line.replace(/\s*#.*|^\s*|\s*$/g, '').split(/\s+/);
      map[fields.shift()] = fields;
    });
    this.define(map);
    (this || _global)._loading = null;
  };
  /**
   * Lookup a mime type based on extension
   */


  Mime.prototype.lookup = function (path, fallback) {
    var ext = path.replace(/^.*[\.\/\\]/, '').toLowerCase();
    return (this || _global).types[ext] || fallback || (this || _global).default_type;
  };
  /**
   * Return file extension associated with a mime type
   */


  Mime.prototype.extension = function (mimeType) {
    var type = mimeType.match(/^\s*([^;\s]*)(?:;|\s|$)/)[1].toLowerCase();
    return (this || _global).extensions[type];
  }; // Default instance


  var mime = new Mime(); // Define built-in types

  mime.define(_typesJsonDewDew()); // Default type

  mime.default_type = mime.lookup('bin'); //
  // Additional API specific to the default instance
  //

  mime.Mime = Mime;
  /**
   * Lookup a charset based on mime type.
   */

  mime.charsets = {
    lookup: function (mimeType, fallback) {
      // Assume text types are utf8
      return /^text\/|^application\/(javascript|json)/.test(mimeType) ? 'UTF-8' : fallback;
    }
  };
  exports = mime;
  return exports;
}