var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  function Queue() {
    (this || _global).head = new Item('head', null);
  }

  exports = Queue;

  Queue.prototype.append = function append(kind, value) {
    var item = new Item(kind, value);

    (this || _global).head.prepend(item);

    return item;
  };

  Queue.prototype.isEmpty = function isEmpty() {
    return (this || _global).head.prev === (this || _global).head;
  };

  Queue.prototype.first = function first() {
    return (this || _global).head.next;
  };

  function Item(kind, value) {
    (this || _global).prev = this || _global;
    (this || _global).next = this || _global;
    (this || _global).kind = kind;
    (this || _global).value = value;
  }

  Item.prototype.prepend = function prepend(other) {
    other.prev = (this || _global).prev;
    other.next = this || _global;
    other.prev.next = other;
    other.next.prev = other;
  };

  Item.prototype.dequeue = function dequeue() {
    var prev = (this || _global).prev;
    var next = (this || _global).next;
    prev.next = next;
    next.prev = prev;
    (this || _global).prev = this || _global;
    (this || _global).next = this || _global;
    return (this || _global).value;
  };

  Item.prototype.isEmpty = function isEmpty() {
    return (this || _global).prev === (this || _global);
  };

  return exports;
}