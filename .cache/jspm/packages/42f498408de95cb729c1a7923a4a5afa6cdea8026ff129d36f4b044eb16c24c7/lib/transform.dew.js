var exports = {},
    _dewExec = false;
export function dew() {
  if (_dewExec) return exports;
  _dewExec = true;

  function TreeTransformer(before, after) {
    TreeWalker.call(this);
    this.before = before;
    this.after = after;
  }

  TreeTransformer.prototype = new TreeWalker();

  (function (DEF) {
    function do_list(list, tw) {
      return MAP(list, function (node) {
        return node.transform(tw, true);
      });
    }

    DEF(AST_Node, noop);
    DEF(AST_LabeledStatement, function (self, tw) {
      self.label = self.label.transform(tw);
      self.body = self.body.transform(tw);
    });
    DEF(AST_SimpleStatement, function (self, tw) {
      self.body = self.body.transform(tw);
    });
    DEF(AST_Block, function (self, tw) {
      self.body = do_list(self.body, tw);
    });
    DEF(AST_Do, function (self, tw) {
      self.body = self.body.transform(tw);
      self.condition = self.condition.transform(tw);
    });
    DEF(AST_While, function (self, tw) {
      self.condition = self.condition.transform(tw);
      self.body = self.body.transform(tw);
    });
    DEF(AST_For, function (self, tw) {
      if (self.init) self.init = self.init.transform(tw);
      if (self.condition) self.condition = self.condition.transform(tw);
      if (self.step) self.step = self.step.transform(tw);
      self.body = self.body.transform(tw);
    });
    DEF(AST_ForIn, function (self, tw) {
      self.init = self.init.transform(tw);
      self.object = self.object.transform(tw);
      self.body = self.body.transform(tw);
    });
    DEF(AST_With, function (self, tw) {
      self.expression = self.expression.transform(tw);
      self.body = self.body.transform(tw);
    });
    DEF(AST_Exit, function (self, tw) {
      if (self.value) self.value = self.value.transform(tw);
    });
    DEF(AST_LoopControl, function (self, tw) {
      if (self.label) self.label = self.label.transform(tw);
    });
    DEF(AST_If, function (self, tw) {
      self.condition = self.condition.transform(tw);
      self.body = self.body.transform(tw);
      if (self.alternative) self.alternative = self.alternative.transform(tw);
    });
    DEF(AST_Switch, function (self, tw) {
      self.expression = self.expression.transform(tw);
      self.body = do_list(self.body, tw);
    });
    DEF(AST_Case, function (self, tw) {
      self.expression = self.expression.transform(tw);
      self.body = do_list(self.body, tw);
    });
    DEF(AST_Try, function (self, tw) {
      self.body = do_list(self.body, tw);
      if (self.bcatch) self.bcatch = self.bcatch.transform(tw);
      if (self.bfinally) self.bfinally = self.bfinally.transform(tw);
    });
    DEF(AST_Catch, function (self, tw) {
      self.argname = self.argname.transform(tw);
      self.body = do_list(self.body, tw);
    });
    DEF(AST_Definitions, function (self, tw) {
      self.definitions = do_list(self.definitions, tw);
    });
    DEF(AST_VarDef, function (self, tw) {
      self.name = self.name.transform(tw);
      if (self.value) self.value = self.value.transform(tw);
    });
    DEF(AST_Lambda, function (self, tw) {
      if (self.name) self.name = self.name.transform(tw);
      self.argnames = do_list(self.argnames, tw);
      self.body = do_list(self.body, tw);
    });
    DEF(AST_Call, function (self, tw) {
      self.expression = self.expression.transform(tw);
      self.args = do_list(self.args, tw);
    });
    DEF(AST_Sequence, function (self, tw) {
      self.expressions = do_list(self.expressions, tw);
    });
    DEF(AST_Dot, function (self, tw) {
      self.expression = self.expression.transform(tw);
    });
    DEF(AST_Sub, function (self, tw) {
      self.expression = self.expression.transform(tw);
      self.property = self.property.transform(tw);
    });
    DEF(AST_Unary, function (self, tw) {
      self.expression = self.expression.transform(tw);
    });
    DEF(AST_Binary, function (self, tw) {
      self.left = self.left.transform(tw);
      self.right = self.right.transform(tw);
    });
    DEF(AST_Conditional, function (self, tw) {
      self.condition = self.condition.transform(tw);
      self.consequent = self.consequent.transform(tw);
      self.alternative = self.alternative.transform(tw);
    });
    DEF(AST_Array, function (self, tw) {
      self.elements = do_list(self.elements, tw);
    });
    DEF(AST_Object, function (self, tw) {
      self.properties = do_list(self.properties, tw);
    });
    DEF(AST_ObjectProperty, function (self, tw) {
      self.value = self.value.transform(tw);
    });
  })(function (node, descend) {
    node.DEFMETHOD("transform", function (tw, in_list) {
      var x, y;
      tw.push(this);
      if (tw.before) x = tw.before(this, descend, in_list);

      if (typeof x === "undefined") {
        x = this;
        descend(x, tw);

        if (tw.after) {
          y = tw.after(x, in_list);
          if (typeof y !== "undefined") x = y;
        }
      }

      tw.pop();
      return x;
    });
  });

  return exports;
}