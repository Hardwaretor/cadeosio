import { dew as _indexDewDew } from "pathval/index.dew.js";
import { dew as _testDewDew } from "./test.dew.js";
import { dew as _indexDew2Dew } from "type-detect/index.dew.js";
import { dew as _expectTypesDewDew } from "./expectTypes.dew.js";
import { dew as _getMessageDewDew } from "./getMessage.dew.js";
import { dew as _getActualDewDew } from "./getActual.dew.js";
import { dew as _inspectDewDew } from "./inspect.dew.js";
import { dew as _objDisplayDewDew } from "./objDisplay.dew.js";
import { dew as _flagDewDew } from "./flag.dew.js";
import { dew as _transferFlagsDewDew } from "./transferFlags.dew.js";
import { dew as _indexDew3Dew } from "deep-eql/index.dew.js";
import { dew as _indexDew4Dew } from "get-func-name/index.dew.js";
import { dew as _addPropertyDewDew } from "./addProperty.dew.js";
import { dew as _addMethodDewDew } from "./addMethod.dew.js";
import { dew as _overwritePropertyDewDew } from "./overwriteProperty.dew.js";
import { dew as _overwriteMethodDewDew } from "./overwriteMethod.dew.js";
import { dew as _addChainableMethodDewDew } from "./addChainableMethod.dew.js";
import { dew as _overwriteChainableMethodDewDew } from "./overwriteChainableMethod.dew.js";
import { dew as _compareByInspectDewDew } from "./compareByInspect.dew.js";
import { dew as _getOwnEnumerablePropertySymbolsDewDew } from "./getOwnEnumerablePropertySymbols.dew.js";
import { dew as _getOwnEnumerablePropertiesDewDew } from "./getOwnEnumerableProperties.dew.js";
import { dew as _indexDew5Dew } from "check-error/index.dew.js";
import { dew as _proxifyDewDew } from "./proxify.dew.js";
import { dew as _addLengthGuardDewDew } from "./addLengthGuard.dew.js";
import { dew as _isProxyEnabledDewDew } from "./isProxyEnabled.dew.js";
import { dew as _isNaNDewDew } from "./isNaN.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /*!
   * chai
   * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
   * MIT Licensed
   */

  /*!
   * Dependencies that are used for multiple exports are required here only once
   */
  var pathval = _indexDewDew();
  /*!
   * test utility
   */


  exports.test = _testDewDew();
  /*!
   * type utility
   */

  exports.type = _indexDew2Dew();
  /*!
   * expectTypes utility
   */

  exports.expectTypes = _expectTypesDewDew();
  /*!
   * message utility
   */

  exports.getMessage = _getMessageDewDew();
  /*!
   * actual utility
   */

  exports.getActual = _getActualDewDew();
  /*!
   * Inspect util
   */

  exports.inspect = _inspectDewDew();
  /*!
   * Object Display util
   */

  exports.objDisplay = _objDisplayDewDew();
  /*!
   * Flag utility
   */

  exports.flag = _flagDewDew();
  /*!
   * Flag transferring utility
   */

  exports.transferFlags = _transferFlagsDewDew();
  /*!
   * Deep equal utility
   */

  exports.eql = _indexDew3Dew();
  /*!
   * Deep path info
   */

  exports.getPathInfo = pathval.getPathInfo;
  /*!
   * Check if a property exists
   */

  exports.hasProperty = pathval.hasProperty;
  /*!
   * Function name
   */

  exports.getName = _indexDew4Dew();
  /*!
   * add Property
   */

  exports.addProperty = _addPropertyDewDew();
  /*!
   * add Method
   */

  exports.addMethod = _addMethodDewDew();
  /*!
   * overwrite Property
   */

  exports.overwriteProperty = _overwritePropertyDewDew();
  /*!
   * overwrite Method
   */

  exports.overwriteMethod = _overwriteMethodDewDew();
  /*!
   * Add a chainable method
   */

  exports.addChainableMethod = _addChainableMethodDewDew();
  /*!
   * Overwrite chainable method
   */

  exports.overwriteChainableMethod = _overwriteChainableMethodDewDew();
  /*!
   * Compare by inspect method
   */

  exports.compareByInspect = _compareByInspectDewDew();
  /*!
   * Get own enumerable property symbols method
   */

  exports.getOwnEnumerablePropertySymbols = _getOwnEnumerablePropertySymbolsDewDew();
  /*!
   * Get own enumerable properties method
   */

  exports.getOwnEnumerableProperties = _getOwnEnumerablePropertiesDewDew();
  /*!
   * Checks error against a given set of criteria
   */

  exports.checkError = _indexDew5Dew();
  /*!
   * Proxify util
   */

  exports.proxify = _proxifyDewDew();
  /*!
   * addLengthGuard util
   */

  exports.addLengthGuard = _addLengthGuardDewDew();
  /*!
   * isProxyEnabled helper
   */

  exports.isProxyEnabled = _isProxyEnabledDewDew();
  /*!
   * isNaN method
   */

  exports.isNaN = _isNaNDewDew();
  return exports;
}