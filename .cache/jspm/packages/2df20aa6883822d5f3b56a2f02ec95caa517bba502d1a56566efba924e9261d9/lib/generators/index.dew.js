import { dew as _templateLiteralsDewDew } from "./template-literals.dew.js";
import { dew as _expressionsDewDew } from "./expressions.dew.js";
import { dew as _statementsDewDew } from "./statements.dew.js";
import { dew as _classesDewDew } from "./classes.dew.js";
import { dew as _methodsDewDew } from "./methods.dew.js";
import { dew as _modulesDewDew } from "./modules.dew.js";
import { dew as _typesDewDew } from "./types.dew.js";
import { dew as _flowDewDew } from "./flow.dew.js";
import { dew as _baseDewDew } from "./base.dew.js";
import { dew as _jsxDewDew } from "./jsx.dew.js";
import { dew as _typescriptDewDew } from "./typescript.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _templateLiterals = _templateLiteralsDewDew();

  Object.keys(_templateLiterals).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _templateLiterals[key];
      }
    });
  });

  var _expressions = _expressionsDewDew();

  Object.keys(_expressions).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _expressions[key];
      }
    });
  });

  var _statements = _statementsDewDew();

  Object.keys(_statements).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _statements[key];
      }
    });
  });

  var _classes = _classesDewDew();

  Object.keys(_classes).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _classes[key];
      }
    });
  });

  var _methods = _methodsDewDew();

  Object.keys(_methods).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _methods[key];
      }
    });
  });

  var _modules = _modulesDewDew();

  Object.keys(_modules).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _modules[key];
      }
    });
  });

  var _types = _typesDewDew();

  Object.keys(_types).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _types[key];
      }
    });
  });

  var _flow = _flowDewDew();

  Object.keys(_flow).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _flow[key];
      }
    });
  });

  var _base = _baseDewDew();

  Object.keys(_base).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _base[key];
      }
    });
  });

  var _jsx = _jsxDewDew();

  Object.keys(_jsx).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _jsx[key];
      }
    });
  });

  var _typescript = _typescriptDewDew();

  Object.keys(_typescript).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _typescript[key];
      }
    });
  });
  return exports;
}