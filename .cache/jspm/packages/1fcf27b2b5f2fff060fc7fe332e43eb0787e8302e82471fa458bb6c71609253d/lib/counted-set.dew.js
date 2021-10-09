var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  // Set that counts
  exports = class CountedSet {
    constructor() {
      // because you can't simply extend Builtins yet
      this.map = new Map();
    }

    keys() {
      return [...this.map.keys()];
    }

    has(value) {
      return this.map.has(value);
    }

    add(value) {
      if (!this.has(value)) {
        this.map.set(value, 0);
      }

      this.map.set(value, this.map.get(value) + 1);
    }

    delete(value) {
      if (!this.has(value)) return;
      const count = this.map.get(value);

      if (count <= 1) {
        this.map.delete(value);
      } else {
        this.map.set(value, count - 1);
      }
    }

  };
  return exports;
}