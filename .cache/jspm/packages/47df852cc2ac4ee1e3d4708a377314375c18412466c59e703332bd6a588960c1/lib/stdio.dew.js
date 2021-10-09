var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  const alias = ['stdin', 'stdout', 'stderr'];

  const hasAlias = opts => alias.some(x => Boolean(opts[x]));

  exports = opts => {
    if (!opts) {
      return null;
    }

    if (opts.stdio && hasAlias(opts)) {
      throw new Error(`It's not possible to provide \`stdio\` in combination with one of ${alias.map(x => `\`${x}\``).join(', ')}`);
    }

    if (typeof opts.stdio === 'string') {
      return opts.stdio;
    }

    const stdio = opts.stdio || [];

    if (!Array.isArray(stdio)) {
      throw new TypeError(`Expected \`stdio\` to be of type \`string\` or \`Array\`, got \`${typeof stdio}\``);
    }

    const result = [];
    const len = Math.max(stdio.length, alias.length);

    for (let i = 0; i < len; i++) {
      let value = null;

      if (stdio[i] !== undefined) {
        value = stdio[i];
      } else if (opts[alias[i]] !== undefined) {
        value = opts[alias[i]];
      }

      result[i] = value;
    }

    return result;
  };

  return exports;
}