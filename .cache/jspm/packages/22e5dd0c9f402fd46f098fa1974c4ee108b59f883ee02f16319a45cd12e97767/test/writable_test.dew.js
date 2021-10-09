import { dew as _lazystreamDewDew } from "../lib/lazystream.dew.js";
import { dew as _helperDewDew } from "./helper.dew.js";
import _buffer from "buffer";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var Buffer = _buffer.Buffer;

  var Writable = _lazystreamDewDew().Writable;

  var DummyWritable = _helperDewDew().DummyWritable;

  exports.writable = {
    options: function (test) {
      test.expect(3);
      var writable = new Writable(function (options) {
        test.ok((this || _global) instanceof Writable, "Writable should bind itself to callback's this");
        test.equal(options.encoding, "utf-8", "Writable should make options accessible to callback");
        (this || _global).ok = true;
        return new DummyWritable([]);
      }, {
        encoding: "utf-8"
      });
      writable.write("test");
      test.ok(writable.ok);
      test.done();
    },
    dummy: function (test) {
      var expected = ['line1\n', 'line2\n'];
      var actual = [];
      test.expect(0);
      var dummy = new DummyWritable(actual);
      expected.forEach(function (item) {
        dummy.write(new Buffer(item));
      });
      test.done();
    },
    streams2: function (test) {
      var expected = ['line1\n', 'line2\n'];
      var actual = [];
      var instantiated = false;
      test.expect(2);
      var writable = new Writable(function () {
        instantiated = true;
        return new DummyWritable(actual);
      });
      test.equal(instantiated, false, 'DummyWritable should only be instantiated when it is needed');
      writable.on('end', function () {
        test.equal(actual.join(''), expected.join(''), 'Writable should not change the data of the underlying stream');
        test.done();
      });
      expected.forEach(function (item) {
        writable.write(new Buffer(item));
      });
      writable.end();
    }
  };
  return exports;
}