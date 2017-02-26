(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.chosen = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = markdownEditor;
function markdownEditor(node, state) {
  var decode = function decode(d) {
    return d.replace(/\\r\\n/mg, '\n');
  },
      encode = function encode(d) {
    return d.replace(/(<br>|\n)/mg, '\\r\\n');
  },
      focus = function focus(d) {
    return o('textarea').node().focus();
  },
      value = decode(defaults(state, 'value', '')),
      preview = defaults(state, 'preview', false),
      o = once(node);

  o.on('click', focus).classed('preview', preview);

  o('textarea', 1).property('value', value).on('input.md', input).on('paste.md', paste).on('keyup.md', keyup);

  o('markdown-preview', { value: value });

  function keyup(d, i, el, e) {
    if (e.key == 'p' && e.altKey) o.draw(state.preview = true);

    if (e.key == 'Escape') o.draw(state.preview = false);
  }

  function paste(d, i, el, e) {
    e.preventDefault();
    document.execCommand("insertHTML", false, e.clipboardData.getData('text/plain'));
  }

  function input(d, i, el, e) {
    if (state.preview) return e.preventDefault();
    state.value = el.value;
    o.draw();
  }
}
},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = markdownPreview;
// import Remarkable from 'remarkable'

function markdownPreview(node, _ref) {
  var value = _ref.value;

  var mark = new Remarkable({ breaks: true, linkify: true }),
      md = mark.render.bind(mark),
      decode = function decode(d) {
    return d.replace(/\\r\\n/mg, '\n');
  };

  once(node)('.content', 1).html(md(decode(value)));
}
},{}],3:[function(require,module,exports){
module.exports = {
    "markdown-editor.css": {
        "name": "markdown-editor.css",
        "body": "*, *::before, *::after { \r\n  box-sizing: border-box }\r\n\r\n:host {\r\n  border: none;\r\n  outline: none;\r\n  border-radius: 3px;\r\n  position: relative;\r\n  display: inline-block; }\r\n\r\n:host(::after) {\r\n  content: 'Preview: Alt+P';\r\n  position: absolute;\r\n  right: 22px;\r\n  top: 8px;\r\n  font-size: 9px;\r\n  font-family: 'Helvetica Neue', Helvetica;\r\n  background: rgba(0,0,0,0.05);\r\n  color: black;\r\n  font-weight: bold;\r\n  padding: 4px;\r\n  border-radius: 3px;\r\n  opacity: 0;\r\n  border: 1px solid rgba(0,0,0,0.2);\r\n  pointer-events: none;\r\n  transition: 200ms opacity; }\r\n\r\n:host(.preview)::after {\r\n  content: 'Edit: Escape'; }\r\n\r\n:host(:hover)::after {\r\n  opacity: 0.3 }\r\n\r\ntextarea {\r\n  overflow: auto;\r\n  display: block;\r\n  color: rgb(51, 51, 51);\r\n  text-align: left;\r\n  margin: 0px;\r\n  width: 100%;\r\n  height: 100%;\r\n  min-height: inherit;\r\n  font-family: inherit;\r\n  font-size: inherit;\r\n  padding: 10px;\r\n  border: 1px solid rgb(204, 204, 204);\r\n  border-radius: 3px;\r\n  line-height: 22.4px;\r\n  background: rgb(250, 250, 250); }\r\n\r\nmarkdown-preview { \r\n  display: none; } \r\n\r\n:host(.preview) markdown-preview { \r\n  display: block; } "
    },
    "markdown-editor": {
        "name": "markdown-editor",
        "body": require('./markdown-editor/markdown-editor.js').default || require('./markdown-editor/markdown-editor.js'),
        "headers": {
            "needs": "[css]"
        }
    },
    "markdown-preview.css": {
        "name": "markdown-preview.css",
        "body": "*, *::before, *::after { \r\n  box-sizing: border-box }\r\n  \r\n:host {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  left: 0%;\r\n  top: 0%;\r\n  background: rgb(250,250,250);\r\n  box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);\r\n  border: 1px solid rgb(204, 204, 204);\r\n  padding: 10px; \r\n  font-family: inherit;\r\n  font-size: inherit; \r\n  overflow-y: scroll;\r\n  box-sizing: border-box; \r\n  color: rgb(51, 51, 51);\r\n  text-align: left;\r\n  border-radius: 3px; }\r\n\r\n:host(.simple) {\r\n  box-shadow: none;\r\n  position: static;\r\n  box-shadow: none;\r\n  border: none;\r\n  background: none;\r\n  padding: 0; }\r\n\r\n  :host > div {\r\n    line-height: inherit;\r\n    font-size: 14px; }\r\n\r\n  :host > div > *:first-child {\r\n    margin-top: 0px; }\r\n\r\n  :host > div h1 {\r\n    padding: 10px 0;\r\n    border-bottom-color: rgb(238, 238, 238);\r\n    border-bottom-style: solid;\r\n    border-bottom-width: 1px; }\r\n\r\n  :host > div a[href] {\r\n    text-decoration: none;\r\n    color: #4183c4; }\r\n\r\n  :host > div a[href]:hover {\r\n    text-decoration: underline;\r\n    color: #4183c4; }\r\n\r\n:host(.brief) {\r\n  overflow: hidden;\r\n  opacity: 0.8;\r\n  font-weight: 400; \r\n  font-size: 8px; }\r\n    \r\n  :host(.brief) > div {\r\n    line-height: 23px;\r\n    display: inline-flex; }\r\n\r\n  :host(.brief) > div > * {\r\n    display: none; }\r\n\r\n  :host(.brief) > div > p:first-of-type {\r\n    display:block;\r\n    font-size: 12px;\r\n    font-weight: normal; \r\n    pointer-events: none;\r\n    color: rgb(51,51,51); \r\n    margin: 0;\r\n    padding: 0; }"
    },
    "markdown-preview": {
        "name": "markdown-preview",
        "body": require('./markdown-preview/markdown-preview.js').default || require('./markdown-preview/markdown-preview.js'),
        "headers": {
            "needs": "[css]"
        }
    }
}
},{"./markdown-editor/markdown-editor.js":1,"./markdown-preview/markdown-preview.js":2}]},{},[3])(3)
});