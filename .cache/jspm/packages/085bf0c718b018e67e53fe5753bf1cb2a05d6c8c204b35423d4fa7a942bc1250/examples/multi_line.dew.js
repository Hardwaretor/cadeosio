import { dew as _indexDewDew } from "../index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var archy = _indexDewDew();

  var s = archy({
    label: 'beep\none\ntwo',
    nodes: ['ity', {
      label: 'boop',
      nodes: [{
        label: 'o_O\nwheee',
        nodes: [{
          label: 'oh',
          nodes: ['hello', 'puny\nmeat']
        }, 'creature']
      }, 'party\ntime!']
    }]
  });
  console.log(s);
  return exports;
}