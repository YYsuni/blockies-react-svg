# blockies-react-svg

Blockies react svg function component, blocky identicons, address-unique Ethereum avatar, svg base64 url.

You can have responsive width and height without rerendering because of SVG properties. meanwhile, it will store the result.

You also can use base64 url, it is smaller(3kb) than ethereum-blockies-base64(16kb).

## Installation

```bash
$ npm i blockies-react-svg
```


Use react fc:
```tsx
import BlockiesSvg from 'blockies-react-svg'

<BlockiesSvg
  address={address}
  className='classname'
  style={styles}
/>

```

Use react sync component:
```tsx
import BlockiesSvgSync from 'blockies-react-svg/BlockieSvgSync.tsx'

<BlockiesSvgSync
  address={address}
  className='classname'
  style={styles}
/>

```

Use base64 url:
```tsx
import BlockiesSvgSync from 'blockies-react-svg/makeBlockiesUrl.ts'

<img
  src={makeBlockiesUrl(address)}
/>
```

## Why SVG?

Canvas render doesn't support arbitrary size or other customized styles.

SVG is the better experience.

SVG base64 url size is smaller than canvas.