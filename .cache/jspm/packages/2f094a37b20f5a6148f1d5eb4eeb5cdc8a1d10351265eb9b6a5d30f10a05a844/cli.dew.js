import { dew as _indexDewDew } from "camel-case/index.dew.js";
import _fs from "fs";
import { dew as _packageJsonDewDew } from "./package.json.dew.js";
import { dew as _cliDewDew } from "./cli.dew.js";
import { dew as _htmlminifierDewDew } from "./src/htmlminifier.dew.js";
import { dew as _htmlparserDewDew } from "./src/htmlparser.dew.js";
import { dew as _tokenchainDewDew } from "./src/tokenchain.dew.js";
import { dew as _utilsDewDew } from "./src/utils.dew.js";
import { dew as _indexDew2Dew } from "param-case/index.dew.js";
import _path from "path";
import { dew as _indexDew3Dew } from "commander/index.dew.js";
import _process from "process";
import _module from "module";
var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  var _nodeRequire = function () {
    var Module = _module.Module;

    if (Module) {
      var m = new Module("");
      m.filename = import.meta.url.substr(7 + (Module._nodeModulePaths("/")[0].length > 13));
      m.paths = Module._nodeModulePaths(m.filename.substr(0, m.filename.lastIndexOf("/")));
      return m.require.bind(m);
    } else {
      return function _nodeRequire(id) {
        var e = new Error("Cannot find module '" + id + "'");
        e.code = "MODULE_NOT_FOUND";
        throw e;
      };
    }
  }();

  var process = _process;

  var camelCase = _indexDewDew();

  var fs = _fs;

  var info = _packageJsonDewDew();

  var minify = function (e) {
    return e === "cli.dew.js" || e === "cli.dew" ? _cliDewDew() : e === "package.json.dew.js" || e === "package.json.dew" ? _packageJsonDewDew() : e === "src/htmlminifier.dew.js" || e === "src/htmlminifier.dew" ? _htmlminifierDewDew() : e === "src/htmlparser.dew.js" || e === "src/htmlparser.dew" ? _htmlparserDewDew() : e === "src/tokenchain.dew.js" || e === "src/tokenchain.dew" ? _tokenchainDewDew() : e === "src/utils.dew.js" || e === "src/utils.dew" ? _utilsDewDew() : null;
  }(info.main).minify;

  var paramCase = _indexDew2Dew();

  var path = _path;

  var program = _indexDew3Dew();

  program._name = info.name;
  program.version(info.version);

  function fatal(message) {
    console.error(message);
    process.exit(1);
  }
  /**
   * JSON does not support regexes, so, e.g., JSON.parse() will not create
   * a RegExp from the JSON value `[ "/matchString/" ]`, which is
   * technically just an array containing a string that begins and end with
   * a forward slash. To get a RegExp from a JSON string, it must be
   * constructed explicitly in JavaScript.
   *
   * The likelihood of actually wanting to match text that is enclosed in
   * forward slashes is probably quite rare, so if forward slashes were
   * included in an argument that requires a regex, the user most likely
   * thought they were part of the syntax for specifying a regex.
   *
   * In the unlikely case that forward slashes are indeed desired in the
   * search string, the user would need to enclose the expression in a
   * second set of slashes:
   *
   *    --customAttrSrround "[\"//matchString//\"]"
   */


  function parseRegExp(value) {
    if (value) {
      return new RegExp(value.replace(/^\/(.*)\/$/, '$1'));
    }
  }

  function parseJSON(value) {
    if (value) {
      try {
        return JSON.parse(value);
      } catch (e) {
        if (/^{/.test(value)) {
          fatal('Could not parse JSON value \'' + value + '\'');
        }

        return value;
      }
    }
  }

  function parseJSONArray(value) {
    if (value) {
      value = parseJSON(value);
      return Array.isArray(value) ? value : [value];
    }
  }

  function parseJSONRegExpArray(value) {
    value = parseJSONArray(value);
    return value && value.map(parseRegExp);
  }

  function parseString(value) {
    return value;
  }

  var mainOptions = {
    caseSensitive: 'Treat attributes in case sensitive manner (useful for SVG; e.g. viewBox)',
    collapseBooleanAttributes: 'Omit attribute values from boolean attributes',
    collapseInlineTagWhitespace: 'Collapse white space around inline tag',
    collapseWhitespace: 'Collapse white space that contributes to text nodes in a document tree.',
    conservativeCollapse: 'Always collapse to 1 space (never remove it entirely)',
    customAttrAssign: ['Arrays of regex\'es that allow to support custom attribute assign expressions (e.g. \'<div flex?="{{mode != cover}}"></div>\')', parseJSONRegExpArray],
    customAttrCollapse: ['Regex that specifies custom attribute to strip newlines from (e.g. /ng-class/)', parseRegExp],
    customAttrSurround: ['Arrays of regex\'es that allow to support custom attribute surround expressions (e.g. <input {{#if value}}checked="checked"{{/if}}>)', parseJSONRegExpArray],
    customEventAttributes: ['Arrays of regex\'es that allow to support custom event attributes for minifyJS (e.g. ng-click)', parseJSONRegExpArray],
    decodeEntities: 'Use direct Unicode characters whenever possible',
    html5: 'Parse input according to HTML5 specifications',
    ignoreCustomComments: ['Array of regex\'es that allow to ignore certain comments, when matched', parseJSONRegExpArray],
    ignoreCustomFragments: ['Array of regex\'es that allow to ignore certain fragments, when matched (e.g. <?php ... ?>, {{ ... }})', parseJSONRegExpArray],
    includeAutoGeneratedTags: 'Insert tags generated by HTML parser',
    keepClosingSlash: 'Keep the trailing slash on singleton elements',
    maxLineLength: ['Max line length', parseInt],
    minifyCSS: ['Minify CSS in style elements and style attributes (uses clean-css)', parseJSON],
    minifyJS: ['Minify Javascript in script elements and on* attributes (uses uglify-js)', parseJSON],
    minifyURLs: ['Minify URLs in various attributes (uses relateurl)', parseJSON],
    preserveLineBreaks: 'Always collapse to 1 line break (never remove it entirely) when whitespace between tags include a line break.',
    preventAttributesEscaping: 'Prevents the escaping of the values of attributes.',
    processConditionalComments: 'Process contents of conditional comments through minifier',
    processScripts: ['Array of strings corresponding to types of script elements to process through minifier (e.g. "text/ng-template", "text/x-handlebars-template", etc.)', parseJSONArray],
    quoteCharacter: ['Type of quote to use for attribute values (\' or ")', parseString],
    removeAttributeQuotes: 'Remove quotes around attributes when possible.',
    removeComments: 'Strip HTML comments',
    removeEmptyAttributes: 'Remove all attributes with whitespace-only values',
    removeEmptyElements: 'Remove all elements with empty contents',
    removeOptionalTags: 'Remove unrequired tags',
    removeRedundantAttributes: 'Remove attributes when value matches default.',
    removeScriptTypeAttributes: 'Remove type="text/javascript" from script tags. Other type attribute values are left intact.',
    removeStyleLinkTypeAttributes: 'Remove type="text/css" from style and link tags. Other type attribute values are left intact.',
    removeTagWhitespace: 'Remove space between attributes whenever possible',
    sortAttributes: 'Sort attributes by frequency',
    sortClassName: 'Sort style classes by frequency',
    trimCustomFragments: 'Trim white space around ignoreCustomFragments.',
    useShortDoctype: 'Replaces the doctype with the short (HTML5) doctype'
  };
  var mainOptionKeys = Object.keys(mainOptions);
  mainOptionKeys.forEach(function (key) {
    var option = mainOptions[key];

    if (Array.isArray(option)) {
      key = key === 'minifyURLs' ? '--minify-urls' : '--' + paramCase(key);
      key += option[1] === parseJSON ? ' [value]' : ' <value>';
      program.option(key, option[0], option[1]);
    } else if (~['html5', 'includeAutoGeneratedTags'].indexOf(key)) {
      program.option('--no-' + paramCase(key), option);
    } else {
      program.option('--' + paramCase(key), option);
    }
  });
  program.option('-o --output <file>', 'Specify output file (if not specified STDOUT will be used for output)');

  function readFile(file) {
    try {
      return fs.readFileSync(file, {
        encoding: 'utf8'
      });
    } catch (e) {
      fatal('Cannot read ' + file + '\n' + e.message);
    }
  }

  var config = {};
  program.option('-c --config-file <file>', 'Use config file', function (configPath) {
    var data = readFile(configPath);

    try {
      config = JSON.parse(data);
    } catch (je) {
      try {
        config = _nodeRequire(path.resolve(configPath));
      } catch (ne) {
        fatal('Cannot read the specified config file.\nAs JSON: ' + je.message + '\nAs module: ' + ne.message);
      }
    }

    mainOptionKeys.forEach(function (key) {
      if (key in config) {
        var option = mainOptions[key];

        if (Array.isArray(option)) {
          var value = config[key];
          config[key] = option[1](typeof value === 'string' ? value : JSON.stringify(value));
        }
      }
    });
  });
  program.option('--input-dir <dir>', 'Specify an input directory');
  program.option('--output-dir <dir>', 'Specify an output directory');
  program.option('--file-ext <text>', 'Specify an extension to be read, ex: html');
  var content;
  program.arguments('[files...]').action(function (files) {
    content = files.map(readFile).join('');
  }).parse(process.argv);

  function createOptions() {
    var options = {};
    mainOptionKeys.forEach(function (key) {
      var param = program[key === 'minifyURLs' ? 'minifyUrls' : camelCase(key)];

      if (typeof param !== 'undefined') {
        options[key] = param;
      } else if (key in config) {
        options[key] = config[key];
      }
    });
    return options;
  }

  function mkdir(outputDir, callback) {
    fs.mkdir(outputDir, function (err) {
      if (err) {
        switch (err.code) {
          case 'ENOENT':
            return mkdir(path.join(outputDir, '..'), function () {
              mkdir(outputDir, callback);
            });

          case 'EEXIST':
            break;

          default:
            fatal('Cannot create directory ' + outputDir + '\n' + err.message);
        }
      }

      callback();
    });
  }

  function processFile(inputFile, outputFile) {
    fs.readFile(inputFile, {
      encoding: 'utf8'
    }, function (err, data) {
      if (err) {
        fatal('Cannot read ' + inputFile + '\n' + err.message);
      }

      var minified;

      try {
        minified = minify(data, createOptions());
      } catch (e) {
        fatal('Minification error on ' + inputFile + '\n' + e.message);
      }

      fs.writeFile(outputFile, minified, {
        encoding: 'utf8'
      }, function (err) {
        if (err) {
          fatal('Cannot write ' + outputFile + '\n' + err.message);
        }
      });
    });
  }

  function processDirectory(inputDir, outputDir, fileExt) {
    fs.readdir(inputDir, function (err, files) {
      if (err) {
        fatal('Cannot read directory ' + inputDir + '\n' + err.message);
      }

      files.forEach(function (file) {
        var inputFile = path.join(inputDir, file);
        var outputFile = path.join(outputDir, file);
        fs.stat(inputFile, function (err, stat) {
          if (err) {
            fatal('Cannot read ' + inputFile + '\n' + err.message);
          } else if (stat.isDirectory()) {
            processDirectory(inputFile, outputFile, fileExt);
          } else if (!fileExt || path.extname(file) === '.' + fileExt) {
            mkdir(outputDir, function () {
              processFile(inputFile, outputFile);
            });
          }
        });
      });
    });
  }

  function writeMinify() {
    var minified;

    try {
      minified = minify(content, createOptions());
    } catch (e) {
      fatal('Minification error:\n' + e.message);
    }

    (program.output ? fs.createWriteStream(program.output).on('error', function (e) {
      fatal('Cannot write ' + program.output + '\n' + e.message);
    }) : process.stdout).write(minified);
  }

  var inputDir = program.inputDir;
  var outputDir = program.outputDir;
  var fileExt = program.fileExt;

  if (inputDir || outputDir) {
    if (!inputDir) {
      fatal('The option output-dir needs to be used with the option input-dir. If you are working with a single file, use -o.');
    } else if (!outputDir) {
      fatal('You need to specify where to write the output files with the option --output-dir');
    }

    processDirectory(inputDir, outputDir, fileExt);
  } // Minifying one or more files specified on the CMD line
  else if (content) {
      writeMinify();
    } // Minifying input coming from STDIN
    else {
        content = '';
        process.stdin.setEncoding('utf8');
        process.stdin.on('data', function (data) {
          content += data;
        }).on('end', writeMinify);
      }

  return exports;
}