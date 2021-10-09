import _fs from "fs";
import { dew as _indexDewDew } from "fs.realpath/index.dew.js";
import { dew as _indexDew2Dew } from "minimatch/index.dew.js";
import { dew as _globDewDew } from "./glob.dew.js";
import _util from "util";
import _path from "path";
import _assert from "assert";
import { dew as _indexDew3Dew } from "path-is-absolute/index.dew.js";
import { dew as _commonDewDew } from "./common.dew.js";
import _process from "process";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;
  exports = globSync;
  globSync.GlobSync = GlobSync;
  var fs = _fs;

  var rp = _indexDewDew();

  var minimatch = _indexDew2Dew();

  var Minimatch = minimatch.Minimatch;

  var Glob = _globDewDew().Glob;

  var util = _util;
  var path = _path;
  var assert = _assert;

  var isAbsolute = _indexDew3Dew();

  var common = _commonDewDew();

  var alphasort = common.alphasort;
  var alphasorti = common.alphasorti;
  var setopts = common.setopts;
  var ownProp = common.ownProp;
  var childrenIgnored = common.childrenIgnored;
  var isIgnored = common.isIgnored;

  function globSync(pattern, options) {
    if (typeof options === 'function' || arguments.length === 3) throw new TypeError('callback provided to sync glob\n' + 'See: https://github.com/isaacs/node-glob/issues/167');
    return new GlobSync(pattern, options).found;
  }

  function GlobSync(pattern, options) {
    if (!pattern) throw new Error('must provide pattern');
    if (typeof options === 'function' || arguments.length === 3) throw new TypeError('callback provided to sync glob\n' + 'See: https://github.com/isaacs/node-glob/issues/167');
    if (!((this || _global) instanceof GlobSync)) return new GlobSync(pattern, options);
    setopts(this || _global, pattern, options);
    if ((this || _global).noprocess) return this || _global;
    var n = (this || _global).minimatch.set.length;
    (this || _global).matches = new Array(n);

    for (var i = 0; i < n; i++) {
      this._process((this || _global).minimatch.set[i], i, false);
    }

    this._finish();
  }

  GlobSync.prototype._finish = function () {
    assert((this || _global) instanceof GlobSync);

    if ((this || _global).realpath) {
      var self = this || _global;

      (this || _global).matches.forEach(function (matchset, index) {
        var set = self.matches[index] = Object.create(null);

        for (var p in matchset) {
          try {
            p = self._makeAbs(p);
            var real = rp.realpathSync(p, self.realpathCache);
            set[real] = true;
          } catch (er) {
            if (er.syscall === 'stat') set[self._makeAbs(p)] = true;else throw er;
          }
        }
      });
    }

    common.finish(this || _global);
  };

  GlobSync.prototype._process = function (pattern, index, inGlobStar) {
    assert((this || _global) instanceof GlobSync); // Get the first [n] parts of pattern that are all strings.

    var n = 0;

    while (typeof pattern[n] === 'string') {
      n++;
    } // now n is the index of the first one that is *not* a string.
    // See if there's anything else


    var prefix;

    switch (n) {
      // if not, then this is rather simple
      case pattern.length:
        this._processSimple(pattern.join('/'), index);

        return;

      case 0:
        // pattern *starts* with some non-trivial item.
        // going to readdir(cwd), but not include the prefix in matches.
        prefix = null;
        break;

      default:
        // pattern has some string bits in the front.
        // whatever it starts with, whether that's 'absolute' like /foo/bar,
        // or 'relative' like '../baz'
        prefix = pattern.slice(0, n).join('/');
        break;
    }

    var remain = pattern.slice(n); // get the list of entries.

    var read;
    if (prefix === null) read = '.';else if (isAbsolute(prefix) || isAbsolute(pattern.join('/'))) {
      if (!prefix || !isAbsolute(prefix)) prefix = '/' + prefix;
      read = prefix;
    } else read = prefix;

    var abs = this._makeAbs(read); //if ignored, skip processing


    if (childrenIgnored(this || _global, read)) return;
    var isGlobStar = remain[0] === minimatch.GLOBSTAR;
    if (isGlobStar) this._processGlobStar(prefix, read, abs, remain, index, inGlobStar);else this._processReaddir(prefix, read, abs, remain, index, inGlobStar);
  };

  GlobSync.prototype._processReaddir = function (prefix, read, abs, remain, index, inGlobStar) {
    var entries = this._readdir(abs, inGlobStar); // if the abs isn't a dir, then nothing can match!


    if (!entries) return; // It will only match dot entries if it starts with a dot, or if
    // dot is set.  Stuff like @(.foo|.bar) isn't allowed.

    var pn = remain[0];
    var negate = !!(this || _global).minimatch.negate;
    var rawGlob = pn._glob;
    var dotOk = (this || _global).dot || rawGlob.charAt(0) === '.';
    var matchedEntries = [];

    for (var i = 0; i < entries.length; i++) {
      var e = entries[i];

      if (e.charAt(0) !== '.' || dotOk) {
        var m;

        if (negate && !prefix) {
          m = !e.match(pn);
        } else {
          m = e.match(pn);
        }

        if (m) matchedEntries.push(e);
      }
    }

    var len = matchedEntries.length; // If there are no matched entries, then nothing matches.

    if (len === 0) return; // if this is the last remaining pattern bit, then no need for
    // an additional stat *unless* the user has specified mark or
    // stat explicitly.  We know they exist, since readdir returned
    // them.

    if (remain.length === 1 && !(this || _global).mark && !(this || _global).stat) {
      if (!(this || _global).matches[index]) (this || _global).matches[index] = Object.create(null);

      for (var i = 0; i < len; i++) {
        var e = matchedEntries[i];

        if (prefix) {
          if (prefix.slice(-1) !== '/') e = prefix + '/' + e;else e = prefix + e;
        }

        if (e.charAt(0) === '/' && !(this || _global).nomount) {
          e = path.join((this || _global).root, e);
        }

        this._emitMatch(index, e);
      } // This was the last one, and no stats were needed


      return;
    } // now test all matched entries as stand-ins for that part
    // of the pattern.


    remain.shift();

    for (var i = 0; i < len; i++) {
      var e = matchedEntries[i];
      var newPattern;
      if (prefix) newPattern = [prefix, e];else newPattern = [e];

      this._process(newPattern.concat(remain), index, inGlobStar);
    }
  };

  GlobSync.prototype._emitMatch = function (index, e) {
    if (isIgnored(this || _global, e)) return;

    var abs = this._makeAbs(e);

    if ((this || _global).mark) e = this._mark(e);

    if ((this || _global).absolute) {
      e = abs;
    }

    if ((this || _global).matches[index][e]) return;

    if ((this || _global).nodir) {
      var c = (this || _global).cache[abs];
      if (c === 'DIR' || Array.isArray(c)) return;
    }

    (this || _global).matches[index][e] = true;
    if ((this || _global).stat) this._stat(e);
  };

  GlobSync.prototype._readdirInGlobStar = function (abs) {
    // follow all symlinked directories forever
    // just proceed as if this is a non-globstar situation
    if ((this || _global).follow) return this._readdir(abs, false);
    var entries;
    var lstat;
    var stat;

    try {
      lstat = fs.lstatSync(abs);
    } catch (er) {
      if (er.code === 'ENOENT') {
        // lstat failed, doesn't exist
        return null;
      }
    }

    var isSym = lstat && lstat.isSymbolicLink();
    (this || _global).symlinks[abs] = isSym; // If it's not a symlink or a dir, then it's definitely a regular file.
    // don't bother doing a readdir in that case.

    if (!isSym && lstat && !lstat.isDirectory()) (this || _global).cache[abs] = 'FILE';else entries = this._readdir(abs, false);
    return entries;
  };

  GlobSync.prototype._readdir = function (abs, inGlobStar) {
    var entries;
    if (inGlobStar && !ownProp((this || _global).symlinks, abs)) return this._readdirInGlobStar(abs);

    if (ownProp((this || _global).cache, abs)) {
      var c = (this || _global).cache[abs];
      if (!c || c === 'FILE') return null;
      if (Array.isArray(c)) return c;
    }

    try {
      return this._readdirEntries(abs, fs.readdirSync(abs));
    } catch (er) {
      this._readdirError(abs, er);

      return null;
    }
  };

  GlobSync.prototype._readdirEntries = function (abs, entries) {
    // if we haven't asked to stat everything, then just
    // assume that everything in there exists, so we can avoid
    // having to stat it a second time.
    if (!(this || _global).mark && !(this || _global).stat) {
      for (var i = 0; i < entries.length; i++) {
        var e = entries[i];
        if (abs === '/') e = abs + e;else e = abs + '/' + e;
        (this || _global).cache[e] = true;
      }
    }

    (this || _global).cache[abs] = entries; // mark and cache dir-ness

    return entries;
  };

  GlobSync.prototype._readdirError = function (f, er) {
    // handle errors, and cache the information
    switch (er.code) {
      case 'ENOTSUP': // https://github.com/isaacs/node-glob/issues/205

      case 'ENOTDIR':
        // totally normal. means it *does* exist.
        var abs = this._makeAbs(f);

        (this || _global).cache[abs] = 'FILE';

        if (abs === (this || _global).cwdAbs) {
          var error = new Error(er.code + ' invalid cwd ' + (this || _global).cwd);
          error.path = (this || _global).cwd;
          error.code = er.code;
          throw error;
        }

        break;

      case 'ENOENT': // not terribly unusual

      case 'ELOOP':
      case 'ENAMETOOLONG':
      case 'UNKNOWN':
        (this || _global).cache[this._makeAbs(f)] = false;
        break;

      default:
        // some unusual error.  Treat as failure.
        (this || _global).cache[this._makeAbs(f)] = false;
        if ((this || _global).strict) throw er;
        if (!(this || _global).silent) console.error('glob error', er);
        break;
    }
  };

  GlobSync.prototype._processGlobStar = function (prefix, read, abs, remain, index, inGlobStar) {
    var entries = this._readdir(abs, inGlobStar); // no entries means not a dir, so it can never have matches
    // foo.txt/** doesn't match foo.txt


    if (!entries) return; // test without the globstar, and with every child both below
    // and replacing the globstar.

    var remainWithoutGlobStar = remain.slice(1);
    var gspref = prefix ? [prefix] : [];
    var noGlobStar = gspref.concat(remainWithoutGlobStar); // the noGlobStar pattern exits the inGlobStar state

    this._process(noGlobStar, index, false);

    var len = entries.length;
    var isSym = (this || _global).symlinks[abs]; // If it's a symlink, and we're in a globstar, then stop

    if (isSym && inGlobStar) return;

    for (var i = 0; i < len; i++) {
      var e = entries[i];
      if (e.charAt(0) === '.' && !(this || _global).dot) continue; // these two cases enter the inGlobStar state

      var instead = gspref.concat(entries[i], remainWithoutGlobStar);

      this._process(instead, index, true);

      var below = gspref.concat(entries[i], remain);

      this._process(below, index, true);
    }
  };

  GlobSync.prototype._processSimple = function (prefix, index) {
    // XXX review this.  Shouldn't it be doing the mounting etc
    // before doing stat?  kinda weird?
    var exists = this._stat(prefix);

    if (!(this || _global).matches[index]) (this || _global).matches[index] = Object.create(null); // If it doesn't exist, then just mark the lack of results

    if (!exists) return;

    if (prefix && isAbsolute(prefix) && !(this || _global).nomount) {
      var trail = /[\/\\]$/.test(prefix);

      if (prefix.charAt(0) === '/') {
        prefix = path.join((this || _global).root, prefix);
      } else {
        prefix = path.resolve((this || _global).root, prefix);
        if (trail) prefix += '/';
      }
    }

    if (process.platform === 'win32') prefix = prefix.replace(/\\/g, '/'); // Mark this as a match

    this._emitMatch(index, prefix);
  }; // Returns either 'DIR', 'FILE', or false


  GlobSync.prototype._stat = function (f) {
    var abs = this._makeAbs(f);

    var needDir = f.slice(-1) === '/';
    if (f.length > (this || _global).maxLength) return false;

    if (!(this || _global).stat && ownProp((this || _global).cache, abs)) {
      var c = (this || _global).cache[abs];
      if (Array.isArray(c)) c = 'DIR'; // It exists, but maybe not how we need it

      if (!needDir || c === 'DIR') return c;
      if (needDir && c === 'FILE') return false; // otherwise we have to stat, because maybe c=true
      // if we know it exists, but not what it is.
    }

    var exists;
    var stat = (this || _global).statCache[abs];

    if (!stat) {
      var lstat;

      try {
        lstat = fs.lstatSync(abs);
      } catch (er) {
        if (er && (er.code === 'ENOENT' || er.code === 'ENOTDIR')) {
          (this || _global).statCache[abs] = false;
          return false;
        }
      }

      if (lstat && lstat.isSymbolicLink()) {
        try {
          stat = fs.statSync(abs);
        } catch (er) {
          stat = lstat;
        }
      } else {
        stat = lstat;
      }
    }

    (this || _global).statCache[abs] = stat;
    var c = true;
    if (stat) c = stat.isDirectory() ? 'DIR' : 'FILE';
    (this || _global).cache[abs] = (this || _global).cache[abs] || c;
    if (needDir && c === 'FILE') return false;
    return c;
  };

  GlobSync.prototype._mark = function (p) {
    return common.mark(this || _global, p);
  };

  GlobSync.prototype._makeAbs = function (f) {
    return common.makeAbs(this || _global, f);
  };

  return exports;
}