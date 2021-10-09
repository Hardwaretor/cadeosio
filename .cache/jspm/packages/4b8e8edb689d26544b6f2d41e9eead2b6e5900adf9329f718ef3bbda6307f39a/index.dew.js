import { dew as _indexDewDew } from "p-try/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  const pTry = _indexDewDew();

  const pLimit = concurrency => {
    if (!((Number.isInteger(concurrency) || concurrency === Infinity) && concurrency > 0)) {
      return Promise.reject(new TypeError('Expected `concurrency` to be a number from 1 and up'));
    }

    const queue = [];
    let activeCount = 0;

    const next = () => {
      activeCount--;

      if (queue.length > 0) {
        queue.shift()();
      }
    };

    const run = (fn, resolve, ...args) => {
      activeCount++;
      const result = pTry(fn, ...args);
      resolve(result);
      result.then(next, next);
    };

    const enqueue = (fn, resolve, ...args) => {
      if (activeCount < concurrency) {
        run(fn, resolve, ...args);
      } else {
        queue.push(run.bind(null, fn, resolve, ...args));
      }
    };

    const generator = (fn, ...args) => new Promise(resolve => enqueue(fn, resolve, ...args));

    Object.defineProperties(generator, {
      activeCount: {
        get: () => activeCount
      },
      pendingCount: {
        get: () => queue.length
      },
      clearQueue: {
        value: () => {
          queue.length = 0;
        }
      }
    });
    return generator;
  };

  exports = pLimit;
  exports.default = pLimit;
  return exports;
}