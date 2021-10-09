import _process from "process";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;
  exports = exports = SemVer;
  var debug;
  /* istanbul ignore next */

  if (typeof process === 'object' && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG)) {
    debug = function () {
      var args = Array.prototype.slice.call(arguments, 0);
      args.unshift('SEMVER');
      console.log.apply(console, args);
    };
  } else {
    debug = function () {};
  } // Note: this is the semver.org version of the spec that it implements
  // Not necessarily the package version of this code.


  exports.SEMVER_SPEC_VERSION = '2.0.0';
  var MAX_LENGTH = 256;
  var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER ||
  /* istanbul ignore next */
  9007199254740991; // Max safe segment length for coercion.

  var MAX_SAFE_COMPONENT_LENGTH = 16; // The actual regexps go on exports.re

  var re = exports.re = [];
  var src = exports.src = [];
  var R = 0; // The following Regular Expressions can be used for tokenizing,
  // validating, and parsing SemVer version strings.
  // ## Numeric Identifier
  // A single `0`, or a non-zero digit followed by zero or more digits.

  var NUMERICIDENTIFIER = R++;
  src[NUMERICIDENTIFIER] = '0|[1-9]\\d*';
  var NUMERICIDENTIFIERLOOSE = R++;
  src[NUMERICIDENTIFIERLOOSE] = '[0-9]+'; // ## Non-numeric Identifier
  // Zero or more digits, followed by a letter or hyphen, and then zero or
  // more letters, digits, or hyphens.

  var NONNUMERICIDENTIFIER = R++;
  src[NONNUMERICIDENTIFIER] = '\\d*[a-zA-Z-][a-zA-Z0-9-]*'; // ## Main Version
  // Three dot-separated numeric identifiers.

  var MAINVERSION = R++;
  src[MAINVERSION] = '(' + src[NUMERICIDENTIFIER] + ')\\.' + '(' + src[NUMERICIDENTIFIER] + ')\\.' + '(' + src[NUMERICIDENTIFIER] + ')';
  var MAINVERSIONLOOSE = R++;
  src[MAINVERSIONLOOSE] = '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' + '(' + src[NUMERICIDENTIFIERLOOSE] + ')\\.' + '(' + src[NUMERICIDENTIFIERLOOSE] + ')'; // ## Pre-release Version Identifier
  // A numeric identifier, or a non-numeric identifier.

  var PRERELEASEIDENTIFIER = R++;
  src[PRERELEASEIDENTIFIER] = '(?:' + src[NUMERICIDENTIFIER] + '|' + src[NONNUMERICIDENTIFIER] + ')';
  var PRERELEASEIDENTIFIERLOOSE = R++;
  src[PRERELEASEIDENTIFIERLOOSE] = '(?:' + src[NUMERICIDENTIFIERLOOSE] + '|' + src[NONNUMERICIDENTIFIER] + ')'; // ## Pre-release Version
  // Hyphen, followed by one or more dot-separated pre-release version
  // identifiers.

  var PRERELEASE = R++;
  src[PRERELEASE] = '(?:-(' + src[PRERELEASEIDENTIFIER] + '(?:\\.' + src[PRERELEASEIDENTIFIER] + ')*))';
  var PRERELEASELOOSE = R++;
  src[PRERELEASELOOSE] = '(?:-?(' + src[PRERELEASEIDENTIFIERLOOSE] + '(?:\\.' + src[PRERELEASEIDENTIFIERLOOSE] + ')*))'; // ## Build Metadata Identifier
  // Any combination of digits, letters, or hyphens.

  var BUILDIDENTIFIER = R++;
  src[BUILDIDENTIFIER] = '[0-9A-Za-z-]+'; // ## Build Metadata
  // Plus sign, followed by one or more period-separated build metadata
  // identifiers.

  var BUILD = R++;
  src[BUILD] = '(?:\\+(' + src[BUILDIDENTIFIER] + '(?:\\.' + src[BUILDIDENTIFIER] + ')*))'; // ## Full Version String
  // A main version, followed optionally by a pre-release version and
  // build metadata.
  // Note that the only major, minor, patch, and pre-release sections of
  // the version string are capturing groups.  The build metadata is not a
  // capturing group, because it should not ever be used in version
  // comparison.

  var FULL = R++;
  var FULLPLAIN = 'v?' + src[MAINVERSION] + src[PRERELEASE] + '?' + src[BUILD] + '?';
  src[FULL] = '^' + FULLPLAIN + '$'; // like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
  // also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
  // common in the npm registry.

  var LOOSEPLAIN = '[v=\\s]*' + src[MAINVERSIONLOOSE] + src[PRERELEASELOOSE] + '?' + src[BUILD] + '?';
  var LOOSE = R++;
  src[LOOSE] = '^' + LOOSEPLAIN + '$';
  var GTLT = R++;
  src[GTLT] = '((?:<|>)?=?)'; // Something like "2.*" or "1.2.x".
  // Note that "x.x" is a valid xRange identifer, meaning "any version"
  // Only the first item is strictly required.

  var XRANGEIDENTIFIERLOOSE = R++;
  src[XRANGEIDENTIFIERLOOSE] = src[NUMERICIDENTIFIERLOOSE] + '|x|X|\\*';
  var XRANGEIDENTIFIER = R++;
  src[XRANGEIDENTIFIER] = src[NUMERICIDENTIFIER] + '|x|X|\\*';
  var XRANGEPLAIN = R++;
  src[XRANGEPLAIN] = '[v=\\s]*(' + src[XRANGEIDENTIFIER] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIER] + ')' + '(?:' + src[PRERELEASE] + ')?' + src[BUILD] + '?' + ')?)?';
  var XRANGEPLAINLOOSE = R++;
  src[XRANGEPLAINLOOSE] = '[v=\\s]*(' + src[XRANGEIDENTIFIERLOOSE] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' + '(?:\\.(' + src[XRANGEIDENTIFIERLOOSE] + ')' + '(?:' + src[PRERELEASELOOSE] + ')?' + src[BUILD] + '?' + ')?)?';
  var XRANGE = R++;
  src[XRANGE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAIN] + '$';
  var XRANGELOOSE = R++;
  src[XRANGELOOSE] = '^' + src[GTLT] + '\\s*' + src[XRANGEPLAINLOOSE] + '$'; // Coercion.
  // Extract anything that could conceivably be a part of a valid semver

  var COERCE = R++;
  src[COERCE] = '(?:^|[^\\d])' + '(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '})' + '(?:\\.(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '}))?' + '(?:\\.(\\d{1,' + MAX_SAFE_COMPONENT_LENGTH + '}))?' + '(?:$|[^\\d])'; // Tilde ranges.
  // Meaning is "reasonably at or greater than"

  var LONETILDE = R++;
  src[LONETILDE] = '(?:~>?)';
  var TILDETRIM = R++;
  src[TILDETRIM] = '(\\s*)' + src[LONETILDE] + '\\s+';
  re[TILDETRIM] = new RegExp(src[TILDETRIM], 'g');
  var tildeTrimReplace = '$1~';
  var TILDE = R++;
  src[TILDE] = '^' + src[LONETILDE] + src[XRANGEPLAIN] + '$';
  var TILDELOOSE = R++;
  src[TILDELOOSE] = '^' + src[LONETILDE] + src[XRANGEPLAINLOOSE] + '$'; // Caret ranges.
  // Meaning is "at least and backwards compatible with"

  var LONECARET = R++;
  src[LONECARET] = '(?:\\^)';
  var CARETTRIM = R++;
  src[CARETTRIM] = '(\\s*)' + src[LONECARET] + '\\s+';
  re[CARETTRIM] = new RegExp(src[CARETTRIM], 'g');
  var caretTrimReplace = '$1^';
  var CARET = R++;
  src[CARET] = '^' + src[LONECARET] + src[XRANGEPLAIN] + '$';
  var CARETLOOSE = R++;
  src[CARETLOOSE] = '^' + src[LONECARET] + src[XRANGEPLAINLOOSE] + '$'; // A simple gt/lt/eq thing, or just "" to indicate "any version"

  var COMPARATORLOOSE = R++;
  src[COMPARATORLOOSE] = '^' + src[GTLT] + '\\s*(' + LOOSEPLAIN + ')$|^$';
  var COMPARATOR = R++;
  src[COMPARATOR] = '^' + src[GTLT] + '\\s*(' + FULLPLAIN + ')$|^$'; // An expression to strip any whitespace between the gtlt and the thing
  // it modifies, so that `> 1.2.3` ==> `>1.2.3`

  var COMPARATORTRIM = R++;
  src[COMPARATORTRIM] = '(\\s*)' + src[GTLT] + '\\s*(' + LOOSEPLAIN + '|' + src[XRANGEPLAIN] + ')'; // this one has to use the /g flag

  re[COMPARATORTRIM] = new RegExp(src[COMPARATORTRIM], 'g');
  var comparatorTrimReplace = '$1$2$3'; // Something like `1.2.3 - 1.2.4`
  // Note that these all use the loose form, because they'll be
  // checked against either the strict or loose comparator form
  // later.

  var HYPHENRANGE = R++;
  src[HYPHENRANGE] = '^\\s*(' + src[XRANGEPLAIN] + ')' + '\\s+-\\s+' + '(' + src[XRANGEPLAIN] + ')' + '\\s*$';
  var HYPHENRANGELOOSE = R++;
  src[HYPHENRANGELOOSE] = '^\\s*(' + src[XRANGEPLAINLOOSE] + ')' + '\\s+-\\s+' + '(' + src[XRANGEPLAINLOOSE] + ')' + '\\s*$'; // Star ranges basically just allow anything at all.

  var STAR = R++;
  src[STAR] = '(<|>)?=?\\s*\\*'; // Compile to actual regexp objects.
  // All are flag-free, unless they were created above with a flag.

  for (var i = 0; i < R; i++) {
    debug(i, src[i]);

    if (!re[i]) {
      re[i] = new RegExp(src[i]);
    }
  }

  exports.parse = parse;

  function parse(version, options) {
    if (!options || typeof options !== 'object') {
      options = {
        loose: !!options,
        includePrerelease: false
      };
    }

    if (version instanceof SemVer) {
      return version;
    }

    if (typeof version !== 'string') {
      return null;
    }

    if (version.length > MAX_LENGTH) {
      return null;
    }

    var r = options.loose ? re[LOOSE] : re[FULL];

    if (!r.test(version)) {
      return null;
    }

    try {
      return new SemVer(version, options);
    } catch (er) {
      return null;
    }
  }

  exports.valid = valid;

  function valid(version, options) {
    var v = parse(version, options);
    return v ? v.version : null;
  }

  exports.clean = clean;

  function clean(version, options) {
    var s = parse(version.trim().replace(/^[=v]+/, ''), options);
    return s ? s.version : null;
  }

  exports.SemVer = SemVer;

  function SemVer(version, options) {
    if (!options || typeof options !== 'object') {
      options = {
        loose: !!options,
        includePrerelease: false
      };
    }

    if (version instanceof SemVer) {
      if (version.loose === options.loose) {
        return version;
      } else {
        version = version.version;
      }
    } else if (typeof version !== 'string') {
      throw new TypeError('Invalid Version: ' + version);
    }

    if (version.length > MAX_LENGTH) {
      throw new TypeError('version is longer than ' + MAX_LENGTH + ' characters');
    }

    if (!((this || _global) instanceof SemVer)) {
      return new SemVer(version, options);
    }

    debug('SemVer', version, options);
    (this || _global).options = options;
    (this || _global).loose = !!options.loose;
    var m = version.trim().match(options.loose ? re[LOOSE] : re[FULL]);

    if (!m) {
      throw new TypeError('Invalid Version: ' + version);
    }

    (this || _global).raw = version; // these are actually numbers

    (this || _global).major = +m[1];
    (this || _global).minor = +m[2];
    (this || _global).patch = +m[3];

    if ((this || _global).major > MAX_SAFE_INTEGER || (this || _global).major < 0) {
      throw new TypeError('Invalid major version');
    }

    if ((this || _global).minor > MAX_SAFE_INTEGER || (this || _global).minor < 0) {
      throw new TypeError('Invalid minor version');
    }

    if ((this || _global).patch > MAX_SAFE_INTEGER || (this || _global).patch < 0) {
      throw new TypeError('Invalid patch version');
    } // numberify any prerelease numeric ids


    if (!m[4]) {
      (this || _global).prerelease = [];
    } else {
      (this || _global).prerelease = m[4].split('.').map(function (id) {
        if (/^[0-9]+$/.test(id)) {
          var num = +id;

          if (num >= 0 && num < MAX_SAFE_INTEGER) {
            return num;
          }
        }

        return id;
      });
    }

    (this || _global).build = m[5] ? m[5].split('.') : [];
    this.format();
  }

  SemVer.prototype.format = function () {
    (this || _global).version = (this || _global).major + '.' + (this || _global).minor + '.' + (this || _global).patch;

    if ((this || _global).prerelease.length) {
      (this || _global).version += '-' + (this || _global).prerelease.join('.');
    }

    return (this || _global).version;
  };

  SemVer.prototype.toString = function () {
    return (this || _global).version;
  };

  SemVer.prototype.compare = function (other) {
    debug('SemVer.compare', (this || _global).version, (this || _global).options, other);

    if (!(other instanceof SemVer)) {
      other = new SemVer(other, (this || _global).options);
    }

    return this.compareMain(other) || this.comparePre(other);
  };

  SemVer.prototype.compareMain = function (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, (this || _global).options);
    }

    return compareIdentifiers((this || _global).major, other.major) || compareIdentifiers((this || _global).minor, other.minor) || compareIdentifiers((this || _global).patch, other.patch);
  };

  SemVer.prototype.comparePre = function (other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, (this || _global).options);
    } // NOT having a prerelease is > having one


    if ((this || _global).prerelease.length && !other.prerelease.length) {
      return -1;
    } else if (!(this || _global).prerelease.length && other.prerelease.length) {
      return 1;
    } else if (!(this || _global).prerelease.length && !other.prerelease.length) {
      return 0;
    }

    var i = 0;

    do {
      var a = (this || _global).prerelease[i];
      var b = other.prerelease[i];
      debug('prerelease compare', i, a, b);

      if (a === undefined && b === undefined) {
        return 0;
      } else if (b === undefined) {
        return 1;
      } else if (a === undefined) {
        return -1;
      } else if (a === b) {
        continue;
      } else {
        return compareIdentifiers(a, b);
      }
    } while (++i);
  }; // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.


  SemVer.prototype.inc = function (release, identifier) {
    switch (release) {
      case 'premajor':
        (this || _global).prerelease.length = 0;
        (this || _global).patch = 0;
        (this || _global).minor = 0;
        (this || _global).major++;
        this.inc('pre', identifier);
        break;

      case 'preminor':
        (this || _global).prerelease.length = 0;
        (this || _global).patch = 0;
        (this || _global).minor++;
        this.inc('pre', identifier);
        break;

      case 'prepatch':
        // If this is already a prerelease, it will bump to the next version
        // drop any prereleases that might already exist, since they are not
        // relevant at this point.
        (this || _global).prerelease.length = 0;
        this.inc('patch', identifier);
        this.inc('pre', identifier);
        break;
      // If the input is a non-prerelease version, this acts the same as
      // prepatch.

      case 'prerelease':
        if ((this || _global).prerelease.length === 0) {
          this.inc('patch', identifier);
        }

        this.inc('pre', identifier);
        break;

      case 'major':
        // If this is a pre-major version, bump up to the same major version.
        // Otherwise increment major.
        // 1.0.0-5 bumps to 1.0.0
        // 1.1.0 bumps to 2.0.0
        if ((this || _global).minor !== 0 || (this || _global).patch !== 0 || (this || _global).prerelease.length === 0) {
          (this || _global).major++;
        }

        (this || _global).minor = 0;
        (this || _global).patch = 0;
        (this || _global).prerelease = [];
        break;

      case 'minor':
        // If this is a pre-minor version, bump up to the same minor version.
        // Otherwise increment minor.
        // 1.2.0-5 bumps to 1.2.0
        // 1.2.1 bumps to 1.3.0
        if ((this || _global).patch !== 0 || (this || _global).prerelease.length === 0) {
          (this || _global).minor++;
        }

        (this || _global).patch = 0;
        (this || _global).prerelease = [];
        break;

      case 'patch':
        // If this is not a pre-release version, it will increment the patch.
        // If it is a pre-release it will bump up to the same patch version.
        // 1.2.0-5 patches to 1.2.0
        // 1.2.0 patches to 1.2.1
        if ((this || _global).prerelease.length === 0) {
          (this || _global).patch++;
        }

        (this || _global).prerelease = [];
        break;
      // This probably shouldn't be used publicly.
      // 1.0.0 "pre" would become 1.0.0-0 which is the wrong direction.

      case 'pre':
        if ((this || _global).prerelease.length === 0) {
          (this || _global).prerelease = [0];
        } else {
          var i = (this || _global).prerelease.length;

          while (--i >= 0) {
            if (typeof (this || _global).prerelease[i] === 'number') {
              (this || _global).prerelease[i]++;
              i = -2;
            }
          }

          if (i === -1) {
            // didn't increment anything
            (this || _global).prerelease.push(0);
          }
        }

        if (identifier) {
          // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
          // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
          if ((this || _global).prerelease[0] === identifier) {
            if (isNaN((this || _global).prerelease[1])) {
              (this || _global).prerelease = [identifier, 0];
            }
          } else {
            (this || _global).prerelease = [identifier, 0];
          }
        }

        break;

      default:
        throw new Error('invalid increment argument: ' + release);
    }

    this.format();
    (this || _global).raw = (this || _global).version;
    return this || _global;
  };

  exports.inc = inc;

  function inc(version, release, loose, identifier) {
    if (typeof loose === 'string') {
      identifier = loose;
      loose = undefined;
    }

    try {
      return new SemVer(version, loose).inc(release, identifier).version;
    } catch (er) {
      return null;
    }
  }

  exports.diff = diff;

  function diff(version1, version2) {
    if (eq(version1, version2)) {
      return null;
    } else {
      var v1 = parse(version1);
      var v2 = parse(version2);
      var prefix = '';

      if (v1.prerelease.length || v2.prerelease.length) {
        prefix = 'pre';
        var defaultResult = 'prerelease';
      }

      for (var key in v1) {
        if (key === 'major' || key === 'minor' || key === 'patch') {
          if (v1[key] !== v2[key]) {
            return prefix + key;
          }
        }
      }

      return defaultResult; // may be undefined
    }
  }

  exports.compareIdentifiers = compareIdentifiers;
  var numeric = /^[0-9]+$/;

  function compareIdentifiers(a, b) {
    var anum = numeric.test(a);
    var bnum = numeric.test(b);

    if (anum && bnum) {
      a = +a;
      b = +b;
    }

    return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
  }

  exports.rcompareIdentifiers = rcompareIdentifiers;

  function rcompareIdentifiers(a, b) {
    return compareIdentifiers(b, a);
  }

  exports.major = major;

  function major(a, loose) {
    return new SemVer(a, loose).major;
  }

  exports.minor = minor;

  function minor(a, loose) {
    return new SemVer(a, loose).minor;
  }

  exports.patch = patch;

  function patch(a, loose) {
    return new SemVer(a, loose).patch;
  }

  exports.compare = compare;

  function compare(a, b, loose) {
    return new SemVer(a, loose).compare(new SemVer(b, loose));
  }

  exports.compareLoose = compareLoose;

  function compareLoose(a, b) {
    return compare(a, b, true);
  }

  exports.rcompare = rcompare;

  function rcompare(a, b, loose) {
    return compare(b, a, loose);
  }

  exports.sort = sort;

  function sort(list, loose) {
    return list.sort(function (a, b) {
      return exports.compare(a, b, loose);
    });
  }

  exports.rsort = rsort;

  function rsort(list, loose) {
    return list.sort(function (a, b) {
      return exports.rcompare(a, b, loose);
    });
  }

  exports.gt = gt;

  function gt(a, b, loose) {
    return compare(a, b, loose) > 0;
  }

  exports.lt = lt;

  function lt(a, b, loose) {
    return compare(a, b, loose) < 0;
  }

  exports.eq = eq;

  function eq(a, b, loose) {
    return compare(a, b, loose) === 0;
  }

  exports.neq = neq;

  function neq(a, b, loose) {
    return compare(a, b, loose) !== 0;
  }

  exports.gte = gte;

  function gte(a, b, loose) {
    return compare(a, b, loose) >= 0;
  }

  exports.lte = lte;

  function lte(a, b, loose) {
    return compare(a, b, loose) <= 0;
  }

  exports.cmp = cmp;

  function cmp(a, op, b, loose) {
    switch (op) {
      case '===':
        if (typeof a === 'object') a = a.version;
        if (typeof b === 'object') b = b.version;
        return a === b;

      case '!==':
        if (typeof a === 'object') a = a.version;
        if (typeof b === 'object') b = b.version;
        return a !== b;

      case '':
      case '=':
      case '==':
        return eq(a, b, loose);

      case '!=':
        return neq(a, b, loose);

      case '>':
        return gt(a, b, loose);

      case '>=':
        return gte(a, b, loose);

      case '<':
        return lt(a, b, loose);

      case '<=':
        return lte(a, b, loose);

      default:
        throw new TypeError('Invalid operator: ' + op);
    }
  }

  exports.Comparator = Comparator;

  function Comparator(comp, options) {
    if (!options || typeof options !== 'object') {
      options = {
        loose: !!options,
        includePrerelease: false
      };
    }

    if (comp instanceof Comparator) {
      if (comp.loose === !!options.loose) {
        return comp;
      } else {
        comp = comp.value;
      }
    }

    if (!((this || _global) instanceof Comparator)) {
      return new Comparator(comp, options);
    }

    debug('comparator', comp, options);
    (this || _global).options = options;
    (this || _global).loose = !!options.loose;
    this.parse(comp);

    if ((this || _global).semver === ANY) {
      (this || _global).value = '';
    } else {
      (this || _global).value = (this || _global).operator + (this || _global).semver.version;
    }

    debug('comp', this || _global);
  }

  var ANY = {};

  Comparator.prototype.parse = function (comp) {
    var r = (this || _global).options.loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
    var m = comp.match(r);

    if (!m) {
      throw new TypeError('Invalid comparator: ' + comp);
    }

    (this || _global).operator = m[1];

    if ((this || _global).operator === '=') {
      (this || _global).operator = '';
    } // if it literally is just '>' or '' then allow anything.


    if (!m[2]) {
      (this || _global).semver = ANY;
    } else {
      (this || _global).semver = new SemVer(m[2], (this || _global).options.loose);
    }
  };

  Comparator.prototype.toString = function () {
    return (this || _global).value;
  };

  Comparator.prototype.test = function (version) {
    debug('Comparator.test', version, (this || _global).options.loose);

    if ((this || _global).semver === ANY) {
      return true;
    }

    if (typeof version === 'string') {
      version = new SemVer(version, (this || _global).options);
    }

    return cmp(version, (this || _global).operator, (this || _global).semver, (this || _global).options);
  };

  Comparator.prototype.intersects = function (comp, options) {
    if (!(comp instanceof Comparator)) {
      throw new TypeError('a Comparator is required');
    }

    if (!options || typeof options !== 'object') {
      options = {
        loose: !!options,
        includePrerelease: false
      };
    }

    var rangeTmp;

    if ((this || _global).operator === '') {
      rangeTmp = new Range(comp.value, options);
      return satisfies((this || _global).value, rangeTmp, options);
    } else if (comp.operator === '') {
      rangeTmp = new Range((this || _global).value, options);
      return satisfies(comp.semver, rangeTmp, options);
    }

    var sameDirectionIncreasing = ((this || _global).operator === '>=' || (this || _global).operator === '>') && (comp.operator === '>=' || comp.operator === '>');
    var sameDirectionDecreasing = ((this || _global).operator === '<=' || (this || _global).operator === '<') && (comp.operator === '<=' || comp.operator === '<');
    var sameSemVer = (this || _global).semver.version === comp.semver.version;
    var differentDirectionsInclusive = ((this || _global).operator === '>=' || (this || _global).operator === '<=') && (comp.operator === '>=' || comp.operator === '<=');
    var oppositeDirectionsLessThan = cmp((this || _global).semver, '<', comp.semver, options) && ((this || _global).operator === '>=' || (this || _global).operator === '>') && (comp.operator === '<=' || comp.operator === '<');
    var oppositeDirectionsGreaterThan = cmp((this || _global).semver, '>', comp.semver, options) && ((this || _global).operator === '<=' || (this || _global).operator === '<') && (comp.operator === '>=' || comp.operator === '>');
    return sameDirectionIncreasing || sameDirectionDecreasing || sameSemVer && differentDirectionsInclusive || oppositeDirectionsLessThan || oppositeDirectionsGreaterThan;
  };

  exports.Range = Range;

  function Range(range, options) {
    if (!options || typeof options !== 'object') {
      options = {
        loose: !!options,
        includePrerelease: false
      };
    }

    if (range instanceof Range) {
      if (range.loose === !!options.loose && range.includePrerelease === !!options.includePrerelease) {
        return range;
      } else {
        return new Range(range.raw, options);
      }
    }

    if (range instanceof Comparator) {
      return new Range(range.value, options);
    }

    if (!((this || _global) instanceof Range)) {
      return new Range(range, options);
    }

    (this || _global).options = options;
    (this || _global).loose = !!options.loose;
    (this || _global).includePrerelease = !!options.includePrerelease; // First, split based on boolean or ||

    (this || _global).raw = range;
    (this || _global).set = range.split(/\s*\|\|\s*/).map(function (range) {
      return this.parseRange(range.trim());
    }, this || _global).filter(function (c) {
      // throw out any that are not relevant for whatever reason
      return c.length;
    });

    if (!(this || _global).set.length) {
      throw new TypeError('Invalid SemVer Range: ' + range);
    }

    this.format();
  }

  Range.prototype.format = function () {
    (this || _global).range = (this || _global).set.map(function (comps) {
      return comps.join(' ').trim();
    }).join('||').trim();
    return (this || _global).range;
  };

  Range.prototype.toString = function () {
    return (this || _global).range;
  };

  Range.prototype.parseRange = function (range) {
    var loose = (this || _global).options.loose;
    range = range.trim(); // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`

    var hr = loose ? re[HYPHENRANGELOOSE] : re[HYPHENRANGE];
    range = range.replace(hr, hyphenReplace);
    debug('hyphen replace', range); // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`

    range = range.replace(re[COMPARATORTRIM], comparatorTrimReplace);
    debug('comparator trim', range, re[COMPARATORTRIM]); // `~ 1.2.3` => `~1.2.3`

    range = range.replace(re[TILDETRIM], tildeTrimReplace); // `^ 1.2.3` => `^1.2.3`

    range = range.replace(re[CARETTRIM], caretTrimReplace); // normalize spaces

    range = range.split(/\s+/).join(' '); // At this point, the range is completely trimmed and
    // ready to be split into comparators.

    var compRe = loose ? re[COMPARATORLOOSE] : re[COMPARATOR];
    var set = range.split(' ').map(function (comp) {
      return parseComparator(comp, (this || _global).options);
    }, this || _global).join(' ').split(/\s+/);

    if ((this || _global).options.loose) {
      // in loose mode, throw out any that are not valid comparators
      set = set.filter(function (comp) {
        return !!comp.match(compRe);
      });
    }

    set = set.map(function (comp) {
      return new Comparator(comp, (this || _global).options);
    }, this || _global);
    return set;
  };

  Range.prototype.intersects = function (range, options) {
    if (!(range instanceof Range)) {
      throw new TypeError('a Range is required');
    }

    return (this || _global).set.some(function (thisComparators) {
      return thisComparators.every(function (thisComparator) {
        return range.set.some(function (rangeComparators) {
          return rangeComparators.every(function (rangeComparator) {
            return thisComparator.intersects(rangeComparator, options);
          });
        });
      });
    });
  }; // Mostly just for testing and legacy API reasons


  exports.toComparators = toComparators;

  function toComparators(range, options) {
    return new Range(range, options).set.map(function (comp) {
      return comp.map(function (c) {
        return c.value;
      }).join(' ').trim().split(' ');
    });
  } // comprised of xranges, tildes, stars, and gtlt's at this point.
  // already replaced the hyphen ranges
  // turn into a set of JUST comparators.


  function parseComparator(comp, options) {
    debug('comp', comp, options);
    comp = replaceCarets(comp, options);
    debug('caret', comp);
    comp = replaceTildes(comp, options);
    debug('tildes', comp);
    comp = replaceXRanges(comp, options);
    debug('xrange', comp);
    comp = replaceStars(comp, options);
    debug('stars', comp);
    return comp;
  }

  function isX(id) {
    return !id || id.toLowerCase() === 'x' || id === '*';
  } // ~, ~> --> * (any, kinda silly)
  // ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0
  // ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0
  // ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0
  // ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0
  // ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0


  function replaceTildes(comp, options) {
    return comp.trim().split(/\s+/).map(function (comp) {
      return replaceTilde(comp, options);
    }).join(' ');
  }

  function replaceTilde(comp, options) {
    var r = options.loose ? re[TILDELOOSE] : re[TILDE];
    return comp.replace(r, function (_, M, m, p, pr) {
      debug('tilde', comp, _, M, m, p, pr);
      var ret;

      if (isX(M)) {
        ret = '';
      } else if (isX(m)) {
        ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
      } else if (isX(p)) {
        // ~1.2 == >=1.2.0 <1.3.0
        ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
      } else if (pr) {
        debug('replaceTilde pr', pr);
        ret = '>=' + M + '.' + m + '.' + p + '-' + pr + ' <' + M + '.' + (+m + 1) + '.0';
      } else {
        // ~1.2.3 == >=1.2.3 <1.3.0
        ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + (+m + 1) + '.0';
      }

      debug('tilde return', ret);
      return ret;
    });
  } // ^ --> * (any, kinda silly)
  // ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0
  // ^2.0, ^2.0.x --> >=2.0.0 <3.0.0
  // ^1.2, ^1.2.x --> >=1.2.0 <2.0.0
  // ^1.2.3 --> >=1.2.3 <2.0.0
  // ^1.2.0 --> >=1.2.0 <2.0.0


  function replaceCarets(comp, options) {
    return comp.trim().split(/\s+/).map(function (comp) {
      return replaceCaret(comp, options);
    }).join(' ');
  }

  function replaceCaret(comp, options) {
    debug('caret', comp, options);
    var r = options.loose ? re[CARETLOOSE] : re[CARET];
    return comp.replace(r, function (_, M, m, p, pr) {
      debug('caret', comp, _, M, m, p, pr);
      var ret;

      if (isX(M)) {
        ret = '';
      } else if (isX(m)) {
        ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
      } else if (isX(p)) {
        if (M === '0') {
          ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
        } else {
          ret = '>=' + M + '.' + m + '.0 <' + (+M + 1) + '.0.0';
        }
      } else if (pr) {
        debug('replaceCaret pr', pr);

        if (M === '0') {
          if (m === '0') {
            ret = '>=' + M + '.' + m + '.' + p + '-' + pr + ' <' + M + '.' + m + '.' + (+p + 1);
          } else {
            ret = '>=' + M + '.' + m + '.' + p + '-' + pr + ' <' + M + '.' + (+m + 1) + '.0';
          }
        } else {
          ret = '>=' + M + '.' + m + '.' + p + '-' + pr + ' <' + (+M + 1) + '.0.0';
        }
      } else {
        debug('no pr');

        if (M === '0') {
          if (m === '0') {
            ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + m + '.' + (+p + 1);
          } else {
            ret = '>=' + M + '.' + m + '.' + p + ' <' + M + '.' + (+m + 1) + '.0';
          }
        } else {
          ret = '>=' + M + '.' + m + '.' + p + ' <' + (+M + 1) + '.0.0';
        }
      }

      debug('caret return', ret);
      return ret;
    });
  }

  function replaceXRanges(comp, options) {
    debug('replaceXRanges', comp, options);
    return comp.split(/\s+/).map(function (comp) {
      return replaceXRange(comp, options);
    }).join(' ');
  }

  function replaceXRange(comp, options) {
    comp = comp.trim();
    var r = options.loose ? re[XRANGELOOSE] : re[XRANGE];
    return comp.replace(r, function (ret, gtlt, M, m, p, pr) {
      debug('xRange', comp, ret, gtlt, M, m, p, pr);
      var xM = isX(M);
      var xm = xM || isX(m);
      var xp = xm || isX(p);
      var anyX = xp;

      if (gtlt === '=' && anyX) {
        gtlt = '';
      }

      if (xM) {
        if (gtlt === '>' || gtlt === '<') {
          // nothing is allowed
          ret = '<0.0.0';
        } else {
          // nothing is forbidden
          ret = '*';
        }
      } else if (gtlt && anyX) {
        // we know patch is an x, because we have any x at all.
        // replace X with 0
        if (xm) {
          m = 0;
        }

        p = 0;

        if (gtlt === '>') {
          // >1 => >=2.0.0
          // >1.2 => >=1.3.0
          // >1.2.3 => >= 1.2.4
          gtlt = '>=';

          if (xm) {
            M = +M + 1;
            m = 0;
            p = 0;
          } else {
            m = +m + 1;
            p = 0;
          }
        } else if (gtlt === '<=') {
          // <=0.7.x is actually <0.8.0, since any 0.7.x should
          // pass.  Similarly, <=7.x is actually <8.0.0, etc.
          gtlt = '<';

          if (xm) {
            M = +M + 1;
          } else {
            m = +m + 1;
          }
        }

        ret = gtlt + M + '.' + m + '.' + p;
      } else if (xm) {
        ret = '>=' + M + '.0.0 <' + (+M + 1) + '.0.0';
      } else if (xp) {
        ret = '>=' + M + '.' + m + '.0 <' + M + '.' + (+m + 1) + '.0';
      }

      debug('xRange return', ret);
      return ret;
    });
  } // Because * is AND-ed with everything else in the comparator,
  // and '' means "any version", just remove the *s entirely.


  function replaceStars(comp, options) {
    debug('replaceStars', comp, options); // Looseness is ignored here.  star is always as loose as it gets!

    return comp.trim().replace(re[STAR], '');
  } // This function is passed to string.replace(re[HYPHENRANGE])
  // M, m, patch, prerelease, build
  // 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
  // 1.2.3 - 3.4 => >=1.2.0 <3.5.0 Any 3.4.x will do
  // 1.2 - 3.4 => >=1.2.0 <3.5.0


  function hyphenReplace($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr, tb) {
    if (isX(fM)) {
      from = '';
    } else if (isX(fm)) {
      from = '>=' + fM + '.0.0';
    } else if (isX(fp)) {
      from = '>=' + fM + '.' + fm + '.0';
    } else {
      from = '>=' + from;
    }

    if (isX(tM)) {
      to = '';
    } else if (isX(tm)) {
      to = '<' + (+tM + 1) + '.0.0';
    } else if (isX(tp)) {
      to = '<' + tM + '.' + (+tm + 1) + '.0';
    } else if (tpr) {
      to = '<=' + tM + '.' + tm + '.' + tp + '-' + tpr;
    } else {
      to = '<=' + to;
    }

    return (from + ' ' + to).trim();
  } // if ANY of the sets match ALL of its comparators, then pass


  Range.prototype.test = function (version) {
    if (!version) {
      return false;
    }

    if (typeof version === 'string') {
      version = new SemVer(version, (this || _global).options);
    }

    for (var i = 0; i < (this || _global).set.length; i++) {
      if (testSet((this || _global).set[i], version, (this || _global).options)) {
        return true;
      }
    }

    return false;
  };

  function testSet(set, version, options) {
    for (var i = 0; i < set.length; i++) {
      if (!set[i].test(version)) {
        return false;
      }
    }

    if (version.prerelease.length && !options.includePrerelease) {
      // Find the set of versions that are allowed to have prereleases
      // For example, ^1.2.3-pr.1 desugars to >=1.2.3-pr.1 <2.0.0
      // That should allow `1.2.3-pr.2` to pass.
      // However, `1.2.4-alpha.notready` should NOT be allowed,
      // even though it's within the range set by the comparators.
      for (i = 0; i < set.length; i++) {
        debug(set[i].semver);

        if (set[i].semver === ANY) {
          continue;
        }

        if (set[i].semver.prerelease.length > 0) {
          var allowed = set[i].semver;

          if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
            return true;
          }
        }
      } // Version has a -pre, but it's not one of the ones we like.


      return false;
    }

    return true;
  }

  exports.satisfies = satisfies;

  function satisfies(version, range, options) {
    try {
      range = new Range(range, options);
    } catch (er) {
      return false;
    }

    return range.test(version);
  }

  exports.maxSatisfying = maxSatisfying;

  function maxSatisfying(versions, range, options) {
    var max = null;
    var maxSV = null;

    try {
      var rangeObj = new Range(range, options);
    } catch (er) {
      return null;
    }

    versions.forEach(function (v) {
      if (rangeObj.test(v)) {
        // satisfies(v, range, options)
        if (!max || maxSV.compare(v) === -1) {
          // compare(max, v, true)
          max = v;
          maxSV = new SemVer(max, options);
        }
      }
    });
    return max;
  }

  exports.minSatisfying = minSatisfying;

  function minSatisfying(versions, range, options) {
    var min = null;
    var minSV = null;

    try {
      var rangeObj = new Range(range, options);
    } catch (er) {
      return null;
    }

    versions.forEach(function (v) {
      if (rangeObj.test(v)) {
        // satisfies(v, range, options)
        if (!min || minSV.compare(v) === 1) {
          // compare(min, v, true)
          min = v;
          minSV = new SemVer(min, options);
        }
      }
    });
    return min;
  }

  exports.minVersion = minVersion;

  function minVersion(range, loose) {
    range = new Range(range, loose);
    var minver = new SemVer('0.0.0');

    if (range.test(minver)) {
      return minver;
    }

    minver = new SemVer('0.0.0-0');

    if (range.test(minver)) {
      return minver;
    }

    minver = null;

    for (var i = 0; i < range.set.length; ++i) {
      var comparators = range.set[i];
      comparators.forEach(function (comparator) {
        // Clone to avoid manipulating the comparator's semver object.
        var compver = new SemVer(comparator.semver.version);

        switch (comparator.operator) {
          case '>':
            if (compver.prerelease.length === 0) {
              compver.patch++;
            } else {
              compver.prerelease.push(0);
            }

            compver.raw = compver.format();

          /* fallthrough */

          case '':
          case '>=':
            if (!minver || gt(minver, compver)) {
              minver = compver;
            }

            break;

          case '<':
          case '<=':
            /* Ignore maximum versions */
            break;

          /* istanbul ignore next */

          default:
            throw new Error('Unexpected operation: ' + comparator.operator);
        }
      });
    }

    if (minver && range.test(minver)) {
      return minver;
    }

    return null;
  }

  exports.validRange = validRange;

  function validRange(range, options) {
    try {
      // Return '*' instead of '' so that truthiness works.
      // This will throw if it's invalid anyway
      return new Range(range, options).range || '*';
    } catch (er) {
      return null;
    }
  } // Determine if version is less than all the versions possible in the range


  exports.ltr = ltr;

  function ltr(version, range, options) {
    return outside(version, range, '<', options);
  } // Determine if version is greater than all the versions possible in the range.


  exports.gtr = gtr;

  function gtr(version, range, options) {
    return outside(version, range, '>', options);
  }

  exports.outside = outside;

  function outside(version, range, hilo, options) {
    version = new SemVer(version, options);
    range = new Range(range, options);
    var gtfn, ltefn, ltfn, comp, ecomp;

    switch (hilo) {
      case '>':
        gtfn = gt;
        ltefn = lte;
        ltfn = lt;
        comp = '>';
        ecomp = '>=';
        break;

      case '<':
        gtfn = lt;
        ltefn = gte;
        ltfn = gt;
        comp = '<';
        ecomp = '<=';
        break;

      default:
        throw new TypeError('Must provide a hilo val of "<" or ">"');
    } // If it satisifes the range it is not outside


    if (satisfies(version, range, options)) {
      return false;
    } // From now on, variable terms are as if we're in "gtr" mode.
    // but note that everything is flipped for the "ltr" function.


    for (var i = 0; i < range.set.length; ++i) {
      var comparators = range.set[i];
      var high = null;
      var low = null;
      comparators.forEach(function (comparator) {
        if (comparator.semver === ANY) {
          comparator = new Comparator('>=0.0.0');
        }

        high = high || comparator;
        low = low || comparator;

        if (gtfn(comparator.semver, high.semver, options)) {
          high = comparator;
        } else if (ltfn(comparator.semver, low.semver, options)) {
          low = comparator;
        }
      }); // If the edge version comparator has a operator then our version
      // isn't outside it

      if (high.operator === comp || high.operator === ecomp) {
        return false;
      } // If the lowest version comparator has an operator and our version
      // is less than it then it isn't higher than the range


      if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
        return false;
      } else if (low.operator === ecomp && ltfn(version, low.semver)) {
        return false;
      }
    }

    return true;
  }

  exports.prerelease = prerelease;

  function prerelease(version, options) {
    var parsed = parse(version, options);
    return parsed && parsed.prerelease.length ? parsed.prerelease : null;
  }

  exports.intersects = intersects;

  function intersects(r1, r2, options) {
    r1 = new Range(r1, options);
    r2 = new Range(r2, options);
    return r1.intersects(r2);
  }

  exports.coerce = coerce;

  function coerce(version) {
    if (version instanceof SemVer) {
      return version;
    }

    if (typeof version !== 'string') {
      return null;
    }

    var match = version.match(re[COERCE]);

    if (match == null) {
      return null;
    }

    return parse(match[1] + '.' + (match[2] || '0') + '.' + (match[3] || '0'));
  }

  return exports;
}