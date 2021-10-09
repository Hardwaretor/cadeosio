import { dew as _propertyNameDewDew } from "./property-name.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  const _require = _propertyNameDewDew(),
        reduceStaticPropertyNameES5 = _require.reduceStaticPropertyNameES5;

  exports = function ({
    types: t
  }) {
    return {
      name: "transform-property-literals",
      visitor: {
        // { 'foo': 'bar' } -> { foo: 'bar' }
        ObjectProperty: {
          exit(path) {
            const key = path.get("key");

            if (!key.isStringLiteral()) {
              return;
            }

            const newNode = t.clone(path.node);
            newNode.key = reduceStaticPropertyNameES5(t, key.node);
            newNode.computed = false;
            path.replaceWith(newNode);
          }

        }
      }
    };
  };

  return exports;
}