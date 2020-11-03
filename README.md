# Cirque

A small tool for making art via circle packing. Made in JavaScript.


## Usage

1. Either [run it via GitHub Pages](https://bencrowder.github.io/cirque/) or download and run it somewhere else (locally, your own server, etc.).
2. Choose the settings you want.
3. Click `Generate`.
4. If you want to download the SVG, click `Download SVG`.


## Settings

- `width`: The width of the SVG to output (in pixels)
- `height`: The height of the SVG to output (in pixels)
- `circles`: How many circles to try to create
- `attempts`: How many times to try to place a circle before giving up
- `startRadius`: The beginning radius of each circle
- `maxRadius`: The max size a circle's radius can get
- `radiusStep`: The increment value to use when growing a circle up from `startRadius`
- `borderPadding`: How much empty space to leave around each circle
- `bgColor`: The background CSS color to use (hex, rgb, hsl)
- `circleColor`: The CSS color to use for the circles (hex, rgb, hsl)


### Turbulence settings

When turbulence is activated, there are two sequential sets of turbulence/displacement filters used, thus the `1` and `2` suffixes.

- `turbulence`: Set to `1` to use the built-in turbulence/displacement filters, or set to `0` to turn them off
- `turbFreq1`/`turbFreq2`: See [feTurbulence](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feTurbulence) documentation
- `turbOctaves1`/`turbOctaves2`: See [feTurbulence](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feTurbulence) documentation
- `turbScale1`/`turbScale2`: See [feDisplacementMap](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDisplacementMap) documentation
