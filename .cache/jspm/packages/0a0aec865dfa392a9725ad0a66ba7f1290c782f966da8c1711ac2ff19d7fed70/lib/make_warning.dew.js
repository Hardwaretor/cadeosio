import _util from "util";
import { dew as _warning_messagesJsonDewDew } from "./warning_messages.json.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var util = _util;

  var messages = _warning_messagesJsonDewDew();

  exports = function () {
    var args = Array.prototype.slice.call(arguments, 0);
    var warningName = args.shift();

    if (warningName == "typo") {
      return makeTypoWarning.apply(null, args);
    } else {
      var msgTemplate = messages[warningName] ? messages[warningName] : warningName + ": '%s'";
      args.unshift(msgTemplate);
      return util.format.apply(null, args);
    }
  };

  function makeTypoWarning(providedName, probableName, field) {
    if (field) {
      providedName = field + "['" + providedName + "']";
      probableName = field + "['" + probableName + "']";
    }

    return util.format(messages.typo, providedName, probableName);
  }

  return exports;
}