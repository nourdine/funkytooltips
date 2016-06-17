# funkytooltips

### Installation

Include `jquery.js`, `jquery.funkytooltips.js` and `jquery.funkytooltips.css` (for basic styling). 

### Quickstart

This jQuery plugin lets you add tooltips to your markup with just one line (or so) of code.

```js
$(".my-text").funkytooltips({
   // config
});
```

A tooltip will now display when hovering the following tags contained in `.my-text`: 

- `<a/>`
- `<img/>`
- `<acronym/>`

What each tooltip will display depends on the tag considered:

- `<a/>`: the `title` and the `href` attribute
- `<img/>`: the `alt` and the `src` attribute
- `<acronym/>`: the `title` attribute

### Config

The tooltips behaviour can be configured passing to the plugin the following bits of information:

- `delay (Number)`: how many milliseconds before the tooltip appears when the a certain tag is hovered (default `300`)
- `cssClass (String)`: the css class to apply to the tooltip element. By default this is `funky-tt` (defined in `jquery.funkytooltips.css`)
- `deltaX and deltaX (Number)`: the offset in px from the cursor position (default `15`)
- `displayLocation (Boolean)`: whether or not to display the location of the tooltipped resource (`href` in case of `<a/>` and `src` in case of '<img/>') (default `true`)

### HTML structure

In case you wanted to style the tooltip youself, it's useful to bear in mind its html structure. Here it is:

```html
<div id="some-randomly-generated-id" class="funky-tt">
   <span class="description">description</span>
   <span class="location">location</span>
</div>
```

### Demo

See `demo/index.html` for a practical examples of how to use it.

