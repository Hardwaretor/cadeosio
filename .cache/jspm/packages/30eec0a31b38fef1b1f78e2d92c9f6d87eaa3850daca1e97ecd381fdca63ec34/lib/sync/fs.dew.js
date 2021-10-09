import _fs from "fs";
import { dew as _callDewDew } from "../call.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  const fs = _fs;

  const call = _callDewDew();
  /**
   * A facade around {@link fs.readdirSync} that allows it to be called
   * the same way as {@link fs.readdir}.
   *
   * @param {string} dir
   * @param {function} callback
   */


  exports.readdir = function (dir, callback) {
    // Make sure the callback is only called once
    callback = call.once(callback);

    try {
      let items = fs.readdirSync(dir);
      callback(null, items);
    } catch (err) {
      callback(err);
    }
  };
  /**
   * A facade around {@link fs.statSync} that allows it to be called
   * the same way as {@link fs.stat}.
   *
   * @param {string} path
   * @param {function} callback
   */


  exports.stat = function (path, callback) {
    // Make sure the callback is only called once
    callback = call.once(callback);

    try {
      let stats = fs.statSync(path);
      callback(null, stats);
    } catch (err) {
      callback(err);
    }
  };
  /**
   * A facade around {@link fs.lstatSync} that allows it to be called
   * the same way as {@link fs.lstat}.
   *
   * @param {string} path
   * @param {function} callback
   */


  exports.lstat = function (path, callback) {
    // Make sure the callback is only called once
    callback = call.once(callback);

    try {
      let stats = fs.lstatSync(path);
      callback(null, stats);
    } catch (err) {
      callback(err);
    }
  };

  return exports;
}