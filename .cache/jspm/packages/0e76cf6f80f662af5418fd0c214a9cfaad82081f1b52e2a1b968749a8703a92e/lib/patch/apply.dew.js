import { dew as _parseDewDew } from "./parse.dew.js";
import { dew as _distanceIteratorDewDew } from "../util/distance-iterator.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports.__esModule = true;
  exports.
  /*istanbul ignore end*/
  applyPatch = applyPatch;
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  applyPatches = applyPatches;

  var
  /*istanbul ignore start*/
  _parse = _parseDewDew()
  /*istanbul ignore end*/
  ;

  var
  /*istanbul ignore start*/
  _distanceIterator = _distanceIteratorDewDew()
  /*istanbul ignore end*/
  ;
  /*istanbul ignore start*/


  var _distanceIterator2 = _interopRequireDefault(_distanceIterator);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  /*istanbul ignore end*/


  function applyPatch(source, uniDiff) {
    /*istanbul ignore start*/
    var
    /*istanbul ignore end*/
    options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

    if (typeof uniDiff === 'string') {
      uniDiff =
      /*istanbul ignore start*/
      (0, _parse.parsePatch
      /*istanbul ignore end*/
      )(uniDiff);
    }

    if (Array.isArray(uniDiff)) {
      if (uniDiff.length > 1) {
        throw new Error('applyPatch only works with a single input.');
      }

      uniDiff = uniDiff[0];
    } // Apply the diff to the input


    var lines = source.split('\n'),
        hunks = uniDiff.hunks,
        compareLine = options.compareLine || function (lineNumber, line, operation, patchContent)
    /*istanbul ignore start*/
    {
      return (
        /*istanbul ignore end*/
        line === patchContent
      );
    },
        errorCount = 0,
        fuzzFactor = options.fuzzFactor || 0,
        minLine = 0,
        offset = 0,
        removeEOFNL =
    /*istanbul ignore start*/
    void 0
    /*istanbul ignore end*/
    ,
        addEOFNL =
    /*istanbul ignore start*/
    void 0
    /*istanbul ignore end*/
    ;
    /**
     * Checks if the hunk exactly fits on the provided location
     */


    function hunkFits(hunk, toPos) {
      for (var j = 0; j < hunk.lines.length; j++) {
        var line = hunk.lines[j],
            operation = line[0],
            content = line.substr(1);

        if (operation === ' ' || operation === '-') {
          // Context sanity check
          if (!compareLine(toPos + 1, lines[toPos], operation, content)) {
            errorCount++;

            if (errorCount > fuzzFactor) {
              return false;
            }
          }

          toPos++;
        }
      }

      return true;
    } // Search best fit offsets for each hunk based on the previous ones


    for (var i = 0; i < hunks.length; i++) {
      var hunk = hunks[i],
          maxLine = lines.length - hunk.oldLines,
          localOffset = 0,
          toPos = offset + hunk.oldStart - 1;
      var iterator =
      /*istanbul ignore start*/
      (0, _distanceIterator2.default
      /*istanbul ignore end*/
      )(toPos, minLine, maxLine);

      for (; localOffset !== undefined; localOffset = iterator()) {
        if (hunkFits(hunk, toPos + localOffset)) {
          hunk.offset = offset += localOffset;
          break;
        }
      }

      if (localOffset === undefined) {
        return false;
      } // Set lower text limit to end of the current hunk, so next ones don't try
      // to fit over already patched text


      minLine = hunk.offset + hunk.oldStart + hunk.oldLines;
    } // Apply patch hunks


    for (var _i = 0; _i < hunks.length; _i++) {
      var _hunk = hunks[_i],
          _toPos = _hunk.offset + _hunk.newStart - 1;

      if (_hunk.newLines == 0) {
        _toPos++;
      }

      for (var j = 0; j < _hunk.lines.length; j++) {
        var line = _hunk.lines[j],
            operation = line[0],
            content = line.substr(1);

        if (operation === ' ') {
          _toPos++;
        } else if (operation === '-') {
          lines.splice(_toPos, 1);
          /* istanbul ignore else */
        } else if (operation === '+') {
          lines.splice(_toPos, 0, content);
          _toPos++;
        } else if (operation === '\\') {
          var previousOperation = _hunk.lines[j - 1] ? _hunk.lines[j - 1][0] : null;

          if (previousOperation === '+') {
            removeEOFNL = true;
          } else if (previousOperation === '-') {
            addEOFNL = true;
          }
        }
      }
    } // Handle EOFNL insertion/removal


    if (removeEOFNL) {
      while (!lines[lines.length - 1]) {
        lines.pop();
      }
    } else if (addEOFNL) {
      lines.push('');
    }

    return lines.join('\n');
  } // Wrapper that supports multiple file patches via callbacks.


  function applyPatches(uniDiff, options) {
    if (typeof uniDiff === 'string') {
      uniDiff =
      /*istanbul ignore start*/
      (0, _parse.parsePatch
      /*istanbul ignore end*/
      )(uniDiff);
    }

    var currentIndex = 0;

    function processIndex() {
      var index = uniDiff[currentIndex++];

      if (!index) {
        return options.complete();
      }

      options.loadFile(index, function (err, data) {
        if (err) {
          return options.complete(err);
        }

        var updatedContent = applyPatch(data, index, options);
        options.patched(index, updatedContent);
        setTimeout(processIndex, 0);
      });
    }

    processIndex();
  }

  return exports;
}