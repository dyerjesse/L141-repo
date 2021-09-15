/* Copyright (c) 2021, ARTCOMPILER INC */
import {assert, message, messages, reserveCodeRange} from "./share.js";
import {
  Checker as BasisChecker,
  Transformer as BasisTransformer,
  Compiler as BasisCompiler
//} from '@graffiticode/basis';
} from '../../../../work/graffiticode/basis/index.js';

export class Checker extends BasisChecker {
  HELLO(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [];
      const val = node;
      resume(err, val);
    });
  }
  DIV(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [];
      const val = node;
      resume(err, val);
    });
  }
}

function attrFromVal(val) {
  let attr;
  if (typeof val === 'string') {
    attr = {
      'className': val,
    };
  } else {
    attr = {};
    Object.keys(val).forEach(key => {
      if (key === 'class') {
        attr['className'] = val[key];
      } else {
        const parts = key.split('-');
        let name = parts.shift();
        parts.forEach(part => {
          name += part.charAt(0).toUpperCase() + part.slice(1)
        });
        attr[name] = val[key];
      }
    });
  }
  return attr;
}

export class Transformer extends BasisTransformer {
  HELLO(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [];
      const val = `hello, ${v0}!`;
      resume(err, val);
    });
  }

  INPUT(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [].concat(e0);
      const val = {
        type: "input",
        attr: attrFromVal(v0),
      };
      resume(err, val);
    });
  }

  BUTTON(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      this.visit(node.elts[1], options, async (e1, v1) => {
        const err = [].concat(e0).concat(e1);
        const val = {
          type: "button",
          attr: attrFromVal(v0),
          elts: v1,
        };
        resume(err, val);
      });
    });
  }

  IMG(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [].concat(e0);
      const val = {
        type: "img",
        attr: attrFromVal(v0),
      };
      resume(err, val);
    });
  }

  SVG(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      this.visit(node.elts[1], options, async (e1, v1) => {
        const err = [].concat(e0).concat(e1);
        const val = {
          type: "svg",
          attr: attrFromVal(v0),
          elts: v1,
        };
        resume(err, val);
      });
    });
  }

  PATH(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      this.visit(node.elts[1], options, async (e1, v1) => {
        const err = [].concat(e0).concat(e1);
        const val = {
          type: "path",
          attr: attrFromVal(v0),
          elts: v1,
        };
        resume(err, val);
      });
    });
  }

  CODE(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      this.visit(node.elts[1], options, async (e1, v1) => {
        const err = [].concat(e0).concat(e1);
        const val = {
          type: "code",
          attr: attrFromVal(v0),
          elts: v1,
        };
        resume(err, val);
      });
    });
  }

  SPAN(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      this.visit(node.elts[1], options, async (e1, v1) => {
        const err = [].concat(e0).concat(e1);
        const val = {
          type: "span",
          attr: attrFromVal(v0),
          elts: v1,
        };
        resume(err, val);
      });
    });
  }

  P(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      this.visit(node.elts[1], options, async (e1, v1) => {
        const err = [].concat(e0).concat(e1);
        const val = {
          type: "p",
          attr: attrFromVal(v0),
          elts: v1,
        };
        resume(err, val);
      });
    });
  }

  A(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      this.visit(node.elts[1], options, async (e1, v1) => {
        const err = [].concat(e0).concat(e1);
        const val = {
          type: "a",
          attr: attrFromVal(v0),
          elts: v1,
        };
        console.log("a() val=" + JSON.stringify(val, null, 2));
        resume(err, val);
      });
    });
  }

  OL(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      this.visit(node.elts[1], options, async (e1, v1) => {
        const err = [].concat(e0).concat(e1);
        const val = {
          type: "ol",
          attr: attrFromVal(v0),
          elts: v1,
        };
        resume(err, val);
      });
    });
  }

  UL(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      this.visit(node.elts[1], options, async (e1, v1) => {
        const err = [].concat(e0).concat(e1);
        const val = {
          type: "ul",
          attr: attrFromVal(v0),
          elts: v1,
        };
        resume(err, val);
      });
    });
  }

  LI(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      this.visit(node.elts[1], options, async (e1, v1) => {
        const err = [].concat(e0).concat(e1);
        const val = {
          type: "li",
          attr: attrFromVal(v0),
          elts: v1,
        };
        resume(err, val);
      });
    });
  }

  H3(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [].concat(e0);
      const val = {
        type: "h3",
        elts: v0,
      };
      resume(err, val);
    });
  }

  TITLE(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      this.visit(node.elts[1], options, async (e1, v1) => {
        v1.elts.unshift({
          type: "title",
          elts: v0,
        });
        const err = [].concat(e0).concat(e1);
        const val = v1;
        resume(err, val);
      });
    });
  }

  DIV(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      this.visit(node.elts[1], options, async (e1, v1) => {
        const err = [].concat(e0).concat(e1);
        const val = {
          type: "div",
          attr: attrFromVal(v0),
          elts: v1,
        };
        resume(err, val);
      });
    });
  }
}

export const compiler = new BasisCompiler({
  langID: 141,
  version: 'v0.0.1',
  Checker: Checker,
  Transformer: Transformer,
});
