# blockies-base64-svg

SVG Blockies base64 generation in browser or nodejs.

It allows you to use responsive width and height without rerendering because of SVG properties, and it will store the result.

Base64 url is smaller(~2kb) than the canvas size(ethereum-blockies-base64, ~16kb), so it is suitable for server-side rendering.(8x8)

> The address will automatically be converted to lower case until you set the `caseSensitive` parameter.

![Sample of generated blockies](sample.png "Blockies")

[**Demo of React SPA**](https://yysuni.github.io/blockies-react-svg/) (you can read the code in the `gh-pages` branch)

## Installation

```bash
$ npm i blockies-base64-svg
```

## Usage

```tsx
import makeBlockiesUrl from 'blockies-base64-svg'

const url = makeBlockiesUrl(address)
// In browser
// <img src={url} />
```

## Parameters

1. `address`: `string`
2. `size`: `number` (default 8)
2. `caseSensitive`: `boolean` (default false)
2. `scale`: `number` (default 10)


## Why SVG?

1. Canvas render doesn't support arbitrary size or other customized styles.

2. SVG is the better experience, because of the infinite resolution.

3. SVG file size is smaller than canvas.
