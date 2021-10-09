import _os2 from "os";
import { dew as _coreDewDew } from "./core.dew.js";
import { dew as _realtimeDewDew } from "./realtime.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getSignals = void 0;
  var _os = _os2;

  var _core = _coreDewDew();

  var _realtime = _realtimeDewDew();

  const getSignals = function () {
    const realtimeSignals = (0, _realtime.getRealtimeSignals)();
    const signals = [..._core.SIGNALS, ...realtimeSignals].map(normalizeSignal);
    return signals;
  };

  exports.getSignals = getSignals;

  const normalizeSignal = function ({
    name,
    number: defaultNumber,
    description,
    action,
    forced = false,
    standard
  }) {
    const {
      signals: {
        [name]: constantSignal
      }
    } = _os.constants;
    const supported = constantSignal !== undefined;
    const number = supported ? constantSignal : defaultNumber;
    return {
      name,
      number,
      description,
      supported,
      action,
      forced,
      standard
    };
  };

  return exports;
}