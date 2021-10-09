var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports.addScript('dom.js', ['DOMImplementation', 'XMLSerializer']);
  exports.addScript('dom-parser.js', ['DOMHandler', 'DOMParser'], ['DOMImplementation', 'XMLReader']);
  exports.addScript('sax.js', 'XMLReader');
  return exports;
}