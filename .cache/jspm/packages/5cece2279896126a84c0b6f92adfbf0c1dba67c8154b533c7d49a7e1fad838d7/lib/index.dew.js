import { dew as _indexDewDew } from "@babel/helper-plugin-utils/index.dew.js";
import { dew as _indexDew2Dew } from "@babel/helper-regex/index.dew.js";
import { dew as _indexDew3Dew } from "@babel/core/index.dew.js";
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

  var regex = _interopRequireWildcard(_indexDew2Dew());

  var _core = _indexDew3Dew();

  function _getRequireWildcardCache() {
    if (typeof WeakMap !== "function") return null;
    var cache = new WeakMap();

    _getRequireWildcardCache = function () {
      return cache;
    };

    return cache;
  }

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    }

    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
      return {
        default: obj
      };
    }

    var cache = _getRequireWildcardCache();

    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }

    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }

    newObj.default = obj;

    if (cache) {
      cache.set(obj, newObj);
    }

    return newObj;
  }

  var _default = (0, _helperPluginUtils.declare)(api => {
    api.assertVersion(7);
    return {
      name: "transform-sticky-regex",
      visitor: {
        RegExpLiteral(path) {
          const {
            node
          } = path;
          if (!regex.is(node, "y")) return;
          path.replaceWith(_core.types.newExpression(_core.types.identifier("RegExp"), [_core.types.stringLiteral(node.pattern), _core.types.stringLiteral(node.flags)]));
        }

      }
    };
  });

  exports.default = _default;
  return exports;
}