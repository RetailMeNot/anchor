/* tslint:disable */
// PLUGINS
import typescript from 'rollup-plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';
import sourceMaps from 'rollup-plugin-sourcemaps';
import { terser } from 'rollup-plugin-terser';

import * as packageJSON from './package.json';

const commonPlugins = [
    typescript({ tsconfig: './tsconfig.json' }),
    commonjs({
        include: 'node_modules/**'
    }),
    sourceMaps(),
    terser()
];

export default {
    input: {
        index: './src/index.ts',
        autocomplete: './src/AutoComplete/index.ts',
        avatar: './src/Avatar/index.ts',
        badge: './src/Badge/index.ts',
        button: './src/Button/index.ts',
        card: './src/Card/index.ts',
        dropdown: './src/DropDown/index.ts',
        form: './src/Form/index.ts',
        grid: './src/Grid/index.ts',
        icon: './src/Icon/index.ts',
        layout: './src/Layout/index.ts',
        list: './src/List/index.ts',
        menu: './src/Menu/index.ts',
        theme: './src/theme/index.ts',
        typography: './src/Typography/index.ts',
    },
    output: [
        {
            dir: './commonjs',
            format: 'cjs',
            sourcemap: true,
            named: true,
            chunkFileNames: 'anchor-[name]-[hash].js'
        },
        {
            dir: './esm',
            format: 'es',
            sourcemap: true,
            named: true,
            chunkFileNames: 'anchor-[name]-[hash].js'
        }
    ],
    plugins: commonPlugins,
    external: [
        ...Object.keys(packageJSON.dependencies || {}),
        ...Object.keys(packageJSON.peerDependencies || {}),
    ],
    experimentalCodeSplitting: true
}
