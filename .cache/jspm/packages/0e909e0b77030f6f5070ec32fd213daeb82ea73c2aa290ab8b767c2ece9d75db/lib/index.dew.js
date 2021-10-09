import { dew as _modificationDewDew } from "./modification.dew.js";
import { dew as _predicatesDewDew } from "./predicates.dew.js";
import { dew as _utilDewDew } from "./util.dew.js";
import { dew as _walkingDewDew } from "./walking.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /**
   * @license
   * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */

  __export(_modificationDewDew());

  __export(_predicatesDewDew());

  __export(_utilDewDew());

  __export(_walkingDewDew());

  return exports;
}