import { dew as _fixerDewDew } from "./fixer.dew.js";
import { dew as _make_warningDewDew } from "./make_warning.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports = normalize;

  var fixer = _fixerDewDew();

  normalize.fixer = fixer;

  var makeWarning = _make_warningDewDew();

  var fieldsToFix = ['name', 'version', 'description', 'repository', 'modules', 'scripts', 'files', 'bin', 'man', 'bugs', 'keywords', 'readme', 'homepage', 'license'];
  var otherThingsToFix = ['dependencies', 'people', 'typos'];
  var thingsToFix = fieldsToFix.map(function (fieldName) {
    return ucFirst(fieldName) + "Field";
  }); // two ways to do this in CoffeeScript on only one line, sub-70 chars:
  // thingsToFix = fieldsToFix.map (name) -> ucFirst(name) + "Field"
  // thingsToFix = (ucFirst(name) + "Field" for name in fieldsToFix)

  thingsToFix = thingsToFix.concat(otherThingsToFix);

  function normalize(data, warn, strict) {
    if (warn === true) warn = null, strict = true;
    if (!strict) strict = false;
    if (!warn || data.private) warn = function (msg) {
      /* noop */
    };

    if (data.scripts && data.scripts.install === "node-gyp rebuild" && !data.scripts.preinstall) {
      data.gypfile = true;
    }

    fixer.warn = function () {
      warn(makeWarning.apply(null, arguments));
    };

    thingsToFix.forEach(function (thingName) {
      fixer["fix" + ucFirst(thingName)](data, strict);
    });
    data._id = data.name + "@" + data.version;
  }

  function ucFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return exports;
}