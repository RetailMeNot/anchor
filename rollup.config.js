/* tslint:disable */
// PLUGINS
import typescript from 'rollup-plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';

import * as packageJSON from './package.json';

export default {
    input: {
        index: './src/index.ts',
        autocomplete: './src/AutoComplete/AutoComplete.component.tsx',
        avatar: './src/Avatar/Avatar.component.tsx',
        badge: './src/Badge/Badge.component.tsx',
        button: './src/Button/Button.component.tsx',
        card: './src/Card/Card.component.tsx',
        dropdown: './src/DropDown/DropDown.component.tsx',
        input: './src/Form/Input/Input.component.tsx',
        grid: './src/Grid/Grid/Grid.component.tsx',
        adaptor: './src/Grid/Adaptor/Adaptor.component.tsx',
        icon: './src/Icon/Icon.component.tsx',
        header: './src/Layout/Header/Header.component.tsx',
        footer: './src/Layout/Footer/Footer.component.tsx',
        page: './src/Layout/Page/Page.component.tsx',
        sider: './src/Layout/Sider/Sider.component.tsx',
        list: './src/List/List.component.tsx',
        menu: './src/Menu/Menu.component.tsx',
        theme: './src/theme/index.ts',
        typography: './src/Typography/Typography.component.tsx',
    },
    output: [
        {
            // file: packageJSON.main,
            dir: './commonjs',
            format: 'cjs',
            sourcemap: true,
            named: true
        },
        {
            // file: packageJSON.module,
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

