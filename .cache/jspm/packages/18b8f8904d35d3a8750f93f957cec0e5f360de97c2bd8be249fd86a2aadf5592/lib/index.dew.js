import { dew as _indexDewDew } from "@babel/helper-plugin-utils/index.dew.js";
import { dew as _indexDew2Dew } from "@babel/core/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _helperPluginUtils = _indexDewDew();

  var _core = _indexDew2Dew();

  var _default = (0, _helperPluginUtils.declare)(api => {
    api.assertVersion(7);
    return {
      name: "transform-instanceof",
      visitor: {
        BinaryExpression(path) {
          const {
            node
          } = path;

          if (node.operator === "instanceof") {
            const helper = this.addHelper("instanceof");
            const isUnderHelper = path.findParent(path => {
              return path.isVariableDeclarator() && path.node.id === helper || path.isFunctionDeclaration() && path.node.id && path.node.id.name === helper.name;
            });

            if (isUnderHelper) {
              return;
            } else {
              path.replaceWith(_core.types.callExpression(helper, [node.left, node.right]));
            }
          }
        }

      }
    };
  });

  exports.default = _default;
  return exports;
}