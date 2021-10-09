import _fs from "fs";
import { dew as _indexDewDew } from "fs.realpath/index.dew.js";
import { dew as _indexDew2Dew } from "minimatch/index.dew.js";
import { dew as _indexDew3Dew } from "inherits/index.dew.js";
import _events from "events";
import _path from "path";
import _assert from "assert";
import { dew as _indexDew4Dew } from "path-is-absolute/index.dew.js";
import { dew as _syncDewDew } from "./sync.dew.js";
import { dew as _commonDewDew } from "./common.dew.js";
import { dew as _indexDew5Dew } from "inflight/index.dew.js";
import _util from "util";
import { dew as _indexDew6Dew } from "once/index.dew.js";
import _process from "process";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;
  // Approach:
  //
  // 1. Get the minimatch set
  // 2. For each pattern in the set, PROCESS(pattern, false)
  // 3. Store matches per-set, then uniq them
  //
  // PROCESS(pattern, inGlobStar)
  // Get the first [n] items from pattern that are all strings
  // Join these together.  This is PREFIX.
  //   If there is no more remaining, then stat(PREFIX) and
  //   add to matches if it succeeds.  END.
  //
  // If inGlobStar and PREFIX is symlink and points to dir
  //   set ENTRIES = []
  // else readdir(PREFIX) as ENTRIES
  //   If fail, END
  //
  // with ENTRIES
  //   If pattern[n] is GLOBSTAR
  //     // handle the case where the globstar match is empty
  //     // by pruning it out, and testing the resulting pattern
  //     PROCESS(pattern[0..n] + pattern[n+1 .. $], false)
  //     // handle other cases.
  //     for ENTRY in ENTRIES (not dotfiles)
  //       // attach globstar + tail onto the entry
  //       // Mark that this entry is a globstar match
  //       PROCESS(pattern[0..n] + ENTRY + pattern[n .. $], true)
  //
  //   else // not globstar
  //     for ENTRY in ENTRIES (not dotfiles, unless pattern[n] is dot)
  //       Test ENTRY against pattern[n]
  //       If fails, continue
  //       If passes, PROCESS(pattern[0..n] + item + pattern[n+1 .. $])
  //
  // Caveat:
  //   Cache all stats and readdirs results to minimize syscall.  Since all
  //   we ever care about is existence and directory-ness, we can just keep
  //   `true` for files, and [children,...] for directories, or `false` for
  //   things that don't exist.
  exports = glob;
  var fs = _fs;

  var rp = _indexDewDew();

  var minimatch = _indexDew2Dew();

  var Minimatch = minimatch.Minimatch;

  var inherits = _indexDew3Dew();

  var EE = _events.EventEmitter;
  var path = _path;
  var assert = _assert;

  var isAbsolute = _indexDew4Dew();

  var globSync = _syncDewDew();

  var common = _commonDewDew();

  var alphasort = common.alphasort;
  var alphasorti = common.alphasorti;
  var setopts = common.setopts;
  var ownProp = common.ownProp;

  var inflight = _indexDew5Dew();

  var util = _util;
  var childrenIgnored = common.childrenIgnored;
  var isIgnored = common.isIgnored;

  var once = _indexDew6Dew();

  function glob(pattern, options, cb) {
    if (typeof options === 'function') cb = options, options = {};
    if (!options) options = {};

    if (options.sync) {
      if (cb) throw new TypeError('callback provided to sync glob');
      return globSync(pattern, options);
    }

    return new Glob(pattern, options, cb);
  }

  glob.sync = globSync;
  var GlobSync = glob.GlobSync = globSync.GlobSync; // old api surface

  glob.glob = glob;

  function extend(origin, add) {
    if (add === null || typeof add !== 'object') {
      return origin;
    }

    var keys = Object.keys(add);
    var i = keys.length;

    while (i--) {
      origin[keys[i]] = add[keys[i]];
    }

    return origin;
  }

  glob.hasMagic = function (pattern, options_) {
    var options = extend({}, options_);
    options.noprocess = true;
    var g = new Glob(pattern, options);
    var set = g.minimatch.set;
    if (!pattern) return false;
    if (set.length > 1) return true;

    for (var j = 0; j < set[0].length; j++) {
      if (typeof set[0][j] !== 'string') return true;
    }

    return false;
  };

  glob.Glob = Glob;
  inherits(Glob, EE);

  function Glob(pattern, options, cb) {
    if (typeof options === 'function') {
      cb = options;
      options = null;
    }

    if (options && options.sync) {
      if (cb) throw new TypeError('callback provided to sync glob');
      return new GlobSync(pattern, options);
    }

    if (!((this || _global) instanceof Glob)) return new Glob(pattern, options, cb);
    setopts(this || _global, pattern, options);
    (this || _global)._didRealPath = false; // process each pattern in the minimatch set

    var n = (this || _global).minimatch.set.length; // The matches are stored as {<filename>: true,...} so that
    // duplicates are automagically pruned.
    // Later, we do an Object.keys() on these.
    // Keep them as a list so we can fill in when nonull is set.

    (this || _global).matches = new Array(n);

    if (typeof cb === 'function') {
      cb = once(cb);
      this.on('error', cb);
      this.on('end', function (matches) {
        cb(null, matches);
      });
    }

    var self = this || _global;
    (this || _global)._processing = 0;
    (this || _global)._emitQueue = [];
    (this || _global)._processQueue = [];
    (this || _global).paused = false;
    if ((this || _global).noprocess) return this || _global;
    if (n === 0) return done();
    var sync = true;

    for (var i = 0; i < n; i++) {
      this._process((this || _global).minimatch.set[i], i, false, done);
    }

    sync = false;

    function done() {
      --self._processing;

      if (self._processing <= 0) {
        if (sync) {
          process.nextTick(function () {
            self._finish();
          });
        } else {
          self._finish();
        }
      }
    }
  }

  Glob.prototype._finish = function () {
    assert((this || _global) instanceof Glob);
    if ((this || _global).aborted) return;
    if ((this || _global).realpath && !(this || _global)._didRealpath) return this._realpath();
    common.finish(this || _global);
    this.emit('end', (this || _global).found);
  };

  Glob.prototype._realpath = function () {
    if ((this || _global)._didRealpath) return;
    (this || _global)._didRealpath = true;
    var n = (this || _global).matches.length;
    if (n === 0) return this._finish();
    var self = this || _global;

    for (var i = 0; i < (this || _global).matches.length; i++) this._realpathSet(i, next);

    function next() {
      if (--n === 0) self._finish();
    }
  };

  Glob.prototype._realpathSet = function (index, cb) {
    var matchset = (this || _global).matches[index];
    if (!matchset) return cb();
    var found = Object.keys(matchset);
    var self = this || _global;
    var n = found.length;
    if (n === 0) return cb();
    var set = (this || _global).matches[index] = Object.create(null);
    found.forEach(function (p, i) {
      // If there's a problem with the stat, then it means that
      // one or more of the links in the realpath couldn't be
      // resolved.  just return the abs value in that case.
      p = self._makeAbs(p);
      rp.realpath(p, self.realpathCache, function (er, real) {
        if (!er) set[real] = true;else if (er.syscall === 'stat') set[p] = true;else self.emit('error', er); // srsly wtf right here

        if (--n === 0) {
          self.matches[index] = set;
          cb();
        }
      });
    });
  };

  Glob.prototype._mark = function (p) {
    return common.mark(this || _global, p);
  };

  Glob.prototype._makeAbs = function (f) {
    return common.makeAbs(this || _global, f);
  };

  Glob.prototype.abort = function () {
    (this || _global).aborted = true;
    this.emit('abort');
  };

  Glob.prototype.pause = function () {
    if (!(this || _global).paused) {
      (this || _global).paused = true;
      this.emit('pause');
    }
  };

  Glob.prototype.resume = function () {
    if ((this || _global).paused) {
      this.emit('resume');
      (this || _global).paused = false;

      if ((this || _global)._emitQueue.length) {
        var eq = (this || _global)._emitQueue.slice(0);

        (this || _global)._emitQueue.length = 0;

        for (var i = 0; i < eq.length; i++) {
          var e = eq[i];

          this._emitMatch(e[0], e[1]);
        }
      }

      if ((this || _global)._processQueue.length) {
        var pq = (this || _global)._processQueue.slice(0);

        (this || _global)._processQueue.length = 0;

        for (var i = 0; i < pq.length; i++) {
          var p = pq[i];
          (this || _global)._processing--;

          this._process(p[0], p[1], p[2], p[3]);
        }
      }
    }
  };

  Glob.prototype._process = function (pattern, index, inGlobStar, cb) {
    assert((this || _global) instanceof Glob);
    assert(typeof cb === 'function');
    if ((this || _global).aborted) return;
    (this || _global)._processing++;

    if ((this || _global).paused) {
      (this || _global)._processQueue.push([pattern, index, inGlobStar, cb]);

      return;
    } //console.error('PROCESS %d', this._processing, pattern)
    // Get the first [n] parts of pattern that are all strings.


    var n = 0;

    while (typeof pattern[n] === 'string') {
      n++;
    } // now n is the index of the first one that is *not* a string.
    // see if there's anything else


    var prefix;

    switch (n) {
      // if not, then this is rather simple
      case pattern.length:
        this._processSimple(pattern.join('/'), index, cb);

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

    var abs = this._makeAbs(read); //if ignored, skip _processing


    if (childrenIgnored(this || _global, read)) return cb();
    var isGlobStar = remain[0] === minimatch.GLOBSTAR;
    if (isGlobStar) this._processGlobStar(prefix, read, abs, remain, index, inGlobStar, cb);else this._processReaddir(prefix, read, abs, remain, index, inGlobStar, cb);
  };

  Glob.prototype._processReaddir = function (prefix, read, abs, remain, index, inGlobStar, cb) {
    var self = this || _global;

    this._readdir(abs, inGlobStar, function (er, entries) {
      return self._processReaddir2(prefix, read, abs, remain, index, inGlobStar, entries, cb);
    });
  };

  Glob.prototype._processReaddir2 = function (prefix, read, abs, remain, index, inGlobStar, entries, cb) {
    // if the abs isn't a dir, then nothing can match!
    if (!entries) return cb(); // It will only match dot entries if it starts with a dot, or if
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
    } //console.error('prd2', prefix, entries, remain[0]._glob, matchedEntries)


    var len = matchedEntries.length; // If there are no matched entries, then nothing matches.

    if (len === 0) return cb(); // if this is the last remaining pattern bit, then no need for
    // an additional stat *unless* the user has specified mark or
    // stat explicitly.  We know they exist, since readdir returned
    // them.

    if (remain.length === 1 && !(this || _global).mark && !(this || _global).stat) {
      if (!(this || _global).matches[index]) (this || _global).matches[index] = Object.create(null);

      for (var i = 0; i < len; i++) {
        var e = matchedEntries[i];

        if (prefix) {
          if (prefix !== '/') e = prefix + '/' + e;else e = prefix + e;
        }

        if (e.charAt(0) === '/' && !(this || _global).nomount) {
          e = path.join((this || _global).root, e);
        }

        this._emitMatch(index, e);
      } // This was the last one, and no stats were needed


      return cb();
    } // now test all matched entries as stand-ins for that part
    // of the pattern.


    remain.shift();

    for (var i = 0; i < len; i++) {
      var e = matchedEntries[i];
      var newPattern;

      if (prefix) {
        if (prefix !== '/') e = prefix + '/' + e;else e = prefix + e;
      }

      this._process([e].concat(remain), index, inGlobStar, cb);
    }

    cb();
  };

  Glob.prototype._emitMatch = function (index, e) {
    if ((this || _global).aborted) return;
    if (isIgnored(this || _global, e)) return;

    if ((this || _global).paused) {
      (this || _global)._emitQueue.push([index, e]);

      return;
    }

    var abs = isAbsolute(e) ? e : this._makeAbs(e);
    if ((this || _global).mark) e = this._mark(e);
    if ((this || _global).absolute) e = abs;
    if ((this || _global).matches[index][e]) return;

    if ((this || _global).nodir) {
      var c = (this || _global).cache[abs];
      if (c === 'DIR' || Array.isArray(c)) return;
    }

    (this || _global).matches[index][e] = true;
    var st = (this || _global).statCache[abs];
    if (st) this.emit('stat', e, st);
    this.emit('match', e);
  };

  Glob.prototype._readdirInGlobStar = function (abs, cb) {
    if ((this || _global).aborted) return; // follow all symlinked directories forever
    // just proceed as if this is a non-globstar situation

    if ((this || _global).follow) return this._readdir(abs, false, cb);
    var lstatkey = 'lstat\0' + abs;
    var self = this || _global;
    var lstatcb = inflight(lstatkey, lstatcb_);
    if (lstatcb) fs.lstat(abs, lstatcb);

    function lstatcb_(er, lstat) {
      if (er && er.code === 'ENOENT') return cb();
      var isSym = lstat && lstat.isSymbolicLink();
      self.symlinks[abs] = isSym; // If it's not a symlink or a dir, then it's definitely a regular file.
      // don't bother doing a readdir in that case.

      if (!isSym && lstat && !lstat.isDirectory()) {
        self.cache[abs] = 'FILE';
        cb();
      } else self._readdir(abs, false, cb);
    }
  };

  Glob.prototype._readdir = function (abs, inGlobStar, cb) {
    if ((this || _global).aborted) return;
    cb = inflight('readdir\0' + abs + '\0' + inGlobStar, cb);
    if (!cb) return; //console.error('RD %j %j', +inGlobStar, abs)

    if (inGlobStar && !ownProp((this || _global).symlinks, abs)) return this._readdirInGlobStar(abs, cb);

    if (ownProp((this || _global).cache, abs)) {
      var c = (this || _global).cache[abs];
      if (!c || c === 'FILE') return cb();
      if (Array.isArray(c)) return cb(null, c);
    }

    var self = this || _global;
    fs.readdir(abs, readdirCb(this || _global, abs, cb));
  };

  function readdirCb(self, abs, cb) {
    return function (er, entries) {
      if (er) self._readdirError(abs, er, cb);else self._readdirEntries(abs, entries, cb);
    };
  }

  Glob.prototype._readdirEntries = function (abs, entries, cb) {
    if ((this || _global).aborted) return; // if we haven't asked to stat everything, then just
    // assume that everything in there exists, so we can avoid
    // having to stat it a second time.

    if (!(this || _global).mark && !(this || _global).stat) {
      for (var i = 0; i < entries.length; i++) {
        var e = entries[i];
        if (abs === '/') e = abs + e;else e = abs + '/' + e;
        (this || _global).cache[e] = true;
      }
    }

    (this || _global).cache[abs] = entries;
    return cb(null, entries);
  };

  Glob.prototype._readdirError = function (f, er, cb) {
    if ((this || _global).aborted) return; // handle errors, and cache the information

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
          this.emit('error', error);
          this.abort();
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

        if ((this || _global).strict) {
          this.emit('error', er); // If the error is handled, then we abort
          // if not, we threw out of here

          this.abort();
        }

        if (!(this || _global).silent) console.error('glob error', er);
        break;
    }

    return cb();
  };

  Glob.prototype._processGlobStar = function (prefix, read, abs, remain, index, inGlobStar, cb) {
    var self = this || _global;

    this._readdir(abs, inGlobStar, function (er, entries) {
      self._processGlobStar2(prefix, read, abs, remain, index, inGlobStar, entries, cb);
    });
  };

  Glob.prototype._processGlobStar2 = function (prefix, read, abs, remain, index, inGlobStar, entries, cb) {
    //console.error('pgs2', prefix, remain[0], entries)
    // no entries means not a dir, so it can never have matches
    // foo.txt/** doesn't match foo.txt
    if (!entries) return cb(); // test without the globstar, and with every child both below
    // and replacing the globstar.

    var remainWithoutGlobStar = remain.slice(1);
    var gspref = prefix ? [prefix] : [];
    var noGlobStar = gspref.concat(remainWithoutGlobStar); // the noGlobStar pattern exits the inGlobStar state

    this._process(noGlobStar, index, false, cb);

    var isSym = (this || _global).symlinks[abs];
    var len = entries.length; // If it's a symlink, and we're in a globstar, then stop

    if (isSym && inGlobStar) return cb();

    for (var i = 0; i < len; i++) {
      var e = entries[i];
      if (e.charAt(0) === '.' && !(this || _global).dot) continue; // these two cases enter the inGlobStar state

      var instead = gspref.concat(entries[i], remainWithoutGlobStar);

      this._process(instead, index, true, cb);

      var below = gspref.concat(entries[i], remain);

      this._process(below, index, true, cb);
    }

    cb();
  };

  Glob.prototype._processSimple = function (prefix, index, cb) {
    // XXX review this.  Shouldn't it be doing the mounting etc
    // before doing stat?  kinda weird?
    var self = this || _global;

    this._stat(prefix, function (er, exists) {
      self._processSimple2(prefix, index, er, exists, cb);
    });
  };

  Glob.prototype._processSimple2 = function (prefix, index, er, exists, cb) {
    //console.error('ps2', prefix, exists)
    if (!(this || _global).matches[index]) (this || _global).matches[index] = Object.create(null); // If it doesn't exist, then just mark the lack of results

    if (!exists) return cb();

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

    cb();
  }; // Returns either 'DIR', 'FILE', or false


  Glob.prototype._stat = function (f, cb) {
    var abs = this._makeAbs(f);

    var needDir = f.slice(-1) === '/';
    if (f.length > (this || _global).maxLength) return cb();

    if (!(this || _global).stat && ownProp((this || _global).cache, abs)) {
      var c = (this || _global).cache[abs];
      if (Array.isArray(c)) c = 'DIR'; // It exists, but maybe not how we need it

      if (!needDir || c === 'DIR') return cb(null, c);
      if (needDir && c === 'FILE') return cb(); // otherwise we have to stat, because maybe c=true
      // if we know it exists, but not what it is.
    }

    var exists;
    var stat = (this || _global).statCache[abs];

    if (stat !== undefined) {
      if (stat === false) return cb(null, stat);else {
        var type = stat.isDirectory() ? 'DIR' : 'FILE';
        if (needDir && type === 'FILE') return cb();else return cb(null, type, stat);
      }
    }

    var self = this || _global;
    var statcb = inflight('stat\0' + abs, lstatcb_);
    if (statcb) fs.lstat(abs, statcb);

    function lstatcb_(er, lstat) {
      if (lstat && lstat.isSymbolicLink()) {
        // If it's a symlink, then treat it as the target, unless
        // the target does not exist, then treat it as a file.
        return fs.stat(abs, function (er, stat) {
          if (er) self._stat2(f, abs, null, lstat, cb);else self._stat2(f, abs, er, stat, cb);
        });
      } else {
        self._stat2(f, abs, er, lstat, cb);
      }
    }
  };

  Glob.prototype._stat2 = function (f, abs, er, stat, cb) {
    if (er && (er.code === 'ENOENT' || er.code === 'ENOTDIR')) {
      (this || _global).statCache[abs] = false;
      return cb();
    }

    var needDir = f.slice(-1) === '/';
    (this || _global).statCache[abs] = stat;
    if (abs.slice(-1) === '/' && stat && !stat.isDirectory()) return cb(null, false, stat);
    var c = true;
    if (stat) c = stat.isDirectory() ? 'DIR' : 'FILE';
    (this || _global).cache[abs] = (this || _global).cache[abs] || c;
    if (needDir && c === 'FILE') return cb();
    return cb(null, c, stat);
  };

  return exports;
}