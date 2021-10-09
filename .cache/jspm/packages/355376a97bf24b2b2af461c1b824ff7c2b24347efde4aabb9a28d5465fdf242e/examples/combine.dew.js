import { dew as _indexDewDew } from "logform/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  const {
    format
  } = _indexDewDew();

  const {
    combine,
    timestamp,
    label
  } = format;
  const labelTimestamp = combine(label({
    label: 'right meow!'
  }), timestamp());
  const info = labelTimestamp.transform({
    level: 'info',
    message: 'What time is the testing at?'
  });
  console.dir(info);
  return exports;
}