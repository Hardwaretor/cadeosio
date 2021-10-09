import _assert from "assert";
import { dew as _indexDewDew } from "lodash/index.dew.js";
import { dew as _separatorDewDew } from "./separator.dew.js";
import { dew as _choiceDewDew } from "./choice.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var assert = _assert;

  var _ = _indexDewDew();

  var Separator = _separatorDewDew();

  var Choice = _choiceDewDew();
  /**
   * Choices collection
   * Collection of multiple `choice` object
   * @constructor
   * @param {Array} choices  All `choice` to keep in the collection
   */


  var Choices = exports = function (choices, answers) {
    this.choices = choices.map(function (val) {
      if (val.type === 'separator') {
        if (!(val instanceof Separator)) {
          val = new Separator(val.line);
        }

        return val;
      }

      return new Choice(val, answers);
    });
    this.realChoices = this.choices.filter(Separator.exclude).filter(function (item) {
      return !item.disabled;
    });
    Object.defineProperty(this, 'length', {
      get: function () {
        return this.choices.length;
      },
      set: function (val) {
        this.choices.length = val;
      }
    });
    Object.defineProperty(this, 'realLength', {
      get: function () {
        return this.realChoices.length;
      },
      set: function () {
        throw new Error('Cannot set `realLength` of a Choices collection');
      }
    });
  };
  /**
   * Get a valid choice from the collection
   * @param  {Number} selector  The selected choice index
   * @return {Choice|Undefined} Return the matched choice or undefined
   */


  Choices.prototype.getChoice = function (selector) {
    assert(_.isNumber(selector));
    return this.realChoices[selector];
  };
  /**
   * Get a raw element from the collection
   * @param  {Number} selector  The selected index value
   * @return {Choice|Undefined} Return the matched choice or undefined
   */


  Choices.prototype.get = function (selector) {
    assert(_.isNumber(selector));
    return this.choices[selector];
  };
  /**
   * Match the valid choices against a where clause
   * @param  {Object} whereClause Lodash `where` clause
   * @return {Array}              Matching choices or empty array
   */


  Choices.prototype.where = function (whereClause) {
    return _.filter(this.realChoices, whereClause);
  };
  /**
   * Pluck a particular key from the choices
   * @param  {String} propertyName Property name to select
   * @return {Array}               Selected properties
   */


  Choices.prototype.pluck = function (propertyName) {
    return _.map(this.realChoices, propertyName);
  }; // Expose usual Array methods


  Choices.prototype.indexOf = function () {
    return this.choices.indexOf.apply(this.choices, arguments);
  };

  Choices.prototype.forEach = function () {
    return this.choices.forEach.apply(this.choices, arguments);
  };

  Choices.prototype.filter = function () {
    return this.choices.filter.apply(this.choices, arguments);
  };

  Choices.prototype.find = function (func) {
    return _.find(this.choices, func);
  };

  Choices.prototype.push = function () {
    var objs = _.map(arguments, function (val) {
      return new Choice(val);
    });

    this.choices.push.apply(this.choices, objs);
    this.realChoices = this.choices.filter(Separator.exclude);
    return this.choices;
  };

  return exports;
}