import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'

const plugins = [external(), typescript(), nodeResolve(), commonjs()]

/** @type {import('rollup').InputOption} */
export default [
	{
		input: 'BlockieSvg.tsx',
		output: {
			name: 'BlockieSvg.js',
			dir: 'dist',
			format: 'umd',
			sourcemap: true
		},
		plugins
	},
	{
		input: 'BlockieSvgSync.tsx',
		output: {
			name: 'BlockieSvgSync.js',
			dir: 'dist',
			format: 'umd',
			sourcemap: true
		},
		plugins
	},
	{
		input: 'makeBlockiesUrl.ts',
		output: {
			name: 'makeBlockiesUrl.js',
			dir: 'dist',
			format: 'umd',
			sourcemap: true
		},
		plugins
	}
]
