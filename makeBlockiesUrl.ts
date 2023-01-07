import React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import BlockieSvgSync from './BlockieSvgSync'

export default function makeBlockiesUrl(address: string) {
	const blokiesMarkup = ReactDOMServer.renderToStaticMarkup(React.createElement(BlockieSvgSync, { address }))

	return `data:image/svg+xml;base64,${window.btoa(blokiesMarkup)}`
}
