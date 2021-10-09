import { dew as _URIDewDew } from "./URI.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /*
   * Extending URI.js for fragment abuse
   */
  // --------------------------------------------------------------------------------
  // EXAMPLE: storing a relative URL in the fragment ("FragmentURI")
  // possibly helpful when working with backbone.js or sammy.js
  // inspired by https://github.com/medialize/URI.js/pull/2
  // --------------------------------------------------------------------------------
  // Note: make sure this is the last file loaded!
  // USAGE:
  // var uri = URI("http://example.org/#!/foo/bar/baz.html");
  // var furi = uri.fragment(true);
  // furi.pathname() === '/foo/bar/baz.html';
  // furi.pathname('/hello.html');
  // uri.toString() === "http://example.org/#!/hello.html"
  (function (root, factory) {
    'use strict'; // https://github.com/umdjs/umd/blob/master/returnExports.js

    if (exports) {
      // Node
      exports = factory(_URIDewDew());
    } else if (typeof define === 'function' && define.amd) {
      // AMD. Register as an anonymous module.
      define(['./URI'], factory);
    } else {
      // Browser globals (root is window)
      factory(root.URI);
    }
  })(exports, function (URI) {
    'use strict';

    var p = URI.prototype; // old handlers we need to wrap

    var f = p.fragment;
    var b = p.build; // make fragmentPrefix configurable

    URI.fragmentPrefix = '!';
    var _parts = URI._parts;

    URI._parts = function () {
      var parts = _parts();

      parts.fragmentPrefix = URI.fragmentPrefix;
      return parts;
    };

    p.fragmentPrefix = function (v) {
      (this || _global)._parts.fragmentPrefix = v;
      return this || _global;
    }; // add fragment(true) and fragment(URI) signatures  


    p.fragment = function (v, build) {
      var prefix = (this || _global)._parts.fragmentPrefix;
      var fragment = (this || _global)._parts.fragment || '';
      var furi;

      if (v === true) {
        if (fragment.substring(0, prefix.length) !== prefix) {
          furi = URI('');
        } else {
          furi = new URI(fragment.substring(prefix.length));
        }

        (this || _global)._fragmentURI = furi;
        furi._parentURI = this || _global;
        return furi;
      } else if (v !== undefined && typeof v !== 'string') {
        (this || _global)._fragmentURI = v;
        v._parentURI = v;
        (this || _global)._parts.fragment = prefix + v.toString();
        this.build(!build);
        return this || _global;
      } else if (typeof v === 'string') {
        (this || _global)._fragmentURI = undefined;
      }

      return f.call(this || _global, v, build);
    }; // make .build() of the actual URI aware of the FragmentURI


    p.build = function (deferBuild) {
      var t = b.call(this || _global, deferBuild);

      if (deferBuild !== false && (this || _global)._parentURI) {
        // update the parent
        (this || _global)._parentURI.fragment(this || _global);
      }

      return t;
    }; // extending existing object rather than defining something new


    return URI;
  });

  return exports;
}