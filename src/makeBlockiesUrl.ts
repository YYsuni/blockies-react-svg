import React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import BlockiesSvgSync from './BlockiesSvgSync'

export default function makeBlockiesUrl(address: string) {
	const blokiesMarkup = ReactDOMServer.renderToStaticMarkup(React.createElement(BlockiesSvgSync, { address }))

	return `data:image/svg+xml;base64,${window.btoa(blokiesMarkup)}`
}
