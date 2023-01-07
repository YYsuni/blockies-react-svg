import React from 'react'
import { BlockiesOptions, buildOpts, createImageData } from './blockies'

const store: Record<string, { opts: BlockiesOptions; imageData: number[] }> = Object.create(null)

export default function BlockiesSvgSync(
	props: { address: string; size?: number; scale?: number } & React.SVGProps<SVGSVGElement>
) {
	const { address, size = 8, ...rest } = props
	let opts: BlockiesOptions | null = null
	let imageData: number[] | null = null

	if (store[address] && store[address].opts.size === size) {
		opts = store[address].opts
		imageData = store[address].imageData
	} else {
		opts = buildOpts({ seed: address, size })
		imageData = createImageData(opts.size)

		store[address] = { opts, imageData }
	}

	const width = opts.size * opts.scale
	return (
		<svg {...rest} width={width} height={width} viewBox={`0 0 ${width} ${width}`} xmlns='http://www.w3.org/2000/svg'>
			<rect width={width} height={width} fill={opts.bgcolor} />

			{imageData?.map((value, i) => {
				const row = (i % size) * opts!.scale
				const col = Math.floor(i / size) * opts!.scale
				const color = value === 1 ? opts!.color : opts!.spotcolor

				if (value)
					return <rect key={`${address}-${i}`} x={row} y={col} width={opts!.scale} height={opts!.scale} fill={color} />
			})}
		</svg>
	)
}
