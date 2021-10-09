import _assert from "assert";
import { dew as _v1DewDew } from "../v1.dew.js";
import { dew as _v3DewDew } from "../v3.dew.js";
import { dew as _v4DewDew } from "../v4.dew.js";
import { dew as _v5DewDew } from "../v5.dew.js";
import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;
  var assert = _assert;

  function usage() {
    console.log('Usage:');
    console.log('  uuid');
    console.log('  uuid v1');
    console.log('  uuid v3 <name> <namespace uuid>');
    console.log('  uuid v4');
    console.log('  uuid v5 <name> <namespace uuid>');
    console.log('  uuid --help');
    console.log('\nNote: <namespace uuid> may be "URL" or "DNS" to use the corresponding UUIDs defined by RFC4122');
  }

  var args = process.argv.slice(2);

  if (args.indexOf('--help') >= 0) {
    usage();
    process.exit(0);
  }

  var version = args.shift() || 'v4';

  switch (version) {
    case 'v1':
      var uuidV1 = _v1DewDew();

      console.log(uuidV1());
      break;

    case 'v3':
      var uuidV3 = _v3DewDew();

      var name = args.shift();
      var namespace = args.shift();
      assert(name != null, 'v3 name not specified');
      assert(namespace != null, 'v3 namespace not specified');
      if (namespace == 'URL') namespace = uuidV3.URL;
      if (namespace == 'DNS') namespace = uuidV3.DNS;
      console.log(uuidV3(name, namespace));
      break;

    case 'v4':
      var uuidV4 = _v4DewDew();

      console.log(uuidV4());
      break;

    case 'v5':
      var uuidV5 = _v5DewDew();

      var name = args.shift();
      var namespace = args.shift();
      assert(name != null, 'v5 name not specified');
      assert(namespace != null, 'v5 namespace not specified');
      if (namespace == 'URL') namespace = uuidV5.URL;
      if (namespace == 'DNS') namespace = uuidV5.DNS;
      console.log(uuidV5(name, namespace));
      break;

    default:
      usage();
      process.exit(1);
  }

  return exports;
}