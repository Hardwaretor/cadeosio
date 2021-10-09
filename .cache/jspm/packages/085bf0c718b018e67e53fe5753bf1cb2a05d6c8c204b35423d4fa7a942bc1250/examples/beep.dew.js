import { dew as _indexDewDew } from "../index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var archy = _indexDewDew();

  var s = archy({
    label: 'beep',
    nodes: ['ity', {
      label: 'boop',
      nodes: [{
        label: 'o_O',
        nodes: [{
          label: 'oh',
          nodes: ['hello', 'puny']
        }, 'human']
      }, 'party\ntime!']
    }]
  });
  console.log(s);
  return exports;
}