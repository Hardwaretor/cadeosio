import { dew as _indexDewDew } from "@babel/helper-replace-supers/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = rewriteThis;

  var _helperReplaceSupers = _indexDewDew();

  function rewriteThis(programPath) {
    programPath.traverse(rewriteThisVisitor);
  }

  const rewriteThisVisitor = {
    ThisExpression(path) {
      path.replaceWith(path.scope.buildUndefinedNode());
    },

    Function(path) {
      if (path.isMethod()) (0, _helperReplaceSupers.skipAllButComputedKey)(path);else if (!path.isArrowFunctionExpression()) path.skip();
    },

    ClassProperty(path) {
      (0, _helperReplaceSupers.skipAllButComputedKey)(path);
    },

    ClassPrivateProperty(path) {
      path.skip();
    }

  };
  return exports;
}