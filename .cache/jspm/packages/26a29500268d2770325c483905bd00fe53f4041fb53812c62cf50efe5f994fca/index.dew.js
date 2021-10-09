import { dew as _indexDewDew } from "string-width/index.dew.js";
import { dew as _indexDew2Dew } from "strip-ansi/index.dew.js";
import { dew as _indexDew3Dew } from "wrap-ansi/index.dew.js";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var stringWidth = _indexDewDew();

  var stripAnsi = _indexDew2Dew();

  var wrap = _indexDew3Dew();

  var align = {
    right: alignRight,
    center: alignCenter
  };
  var top = 0;
  var right = 1;
  var bottom = 2;
  var left = 3;

  function UI(opts) {
    (this || _global).width = opts.width;
    (this || _global).wrap = opts.wrap;
    (this || _global).rows = [];
  }

  UI.prototype.span = function () {
    var cols = (this || _global).div.apply(this || _global, arguments);

    cols.span = true;
  };

  UI.prototype.div = function () {
    if (arguments.length === 0) this.div('');

    if ((this || _global).wrap && (this || _global)._shouldApplyLayoutDSL.apply(this || _global, arguments)) {
      return this._applyLayoutDSL(arguments[0]);
    }

    var cols = [];

    for (var i = 0, arg; (arg = arguments[i]) !== undefined; i++) {
      if (typeof arg === 'string') cols.push(this._colFromString(arg));else cols.push(arg);
    }

    (this || _global).rows.push(cols);

    return cols;
  };

  UI.prototype._shouldApplyLayoutDSL = function () {
    return arguments.length === 1 && typeof arguments[0] === 'string' && /[\t\n]/.test(arguments[0]);
  };

  UI.prototype._applyLayoutDSL = function (str) {
    var _this = this || _global;

    var rows = str.split('\n');
    var leftColumnWidth = 0; // simple heuristic for layout, make sure the
    // second column lines up along the left-hand.
    // don't allow the first column to take up more
    // than 50% of the screen.

    rows.forEach(function (row) {
      var columns = row.split('\t');

      if (columns.length > 1 && stringWidth(columns[0]) > leftColumnWidth) {
        leftColumnWidth = Math.min(Math.floor(_this.width * 0.5), stringWidth(columns[0]));
      }
    }); // generate a table:
    //  replacing ' ' with padding calculations.
    //  using the algorithmically generated width.

    rows.forEach(function (row) {
      var columns = row.split('\t');

      _this.div.apply(_this, columns.map(function (r, i) {
        return {
          text: r.trim(),
          padding: _this._measurePadding(r),
          width: i === 0 && columns.length > 1 ? leftColumnWidth : undefined
        };
      }));
    });
    return (this || _global).rows[(this || _global).rows.length - 1];
  };

  UI.prototype._colFromString = function (str) {
    return {
      text: str,
      padding: this._measurePadding(str)
    };
  };

  UI.prototype._measurePadding = function (str) {
    // measure padding without ansi escape codes
    var noAnsi = stripAnsi(str);
    return [0, noAnsi.match(/\s*$/)[0].length, 0, noAnsi.match(/^\s*/)[0].length];
  };

  UI.prototype.toString = function () {
    var _this = this || _global;

    var lines = [];

    _this.rows.forEach(function (row, i) {
      _this.rowToString(row, lines);
    }); // don't display any lines with the
    // hidden flag set.


    lines = lines.filter(function (line) {
      return !line.hidden;
    });
    return lines.map(function (line) {
      return line.text;
    }).join('\n');
  };

  UI.prototype.rowToString = function (row, lines) {
    var _this = this || _global;

    var padding;

    var rrows = this._rasterize(row);

    var str = '';
    var ts;
    var width;
    var wrapWidth;
    rrows.forEach(function (rrow, r) {
      str = '';
      rrow.forEach(function (col, c) {
        ts = ''; // temporary string used during alignment/padding.

        width = row[c].width; // the width with padding.

        wrapWidth = _this._negatePadding(row[c]); // the width without padding.

        ts += col;

        for (var i = 0; i < wrapWidth - stringWidth(col); i++) {
          ts += ' ';
        } // align the string within its column.


        if (row[c].align && row[c].align !== 'left' && _this.wrap) {
          ts = align[row[c].align](ts, wrapWidth);
          if (stringWidth(ts) < wrapWidth) ts += new Array(width - stringWidth(ts)).join(' ');
        } // apply border and padding to string.


        padding = row[c].padding || [0, 0, 0, 0];
        if (padding[left]) str += new Array(padding[left] + 1).join(' ');
        str += addBorder(row[c], ts, '| ');
        str += ts;
        str += addBorder(row[c], ts, ' |');
        if (padding[right]) str += new Array(padding[right] + 1).join(' '); // if prior row is span, try to render the
        // current row on the prior line.

        if (r === 0 && lines.length > 0) {
          str = _this._renderInline(str, lines[lines.length - 1]);
        }
      }); // remove trailing whitespace.

      lines.push({
        text: str.replace(/ +$/, ''),
        span: row.span
      });
    });
    return lines;
  };

  function addBorder(col, ts, style) {
    if (col.border) {
      if (/[.']-+[.']/.test(ts)) return '';else if (ts.trim().length) return style;else return '  ';
    }

    return '';
  } // if the full 'source' can render in
  // the target line, do so.


  UI.prototype._renderInline = function (source, previousLine) {
    var leadingWhitespace = source.match(/^ */)[0].length;
    var target = previousLine.text;
    var targetTextWidth = stringWidth(target.trimRight());
    if (!previousLine.span) return source; // if we're not applying wrapping logic,
    // just always append to the span.

    if (!(this || _global).wrap) {
      previousLine.hidden = true;
      return target + source;
    }

    if (leadingWhitespace < targetTextWidth) return source;
    previousLine.hidden = true;
    return target.trimRight() + new Array(leadingWhitespace - targetTextWidth + 1).join(' ') + source.trimLeft();
  };

  UI.prototype._rasterize = function (row) {
    var _this = this || _global;

    var i;
    var rrow;
    var rrows = [];

    var widths = this._columnWidths(row);

    var wrapped; // word wrap all columns, and create
    // a data-structure that is easy to rasterize.

    row.forEach(function (col, c) {
      // leave room for left and right padding.
      col.width = widths[c];
      if (_this.wrap) wrapped = wrap(col.text, _this._negatePadding(col), {
        hard: true
      }).split('\n');else wrapped = col.text.split('\n');

      if (col.border) {
        wrapped.unshift('.' + new Array(_this._negatePadding(col) + 3).join('-') + '.');
        wrapped.push("'" + new Array(_this._negatePadding(col) + 3).join('-') + "'");
      } // add top and bottom padding.


      if (col.padding) {
        for (i = 0; i < (col.padding[top] || 0); i++) wrapped.unshift('');

        for (i = 0; i < (col.padding[bottom] || 0); i++) wrapped.push('');
      }

      wrapped.forEach(function (str, r) {
        if (!rrows[r]) rrows.push([]);
        rrow = rrows[r];

        for (var i = 0; i < c; i++) {
          if (rrow[i] === undefined) rrow.push('');
        }

        rrow.push(str);
      });
    });
    return rrows;
  };

  UI.prototype._negatePadding = function (col) {
    var wrapWidth = col.width;
    if (col.padding) wrapWidth -= (col.padding[left] || 0) + (col.padding[right] || 0);
    if (col.border) wrapWidth -= 4;
    return wrapWidth;
  };

  UI.prototype._columnWidths = function (row) {
    var _this = this || _global;

    var widths = [];
    var unset = row.length;
    var unsetWidth;
    var remainingWidth = (this || _global).width; // column widths can be set in config.

    row.forEach(function (col, i) {
      if (col.width) {
        unset--;
        widths[i] = col.width;
        remainingWidth -= col.width;
      } else {
        widths[i] = undefined;
      }
    }); // any unset widths should be calculated.

    if (unset) unsetWidth = Math.floor(remainingWidth / unset);
    widths.forEach(function (w, i) {
      if (!_this.wrap) widths[i] = row[i].width || stringWidth(row[i].text);else if (w === undefined) widths[i] = Math.max(unsetWidth, _minWidth(row[i]));
    });
    return widths;
  }; // calculates the minimum width of
  // a column, based on padding preferences.


  function _minWidth(col) {
    var padding = col.padding || [];
    var minWidth = 1 + (padding[left] || 0) + (padding[right] || 0);
    if (col.border) minWidth += 4;
    return minWidth;
  }

  function alignRight(str, width) {
    str = str.trim();
    var padding = '';
    var strWidth = stringWidth(str);

    if (strWidth < width) {
      padding = new Array(width - strWidth + 1).join(' ');
    }

    return padding + str;
  }

  function alignCenter(str, width) {
    str = str.trim();
    var padding = '';
    var strWidth = stringWidth(str.trim());

    if (strWidth < width) {
      padding = new Array(parseInt((width - strWidth) / 2, 10) + 1).join(' ');
    }

    return padding + str;
  }

  exports = function (opts) {
    opts = opts || {};
    return new UI({
      width: (opts || {}).width || 80,
      wrap: typeof opts.wrap === 'boolean' ? opts.wrap : true
    });
  };

  return exports;
}