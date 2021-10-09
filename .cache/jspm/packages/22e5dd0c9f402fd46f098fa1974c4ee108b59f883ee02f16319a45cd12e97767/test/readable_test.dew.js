import { dew as _lazystreamDewDew } from "../lib/lazystream.dew.js";
import { dew as _helperDewDew } from "./helper.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var Readable = _lazystreamDewDew().Readable;

  var DummyReadable = _helperDewDew().DummyReadable;

  exports.readable = {
    dummy: function (test) {
      var expected = ['line1\n', 'line2\n'];
      var actual = [];
      test.expect(1);
      new DummyReadable([].concat(expected)).on('data', function (chunk) {
        actual.push(chunk.toString());
      }).on('end', function () {
        test.equal(actual.join(''), expected.join(''), 'DummyReadable should produce the data it was created with');
        test.done();
      });
    },
    options: function (test) {
      test.expect(3);
      var readable = new Readable(function (options) {
        test.ok((this || _global) instanceof Readable, "Readable should bind itself to callback's this");
        test.equal(options.encoding, "utf-8", "Readable should make options accessible to callback");
        (this || _global).ok = true;
        return new DummyReadable(["test"]);
      }, {
        encoding: "utf-8"
      });
      readable.read(4);
      test.ok(readable.ok);
      test.done();
    },
    streams2: function (test) {
      var expected = ['line1\n', 'line2\n'];
      var actual = [];
      var instantiated = false;
      test.expect(2);
      var readable = new Readable(function () {
        instantiated = true;
        return new DummyReadable([].concat(expected));
      });
      test.equal(instantiated, false, 'DummyReadable should only be instantiated when it is needed');
      readable.on('readable', function () {
        var chunk;

        while (chunk = readable.read()) {
          actual.push(chunk.toString());
        }
      });
      readable.on('end', function () {
        test.equal(actual.join(''), expected.join(''), 'Readable should not change the data of the underlying stream');
        test.done();
      });
      readable.read(0);
    },
    resume: function (test) {
      var expected = ['line1\n', 'line2\n'];
      var actual = [];
      var instantiated = false;
      test.expect(2);
      var readable = new Readable(function () {
        instantiated = true;
        return new DummyReadable([].concat(expected));
      });
      readable.pause();
      readable.on('data', function (chunk) {
        actual.push(chunk.toString());
      });
      readable.on('end', function () {
        test.equal(actual.join(''), expected.join(''), 'Readable should not change the data of the underlying stream');
        test.done();
      });
      test.equal(instantiated, false, 'DummyReadable should only be instantiated when it is needed');
      readable.resume();
    }
  };
  return exports;
}