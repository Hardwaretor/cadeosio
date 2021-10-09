import { dew as _writableDewDew } from "readable-stream/writable.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var Writable = _writableDewDew();

  function listenerCount(stream, evt) {
    return stream.listeners(evt).length;
  }

  function hasListeners(stream) {
    return !!(listenerCount(stream, 'readable') || listenerCount(stream, 'data'));
  }

  function sink(stream) {
    var sinkAdded = false;
    var sinkStream = new Writable({
      objectMode: true,
      write: function (file, enc, cb) {
        cb();
      }
    });

    function addSink() {
      if (sinkAdded) {
        return;
      }

      if (hasListeners(stream)) {
        return;
      }

      sinkAdded = true;
      stream.pipe(sinkStream);
    }

    function removeSink(evt) {
      if (evt !== 'readable' && evt !== 'data') {
        return;
      }

      if (hasListeners(stream)) {
        sinkAdded = false;
        stream.unpipe(sinkStream);
      }
    }

    stream.on('newListener', removeSink);
    stream.on('removeListener', removeSink);
    stream.on('removeListener', addSink);
    return addSink;
  }

  exports = sink;
  return exports;
}