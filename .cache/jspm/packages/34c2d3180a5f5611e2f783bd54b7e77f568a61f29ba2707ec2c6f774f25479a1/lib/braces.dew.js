import { dew as _indexDewDew } from "extend-shallow/index.dew.js";
import { dew as _indexDew2Dew } from "snapdragon/index.dew.js";
import { dew as _compilersDewDew } from "./compilers.dew.js";
import { dew as _parsersDewDew } from "./parsers.dew.js";
import { dew as _utilsDewDew } from "./utils.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var extend = _indexDewDew();

  var Snapdragon = _indexDew2Dew();

  var compilers = _compilersDewDew();

  var parsers = _parsersDewDew();

  var utils = _utilsDewDew();
  /**
   * Customize Snapdragon parser and renderer
   */


  function Braces(options) {
    this.options = extend({}, options);
  }
  /**
   * Initialize braces
   */


  Braces.prototype.init = function (options) {
    if (this.isInitialized) return;
    this.isInitialized = true;
    var opts = utils.createOptions({}, this.options, options);
    this.snapdragon = this.options.snapdragon || new Snapdragon(opts);
    this.compiler = this.snapdragon.compiler;
    this.parser = this.snapdragon.parser;
    compilers(this.snapdragon, opts);
    parsers(this.snapdragon, opts);
    /**
     * Call Snapdragon `.parse` method. When AST is returned, we check to
     * see if any unclosed braces are left on the stack and, if so, we iterate
     * over the stack and correct the AST so that compilers are called in the correct
     * order and unbalance braces are properly escaped.
     */

    utils.define(this.snapdragon, 'parse', function (pattern, options) {
      var parsed = Snapdragon.prototype.parse.apply(this, arguments);
      this.parser.ast.input = pattern;
      var stack = this.parser.stack;

      while (stack.length) {
        addParent({
          type: 'brace.close',
          val: ''
        }, stack.pop());
      }

      function addParent(node, parent) {
        utils.define(node, 'parent', parent);
        parent.nodes.push(node);
      } // add non-enumerable parser reference


      utils.define(parsed, 'parser', this.parser);
      return parsed;
    });
  };
  /**
   * Decorate `.parse` method
   */


  Braces.prototype.parse = function (ast, options) {
    if (ast && typeof ast === 'object' && ast.nodes) return ast;
    this.init(options);
    return this.snapdragon.parse(ast, options);
  };
  /**
   * Decorate `.compile` method
   */


  Braces.prototype.compile = function (ast, options) {
    if (typeof ast === 'string') {
      ast = this.parse(ast, options);
    } else {
      this.init(options);
    }

    return this.snapdragon.compile(ast, options);
  };
  /**
   * Expand
   */


  Braces.prototype.expand = function (pattern) {
    var ast = this.parse(pattern, {
      expand: true
    });
    return this.compile(ast, {
      expand: true
    });
  };
  /**
   * Optimize
   */


  Braces.prototype.optimize = function (pattern) {
    var ast = this.parse(pattern, {
      optimize: true
    });
    return this.compile(ast, {
      optimize: true
    });
  };
  /**
   * Expose `Braces`
   */


  exports = Braces;
  return exports;
}