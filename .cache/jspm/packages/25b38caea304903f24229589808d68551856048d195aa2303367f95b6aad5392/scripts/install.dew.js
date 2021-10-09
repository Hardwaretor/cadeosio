import { dew as _sauceConnectLauncherDewDew } from "../lib/sauce-connect-launcher.dew.js";
import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;

  // Only download on install when requested.
  if (!process.env.SAUCE_CONNECT_DOWNLOAD_ON_INSTALL) {
    return;
  }

  var sauceConnectLauncher = _sauceConnectLauncherDewDew();

  sauceConnectLauncher.download({
    logger: console.log.bind(console)
  }, function (err) {
    if (err) {
      console.log("Failed to download sauce connect binary:", err);
      console.log("sauce-connect-launcher will attempt to re-download " + "next time it is run.");
    }
  });
  return exports;
}