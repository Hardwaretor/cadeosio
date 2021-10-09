import _path from "path";
import _child_process from "child_process";
import { dew as _indexDewDew } from "cross-spawn/index.dew.js";
import { dew as _indexDew2Dew } from "strip-eof/index.dew.js";
import { dew as _indexDew3Dew } from "npm-run-path/index.dew.js";
import { dew as _indexDew4Dew } from "is-stream/index.dew.js";
import { dew as _indexDew5Dew } from "get-stream/index.dew.js";
import { dew as _indexDew6Dew } from "p-finally/index.dew.js";
import { dew as _indexDew7Dew } from "signal-exit/index.dew.js";
import { dew as _errnameDewDew } from "./lib/errname.dew.js";
import { dew as _stdioDewDew } from "./lib/stdio.dew.js";
import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;
  const path = _path;
  const childProcess = _child_process;

  const crossSpawn = _indexDewDew();

  const stripEof = _indexDew2Dew();

  const npmRunPath = _indexDew3Dew();

  const isStream = _indexDew4Dew();

  const _getStream = _indexDew5Dew();

  const pFinally = _indexDew6Dew();

  const onExit = _indexDew7Dew();

  const errname = _errnameDewDew();

  const stdio = _stdioDewDew();

  const TEN_MEGABYTES = 1000 * 1000 * 10;

  function handleArgs(cmd, args, opts) {
    let parsed;
    opts = Object.assign({
      extendEnv: true,
      env: {}
    }, opts);

    if (opts.extendEnv) {
      opts.env = Object.assign({}, process.env, opts.env);
    }

    if (opts.__winShell === true) {
      delete opts.__winShell;
      parsed = {
        command: cmd,
        args,
        options: opts,
        file: cmd,
        original: {
          cmd,
          args
        }
      };
    } else {
      parsed = crossSpawn._parse(cmd, args, opts);
    }

    opts = Object.assign({
      maxBuffer: TEN_MEGABYTES,
      buffer: true,
      stripEof: true,
      preferLocal: true,
      localDir: parsed.options.cwd || process.cwd(),
      encoding: 'utf8',
      reject: true,
      cleanup: true
    }, parsed.options);
    opts.stdio = stdio(opts);

    if (opts.preferLocal) {
      opts.env = npmRunPath.env(Object.assign({}, opts, {
        cwd: opts.localDir
      }));
    }

    if (opts.detached) {
      // #115
      opts.cleanup = false;
    }

    if (process.platform === 'win32' && path.basename(parsed.command) === 'cmd.exe') {
      // #116
      parsed.args.unshift('/q');
    }

    return {
      cmd: parsed.command,
      args: parsed.args,
      opts,
      parsed
    };
  }

  function handleInput(spawned, input) {
    if (input === null || input === undefined) {
      return;
    }

    if (isStream(input)) {
      input.pipe(spawned.stdin);
    } else {
      spawned.stdin.end(input);
    }
  }

  function handleOutput(opts, val) {
    if (val && opts.stripEof) {
      val = stripEof(val);
    }

    return val;
  }

  function handleShell(fn, cmd, opts) {
    let file = '/bin/sh';
    let args = ['-c', cmd];
    opts = Object.assign({}, opts);

    if (process.platform === 'win32') {
      opts.__winShell = true;
      file = process.env.comspec || 'cmd.exe';
      args = ['/s', '/c', `"${cmd}"`];
      opts.windowsVerbatimArguments = true;
    }

    if (opts.shell) {
      file = opts.shell;
      delete opts.shell;
    }

    return fn(file, args, opts);
  }

  function getStream(process, stream, {
    encoding,
    buffer,
    maxBuffer
  }) {
    if (!process[stream]) {
      return null;
    }

    let ret;

    if (!buffer) {
      // TODO: Use `ret = util.promisify(stream.finished)(process[stream]);` when targeting Node.js 10
      ret = new Promise((resolve, reject) => {
        process[stream].once('end', resolve).once('error', reject);
      });
    } else if (encoding) {
      ret = _getStream(process[stream], {
        encoding,
        maxBuffer
      });
    } else {
      ret = _getStream.buffer(process[stream], {
        maxBuffer
      });
    }

    return ret.catch(err => {
      err.stream = stream;
      err.message = `${stream} ${err.message}`;
      throw err;
    });
  }

  function makeError(result, options) {
    const {
      stdout,
      stderr
    } = result;
    let err = result.error;
    const {
      code,
      signal
    } = result;
    const {
      parsed,
      joinedCmd
    } = options;
    const timedOut = options.timedOut || false;

    if (!err) {
      let output = '';

      if (Array.isArray(parsed.opts.stdio)) {
        if (parsed.opts.stdio[2] !== 'inherit') {
          output += output.length > 0 ? stderr : `\n${stderr}`;
        }

        if (parsed.opts.stdio[1] !== 'inherit') {
          output += `\n${stdout}`;
        }
      } else if (parsed.opts.stdio !== 'inherit') {
        output = `\n${stderr}${stdout}`;
      }

      err = new Error(`Command failed: ${joinedCmd}${output}`);
      err.code = code < 0 ? errname(code) : code;
    }

    err.stdout = stdout;
    err.stderr = stderr;
    err.failed = true;
    err.signal = signal || null;
    err.cmd = joinedCmd;
    err.timedOut = timedOut;
    return err;
  }

  function joinCmd(cmd, args) {
    let joinedCmd = cmd;

    if (Array.isArray(args) && args.length > 0) {
      joinedCmd += ' ' + args.join(' ');
    }

    return joinedCmd;
  }

  exports = (cmd, args, opts) => {
    const parsed = handleArgs(cmd, args, opts);
    const {
      encoding,
      buffer,
      maxBuffer
    } = parsed.opts;
    const joinedCmd = joinCmd(cmd, args);
    let spawned;

    try {
      spawned = childProcess.spawn(parsed.cmd, parsed.args, parsed.opts);
    } catch (err) {
      return Promise.reject(err);
    }

    let removeExitHandler;

    if (parsed.opts.cleanup) {
      removeExitHandler = onExit(() => {
        spawned.kill();
      });
    }

    let timeoutId = null;
    let timedOut = false;

    const cleanup = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }

      if (removeExitHandler) {
        removeExitHandler();
      }
    };

    if (parsed.opts.timeout > 0) {
      timeoutId = setTimeout(() => {
        timeoutId = null;
        timedOut = true;
        spawned.kill(parsed.opts.killSignal);
      }, parsed.opts.timeout);
    }

    const processDone = new Promise(resolve => {
      spawned.on('exit', (code, signal) => {
        cleanup();
        resolve({
          code,
          signal
        });
      });
      spawned.on('error', err => {
        cleanup();
        resolve({
          error: err
        });
      });

      if (spawned.stdin) {
        spawned.stdin.on('error', err => {
          cleanup();
          resolve({
            error: err
          });
        });
      }
    });

    function destroy() {
      if (spawned.stdout) {
        spawned.stdout.destroy();
      }

      if (spawned.stderr) {
        spawned.stderr.destroy();
      }
    }

    const handlePromise = () => pFinally(Promise.all([processDone, getStream(spawned, 'stdout', {
      encoding,
      buffer,
      maxBuffer
    }), getStream(spawned, 'stderr', {
      encoding,
      buffer,
      maxBuffer
    })]).then(arr => {
      const result = arr[0];
      result.stdout = arr[1];
      result.stderr = arr[2];

      if (result.error || result.code !== 0 || result.signal !== null) {
        const err = makeError(result, {
          joinedCmd,
          parsed,
          timedOut
        }); // TODO: missing some timeout logic for killed
        // https://github.com/nodejs/node/blob/master/lib/child_process.js#L203
        // err.killed = spawned.killed || killed;

        err.killed = err.killed || spawned.killed;

        if (!parsed.opts.reject) {
          return err;
        }

        throw err;
      }

      return {
        stdout: handleOutput(parsed.opts, result.stdout),
        stderr: handleOutput(parsed.opts, result.stderr),
        code: 0,
        failed: false,
        killed: false,
        signal: null,
        cmd: joinedCmd,
        timedOut: false
      };
    }), destroy);

    crossSpawn._enoent.hookChildProcess(spawned, parsed.parsed);

    handleInput(spawned, parsed.opts.input);

    spawned.then = (onfulfilled, onrejected) => handlePromise().then(onfulfilled, onrejected);

    spawned.catch = onrejected => handlePromise().catch(onrejected);

    return spawned;
  }; // TODO: set `stderr: 'ignore'` when that option is implemented


  exports.stdout = (...args) => exports(...args).then(x => x.stdout); // TODO: set `stdout: 'ignore'` when that option is implemented


  exports.stderr = (...args) => exports(...args).then(x => x.stderr);

  exports.shell = (cmd, opts) => handleShell(exports, cmd, opts);

  exports.sync = (cmd, args, opts) => {
    const parsed = handleArgs(cmd, args, opts);
    const joinedCmd = joinCmd(cmd, args);

    if (isStream(parsed.opts.input)) {
      throw new TypeError('The `input` option cannot be a stream in sync mode');
    }

    const result = childProcess.spawnSync(parsed.cmd, parsed.args, parsed.opts);
    result.code = result.status;

    if (result.error || result.status !== 0 || result.signal !== null) {
      const err = makeError(result, {
        joinedCmd,
        parsed
      });

      if (!parsed.opts.reject) {
        return err;
      }

      throw err;
    }

    return {
      stdout: handleOutput(parsed.opts, result.stdout),
      stderr: handleOutput(parsed.opts, result.stderr),
      code: 0,
      failed: false,
      signal: null,
      cmd: joinedCmd,
      timedOut: false
    };
  };

  exports.shellSync = (cmd, opts) => handleShell(exports.sync, cmd, opts);

  return exports;
}