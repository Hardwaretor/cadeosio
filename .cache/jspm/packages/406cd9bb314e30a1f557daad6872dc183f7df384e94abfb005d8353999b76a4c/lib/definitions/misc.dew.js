import { dew as _indexDewDew } from "./index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var _index = _indexDewDew();

  var _index2 = _interopRequireDefault(_index);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  (0, _index2.default)("Noop", {
    visitor: []
  });
  (0, _index2.default)("ParenthesizedExpression", {
    visitor: ["expression"],
    aliases: ["Expression", "ExpressionWrapper"],
    fields: {
      expression: {
        validate: (0, _index.assertNodeType)("Expression")
      }
    }
  });
  return exports;
}