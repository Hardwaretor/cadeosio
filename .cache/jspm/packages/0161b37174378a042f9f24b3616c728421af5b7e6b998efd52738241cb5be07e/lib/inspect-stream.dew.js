var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  function inspectStream(stream) {
    var streamType = stream.constructor.name; // Avoid StreamStream

    if (streamType === 'Stream') {
      streamType = '';
    }

    return '<' + streamType + 'Stream>';
  }

  exports = inspectStream;
  return exports;
}