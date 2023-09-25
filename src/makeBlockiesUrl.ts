import { BlockiesOptions, buildOpts, createImageData } from './blockies'

const store: Record<string, string> = Object.create(null)

const _btoa = btoa || window?.btoa || ((str: string) => Buffer.from(str, 'binary').toString('base64'))

type ResultType = 'svg' | 'imageDataUrl'

export default function makeBlockiesUrl(
	address: string,
	type: ResultType = 'svg',
	size = 8,
	caseSensitive = false,
	scale = 10
) {
	if (!address) throw new Error('Address is required')
	if (!caseSensitive) address = address.toLowerCase()

	if (store[`${size}:${address}`]) {
		return store[`${size}:${address}`]
	}

	const opts: BlockiesOptions = buildOpts({ seed: address, size, scale })
	const imageData: number[] = createImageData(opts.size)

	const width = size * scale

	const svgMarkup = `
		<svg width="${width}" height="${width}" viewBox="0 0 ${width} ${width}" xmlns="http://www.w3.org/2000/svg">
			<rect width="${width}" height="${width}" fill="${opts.bgcolor}" />
			<g fill="${opts.color}">
				${imageData
					?.map((value, i) => {
						if (value === 1) {
							const row = (i % size) * scale
							const col = Math.floor(i / size) * scale

							return `<rect width="${scale}" height="${scale}" x="${row}" y="${col}" />`
						}
					})
					.join('')}
			</g>
			<g fill="${opts.spotcolor}">
				${imageData
					?.map((value, i) => {
						if (value === 2) {
							const row = (i % size) * scale
							const col = Math.floor(i / size) * scale

							return `<rect width="${scale}" height="${scale}" x="${row}" y="${col}" />`
						}
					})
					.join('')}
			</g>
		</svg>`

	if (type === 'svg') return svgMarkup
	const base64Url = `data:image/svg+xml;base64,${_btoa(svgMarkup)}`

	store[`${size}:${address}`] = base64Url

	return base64Url
}
