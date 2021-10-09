var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;
  exports["Dictionary"] = Dictionary;
  exports["minify"] = minify;
  exports["parse"] = parse;
  exports["push_uniq"] = push_uniq;
  exports["TreeTransformer"] = TreeTransformer;
  exports["TreeWalker"] = TreeWalker;
  return exports;
}