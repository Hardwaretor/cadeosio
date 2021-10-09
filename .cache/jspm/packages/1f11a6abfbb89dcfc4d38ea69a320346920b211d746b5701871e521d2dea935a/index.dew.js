import { dew as _indexDewDew } from "array-union/index.dew.js";
import { dew as _indexDew2Dew } from "glob/index.dew.js";
import { dew as _indexDew3Dew } from "fast-glob/index.dew.js";
import { dew as _indexDew4Dew } from "dir-glob/index.dew.js";
import { dew as _gitignoreDewDew } from "./gitignore.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  const arrayUnion = _indexDewDew();

  const glob = _indexDew2Dew();

  const fastGlob = _indexDew3Dew();

  const dirGlob = _indexDew4Dew();

  const gitignore = _gitignoreDewDew();

  const DEFAULT_FILTER = () => false;

  const isNegative = pattern => pattern[0] === '!';

  const assertPatternsInput = patterns => {
    if (!patterns.every(x => typeof x === 'string')) {
      throw new TypeError('Patterns must be a string or an array of strings');
    }
  };

  const generateGlobTasks = (patterns, taskOpts) => {
    patterns = [].concat(patterns);
    assertPatternsInput(patterns);
    const globTasks = [];
    taskOpts = Object.assign({
      ignore: [],
      expandDirectories: true
    }, taskOpts);
    patterns.forEach((pattern, i) => {
      if (isNegative(pattern)) {
        return;
      }

      const ignore = patterns.slice(i).filter(isNegative).map(pattern => pattern.slice(1));
      const opts = Object.assign({}, taskOpts, {
        ignore: taskOpts.ignore.concat(ignore)
      });
      globTasks.push({
        pattern,
        opts
      });
    });
    return globTasks;
  };

  const globDirs = (task, fn) => {
    let opts = {
      cwd: task.opts.cwd
    };

    if (Array.isArray(task.opts.expandDirectories)) {
      opts = Object.assign(opts, {
        files: task.opts.expandDirectories
      });
    } else if (typeof task.opts.expandDirectories === 'object') {
      opts = Object.assign(opts, task.opts.expandDirectories);
    }

    return fn(task.pattern, opts);
  };

  const getPattern = (task, fn) => task.opts.expandDirectories ? globDirs(task, fn) : [task.pattern];

  exports = (patterns, opts) => {
    let globTasks;

    try {
      globTasks = generateGlobTasks(patterns, opts);
    } catch (err) {
      return Promise.reject(err);
    }

    const getTasks = Promise.all(globTasks.map(task => Promise.resolve(getPattern(task, dirGlob)).then(globs => Promise.all(globs.map(glob => ({
      pattern: glob,
      opts: task.opts
    })))))).then(tasks => arrayUnion.apply(null, tasks));

    const getFilter = () => {
      return Promise.resolve(opts && opts.gitignore ? gitignore({
        cwd: opts.cwd,
        ignore: opts.ignore
      }) : DEFAULT_FILTER);
    };

    return getFilter().then(filter => {
      return getTasks.then(tasks => Promise.all(tasks.map(task => fastGlob(task.pattern, task.opts)))).then(paths => arrayUnion.apply(null, paths)).then(paths => paths.filter(p => !filter(p)));
    });
  };

  exports.sync = (patterns, opts) => {
    const globTasks = generateGlobTasks(patterns, opts);

    const getFilter = () => {
      return opts && opts.gitignore ? gitignore.sync({
        cwd: opts.cwd,
        ignore: opts.ignore
      }) : DEFAULT_FILTER;
    };

    const tasks = globTasks.reduce((tasks, task) => {
      const newTask = getPattern(task, dirGlob.sync).map(glob => ({
        pattern: glob,
        opts: task.opts
      }));
      return tasks.concat(newTask);
    }, []);
    const filter = getFilter();
    return tasks.reduce((matches, task) => arrayUnion(matches, fastGlob.sync(task.pattern, task.opts)), []).filter(p => !filter(p));
  };

  exports.generateGlobTasks = generateGlobTasks;

  exports.hasMagic = (patterns, opts) => [].concat(patterns).some(pattern => glob.hasMagic(pattern, opts));

  exports.gitignore = gitignore;
  return exports;
}