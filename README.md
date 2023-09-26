# blockies-react-svg

<p >
  <a href="https://www.npmjs.com/package/blockies-react-svg" target="_blank">
    <img src="https://img.shields.io/npm/v/blockies-react-svg" />
  </a>
  <a href="https://www.npmjs.com/package/blockies-react-svg" target="_blank">
    <img src="https://img.shields.io/npm/dm/blockies-react-svg.svg" />
  </a>
    <a href="https://github.com/YYsuni/blockies-react-svg/blob/main/LICENSE" target="_blank">
    <img src="https://img.shields.io/npm/l/blockies-react-svg.svg">
  </a>
</p>

Blockies react SVG function component, blocky identicons, address-unique ethereum avatar, SVG base64 generation in browser or nodejs.

It allows you to use responsive width and height without rerendering because of SVG properties, and it will store the result.


Base64 url is smaller(~2kb) than the canvas size(~16kb), so it is suitable for server-side rendering.(8x8)

> The address will automatically be converted to lower case until you set the `caseSensitive` property.

![Sample of generated blockies](sample.png "Blockies")



## Installation

```bash
$ npm i blockies-react-svg
```

## Usage


```tsx
import { BlockiesSvg, BlockiesSvgSync, makeBlockiesUrl, makeBlockiesSvgString } from 'blockies-react-svg'

// <BlockiesSvgSync 
<BlockiesSvg 
  address={address}
//size={8}
//scale={10}
//caseSensitive={false}
//defaultBackgroundColor="black"
  className='classname'
  style={styles} 
  />

<img src={makeBlockiesUrl(address)} />

<div dangerouslySetInnerHTML={{ __html: makeBlockiesSvgString(address) }} />

```


## Why SVG?

1. Canvas render doesn't support arbitrary size or other customized styles.

2. SVG is the better experience, because of the infinite resolution.

3. SVG file size is smaller than canvas.


## Todo
- [x] ts component
- [x] base64 url
- [x] js compile
- [x] demo display (github pages)
- [x] pure base64 (remove react-dom/server dependence, ~70kb bundle size)
- [x] support nodejs
- [ ] svg mirror optmization (reduce image size)
- [ ] svg polygon optmization (reduce image size)
- [ ] more shapes
- [ ] different rand algorithm