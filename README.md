# Markdown Editor

Realtime, Collaborative GitHub-esque Markdown Editor and Markdown Previewer using CommonMark ([Remarkable](https://github.com/jonschlinkert/remarkable)).

![image](https://cloud.githubusercontent.com/assets/2184177/9157699/5e864e0c-3eff-11e5-9b65-86ef3bcac02c.png)

# Getting Started

You can simply mount the [index.js](https://github.com/pemrouz/markdown-editor/blob/master/index.js) which will contribute the following two resources into your application: `markdown-editor` and `markdown-preview`.

```js
var markdown = require('markdown-editor')

ripple
  .resource(markdown)
```

Then use it in your app like any other Web Component:

```html
<markdown-editor value="# Heh\r\nSay what?">
```

```html
<markdown-preview>
  # Foo
  
  Bar
</markdown-preview>
```

# Features

* The Markdown Editor includes a previewer inside it. To see a preview, simply press `Alt+P` and `Esc` to resume editing.

* For the Markdown Previewer, you can specify the text to render via the inner HTML (see above) or by supplying a data resource (see [test](https://github.com/pemrouz/markdown-editor/blob/master/test/views/index.jade)). Doing so will make this a _collaborative_ editor, since changes to the data will propagate to other editors too.

```html
<markdown-preview data="markdown-data">
```
* For the Markdown Editor, it extends the native `input` element, so the API for getting and setting the raw text at any time is simply `.value` on the element.

* By default, the styles look like the GitHub flavour but you can reset this by adding the `simple` class to the element.

* Any text pasted in which has hidden HTML elements (not HTML as plain text) will be intercepted and pasted in as `text/plain`. 
