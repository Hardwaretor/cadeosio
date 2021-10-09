import { dew as _mimeDewDew } from "../mime.dew.js";
import _assert from "assert";
import _path from "path";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /**
   * Usage: node test.js
   */
  var mime = _mimeDewDew();

  var assert = _assert;
  var path = _path; //
  // Test mime lookups
  //

  assert.equal('text/plain', mime.lookup('text.txt')); // normal file

  assert.equal('text/plain', mime.lookup('TEXT.TXT')); // uppercase

  assert.equal('text/plain', mime.lookup('dir/text.txt')); // dir + file

  assert.equal('text/plain', mime.lookup('.text.txt')); // hidden file

  assert.equal('text/plain', mime.lookup('.txt')); // nameless

  assert.equal('text/plain', mime.lookup('txt')); // extension-only

  assert.equal('text/plain', mime.lookup('/txt')); // extension-less ()

  assert.equal('text/plain', mime.lookup('\\txt')); // Windows, extension-less

  assert.equal('application/octet-stream', mime.lookup('text.nope')); // unrecognized

  assert.equal('fallback', mime.lookup('text.fallback', 'fallback')); // alternate default
  //
  // Test extensions
  //

  assert.equal('txt', mime.extension(mime.types.text));
  assert.equal('html', mime.extension(mime.types.htm));
  assert.equal('bin', mime.extension('application/octet-stream'));
  assert.equal('bin', mime.extension('application/octet-stream '));
  assert.equal('html', mime.extension(' text/html; charset=UTF-8'));
  assert.equal('html', mime.extension('text/html; charset=UTF-8 '));
  assert.equal('html', mime.extension('text/html; charset=UTF-8'));
  assert.equal('html', mime.extension('text/html ; charset=UTF-8'));
  assert.equal('html', mime.extension('text/html;charset=UTF-8'));
  assert.equal('html', mime.extension('text/Html;charset=UTF-8'));
  assert.equal(undefined, mime.extension('unrecognized')); //
  // Test node.types lookups
  //

  assert.equal('application/font-woff', mime.lookup('file.woff'));
  assert.equal('application/octet-stream', mime.lookup('file.buffer')); // TODO: Uncomment once #157 is resolved
  // assert.equal('audio/mp4', mime.lookup('file.m4a'));

  assert.equal('font/otf', mime.lookup('file.otf')); //
  // Test charsets
  //

  assert.equal('UTF-8', mime.charsets.lookup('text/plain'));
  assert.equal('UTF-8', mime.charsets.lookup(mime.types.js));
  assert.equal('UTF-8', mime.charsets.lookup(mime.types.json));
  assert.equal(undefined, mime.charsets.lookup(mime.types.bin));
  assert.equal('fallback', mime.charsets.lookup('application/octet-stream', 'fallback'));
  console.log('\nAll tests passed');
  return exports;
}