import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'

const plugins = [external(), typescript(), nodeResolve(), commonjs()]

/** @type {import('rollup').InputOption} */
export default {
	input: 'src/makeBlockiesUrl.ts',
	output: [
		{
			dir: 'dist/cjs',
			format: 'cjs',
			sourcemap: true
		},
		{
			dir: 'dist/es',
			format: 'es',
			sourcemap: true
		}
	],
	plugins
}
