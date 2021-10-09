import { dew as _indexDewDew } from "babel-helper-is-void-0/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  exports = function ({
    types: t
  }) {
    const isVoid0 = _indexDewDew()(t);

    return {
      name: "minify-flip-comparisons",
      visitor: {
        // flip comparisons with a pure right hand value, this ensures
        // consistency with comparisons and increases the length of
        // strings that gzip can match
        // typeof blah === 'function' -> 'function' === typeof blah
        BinaryExpression(path) {
          const node = path.node;
          const right = node.right,
                left = node.left; // Make sure we have a constant on the right.

          if (!t.isLiteral(right) && !isVoid0(right) && !(t.isUnaryExpression(right) && t.isLiteral(right.argument)) && !t.isObjectExpression(right) && !t.isArrayExpression(right)) {
            return;
          } // Commutative operators.


          if (t.EQUALITY_BINARY_OPERATORS.indexOf(node.operator) >= 0 || ["*", "^", "&", "|"].indexOf(node.operator) >= 0) {
            node.left = right;
            node.right = left;
            return;
          }

          if (t.BOOLEAN_NUMBER_BINARY_OPERATORS.indexOf(node.operator) >= 0) {
            node.left = right;
            node.right = left;
            let operator;

            switch (node.operator) {
              case ">":
                operator = "<";
                break;

              case "<":
                operator = ">";
                break;

              case ">=":
                operator = "<=";
                break;

              case "<=":
                operator = ">=";
                break;
            }

            node.operator = operator;
            return;
          }
        }

      }
    };
  };

  return exports;
}