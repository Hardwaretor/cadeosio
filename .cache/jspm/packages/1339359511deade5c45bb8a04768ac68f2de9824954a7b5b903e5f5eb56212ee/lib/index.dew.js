var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  exports = function ({
    types: t
  }) {
    const VOID_0 = t.unaryExpression("void", t.numericLiteral(0), true);
    return {
      name: "transform-undefined-to-void",
      visitor: {
        ReferencedIdentifier(path) {
          if (path.node.name === "undefined") {
            path.replaceWith(VOID_0);
          }
        }

      }
    };
  };

  return exports;
}