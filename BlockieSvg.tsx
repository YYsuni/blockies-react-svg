import { useEffect, useState } from 'react'
import { BlockiesOptions, buildOpts, createImageData } from './blockies'

const store: Record<string, { opts: BlockiesOptions; imageData: number[] }> = Object.create(null)

export default function BlockiesSvg(
	props: { address: string; size?: number; scale?: number } & React.SVGProps<SVGSVGElement>
) {
	const { address, size = 8, ...rest } = props
	const [opts, setOpts] = useState<BlockiesOptions | null>(null)
	const [imageData, setImageData] = useState<number[] | null>(null)

	useEffect(() => {
		if (address) {
			if (store[address] && store[address].opts.size === size) {
				setOpts(store[address].opts)
				setImageData(store[address].imageData)
			} else {
				const newOpts = buildOpts({ seed: address, size })
				const newImageData = createImageData(newOpts.size)
				setOpts(newOpts)
				setImageData(newImageData)

				store[address] = { opts: newOpts, imageData: newImageData }
			}
		}
	}, [address])

	if (opts && imageData) {
		const width = opts.size * opts.scale
		return (
			<svg {...rest} width={width} height={width} viewBox={`0 0 ${width} ${width}`} xmlns='http://www.w3.org/2000/svg'>
				<rect width={width} height={width} fill={opts.bgcolor} />

				{imageData?.map((value, i) => {
					const row = (i % size) * opts.scale
					const col = Math.floor(i / size) * opts.scale
					const color = value === 1 ? opts.color : opts.spotcolor

					if (value)
						return <rect key={`${address}-${i}`} x={row} y={col} width={opts.scale} height={opts.scale} fill={color} />
				})}
			</svg>
		)
	} else return <svg {...rest} width={size * 10} height={size * 10} xmlns='http://www.w3.org/2000/svg' />
}
