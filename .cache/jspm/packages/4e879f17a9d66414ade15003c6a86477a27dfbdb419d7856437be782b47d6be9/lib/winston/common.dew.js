import _util from "util";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  const {
    format
  } = _util;
  /**
   * Set of simple deprecation notices and a way to expose them for a set of
   * properties.
   * @type {Object}
   * @private
   */

  exports.warn = {
    deprecated(prop) {
      return () => {
        throw new Error(format('{ %s } was removed in winston@3.0.0.', prop));
      };
    },

    useFormat(prop) {
      return () => {
        throw new Error([format('{ %s } was removed in winston@3.0.0.', prop), 'Use a custom winston.format = winston.format(function) instead.'].join('\n'));
      };
    },

    forFunctions(obj, type, props) {
      props.forEach(prop => {
        obj[prop] = exports.warn[type](prop);
      });
    },

    moved(obj, movedTo, prop) {
      function movedNotice() {
        return () => {
          throw new Error([format('winston.%s was moved in winston@3.0.0.', prop), format('Use a winston.%s instead.', movedTo)].join('\n'));
        };
      }

      Object.defineProperty(obj, prop, {
        get: movedNotice,
        set: movedNotice
      });
    },

    forProperties(obj, type, props) {
      props.forEach(prop => {
        const notice = exports.warn[type](prop);
        Object.defineProperty(obj, prop, {
          get: notice,
          set: notice
        });
      });
    }

  };
  return exports;
}