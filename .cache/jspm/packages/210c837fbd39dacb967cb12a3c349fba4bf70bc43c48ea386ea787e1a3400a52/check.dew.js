import { dew as _indexDewDew } from "./index.dew.js";
import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;

  var updateNotifier = _indexDewDew();

  var options = JSON.parse(process.argv[2]);
  updateNotifier = new updateNotifier.UpdateNotifier(options);
  updateNotifier.checkNpm().then(function (update) {
    // only update the last update check time on success
    updateNotifier.config.set('lastUpdateCheck', Date.now());

    if (update.type && update.type !== 'latest') {
      updateNotifier.config.set('update', update);
    } // Call process exit explicitly to terminate the child process
    // Otherwise the child process will run forever (according to nodejs docs)


    process.exit();
  }).catch(function () {
    process.exit(1);
  });
  return exports;
}