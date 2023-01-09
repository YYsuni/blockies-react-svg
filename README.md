# blockies-react-svg

Blockies react svg function component, blocky identicons, address-unique Ethereum avatar, svg base64 url.

You can have responsive width and height without rerendering because of SVG properties. meanwhile, it will store the result.

You also can use base64 url, it is smaller(3kb) than ethereum-blockies-base64(16kb).

> the address will auto toLowerCase until set `caseSensitive` property.

## Todo
- [x] ts component
- [x] base64 url
- [x] js compile
- [ ] demo display (github pages)
- [ ] svg mirror optmization (reduce image size)
- [ ] svg polygon optmization (reduce image size)
- [ ] more shapes
- [ ] different rand algorithm

## Installation

```bash
$ npm i blockies-react-svg
```

Use react fc:

```tsx
import BlockiesSvg from 'blockies-react-svg'
// or use tsx directly:
// import BlockiesSvg from 'blockies-react-svg/src/BlockiesSvg.tsx'
// (file path may be change, please check it when error happen.)

<BlockiesSvg 
  address={address}
  className='classname'
  style={styles} 
  />
```

Use react sync component:

```tsx
import BlockiesSvgSync from 'blockies-react-svg/dist/es/BlockiesSvgSync.js'
// or use tsx directly:
// import BlockiesSvgSync from 'blockies-react-svg/src/BlockiesSvgSync.tsx'
// (file path may be change, please check it when error happen.)

<BlockiesSvgSync 
  address={address} 
  className='classname'
  style={styles} 
  />
```

Use base64 url:

```tsx
import makeBlockiesUrl from 'blockies-react-svg/dist/es/makeBlockiesUrl.js'
// or use ts directly:
// import makeBlockiesUrl from 'blockies-react-svg/src/makeBlockiesUrl.ts'
// (file path may be change, please check it when error happen.)

<img src={makeBlockiesUrl(address)} />
```

## Why SVG?

Canvas render doesn't support arbitrary size or other customized styles.

SVG is the better experience.

SVG base64 url size is smaller than canvas.
