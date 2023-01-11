# blockies-react-svg

Blockies react SVG function component, blocky identicons, address-unique ethereum avatar, SVG base64 generation in browser or nodejs.

It allows you to use responsive width and height without rerendering because of SVG properties, and it will store the result.


Base64 url is smaller(~2kb) than the canvas size(~16kb), so it is suitable for server-side rendering.(8x8)

> The address will automatically be converted to lower case until you set the `caseSensitive` property.

![Sample of generated blockies](sample.png "Blockies")

[**Demo of React SPA**](https://yysuni.github.io/blockies-react-svg/) (you can read the code in the `gh-pages` branch)

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

## Installation

```bash
$ npm i blockies-react-svg
```

## Usage

### 1. Use React FC:

```tsx
import BlockiesSvg from 'blockies-react-svg'
// Or use tsx directly:
// import BlockiesSvg from 'blockies-react-svg/src/BlockiesSvg.tsx'
// (The path to the file may have change, please check it when error happen.)

<BlockiesSvg 
  address={address}
  className='classname'
  style={styles} 
  />
```

### 2. Use Base64 URL:

```tsx
import makeBlockiesUrl from 'blockies-react-svg/dist/es/makeBlockiesUrl.js'
// Or use ts directly:
// import makeBlockiesUrl from 'blockies-react-svg/src/makeBlockiesUrl.ts'
// (The path to the file may have change, please check it when error happen.)

<img src={makeBlockiesUrl(address)} />
```

### 3. Use React Sync Component:

```tsx
import BlockiesSvgSync from 'blockies-react-svg/dist/es/BlockiesSvgSync.js'
// or use tsx directly:
// import BlockiesSvgSync from 'blockies-react-svg/src/BlockiesSvgSync.tsx'
// (The path to the file may have change, please check it when error happen.)

<BlockiesSvgSync 
  address={address} 
  className='classname'
  style={styles} 
  />
```


## Why SVG?

1. Canvas render doesn't support arbitrary size or other customized styles.

2. SVG is the better experience, because of the infinite resolution.

3. SVG file size is smaller than canvas.
