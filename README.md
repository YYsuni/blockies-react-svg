# blockies-react-svg

Blockies react svg function component, blocky identicons, address-unique Ethereum avatar.

You can have responsive width and height without rerendering because of SVG properties. meanwhile, it will store the result.

## Installation

```bash
$ npm i blockies-react-svg
```


In your ts react project:
```tsx
import BlockiesSvg from 'blockies-react-svg'

<BlockiesSvg
  address={address}
  className='classname'
  style={styles}
/>

```

## Why SVG?

Canvas render doesn't support arbitrary size or other customized styles.

SVG is the better experience.