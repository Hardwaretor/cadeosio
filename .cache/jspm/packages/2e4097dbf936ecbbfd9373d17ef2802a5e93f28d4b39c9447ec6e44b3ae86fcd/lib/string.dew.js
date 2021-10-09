import { dew as _optionsDewDew } from "./options.dew.js";
import { dew as _parseDewDew } from "./parse.dew.js";
import { dew as _populateDewDew } from "./populate.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = stringTemplate;

  var _options = _optionsDewDew();

  var _parse = _interopRequireDefault(_parseDewDew());

  var _populate = _interopRequireDefault(_populateDewDew());

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function stringTemplate(formatter, code, opts) {
    code = formatter.code(code);
    let metadata;
    return arg => {
      const replacements = (0, _options.normalizeReplacements)(arg);
      if (!metadata) metadata = (0, _parse.default)(formatter, code, opts);
      return formatter.unwrap((0, _populate.default)(metadata, replacements));
    };
  }

  return exports;
}