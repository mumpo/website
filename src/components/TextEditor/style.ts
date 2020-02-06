import { DefaultTheme } from 'styled-components';

export const style = (theme: DefaultTheme) => ({
    "code[class*=\"language-\"]": {
        "color": theme.main.fontColor,
        "fontFamily": "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
        "direction": "ltr",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "padding": "0.5em 0",
    },
    "code:nth-child(1)": {
        "padding-left": "0.5em",
        "paddingRight": "0.5em"
    },
    "pre[class*=\"language-\"]": {
        "display": "flex",
        "textAlign": "left",
        "whiteSpace": "pre",
        "wordSpacing": "normal",
        "wordBreak": "normal",
        "lineHeight": "1.5",
        "MozTabSize": "4",
        "OTabSize": "4",
        "tabSize": "4",
        "WebkitHyphens": "none",
        "MozHyphens": "none",
        "msHyphens": "none",
        "hyphens": "none",
        "margin": "0",
        "overflow": "auto",
        "background": theme.window.background
    },
    "comment": {
        "color": theme.code.gray
    },
    "prolog": {
        "color": theme.code.gray
    },
    "doctype": {
        "color": theme.code.gray
    },
    "cdata": {
        "color": theme.code.gray
    },
    "punctuation": {},
    ".namespace": {
        "Opacity": ".7"
    },
    "property": {
        "color": "#96CBFE"
    },
    "keyword": {
        "color": "#ea5b65"
    },
    "tag": {
        "color": "#96CBFE"
    },
    "class-name": {
        "color": theme.code.yellow
    },
    "maybe-class-name": {
        "color": theme.code.yellow,
    },
    "boolean": {
        "color": theme.code.green
    },
    "constant": {
        "color": theme.code.green
    },
    "symbol": {
        "color": "#f92672"
    },
    "deleted": {
        "color": "#f92672"
    },
    "number": {
        "color": "#3dacec"
    },
    "selector": {
        "color": theme.code.green
    },
    "attr-name": {
        "color": theme.code.green
    },
    "string": {
        "color": theme.code.green
    },
    "char": {
        "color": theme.code.green
    },
    "builtin": {
        "color": "#3dacec"
    },
    "inserted": {
        "color": "#3dacec"
    },
    "variable": {
        "color": "#C6C5FE"
    },
    "operator": {
        "color": "#ea5b65"
    },
    "entity": {
        "color": theme.code.yellow,
        "cursor": "help"
    },
    "url": {
        "color": "#96CBFE"
    },
    ".language-css .token.string": {
        "color": "#87C38A"
    },
    ".style .token.string": {
        "color": "#87C38A"
    },
    "atrule": {
        "color": "#F9EE98"
    },
    "attr-value": {
        "color": "#F9EE98"
    },
    "function": {
        "color": "#c06fd4"
    },
    "regex": {
        "color": "#E9C062"
    },
    "important": {
        "color": "#fd971f",
        "fontWeight": "bold"
    },
    "bold": {
        "fontWeight": "bold"
    },
    "italic": {
        "fontStyle": "italic"
    }
});
