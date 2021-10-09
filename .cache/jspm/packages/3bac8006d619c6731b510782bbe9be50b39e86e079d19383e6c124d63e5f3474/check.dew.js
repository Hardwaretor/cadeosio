import { dew as _indexDewDew } from "./index.dew.js";
import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;

  let updateNotifier = _indexDewDew();

  const options = JSON.parse(process.argv[2]);
  updateNotifier = new updateNotifier.UpdateNotifier(options);
  updateNotifier.checkNpm().then(update => {
    // Only update the last update check time on success
    updateNotifier.config.set('lastUpdateCheck', Date.now());

    if (update.type && update.type !== 'latest') {
      updateNotifier.config.set('update', update);
    } // Call process exit explicitly to terminate the child process
    // Otherwise the child process will run forever, according to the Node.js docs


    process.exit();
  }).catch(() => {
    process.exit(1);
  });
  return exports;
}