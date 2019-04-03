/* tslint:disable */
// PLUGINS
import typescript from 'rollup-plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';

import * as packageJSON from './package.json';

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
            named: true
        },
        {
            dir: './esm',
            format: 'es',
            sourcemap: true,
            named: true
        }
    ],
    plugins: [
        typescript({ tsconfig: './tsconfig.json' }),
        commonjs({
            include: 'node_modules/**'
        }),
    ],
    external: [
        ...Object.keys(packageJSON.dependencies || {}),
        ...Object.keys(packageJSON.peerDependencies || {}),
    ],
    experimentalCodeSplitting: true
}

