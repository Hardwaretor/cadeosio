import _os2 from "os";
import { dew as _signalsDewDew } from "./signals.dew.js";
import { dew as _realtimeDewDew } from "./realtime.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.signalsByNumber = exports.signalsByName = void 0;
  var _os = _os2;

  var _signals = _signalsDewDew();

  var _realtime = _realtimeDewDew();

  const getSignalsByName = function () {
    const signals = (0, _signals.getSignals)();
    return signals.reduce(getSignalByName, {});
  };

  const getSignalByName = function (signalByNameMemo, {
    name,
    number,
    description,
    supported,
    action,
    forced,
    standard
  }) {
    return { ...signalByNameMemo,
      [name]: {
        name,
        number,
        description,
        supported,
        action,
        forced,
        standard
      }
    };
  };

  const signalsByName = getSignalsByName();
  exports.signalsByName = signalsByName;

  const getSignalsByNumber = function () {
    const signals = (0, _signals.getSignals)();
    const length = _realtime.SIGRTMAX + 1;
    const signalsA = Array.from({
      length
    }, (value, number) => getSignalByNumber(number, signals));
    return Object.assign({}, ...signalsA);
  };

  const getSignalByNumber = function (number, signals) {
    const signal = findSignalByNumber(number, signals);

    if (signal === undefined) {
      return {};
    }

    const {
      name,
      description,
      supported,
      action,
      forced,
      standard
    } = signal;
    return {
      [number]: {
        name,
        number,
        description,
        supported,
        action,
        forced,
        standard
      }
    };
  };

  const findSignalByNumber = function (number, signals) {
    const signal = signals.find(({
      name
    }) => _os.constants.signals[name] === number);

    if (signal !== undefined) {
      return signal;
    }

    return signals.find(signalA => signalA.number === number);
  };

  const signalsByNumber = getSignalsByNumber();
  exports.signalsByNumber = signalsByNumber;
  return exports;
}