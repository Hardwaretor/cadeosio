import { dew as _formatDewDew } from "./format.dew.js";
import { dew as _indexDewDew } from "triple-beam/index.dew.js";
import { dew as _indexDew2Dew } from "fast-safe-stringify/index.dew.js";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  const format = _formatDewDew();

  const {
    MESSAGE
  } = _indexDewDew();

  const jsonStringify = _indexDew2Dew();
  /*
   * function logstash (info)
   * Returns a new instance of the LogStash Format that turns a
   * log `info` object into pure JSON with the appropriate logstash
   * options. This was previously exposed as { logstash: true }
   * to transports in `winston < 3.0.0`.
   */


  exports = format(info => {
    const logstash = {};

    if (info.message) {
      logstash['@message'] = info.message;
      delete info.message;
    }

    if (info.timestamp) {
      logstash['@timestamp'] = info.timestamp;
      delete info.timestamp;
    }

    logstash['@fields'] = info;
    info[MESSAGE] = jsonStringify(logstash);
    return info;
  });
  return exports;
}