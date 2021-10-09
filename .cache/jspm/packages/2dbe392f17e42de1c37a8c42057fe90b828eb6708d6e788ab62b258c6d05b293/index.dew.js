import _stream from "stream";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var stream = _stream;

  var ForkStream = exports = function ForkStream(options) {
    options = options || {};
    options.objectMode = true;
    stream.Writable.call(this || _global, options);

    if (options.classifier) {
      (this || _global)._classifier = options.classifier;
    }

    (this || _global).a = new stream.Readable(options);
    (this || _global).b = new stream.Readable(options);
    var self = this || _global;

    var resume = function resume() {
      if (self.resume) {
        var r = self.resume;
        self.resume = null;
        r.call(null);
      }
    };

    (this || _global).a._read = resume;
    (this || _global).b._read = resume;
    this.on("finish", function () {
      self.a.push(null);
      self.b.push(null);
    });
  };

  ForkStream.prototype = Object.create(stream.Writable.prototype, {
    constructor: {
      value: ForkStream
    }
  });

  ForkStream.prototype._classifier = function (e, done) {
    return done(null, !!e);
  };

  ForkStream.prototype._write = function _write(input, encoding, done) {
    var self = this || _global;

    (this || _global)._classifier.call(null, input, function (err, res) {
      if (err) {
        return done(err);
      }

      var out = res ? self.a : self.b;

      if (out.push(input)) {
        return done();
      } else {
        self.resume = done;
      }
    });
  };

  return exports;
}