import { dew as _utilDewDew } from "./util.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  /**
   * node-compress-commons
   *
   * Copyright (c) 2014 Chris Talkington, contributors.
   * Licensed under the MIT license.
   * https://github.com/archiverjs/node-compress-commons/blob/master/LICENSE-MIT
   */
  var zipUtil = _utilDewDew();

  var DATA_DESCRIPTOR_FLAG = 1 << 3;
  var ENCRYPTION_FLAG = 1 << 0;
  var NUMBER_OF_SHANNON_FANO_TREES_FLAG = 1 << 2;
  var SLIDING_DICTIONARY_SIZE_FLAG = 1 << 1;
  var STRONG_ENCRYPTION_FLAG = 1 << 6;
  var UFT8_NAMES_FLAG = 1 << 11;

  var GeneralPurposeBit = exports = function () {
    if (!((this || _global) instanceof GeneralPurposeBit)) {
      return new GeneralPurposeBit();
    }

    (this || _global).descriptor = false;
    (this || _global).encryption = false;
    (this || _global).utf8 = false;
    (this || _global).numberOfShannonFanoTrees = 0;
    (this || _global).strongEncryption = false;
    (this || _global).slidingDictionarySize = 0;
    return this || _global;
  };

  GeneralPurposeBit.prototype.encode = function () {
    return zipUtil.getShortBytes(((this || _global).descriptor ? DATA_DESCRIPTOR_FLAG : 0) | ((this || _global).utf8 ? UFT8_NAMES_FLAG : 0) | ((this || _global).encryption ? ENCRYPTION_FLAG : 0) | ((this || _global).strongEncryption ? STRONG_ENCRYPTION_FLAG : 0));
  };

  GeneralPurposeBit.prototype.parse = function (buf, offset) {
    var flag = zipUtil.getShortBytesValue(buf, offset);
    var gbp = new GeneralPurposeBit();
    gbp.useDataDescriptor((flag & DATA_DESCRIPTOR_FLAG) !== 0);
    gbp.useUTF8ForNames((flag & UFT8_NAMES_FLAG) !== 0);
    gbp.useStrongEncryption((flag & STRONG_ENCRYPTION_FLAG) !== 0);
    gbp.useEncryption((flag & ENCRYPTION_FLAG) !== 0);
    gbp.setSlidingDictionarySize((flag & SLIDING_DICTIONARY_SIZE_FLAG) !== 0 ? 8192 : 4096);
    gbp.setNumberOfShannonFanoTrees((flag & NUMBER_OF_SHANNON_FANO_TREES_FLAG) !== 0 ? 3 : 2);
    return gbp;
  };

  GeneralPurposeBit.prototype.setNumberOfShannonFanoTrees = function (n) {
    (this || _global).numberOfShannonFanoTrees = n;
  };

  GeneralPurposeBit.prototype.getNumberOfShannonFanoTrees = function () {
    return (this || _global).numberOfShannonFanoTrees;
  };

  GeneralPurposeBit.prototype.setSlidingDictionarySize = function (n) {
    (this || _global).slidingDictionarySize = n;
  };

  GeneralPurposeBit.prototype.getSlidingDictionarySize = function () {
    return (this || _global).slidingDictionarySize;
  };

  GeneralPurposeBit.prototype.useDataDescriptor = function (b) {
    (this || _global).descriptor = b;
  };

  GeneralPurposeBit.prototype.usesDataDescriptor = function () {
    return (this || _global).descriptor;
  };

  GeneralPurposeBit.prototype.useEncryption = function (b) {
    (this || _global).encryption = b;
  };

  GeneralPurposeBit.prototype.usesEncryption = function () {
    return (this || _global).encryption;
  };

  GeneralPurposeBit.prototype.useStrongEncryption = function (b) {
    (this || _global).strongEncryption = b;
  };

  GeneralPurposeBit.prototype.usesStrongEncryption = function () {
    return (this || _global).strongEncryption;
  };

  GeneralPurposeBit.prototype.useUTF8ForNames = function (b) {
    (this || _global).utf8 = b;
  };

  GeneralPurposeBit.prototype.usesUTF8ForNames = function () {
    return (this || _global).utf8;
  };

  return exports;
}