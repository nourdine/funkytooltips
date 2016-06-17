# funkytooltips

This jQuery plugin lets you add tooltips to your markup with just one line (or so) of code.

```js
$(".my-text").funkytooltips({
   // config
});
```

A tooltip will now display when hovering the following tags contained in `.my-text`: 

- `a`
- `img`
- `acronym`

What the each tooltip will display depends on the tag considered:

- `a`: the `title` and the `href` attribute
- `img`: the `alt` and the `src` attribute
- `acronym`: the `title` attribute

### Config

### Demo

See `demo/index.html` for a practicle examples of how to use it.

