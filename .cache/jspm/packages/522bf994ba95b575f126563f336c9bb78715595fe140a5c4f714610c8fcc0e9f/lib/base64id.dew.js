import _crypto from "crypto";
import _buffer from "buffer";
var exports = {},
    _dewExec = false;

var _global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : global;

export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var Buffer = _buffer.Buffer;

  /*!
   * base64id v0.1.0
   */

  /**
   * Module dependencies
   */
  var crypto = _crypto;
  /**
   * Constructor
   */

  var Base64Id = function () {};
  /**
   * Get random bytes
   *
   * Uses a buffer if available, falls back to crypto.randomBytes
   */


  Base64Id.prototype.getRandomBytes = function (bytes) {
    var BUFFER_SIZE = 4096;
    var self = this || _global;
    bytes = bytes || 12;

    if (bytes > BUFFER_SIZE) {
      return crypto.randomBytes(bytes);
    }

    var bytesInBuffer = parseInt(BUFFER_SIZE / bytes);
    var threshold = parseInt(bytesInBuffer * 0.85);

    if (!threshold) {
      return crypto.randomBytes(bytes);
    }

    if ((this || _global).bytesBufferIndex == null) {
      (this || _global).bytesBufferIndex = -1;
    }

    if ((this || _global).bytesBufferIndex == bytesInBuffer) {
      (this || _global).bytesBuffer = null;
      (this || _global).bytesBufferIndex = -1;
    } // No buffered bytes available or index above threshold


    if ((this || _global).bytesBufferIndex == -1 || (this || _global).bytesBufferIndex > threshold) {
      if (!(this || _global).isGeneratingBytes) {
        (this || _global).isGeneratingBytes = true;
        crypto.randomBytes(BUFFER_SIZE, function (err, bytes) {
          self.bytesBuffer = bytes;
          self.bytesBufferIndex = 0;
          self.isGeneratingBytes = false;
        });
      } // Fall back to sync call when no buffered bytes are available


      if ((this || _global).bytesBufferIndex == -1) {
        return crypto.randomBytes(bytes);
      }
    }

    var result = (this || _global).bytesBuffer.slice(bytes * (this || _global).bytesBufferIndex, bytes * ((this || _global).bytesBufferIndex + 1));

    (this || _global).bytesBufferIndex++;
    return result;
  };
  /**
   * Generates a base64 id
   *
   * (Original version from socket.io <http://socket.io>)
   */


  Base64Id.prototype.generateId = function () {
    var rand = Buffer.alloc(15); // multiple of 3 for base64

    if (!rand.writeInt32BE) {
      return Math.abs(Math.random() * Math.random() * Date.now() | 0).toString() + Math.abs(Math.random() * Math.random() * Date.now() | 0).toString();
    }

    (this || _global).sequenceNumber = (this || _global).sequenceNumber + 1 | 0;
    rand.writeInt32BE((this || _global).sequenceNumber, 11);

    if (crypto.randomBytes) {
      this.getRandomBytes(12).copy(rand);
    } else {
      // not secure for node 0.4
      [0, 4, 8].forEach(function (i) {
        rand.writeInt32BE(Math.random() * Math.pow(2, 32) | 0, i);
      });
    }

    return rand.toString('base64').replace(/\//g, '_').replace(/\+/g, '-');
  };
  /**
   * Export
   */


  exports = exports = new Base64Id();
  return exports;
}