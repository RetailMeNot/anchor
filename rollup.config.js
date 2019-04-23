/* tslint:disable */
// PLUGINS
import typescript from 'rollup-plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';
import sourceMaps from 'rollup-plugin-sourcemaps';
// TODO: Use this plugin on the production bundle, not on the module (check if intellisense breaks)
import { terser } from 'rollup-plugin-terser';

import * as packageJSON from './package.json';

const commonPlugins = [
    typescript({ tsconfig: './tsconfig.json' }),
    commonjs({
        include: 'node_modules/**',
    }),
    sourceMaps(),
    terser(),
];

const componentList = {
    index: './src/index.ts',
    autocomplete: './src/AutoComplete/index.ts',
    avatar: './src/Avatar/index.ts',
    badge: './src/Badge/index.ts',
    button: './src/Button/index.ts',
    card: './src/Card/index.ts',
    dropdown: './src/DropDown/index.ts',
    form: './src/Form/index.ts',
    grid: './src/Grid/index.ts',
    layout: './src/Layout/index.ts',
    list: './src/List/index.ts',
    menu: './src/Menu/index.ts',
    theme: './src/theme/index.ts',
    typography: './src/Typography/index.ts',
};

// Needed for tree-shaking icons. Static list for now.
[
    'AddEvent',
    'ArrowBack',
    'ArrowForward',
    'Avatar',
    'AvatarOutline',
    'BarCode',
    'BulletList',
    'Calendar',
    'Camera',
    'Cart',
    'CashBack',
    'Cells',
    'Chat',
    'Check',
    'CheckSmall',
    'ChevronDown',
    'ChevronDownSmall',
    'ChevronLeft',
    'ChevronLeftSmall',
    'ChevronRight',
    'ChevronRightSmall',
    'ChevronUp',
    'ChevronUpSmall',
    'Clock',
    'Close',
    'CloseSmall',
    'CommentMore',
    'CreditCard',
    'CrossHairs',
    'Cut',
    'Disabled',
    'Dislike',
    'Download',
    'Ellipses',
    'EllipsesVertical',
    'Envelope',
    'EnvelopeOpen',
    'Error',
    'Expand',
    'Gear',
    'GiftCard',
    'Hamburger',
    'Heart',
    'HeartOutline',
    'Home',
    'Info',
    'InfoOutline',
    'Laptop',
    'Lightning',
    'Like',
    'List',
    'Lock',
    'Map',
    'Marker',
    'MarkerOutline',
    'Mobile',
    'News',
    'Pencil',
    'Play',
    'Plus',
    'PlusSmall',
    'Print',
    'Question',
    'QuestionOutline',
    'Refresh',
    'RetailMeNotLogo',
    'SadFace',
    'Search',
    'Share',
    'Sliders',
    'Star',
    'StarHalf',
    'StarOutline',
    'Success',
    'SuccessOutline',
    'Tag',
    'Upload',
    'TagAdd',
].forEach(iconName => {
    const key = `icon-${iconName.toLowerCase()}`;
    componentList[key] = `./src/Icon/icons/${iconName}.component.tsx`;
});

export default {
    input: componentList,
    output: [
        {
            dir: './commonjs',
            format: 'cjs',
            sourcemap: true,
            named: true,
            chunkFileNames: 'anchor-[name]-[hash].js',
        },
        {
            dir: './esm',
            format: 'es',
            sourcemap: true,
            named: true,
            chunkFileNames: 'anchor-[name]-[hash].js',
        },
    ],
    plugins: commonPlugins,
    external: [
        ...Object.keys(packageJSON.dependencies || {}),
        ...Object.keys(packageJSON.peerDependencies || {}),
    ],
    experimentalCodeSplitting: true,
};
