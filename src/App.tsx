import BlockiesSvg from 'blockies-react-svg'
import BlockiesSvgSync from 'blockies-react-svg/dist/es/BlockiesSvgSync.js'
import makeBlockiesUrl from 'blockies-react-svg/dist/es/makeBlockiesUrl.js'

const ADDRESSES = [
	'0x4bbeEB066eD09B7AEd07bF39EEe0460DFa261520',
	'0x000528583ba0c881f4d26a1ff50886fc89efc03f',
	'0x01122df2b7d1c0a6ad94589da045af3885bedbbc',
	'0x000ba5e704c33c58b5e7949f67344821fa54bd29',
	'0x000587ac53175fc48d7b3e36d9c62f87275e1f2f',
	'0x000a9a0c2fb94536452aba2d199f11c404d508d3',
	'0x12333e7c757cf270bd55bf988ca267014aaa463c',
	'0x068899cceb463ed483b79b565dde3bdbc90f598a'
]

function App() {
	return (
		<>
			<h1 className='mt-10 text-center text-3xl font-semibold'>React SVG Blockies Examples</h1>
			<div className='mx-auto mt-8 flex flex-col gap-y-6 p-6 text-xs'>
				<ul className='flex justify-center gap-6'>
					<li className='max-w-[160px] flex-1'>
						<div>
							<BlockiesSvg address={''} className='h-full w-full rounded-lg' />
						</div>
						<div className='two-lines mt-4 w-full break-all text-center font-mono text-slate-400'>empty</div>
						<div className='break-all text-center font-mono font-semibold text-slate-400'>{`<BlockiesSvg />`}</div>
					</li>
					{ADDRESSES.map((a, i) => (
						<li className='max-w-[160px] flex-1' key={a}>
							<div>
								<BlockiesSvg address={a} scale={10 + i * 10} className='h-full w-full rounded-lg' />
							</div>
							<div className='two-lines mt-4 w-full break-all text-center font-mono text-slate-400'>{a}</div>
							<div className='break-all text-center font-mono font-semibold text-slate-400'>{`<BlockiesSvg />`}</div>
						</li>
					))}
				</ul>
				<ul className='flex justify-center gap-6'>
					<li className='max-w-[160px] flex-1'>
						<div>
							<BlockiesSvgSync address={''} className='h-full w-full rounded-lg' />
						</div>
						<div className='two-lines mt-4 w-full break-all text-center font-mono text-slate-400'>empty</div>
						<div className='break-all text-center font-mono font-semibold text-slate-400'>{`<BlockiesSvg />`}</div>
					</li>
					{ADDRESSES.map((a, i) => (
						<li className='max-w-[160px] flex-1' key={a}>
							<div>
								<BlockiesSvgSync address={a} scale={10 + i * 10} className='h-full w-full rounded-lg' />
							</div>
							<div className='two-lines mt-4 w-full break-all text-center font-mono text-slate-400'>{a}</div>
							<div className='break-all text-center font-mono font-semibold text-slate-400'>{`<BlockiesSvgSync />`}</div>
						</li>
					))}
				</ul>
				<ul className='flex justify-center gap-6'>
					{ADDRESSES.map((a, i) => {
						const url = makeBlockiesUrl(a, 8, false, 10 + i * 10)
						const fileSizeInByte = Math.ceil(url.length / 4) * 3
						return (
							<li className='max-w-[160px] flex-1' key={a}>
								<div>
									<img src={url} className='h-full w-full rounded-lg' />
								</div>
								<div className='two-lines mt-4 w-full break-all text-center font-mono text-slate-400'>{a}</div>
								<div className='break-all text-center font-mono font-semibold text-slate-400'>{`makeBlockiesUrl`}</div>
								<div className='break-all text-center font-mono font-semibold text-slate-400'>
									{(fileSizeInByte / 10 ** 3).toPrecision(3)}KB
								</div>
							</li>
						)
					})}
				</ul>
			</div>
		</>
	)
}

export default App
