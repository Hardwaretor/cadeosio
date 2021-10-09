import { dew as _indexDewDew } from "d/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var d = _indexDewDew();

  var create = Object.create,
      defineProperty = Object.defineProperty,
      objPrototype = Object.prototype;
  var created = create(null);

  exports = function (desc) {
    var postfix = 0,
        name,
        ie11BugWorkaround;

    while (created[desc + (postfix || "")]) ++postfix;

    desc += postfix || "";
    created[desc] = true;
    name = "@@" + desc;
    defineProperty(objPrototype, name, d.gs(null, function (value) {
      // For IE11 issue see:
      // https://connect.microsoft.com/IE/feedbackdetail/view/1928508/
      //    ie11-broken-getters-on-dom-objects
      // https://github.com/medikoo/es6-symbol/issues/12
      if (ie11BugWorkaround) return;
      ie11BugWorkaround = true;
      defineProperty(this, name, d(value));
      ie11BugWorkaround = false;
    }));
    return name;
  };

  return exports;
}