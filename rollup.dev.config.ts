import buble from 'rollup-plugin-buble';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonJs';

export default {
	entry: 'build/sikky.js',
	useStrict: false,
	plugins: [
		replace({
			'process.env.NODE_ENV': "'development'"
		}),
		buble({ exclude: 'node_modules/**' }),
        commonjs({include: 'node_modules/**'})
	],
	targets: [
		{
			dest: 'dist/sikky.js',
			format: 'umd',
			moduleName: 'Sikky',
			sourceMap: true
		}
	]
};
