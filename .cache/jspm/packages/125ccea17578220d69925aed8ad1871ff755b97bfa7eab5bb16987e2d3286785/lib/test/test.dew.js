import { dew as _indexDewDew } from "../index.dew.js";
import { dew as _indexDew2Dew } from "dom5/index.dew.js";
import { dew as _indexDew3Dew } from "parse5/index.dew.js";
import _buffer from "buffer";
import _module from "module";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var _nodeRequire = function () {
    var Module = _module.Module;

    if (Module) {
      var m = new Module("");
      m.filename = import.meta.url.substr(7 + (Module._nodeModulePaths("/")[0].length > 13));
      m.paths = Module._nodeModulePaths(m.filename.substr(0, m.filename.lastIndexOf("/")));
      return m.require.bind(m);
    } else {
      return function _nodeRequire(id) {
        var e = new Error("Cannot find module '" + id + "'");
        e.code = "MODULE_NOT_FOUND";
        throw e;
      };
    }
  }();

  var Buffer = _buffer.Buffer;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /**
   * @license
   * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */

  const chai = _nodeRequire("chai");

  const slam = _indexDewDew();

  const File = _nodeRequire("vinyl");

  chai.config.showDiff = true;
  const assert = chai.assert;
  suite('css-slam', () => {
    suite('CSS', () => {
      test('whitespace is minified', () => {
        const text = `
        div {
          color: blue;
        }

        button {
          border: 2px solid black;
        }
      `;
        const expected = 'div{color:blue;}button{border:2px solid black;}';
        assert.equal(slam.css(text), expected);
      });
      test('fun css features are kept', () => {
        const text = `
      :root {
        --foo: red;
        --border: 2px solid black;
        --thing: {
          box-shadow: 0 0 0 red;
        };
      }

      div {
        color: var(--foo, black);
        border: var(--border, 10px dotted orange);
        @apply --thing;
      }
      `;
        const expected = [':root{', '--foo:red;', '--border:2px solid black;', '--thing:{', 'box-shadow:0 0 0 red;', '};', '}', 'div{', 'color:var(--foo, black);', 'border:var(--border, 10px dotted orange);', '@apply --thing;', '}'].join('');
        assert.equal(slam.css(text), expected);
      });
      test('comments are removed', () => {
        const text = '/* foo */ :root{}';
        const expected = ':root{}';
        assert.equal(slam.css(text), expected);
      });
      test('@license comments are kept', () => {
        const text = '/* @license */ /* bar */ :root{}';
        const expected = '/* @license */:root{}';
        assert.equal(slam.css(text), expected);
      });
      test('@apply missing semicolon is fixed', () => {
        const text = `
      button {
        @apply(--whatever)
      }
      span {
        @apply (--whatever)
      }
      :host {
        @apply --whatever
      }
      div {
        color: red;
      }
      `;
        const expected = `button{@apply (--whatever);}span{@apply (--whatever);}:host{@apply --whatever;}div{color:red;}`;
        assert.equal(slam.css(text), expected);
      });
    });
    suite('HTML', () => {
      test('inline styles are minified', () => {
        const text = `
      <!doctype html>
      <style>
        :root{
          --foo: red;
        }
      </style>
      <style type="text/css">
        div {
          color: var(--foo);
        }
      </style>`;

        const dom5 = _indexDew2Dew();

        const parse5 = _indexDew3Dew();

        const ast = parse5.parse(slam.html(text));
        const styles = dom5.queryAll(ast, dom5.predicates.hasTagName('style'));
        assert.equal(styles.length, 2);
        assert.equal(dom5.getTextContent(styles[0]), ':root{--foo:red;}');
        assert.equal(dom5.getTextContent(styles[1]), 'div{color:var(--foo);}');
      });
    });
    suite('Gulp', () => {
      test('Process css files in stream', done => {
        const f = new File({
          path: 'foo.css',
          contents: new Buffer('/* foo */ :root { }')
        });

        slam.gulp()._transform(f, 'utf-8', (err, file) => {
          if (err) {
            return done(err);
          }

          assert.equal(f, file);
          assert.equal(f.contents.toString(), ':root{}');
          done();
        });
      });
      test('Process html files in stream', done => {
        const f = new File({
          path: 'foo.html',
          contents: new Buffer('<!doctype html><style>\n\t:root{\n--foo: red;\n}</style>')
        });

        slam.gulp()._transform(f, 'utf-8', (err, file) => {
          if (err) {
            return done(err);
          }

          assert.equal(f, file);
          assert.equal(f.contents.toString(), '<!DOCTYPE html><html><head><style>:root{--foo:red;}</style></head><body></body></html>');
          done();
        });
      });
      test('Leave unknown files in stream alone', done => {
        const b = new Buffer('<!doctype html><style>\n\t:root{\n--foo: red;\n}</style>');
        const f = new File({
          path: 'foo.bar',
          contents: b
        });

        slam.gulp()._transform(f, 'utf-8', (err, file) => {
          if (err) {
            return done(err);
          }

          assert.equal(f, file);
          assert.equal(f.contents, b);
          done();
        });
      });
    });
  });
  return exports;
}