import { dew as _indexDewDew } from "string-width/index.dew.js";
import { dew as _indexDew2Dew } from "repeating/index.dew.js";
import { dew as _indexDew3Dew } from "chalk/index.dew.js";
import { dew as _indexDew4Dew } from "object-assign/index.dew.js";
import { dew as _indexDew5Dew } from "widest-line/index.dew.js";
import { dew as _indexDew6Dew } from "filled-array/index.dew.js";
import { dew as _indexDew7Dew } from "cli-boxes/index.dew.js";
import { dew as _indexDew8Dew } from "camelcase/index.dew.js";
import { dew as _indexDew9Dew } from "ansi-align/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var stringWidth = _indexDewDew();

  var repeating = _indexDew2Dew();

  var chalk = _indexDew3Dew();

  var objectAssign = _indexDew4Dew();

  var widestLine = _indexDew5Dew();

  var filledArray = _indexDew6Dew();

  var cliBoxes = _indexDew7Dew();

  var camelCase = _indexDew8Dew();

  var ansiAlign = _indexDew9Dew();

  var getObject = function (detail) {
    var obj;

    if (typeof detail === 'number') {
      obj = {
        top: detail,
        right: detail * 3,
        bottom: detail,
        left: detail * 3
      };
    } else {
      obj = objectAssign({
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }, detail);
    }

    return obj;
  };

  var getBorderChars = function (borderStyle) {
    var sides = ['topLeft', 'topRight', 'bottomRight', 'bottomLeft', 'vertical', 'horizontal'];
    var chars;

    if (typeof borderStyle === 'string') {
      chars = cliBoxes[borderStyle];

      if (!chars) {
        throw new TypeError('Invalid border style: ' + borderStyle);
      }
    } else {
      sides.forEach(function (key) {
        if (!borderStyle[key] || typeof borderStyle[key] !== 'string') {
          throw new TypeError('Invalid border style: ' + key);
        }
      });
      chars = borderStyle;
    }

    return chars;
  };

  var getBackgroundColorName = function (x) {
    return camelCase('bg', x);
  };

  exports = function (text, opts) {
    opts = objectAssign({
      padding: 0,
      borderStyle: 'single',
      dimBorder: false,
      align: 'left'
    }, opts);

    if (opts.backgroundColor) {
      opts.backgroundColor = getBackgroundColorName(opts.backgroundColor);
    }

    if (opts.borderColor && !chalk[opts.borderColor]) {
      throw new Error(opts.borderColor + ' is not a valid borderColor');
    }

    if (opts.backgroundColor && !chalk[opts.backgroundColor]) {
      throw new Error(opts.backgroundColor + ' is not a valid backgroundColor');
    }

    var chars = getBorderChars(opts.borderStyle);
    var padding = getObject(opts.padding);
    var margin = getObject(opts.margin);

    var colorizeBorder = function (x) {
      var ret = opts.borderColor ? chalk[opts.borderColor](x) : x;
      return opts.dimBorder ? chalk.dim(ret) : ret;
    };

    var colorizeContent = function (x) {
      return opts.backgroundColor ? chalk[opts.backgroundColor](x) : x;
    };

    text = ansiAlign(text, {
      align: opts.align
    });
    var NL = '\n';
    var PAD = ' ';
    var lines = text.split(NL);

    if (padding.top > 0) {
      lines = filledArray('', padding.top).concat(lines);
    }

    if (padding.bottom > 0) {
      lines = lines.concat(filledArray('', padding.bottom));
    }

    var contentWidth = widestLine(text) + padding.left + padding.right;
    var paddingLeft = repeating(PAD, padding.left);
    var marginLeft = repeating(PAD, margin.left);
    var horizontal = repeating(chars.horizontal, contentWidth);
    var top = colorizeBorder(repeating(NL, margin.top) + marginLeft + chars.topLeft + horizontal + chars.topRight);
    var bottom = colorizeBorder(marginLeft + chars.bottomLeft + horizontal + chars.bottomRight + repeating(NL, margin.bottom));
    var side = colorizeBorder(chars.vertical);
    var middle = lines.map(function (line) {
      var paddingRight = repeating(PAD, contentWidth - stringWidth(line) - padding.left);
      return marginLeft + side + colorizeContent(paddingLeft + line + paddingRight) + side;
    }).join(NL);
    return top + NL + middle + NL + bottom;
  };

  exports._borderStyles = cliBoxes;
  return exports;
}