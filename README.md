# Funkytooltips

Funkytooltips is a jQuery plugin to generate tooltips based on the data contained in HTML tags. 

### Installation

The plugin can be installed using `npm` and is meant to be used in a project that is built using a bundler like [Webpack](https://webpack.js.org/).

Otherwise, after manually downloading the package, the plugin can be build like so:

```
npm i
npm run build
```

The generated `dist/bundle.js` file can then be imported in a classical fashion, along with the default css file `src/css/jquery.funckytooltips.css`.

### Quickstart

The plugin lets you add tooltips to your markup with just one line (or so) of code.

```js
$(".my-text").funkytooltips({
   // more config if required
});
```

A tooltip will now display when hovering the following tags contained in the elements identified by the `.my-text` query: 

- `<a/>`
- `<img/>`
- `<acronym/>`

What each tooltip will display depends on the tag considered:

- `<a/>`: the tooltip will diplay the `title` and the `href` attribute
- `<img/>`: the tooltip will diplay the `alt` and the `src` attribute
- `<acronym/>`: the tooltip will diplay the `title` attribute

### Configuration

The tooltips behaviour can be configured passing to the plugin the following bits of information:

- `delay (Number)`: the time expressed in milliseconds before the tooltip appears after a tag is hovered (default `300`)

- `cssClass (String)`: the css class to apply to the tooltip element. By default this is `funky-tt`

- `deltaX and deltaY (Number)`: the offset in px from the cursor position (default `15`)

- `displayLocation (Boolean)`: whether or not to display the location of the tooltipped resource (`href` in case of `<a/>` and `src` in case of `<img/>`) (default `true`)

- `locationLength (Number)`: when to truncate the location (default: `30` characters)

- `displayMethod (String)`: what displacement strategy to use (defaul: `basic`). Other possible values are `fadeIn` and `slideDown`

### HTML structure

In case you wanted to style the tooltip youself (and hence discard the file `src/css/jquery.funckytooltips.css`), it's very useful to bear in mind its html structure. Here it is:

```html
<div id="some-randomly-generated-id" class="funky-tt">
   <span class="description">...</span>
   <span class="location">...</span>
</div>
```

### Demo

After building the plugin as explained in the `Installation` section, you can have a look at `demo/index.html` for a practical example of how to use the plugin.