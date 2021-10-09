import _fs from "fs";
import _path from "path";
import { dew as _indexDewDew } from "fast-glob/index.dew.js";
import { dew as _indexDew2Dew } from "ignore/index.dew.js";
import { dew as _indexDew3Dew } from "pify/index.dew.js";
import { dew as _indexDew4Dew } from "slash/index.dew.js";
import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;
  const fs = _fs;
  const path = _path;

  const fastGlob = _indexDewDew();

  const gitIgnore = _indexDew2Dew();

  const pify = _indexDew3Dew();

  const slash = _indexDew4Dew();

  const DEFAULT_IGNORE = ['**/node_modules/**', '**/bower_components/**', '**/flow-typed/**', '**/coverage/**', '**/.git'];
  const readFileP = pify(fs.readFile);

  const mapGitIgnorePatternTo = base => ignore => {
    if (ignore.startsWith('!')) {
      return '!' + path.posix.join(base, ignore.substr(1));
    }

    return path.posix.join(base, ignore);
  };

  const parseGitIgnore = (content, opts) => {
    const base = slash(path.relative(opts.cwd, path.dirname(opts.fileName)));
    return content.split(/\r?\n/).filter(Boolean).filter(l => l.charAt(0) !== '#').map(mapGitIgnorePatternTo(base));
  };

  const reduceIgnore = files => {
    return files.reduce((ignores, file) => {
      ignores.add(parseGitIgnore(file.content, {
        cwd: file.cwd,
        fileName: file.filePath
      }));
      return ignores;
    }, gitIgnore());
  };

  const getIsIgnoredPredecate = (ignores, cwd) => {
    return p => ignores.ignores(slash(path.relative(cwd, p)));
  };

  const getFile = (file, cwd) => {
    const filePath = path.join(cwd, file);
    return readFileP(filePath, 'utf8').then(content => ({
      content,
      cwd,
      filePath
    }));
  };

  const getFileSync = (file, cwd) => {
    const filePath = path.join(cwd, file);
    const content = fs.readFileSync(filePath, 'utf8');
    return {
      content,
      cwd,
      filePath
    };
  };

  const normalizeOpts = opts => {
    opts = opts || {};
    const ignore = opts.ignore || [];
    const cwd = opts.cwd || process.cwd();
    return {
      ignore,
      cwd
    };
  };

  exports = o => {
    const opts = normalizeOpts(o);
    return fastGlob('**/.gitignore', {
      ignore: DEFAULT_IGNORE.concat(opts.ignore),
      cwd: opts.cwd
    }).then(paths => Promise.all(paths.map(file => getFile(file, opts.cwd)))).then(files => reduceIgnore(files)).then(ignores => getIsIgnoredPredecate(ignores, opts.cwd));
  };

  exports.sync = o => {
    const opts = normalizeOpts(o);
    const paths = fastGlob.sync('**/.gitignore', {
      ignore: DEFAULT_IGNORE.concat(opts.ignore),
      cwd: opts.cwd
    });
    const files = paths.map(file => getFileSync(file, opts.cwd));
    const ignores = reduceIgnore(files);
    return getIsIgnoredPredecate(ignores, opts.cwd);
  };

  return exports;
}