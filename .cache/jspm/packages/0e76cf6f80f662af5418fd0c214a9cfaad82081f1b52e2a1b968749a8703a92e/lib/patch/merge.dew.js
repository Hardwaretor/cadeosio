import { dew as _createDewDew } from "./create.dew.js";
import { dew as _parseDewDew } from "./parse.dew.js";
import { dew as _arrayDewDew } from "../util/array.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports.__esModule = true;
  exports.
  /*istanbul ignore end*/
  calcLineCount = calcLineCount;
  /*istanbul ignore start*/

  exports.
  /*istanbul ignore end*/
  merge = merge;

  var
  /*istanbul ignore start*/
  _create = _createDewDew()
  /*istanbul ignore end*/
  ;

  var
  /*istanbul ignore start*/
  _parse = _parseDewDew()
  /*istanbul ignore end*/
  ;

  var
  /*istanbul ignore start*/
  _array = _arrayDewDew()
  /*istanbul ignore end*/
  ;
  /*istanbul ignore start*/


  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }
  /*istanbul ignore end*/


  function calcLineCount(hunk) {
    var conflicted = false;
    hunk.oldLines = 0;
    hunk.newLines = 0;
    hunk.lines.forEach(function (line) {
      if (typeof line !== 'string') {
        conflicted = true;
        return;
      }

      if (line[0] === '+' || line[0] === ' ') {
        hunk.newLines++;
      }

      if (line[0] === '-' || line[0] === ' ') {
        hunk.oldLines++;
      }
    });

    if (conflicted) {
      delete hunk.oldLines;
      delete hunk.newLines;
    }
  }

  function merge(mine, theirs, base) {
    mine = loadPatch(mine, base);
    theirs = loadPatch(theirs, base);
    var ret = {}; // For index we just let it pass through as it doesn't have any necessary meaning.
    // Leaving sanity checks on this to the API consumer that may know more about the
    // meaning in their own context.

    if (mine.index || theirs.index) {
      ret.index = mine.index || theirs.index;
    }

    if (mine.newFileName || theirs.newFileName) {
      if (!fileNameChanged(mine)) {
        // No header or no change in ours, use theirs (and ours if theirs does not exist)
        ret.oldFileName = theirs.oldFileName || mine.oldFileName;
        ret.newFileName = theirs.newFileName || mine.newFileName;
        ret.oldHeader = theirs.oldHeader || mine.oldHeader;
        ret.newHeader = theirs.newHeader || mine.newHeader;
      } else if (!fileNameChanged(theirs)) {
        // No header or no change in theirs, use ours
        ret.oldFileName = mine.oldFileName;
        ret.newFileName = mine.newFileName;
        ret.oldHeader = mine.oldHeader;
        ret.newHeader = mine.newHeader;
      } else {
        // Both changed... figure it out
        ret.oldFileName = selectField(ret, mine.oldFileName, theirs.oldFileName);
        ret.newFileName = selectField(ret, mine.newFileName, theirs.newFileName);
        ret.oldHeader = selectField(ret, mine.oldHeader, theirs.oldHeader);
        ret.newHeader = selectField(ret, mine.newHeader, theirs.newHeader);
      }
    }

    ret.hunks = [];
    var mineIndex = 0,
        theirsIndex = 0,
        mineOffset = 0,
        theirsOffset = 0;

    while (mineIndex < mine.hunks.length || theirsIndex < theirs.hunks.length) {
      var mineCurrent = mine.hunks[mineIndex] || {
        oldStart: Infinity
      },
          theirsCurrent = theirs.hunks[theirsIndex] || {
        oldStart: Infinity
      };

      if (hunkBefore(mineCurrent, theirsCurrent)) {
        // This patch does not overlap with any of the others, yay.
        ret.hunks.push(cloneHunk(mineCurrent, mineOffset));
        mineIndex++;
        theirsOffset += mineCurrent.newLines - mineCurrent.oldLines;
      } else if (hunkBefore(theirsCurrent, mineCurrent)) {
        // This patch does not overlap with any of the others, yay.
        ret.hunks.push(cloneHunk(theirsCurrent, theirsOffset));
        theirsIndex++;
        mineOffset += theirsCurrent.newLines - theirsCurrent.oldLines;
      } else {
        // Overlap, merge as best we can
        var mergedHunk = {
          oldStart: Math.min(mineCurrent.oldStart, theirsCurrent.oldStart),
          oldLines: 0,
          newStart: Math.min(mineCurrent.newStart + mineOffset, theirsCurrent.oldStart + theirsOffset),
          newLines: 0,
          lines: []
        };
        mergeLines(mergedHunk, mineCurrent.oldStart, mineCurrent.lines, theirsCurrent.oldStart, theirsCurrent.lines);
        theirsIndex++;
        mineIndex++;
        ret.hunks.push(mergedHunk);
      }
    }

    return ret;
  }

  function loadPatch(param, base) {
    if (typeof param === 'string') {
      if (/^@@/m.test(param) || /^Index:/m.test(param)) {
        return (
          /*istanbul ignore start*/
          (0, _parse.parsePatch
          /*istanbul ignore end*/
          )(param)[0]
        );
      }

      if (!base) {
        throw new Error('Must provide a base reference or pass in a patch');
      }

      return (
        /*istanbul ignore start*/
        (0, _create.structuredPatch
        /*istanbul ignore end*/
        )(undefined, undefined, base, param)
      );
    }

    return param;
  }

  function fileNameChanged(patch) {
    return patch.newFileName && patch.newFileName !== patch.oldFileName;
  }

  function selectField(index, mine, theirs) {
    if (mine === theirs) {
      return mine;
    } else {
      index.conflict = true;
      return {
        mine: mine,
        theirs: theirs
      };
    }
  }

  function hunkBefore(test, check) {
    return test.oldStart < check.oldStart && test.oldStart + test.oldLines < check.oldStart;
  }

  function cloneHunk(hunk, offset) {
    return {
      oldStart: hunk.oldStart,
      oldLines: hunk.oldLines,
      newStart: hunk.newStart + offset,
      newLines: hunk.newLines,
      lines: hunk.lines
    };
  }

  function mergeLines(hunk, mineOffset, mineLines, theirOffset, theirLines) {
    // This will generally result in a conflicted hunk, but there are cases where the context
    // is the only overlap where we can successfully merge the content here.
    var mine = {
      offset: mineOffset,
      lines: mineLines,
      index: 0
    },
        their = {
      offset: theirOffset,
      lines: theirLines,
      index: 0
    }; // Handle any leading content

    insertLeading(hunk, mine, their);
    insertLeading(hunk, their, mine); // Now in the overlap content. Scan through and select the best changes from each.

    while (mine.index < mine.lines.length && their.index < their.lines.length) {
      var mineCurrent = mine.lines[mine.index],
          theirCurrent = their.lines[their.index];

      if ((mineCurrent[0] === '-' || mineCurrent[0] === '+') && (theirCurrent[0] === '-' || theirCurrent[0] === '+')) {
        // Both modified ...
        mutualChange(hunk, mine, their);
      } else if (mineCurrent[0] === '+' && theirCurrent[0] === ' ') {
        /*istanbul ignore start*/
        var _hunk$lines;
        /*istanbul ignore end*/
        // Mine inserted

        /*istanbul ignore start*/


        (_hunk$lines =
        /*istanbul ignore end*/
        hunk.lines).push.
        /*istanbul ignore start*/
        apply
        /*istanbul ignore end*/
        (
        /*istanbul ignore start*/
        _hunk$lines
        /*istanbul ignore end*/
        ,
        /*istanbul ignore start*/
        _toConsumableArray(
        /*istanbul ignore end*/
        collectChange(mine)));
      } else if (theirCurrent[0] === '+' && mineCurrent[0] === ' ') {
        /*istanbul ignore start*/
        var _hunk$lines2;
        /*istanbul ignore end*/
        // Theirs inserted

        /*istanbul ignore start*/


        (_hunk$lines2 =
        /*istanbul ignore end*/
        hunk.lines).push.
        /*istanbul ignore start*/
        apply
        /*istanbul ignore end*/
        (
        /*istanbul ignore start*/
        _hunk$lines2
        /*istanbul ignore end*/
        ,
        /*istanbul ignore start*/
        _toConsumableArray(
        /*istanbul ignore end*/
        collectChange(their)));
      } else if (mineCurrent[0] === '-' && theirCurrent[0] === ' ') {
        // Mine removed or edited
        removal(hunk, mine, their);
      } else if (theirCurrent[0] === '-' && mineCurrent[0] === ' ') {
        // Their removed or edited
        removal(hunk, their, mine, true);
      } else if (mineCurrent === theirCurrent) {
        // Context identity
        hunk.lines.push(mineCurrent);
        mine.index++;
        their.index++;
      } else {
        // Context mismatch
        conflict(hunk, collectChange(mine), collectChange(their));
      }
    } // Now push anything that may be remaining


    insertTrailing(hunk, mine);
    insertTrailing(hunk, their);
    calcLineCount(hunk);
  }

  function mutualChange(hunk, mine, their) {
    var myChanges = collectChange(mine),
        theirChanges = collectChange(their);

    if (allRemoves(myChanges) && allRemoves(theirChanges)) {
      // Special case for remove changes that are supersets of one another
      if (
      /*istanbul ignore start*/
      (0, _array.arrayStartsWith
      /*istanbul ignore end*/
      )(myChanges, theirChanges) && skipRemoveSuperset(their, myChanges, myChanges.length - theirChanges.length)) {
        /*istanbul ignore start*/
        var _hunk$lines3;
        /*istanbul ignore end*/

        /*istanbul ignore start*/


        (_hunk$lines3 =
        /*istanbul ignore end*/
        hunk.lines).push.
        /*istanbul ignore start*/
        apply
        /*istanbul ignore end*/
        (
        /*istanbul ignore start*/
        _hunk$lines3
        /*istanbul ignore end*/
        ,
        /*istanbul ignore start*/
        _toConsumableArray(
        /*istanbul ignore end*/
        myChanges));

        return;
      } else if (
      /*istanbul ignore start*/
      (0, _array.arrayStartsWith
      /*istanbul ignore end*/
      )(theirChanges, myChanges) && skipRemoveSuperset(mine, theirChanges, theirChanges.length - myChanges.length)) {
        /*istanbul ignore start*/
        var _hunk$lines4;
        /*istanbul ignore end*/

        /*istanbul ignore start*/


        (_hunk$lines4 =
        /*istanbul ignore end*/
        hunk.lines).push.
        /*istanbul ignore start*/
        apply
        /*istanbul ignore end*/
        (
        /*istanbul ignore start*/
        _hunk$lines4
        /*istanbul ignore end*/
        ,
        /*istanbul ignore start*/
        _toConsumableArray(
        /*istanbul ignore end*/
        theirChanges));

        return;
      }
    } else if (
    /*istanbul ignore start*/
    (0, _array.arrayEqual
    /*istanbul ignore end*/
    )(myChanges, theirChanges)) {
      /*istanbul ignore start*/
      var _hunk$lines5;
      /*istanbul ignore end*/

      /*istanbul ignore start*/


      (_hunk$lines5 =
      /*istanbul ignore end*/
      hunk.lines).push.
      /*istanbul ignore start*/
      apply
      /*istanbul ignore end*/
      (
      /*istanbul ignore start*/
      _hunk$lines5
      /*istanbul ignore end*/
      ,
      /*istanbul ignore start*/
      _toConsumableArray(
      /*istanbul ignore end*/
      myChanges));

      return;
    }

    conflict(hunk, myChanges, theirChanges);
  }

  function removal(hunk, mine, their, swap) {
    var myChanges = collectChange(mine),
        theirChanges = collectContext(their, myChanges);

    if (theirChanges.merged) {
      /*istanbul ignore start*/
      var _hunk$lines6;
      /*istanbul ignore end*/

      /*istanbul ignore start*/


      (_hunk$lines6 =
      /*istanbul ignore end*/
      hunk.lines).push.
      /*istanbul ignore start*/
      apply
      /*istanbul ignore end*/
      (
      /*istanbul ignore start*/
      _hunk$lines6
      /*istanbul ignore end*/
      ,
      /*istanbul ignore start*/
      _toConsumableArray(
      /*istanbul ignore end*/
      theirChanges.merged));
    } else {
      conflict(hunk, swap ? theirChanges : myChanges, swap ? myChanges : theirChanges);
    }
  }

  function conflict(hunk, mine, their) {
    hunk.conflict = true;
    hunk.lines.push({
      conflict: true,
      mine: mine,
      theirs: their
    });
  }

  function insertLeading(hunk, insert, their) {
    while (insert.offset < their.offset && insert.index < insert.lines.length) {
      var line = insert.lines[insert.index++];
      hunk.lines.push(line);
      insert.offset++;
    }
  }

  function insertTrailing(hunk, insert) {
    while (insert.index < insert.lines.length) {
      var line = insert.lines[insert.index++];
      hunk.lines.push(line);
    }
  }

  function collectChange(state) {
    var ret = [],
        operation = state.lines[state.index][0];

    while (state.index < state.lines.length) {
      var line = state.lines[state.index]; // Group additions that are immediately after subtractions and treat them as one "atomic" modify change.

      if (operation === '-' && line[0] === '+') {
        operation = '+';
      }

      if (operation === line[0]) {
        ret.push(line);
        state.index++;
      } else {
        break;
      }
    }

    return ret;
  }

  function collectContext(state, matchChanges) {
    var changes = [],
        merged = [],
        matchIndex = 0,
        contextChanges = false,
        conflicted = false;

    while (matchIndex < matchChanges.length && state.index < state.lines.length) {
      var change = state.lines[state.index],
          match = matchChanges[matchIndex]; // Once we've hit our add, then we are done

      if (match[0] === '+') {
        break;
      }

      contextChanges = contextChanges || change[0] !== ' ';
      merged.push(match);
      matchIndex++; // Consume any additions in the other block as a conflict to attempt
      // to pull in the remaining context after this

      if (change[0] === '+') {
        conflicted = true;

        while (change[0] === '+') {
          changes.push(change);
          change = state.lines[++state.index];
        }
      }

      if (match.substr(1) === change.substr(1)) {
        changes.push(change);
        state.index++;
      } else {
        conflicted = true;
      }
    }

    if ((matchChanges[matchIndex] || '')[0] === '+' && contextChanges) {
      conflicted = true;
    }

    if (conflicted) {
      return changes;
    }

    while (matchIndex < matchChanges.length) {
      merged.push(matchChanges[matchIndex++]);
    }

    return {
      merged: merged,
      changes: changes
    };
  }

  function allRemoves(changes) {
    return changes.reduce(function (prev, change) {
      return prev && change[0] === '-';
    }, true);
  }

  function skipRemoveSuperset(state, removeChanges, delta) {
    for (var i = 0; i < delta; i++) {
      var changeContent = removeChanges[removeChanges.length - delta + i].substr(1);

      if (state.lines[state.index + i] !== ' ' + changeContent) {
        return false;
      }
    }

    state.index += delta;
    return true;
  }

  return exports;
}