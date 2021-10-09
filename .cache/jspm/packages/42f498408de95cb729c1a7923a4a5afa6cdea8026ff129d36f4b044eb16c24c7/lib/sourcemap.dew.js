var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  // a small wrapper around fitzgen's source-map library
  function SourceMap(options) {
    options = defaults(options, {
      file: null,
      root: null,
      orig: null,
      orig_line_diff: 0,
      dest_line_diff: 0
    }, true);
    var generator = new MOZ_SourceMap.SourceMapGenerator({
      file: options.file,
      sourceRoot: options.root
    });
    var maps = options.orig && Object.create(null);
    if (maps) for (var source in options.orig) {
      var map = new MOZ_SourceMap.SourceMapConsumer(options.orig[source]);

      if (Array.isArray(options.orig[source].sources)) {
        map._sources.toArray().forEach(function (source) {
          var sourceContent = map.sourceContentFor(source, true);
          if (sourceContent) generator.setSourceContent(source, sourceContent);
        });
      }

      maps[source] = map;
    }
    return {
      add: function (source, gen_line, gen_col, orig_line, orig_col, name) {
        var map = maps && maps[source];

        if (map) {
          var info = map.originalPositionFor({
            line: orig_line,
            column: orig_col
          });
          if (info.source === null) return;
          source = info.source;
          orig_line = info.line;
          orig_col = info.column;
          name = info.name || name;
        }

        generator.addMapping({
          name: name,
          source: source,
          generated: {
            line: gen_line + options.dest_line_diff,
            column: gen_col
          },
          original: {
            line: orig_line + options.orig_line_diff,
            column: orig_col
          }
        });
      },
      get: function () {
        return generator;
      },
      toString: function () {
        return JSON.stringify(generator.toJSON());
      }
    };
  }

  return exports;
}