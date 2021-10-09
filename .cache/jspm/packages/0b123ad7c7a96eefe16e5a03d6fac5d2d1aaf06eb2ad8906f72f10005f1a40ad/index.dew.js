var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  const regex = '@[a-z0-9][\\w-.]+/[a-z0-9][\\w-.]*';

  exports = opts => opts && opts.exact ? new RegExp(`^${regex}$`, 'i') : new RegExp(regex, 'gi');

  return exports;
}