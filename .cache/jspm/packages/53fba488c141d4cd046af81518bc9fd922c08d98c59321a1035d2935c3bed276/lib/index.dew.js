import { dew as _indexDewDew } from "@babel/helper-plugin-utils/index.dew.js";
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

  var _default = (0, _helperPluginUtils.declare)(api => {
    api.assertVersion(7);
    return {
      name: "syntax-object-rest-spread",

      manipulateOptions(opts, parserOpts) {
        parserOpts.plugins.push("objectRestSpread");
      }

    };
  });

  exports.default = _default;
  return exports;
}