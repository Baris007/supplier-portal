/* eslint-disable */
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

var babelPluginMacros = require("babel-plugin-macros");
var CleanCSS = require("clean-css");

const { name } = require("./package.json");
const cleanCSS = new CleanCSS();
const handler = (_ref) => {
  let {
    references,
    babel: { types: t },
  } = _ref;
  const { default: defaultImport = [] } = references;
  if (!defaultImport.length) return;
  function handleTemplate(path) {
    if (!t.isTaggedTemplateExpression(path.node)) {
      throw new babelPluginMacros.MacroError(
        `styled.macro must be called as a TaggedTemplateExpression`,
      );
    }
    const { tag, quasi } = path.node;
    if (!quasi.expressions.length && quasi.quasis.length === 1) {
      const raw = quasi.quasis[0].value.cooked;
      const value = cleanCSS.minify(`a{${raw}}`).styles.slice(2, -1);
      path.replaceWith(
        t.callExpression(tag, [t.arrayExpression([t.stringLiteral(value)])]),
      );
    }
  }
  defaultImport.forEach((refPath) => {
    const { parentPath } = refPath;
    if (t.isMemberExpression(parentPath.node)) {
      handleTemplate(parentPath.parentPath);
    } else if (t.isCallExpression(parentPath.node)) {
      handleTemplate(parentPath.parentPath);
    } else {
      throw new babelPluginMacros.MacroError(
        "styled.macro must be called like `styled.tag` or `styled(Component)`" +
          parentPath.node.type,
      );
    }
  });
  const [node] = defaultImport;
  const program = node.findParent(t.isProgram);
  program.node.body.unshift(
    t.importDeclaration(
      [t.importSpecifier(node.node, t.identifier("styled"))],
      t.stringLiteral(name),
    ),
  );
};
var styled_macro = babelPluginMacros.createMacro(handler, {
  configName: "jsx-dom",
});

exports.default = styled_macro;
