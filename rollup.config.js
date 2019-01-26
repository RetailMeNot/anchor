// PLUGINS
import typescript from 'rollup-plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: './src/index.ts',
  output: [
    { file: 'commonjs/index.ts', format: 'cjs', sourcemap: true },
    { file: 'esm/index.es.js', format: 'es', sourcemap: true }
  ],
  plugins: [
    typescript({ tsconfig: './tsconfig.json' }),
    commonjs({
      include: 'node_modules/**'
    })
  ],
  external: [
    'react',
    'styled-components',
    '@rebass/grid',
    'classnames',
    'lodash',
    'rxjs',
    'polished'
  ]
}
