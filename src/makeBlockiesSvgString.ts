import { BlockiesOptions, buildOpts, createImageData } from './blockies'

const svgMarkupStore: Record<string, string> = Object.create(null)

export default function makeBlockiesSvgString(address: string, size = 8, caseSensitive = false, scale = 10) {
	if (!address) throw new Error('Address is required')
	if (!caseSensitive) address = address.toLowerCase()

	if (svgMarkupStore[`${size}:${address}`]) return svgMarkupStore[`${size}:${address}`]

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
	svgMarkupStore[`${size}:${address}`] = svgMarkup

	return svgMarkup
}
