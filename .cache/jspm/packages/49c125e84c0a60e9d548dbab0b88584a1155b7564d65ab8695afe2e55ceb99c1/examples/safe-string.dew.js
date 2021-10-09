import { dew as _safeDewDew } from "../safe.dew.js";
import _process from "process";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  var process = _process;

  var colors = _safeDewDew();

  console.log(colors.yellow("First some yellow text"));
  console.log(colors.yellow.underline("Underline that text"));
  console.log(colors.red.bold("Make it bold and red"));
  console.log(colors.rainbow("Double Raindows All Day Long"));
  console.log(colors.trap("Drop the bass"));
  console.log(colors.rainbow(colors.trap("DROP THE RAINBOW BASS")));
  console.log(colors.bold.italic.underline.red('Chains are also cool.')); // styles not widely supported

  console.log(colors.green('So ') + colors.underline('are') + ' ' + colors.inverse('inverse') + colors.yellow.bold(' styles! ')); // styles not widely supported

  console.log(colors.zebra("Zebras are so fun!"));
  console.log("This is " + colors.strikethrough("not") + " fun.");
  console.log(colors.black.bgWhite('Background color attack!'));
  console.log(colors.random('Use random styles on everything!'));
  console.log(colors.america('America, Heck Yeah!'));
  console.log('Setting themes is useful'); //
  // Custom themes
  //
  //console.log('Generic logging theme as JSON'.green.bold.underline);
  // Load theme with JSON literal

  colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
  }); // outputs red text

  console.log(colors.error("this is an error")); // outputs yellow text

  console.log(colors.warn("this is a warning")); // outputs grey text

  console.log(colors.input("this is an input")); // console.log('Generic logging theme as file'.green.bold.underline);
  // Load a theme from file

  colors.setTheme((import.meta.url.startsWith('file:') ? decodeURI(import.meta.url.slice(0, import.meta.url.lastIndexOf('/')).slice(7 + (typeof process !== 'undefined' && process.platform === 'win32'))) : new URL(import.meta.url.slice(0, import.meta.url.lastIndexOf('/'))).pathname) + '/../themes/generic-logging.js'); // outputs red text

  console.log(colors.error("this is an error")); // outputs yellow text

  console.log(colors.warn("this is a warning")); // outputs grey text

  console.log(colors.input("this is an input")); // console.log(colors.zalgo("Don't summon him"))

  return exports;
}