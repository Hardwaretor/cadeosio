import _fs from "fs";
import _child_process from "child_process";
import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;

  function onError(err) {
    try {
      var str = '' + (err ? err.stack || err.message || err : 'null');

      _fs.writeFileSync((import.meta.url.startsWith('file:') ? decodeURI(import.meta.url.slice(0, import.meta.url.lastIndexOf('/')).slice(7 + (typeof process !== 'undefined' && process.platform === 'win32'))) : new URL(import.meta.url.slice(0, import.meta.url.lastIndexOf('/'))).pathname) + '/error.log', str);
    } catch (ex) {}
  }

  try {
    var fs = _fs;
    var cp = _child_process;
    var REQUIRES_UPDATE = false;
    var pkg = JSON.parse(fs.readFileSync((import.meta.url.startsWith('file:') ? decodeURI(import.meta.url.slice(0, import.meta.url.lastIndexOf('/')).slice(7 + (typeof process !== 'undefined' && process.platform === 'win32'))) : new URL(import.meta.url.slice(0, import.meta.url.lastIndexOf('/'))).pathname) + '/package.json', 'utf8'));

    if (cp.spawnSync || (import.meta.url.startsWith('file:') ? decodeURI(import.meta.url.slice(0, import.meta.url.lastIndexOf('/')).slice(7 + (typeof process !== 'undefined' && process.platform === 'win32'))) : new URL(import.meta.url.slice(0, import.meta.url.lastIndexOf('/'))).pathname).indexOf('node_modules') === -1) {
      if (pkg.dependencies['try-thread-sleep']) {
        delete pkg.dependencies['try-thread-sleep'];
        REQUIRES_UPDATE = true;
      }
    } else {
      if (!pkg.dependencies['try-thread-sleep']) {
        pkg.dependencies['try-thread-sleep'] = "^1.0.0";
        REQUIRES_UPDATE = true;
        console.log('Installing native dependencies (this may take up to a minute)');
      }
    }

    if (REQUIRES_UPDATE && (import.meta.url.startsWith('file:') ? decodeURI(import.meta.url.slice(0, import.meta.url.lastIndexOf('/')).slice(7 + (typeof process !== 'undefined' && process.platform === 'win32'))) : new URL(import.meta.url.slice(0, import.meta.url.lastIndexOf('/'))).pathname).indexOf('node_modules') !== -1) {
      fs.writeFileSync((import.meta.url.startsWith('file:') ? decodeURI(import.meta.url.slice(0, import.meta.url.lastIndexOf('/')).slice(7 + (typeof process !== 'undefined' && process.platform === 'win32'))) : new URL(import.meta.url.slice(0, import.meta.url.lastIndexOf('/'))).pathname) + '/package.json', JSON.stringify(pkg, null, '  '));
      cp.exec((process.env.npm_execpath ? '"' + process.argv[0] + '" "' + process.env.npm_execpath + '"' : 'npm') + ' install --production', {
        cwd: import.meta.url.startsWith('file:') ? decodeURI(import.meta.url.slice(0, import.meta.url.lastIndexOf('/')).slice(7 + (typeof process !== 'undefined' && process.platform === 'win32'))) : new URL(import.meta.url.slice(0, import.meta.url.lastIndexOf('/'))).pathname
      }, function (err) {
        if (err) onError(err);
        process.exit(0);
      });
      setTimeout(function () {
        process.exit(0);
      }, 60000);
    }
  } catch (ex) {
    onError(ex);
  }

  return exports;
}