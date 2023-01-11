import React from 'react'
import { BlockiesOptions, buildOpts, createImageData } from './blockies'

const store: Record<string, { opts: BlockiesOptions; imageData: number[] }> = Object.create(null)

export default function BlockiesSvgSync(
	props: { address: string; size?: number; scale?: number; caseSensitive?: boolean } & React.SVGProps<SVGSVGElement>
) {
	let { address, size = 8, scale = 10, caseSensitive = false, ...rest } = props
	const width = size * scale

	if (!address)
		return (
			<svg {...rest} width={width} height={width} viewBox={`0 0 ${width} ${width}`} xmlns='http://www.w3.org/2000/svg'>
				<rect width={width} height={width} fill='black' />
			</svg>
		)

	let opts: BlockiesOptions | null = null
	let imageData: number[] | null = null

	if (!caseSensitive) address = address.toLowerCase()

	if (store[address] && store[address].opts.size === size) {
		opts = store[address].opts
		imageData = store[address].imageData
	} else {
		opts = buildOpts({ seed: address, size, scale })
		imageData = createImageData(opts.size)

		store[address] = { opts, imageData }
	}

	return (
		<svg {...rest} width={width} height={width} viewBox={`0 0 ${width} ${width}`} xmlns='http://www.w3.org/2000/svg'>
			<rect width={width} height={width} fill={opts.bgcolor} />

			<g fill={opts.color}>
				{imageData?.map((value, i) => {
					if (value === 1) {
						const row = (i % size) * scale
						const col = Math.floor(i / size) * scale

						return <rect key={`${address}-${i}`} width={scale} height={scale} x={row} y={col} />
					}
				})}
			</g>
			<g fill={opts.spotcolor}>
				{imageData?.map((value, i) => {
					if (value === 2) {
						const row = (i % size) * scale
						const col = Math.floor(i / size) * scale

						return <rect key={`${address}-${i}`} width={scale} height={scale} x={row} y={col} />
					}
				})}
			</g>
		</svg>
	)
}
