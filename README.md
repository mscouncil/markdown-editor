# Markdow Editor/Previewer

[![image](https://img.shields.io/badge/component-vanilla-green.svg?style=flat-square)](https://github.com/pemrouz/vanilla/#vanilla)
[![Build Status](https://travis-ci.org/pemrouz/markdown-editor.svg)](https://travis-ci.org/pemrouz/markdown-editor)
[![Coverage Status](https://coveralls.io/repos/pemrouz/markdown-editor/badge.svg?branch=master&service=github)](https://coveralls.io/github/pemrouz/markdown-editor?branch=master)
<br>[![Browser Results](https://saucelabs.com/browser-matrix/markdown-editor.svg)](https://saucelabs.com/u/markdown-editor)

GitHub-esque Markdown Editor and Markdown Previewer using CommonMark ([Remarkable](https://github.com/jonschlinkert/remarkable)).

![image](https://cloud.githubusercontent.com/assets/2184177/9157699/5e864e0c-3eff-11e5-9b65-86ef3bcac02c.png)

* The Markdown Editor includes a previewer inside it. To see a preview, simply press `Alt+P` and `Esc` to resume editing.

* By default, the styles look like the GitHub flavour but you can reset this by adding the `simple` class to the element.

* Any text pasted in which has hidden HTML elements (not HTML as plain text) will be intercepted and pasted in as `text/plain`. 

# [Usage](https://github.com/pemrouz/vanilla/#using)

---

# `markdown-editor`

### State

* **`value = ''`**: The (markdown) text value of the component

* **`preview = false`**: Whether the component is in preview or edit mode 

---

# `markdown-preview`

### State

* **`value = ''`**: The (markdown) text value that is displayed