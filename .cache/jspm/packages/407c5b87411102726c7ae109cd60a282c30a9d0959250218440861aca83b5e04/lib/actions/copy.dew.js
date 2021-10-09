import _assert from "assert";
import _fs from "fs";
import _path from "path";
import { dew as _indexDewDew } from "glob/index.dew.js";
import { dew as _indexDew2Dew } from "globby/index.dew.js";
import { dew as _indexDew3Dew } from "deep-extend/index.dew.js";
import { dew as _indexDew4Dew } from "multimatch/index.dew.js";
import { dew as _indexDew5Dew } from "ejs/index.dew.js";
import { dew as _utilDewDew } from "../util.dew.js";
import _buffer from "buffer";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var Buffer = _buffer.Buffer;
  var assert = _assert;
  var fs = _fs;
  var path = _path;

  var glob = _indexDewDew();

  var globby = _indexDew2Dew();

  var extend = _indexDew3Dew();

  var multimatch = _indexDew4Dew();

  var ejs = _indexDew5Dew();

  var util = _utilDewDew();

  function applyProcessingFunc(process, contents, filename) {
    var output = process(contents, filename);
    return output instanceof Buffer ? output : Buffer.from(output);
  }

  exports.copy = function (from, to, options, context, tplSettings) {
    to = path.resolve(to);
    options = options || {};
    var fromGlob = util.globify(from);
    var globOptions = extend(options.globOptions || {}, {
      nodir: true
    });
    var diskFiles = globby.sync(fromGlob, globOptions);
    var storeFiles = [];
    this.store.each(file => {
      // The store may have a glob path and when we try to copy it will fail because not real file
      if (!glob.hasMagic(file.path) && multimatch([file.path], fromGlob).length !== 0) {
        storeFiles.push(file.path);
      }
    });
    var files = diskFiles.concat(storeFiles);

    var generateDestination = () => to;

    if (Array.isArray(from) || !this.exists(from) || glob.hasMagic(from)) {
      assert(!this.exists(to) || fs.statSync(to).isDirectory(), 'When copying multiple files, provide a directory as destination');
      var root = util.getCommonPath(from);

      generateDestination = filepath => {
        var toFile = path.relative(root, filepath);
        return path.join(to, toFile);
      };
    } // Sanity checks: Makes sure we copy at least one file.


    assert(options.ignoreNoMatch || files.length > 0, 'Trying to copy from a source that does not exist: ' + from);
    files.forEach(file => {
      this._copySingle(file, generateDestination(file), options, context, tplSettings);
    });
  };

  exports._copySingle = function (from, to, options, context, tplSettings) {
    options = options || {};
    assert(this.exists(from), 'Trying to copy from a source that does not exist: ' + from);
    var file = this.store.get(from);
    var contents = file.contents;

    if (options.process) {
      contents = applyProcessingFunc(options.process, file.contents, file.path);
    }

    if (context) {
      to = ejs.render(to, context, tplSettings);
    }

    this.write(to, contents, file.stat);
  };

  return exports;
}