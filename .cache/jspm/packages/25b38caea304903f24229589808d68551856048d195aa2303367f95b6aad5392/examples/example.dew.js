import { dew as _sauceConnectLauncherDewDew } from "../lib/sauce-connect-launcher.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var sauceConnectLauncher = _sauceConnectLauncherDewDew();

  sauceConnectLauncher({
    username: 'bermi',
    accessKey: '12345678-1234-1234-1234-1234567890ab',
    verbose: false,
    logger: console.log
  }, function (err, sauceConnectProcess) {
    console.log("Started Sauce Connect Process");
    sauceConnectProcess.close(function () {
      console.log("Closed Sauce Connect process");
    });
  });
  return exports;
}