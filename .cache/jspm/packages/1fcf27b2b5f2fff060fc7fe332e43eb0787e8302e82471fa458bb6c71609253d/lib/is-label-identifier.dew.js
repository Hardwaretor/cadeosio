var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = isLabelIdentifier;

  function isLabelIdentifier(path) {
    const node = path.node;
    return path.parentPath.isLabeledStatement({
      label: node
    }) || path.parentPath.isBreakStatement({
      label: node
    }) || path.parentPath.isContinueStatement({
      label: node
    });
  }

  return exports;
}