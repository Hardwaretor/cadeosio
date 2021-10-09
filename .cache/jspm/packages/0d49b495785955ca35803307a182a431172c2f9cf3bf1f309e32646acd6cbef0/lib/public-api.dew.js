import { dew as _URLDewDew } from "./URL.dew.js";
import { dew as _URLSearchParamsDewDew } from "./URLSearchParams.dew.js";
import { dew as _urlStateMachineDewDew } from "./url-state-machine.dew.js";
import { dew as _urlencodedDewDew } from "./urlencoded.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports.URL = _URLDewDew().interface;
  exports.URLSearchParams = _URLSearchParamsDewDew().interface;
  exports.parseURL = _urlStateMachineDewDew().parseURL;
  exports.basicURLParse = _urlStateMachineDewDew().basicURLParse;
  exports.serializeURL = _urlStateMachineDewDew().serializeURL;
  exports.serializeHost = _urlStateMachineDewDew().serializeHost;
  exports.serializeInteger = _urlStateMachineDewDew().serializeInteger;
  exports.serializeURLOrigin = _urlStateMachineDewDew().serializeURLOrigin;
  exports.setTheUsername = _urlStateMachineDewDew().setTheUsername;
  exports.setThePassword = _urlStateMachineDewDew().setThePassword;
  exports.cannotHaveAUsernamePasswordPort = _urlStateMachineDewDew().cannotHaveAUsernamePasswordPort;
  exports.percentDecode = _urlencodedDewDew().percentDecode;
  return exports;
}