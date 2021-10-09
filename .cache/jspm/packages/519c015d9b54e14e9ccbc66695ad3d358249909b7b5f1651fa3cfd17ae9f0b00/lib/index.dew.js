import { dew as _pullDewDew } from "lodash/pull.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.is = is;
  exports.pullFlag = pullFlag;

  var _pull = _interopRequireDefault(_pullDewDew());

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function is(node, flag) {
    return node.type === "RegExpLiteral" && node.flags.indexOf(flag) >= 0;
  }

  function pullFlag(node, flag) {
    const flags = node.flags.split("");
    if (node.flags.indexOf(flag) < 0) return;
    (0, _pull.default)(flags, flag);
    node.flags = flags.join("");
  }

  return exports;
}