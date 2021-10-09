import { dew as _registerDewDew } from "./lib/register.dew.js";
import { dew as _addDewDew } from "./lib/add.dew.js";
import { dew as _removeDewDew } from "./lib/remove.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var register = _registerDewDew();

  var addHook = _addDewDew();

  var removeHook = _removeDewDew(); // bind with array of arguments: https://stackoverflow.com/a/21792913


  var bind = Function.bind;
  var bindable = bind.bind(bind);

  function bindApi(hook, state, name) {
    var removeHookRef = bindable(removeHook, null).apply(null, name ? [state, name] : [state]);
    hook.api = {
      remove: removeHookRef
    };
    hook.remove = removeHookRef;
    ['before', 'error', 'after', 'wrap'].forEach(function (kind) {
      var args = name ? [state, kind, name] : [state, kind];
      hook[kind] = hook.api[kind] = bindable(addHook, null).apply(null, args);
    });
  }

  function HookSingular() {
    var singularHookName = 'h';
    var singularHookState = {
      registry: {}
    };
    var singularHook = register.bind(null, singularHookState, singularHookName);
    bindApi(singularHook, singularHookState, singularHookName);
    return singularHook;
  }

  function HookCollection() {
    var state = {
      registry: {}
    };
    var hook = register.bind(null, state);
    bindApi(hook, state);
    return hook;
  }

  var collectionHookDeprecationMessageDisplayed = false;

  function Hook() {
    if (!collectionHookDeprecationMessageDisplayed) {
      console.warn('[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4');
      collectionHookDeprecationMessageDisplayed = true;
    }

    return HookCollection();
  }

  Hook.Singular = HookSingular.bind();
  Hook.Collection = HookCollection.bind();
  exports = Hook; // expose constructors as a named property for TypeScript

  exports.Hook = Hook;
  exports.Singular = Hook.Singular;
  exports.Collection = Hook.Collection;
  return exports;
}