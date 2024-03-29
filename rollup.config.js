import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'

const plugins = [external(), typescript({ useTsconfigDeclarationDir: true }), nodeResolve(), commonjs()]

/** @type {import('rollup').InputOption} */
export default {
	input: ['src/index.ts', 'src/BlockiesSvg.tsx', 'src/BlockiesSvgSync.tsx', 'src/makeBlockiesUrl.ts'],
	output: [
		{
			dir: 'dist/cjs',
			format: 'cjs',
			sourcemap: true,
			entryFileNames: '[name].cjs',
			chunkFileNames: '[name]-[hash].cjs'
		},
		{
			dir: 'dist/es',
			format: 'es',
			sourcemap: true,
			entryFileNames: '[name].mjs',
			chunkFileNames: '[name]-[hash].mjs'
		}
	],
	plugins
}
