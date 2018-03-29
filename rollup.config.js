import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';

import resolve from 'rollup-plugin-node-resolve';
import sourceMaps from 'rollup-plugin-sourcemaps';
import uglify from 'rollup-plugin-uglify';

const shared = {
  entry: `compiled/formik-effect.js`,
  sourceMap: true,
  external: ['react', 'formik', 'prop-types'],
  globals: {
    react: 'React',
    formik: 'formik',
    'prop-types': 'PropTypes',
  },
  exports: 'named',
};

export default [
  Object.assign({}, shared, {
    moduleName: 'FormikEffect',
    format: 'umd',
    dest: 'dist/formik-effect.umd.js',
    plugins: [
      resolve(),
      commonjs({
        include: /node_modules/,
      }),
      sourceMaps(),
      filesize(),
      uglify(),
    ],
  }),

  Object.assign({}, shared, {
    targets: [
      { dest: 'dist/formik-effect.es6.js', format: 'es' },
      { dest: 'dist/formik-effect.js', format: 'cjs' },
    ],
    plugins: [
      resolve(),
      commonjs({
        include: /node_modules/,
      }),
      sourceMaps(),
    ],
  }),
];
