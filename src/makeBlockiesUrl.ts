import makeBlockiesSvgString from './makeBlockiesSvgString'

const store: Record<string, string> = Object.create(null)

const _btoa = btoa || window?.btoa || ((str: string) => Buffer.from(str, 'binary').toString('base64'))

export default function makeBlockiesUrl(address: string, size = 8, caseSensitive = false, scale = 10) {
	if (store[`${size}:${address}`]) {
		return store[`${size}:${address}`]
	}
	const svgMarkup = makeBlockiesSvgString(address, size, caseSensitive, scale)
	const base64Url = `data:image/svg+xml;base64,${_btoa(svgMarkup)}`
	store[`${size}:${address}`] = base64Url
	return base64Url
}
