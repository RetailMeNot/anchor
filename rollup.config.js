/* tslint:disable */
// PLUGINS
import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';
import sourceMaps from 'rollup-plugin-sourcemaps';
// TODO: Use this plugin on the production bundle, not on the module (check if intellisense breaks)
// import { terser } from 'rollup-plugin-terser';

import * as packageJSON from './package.json';

const commonPlugins = [
    typescript({ tsconfig: './tsconfig.json' }),
    commonjs({
        include: 'node_modules/**',
    }),
    sourceMaps(),
    // terser(),
    babel({
        exclude: 'node_modules/**',
        extensions: ['ts', 'tsx'],
    }),
];

// Needed for tree-shaking. Static list for now.
const componentList = {
    // COMPONENTS
    index: './src/index.ts',
    autocomplete: './src/AutoComplete/index.ts',
    avatar: './src/Avatar/index.ts',
    badge: './src/Badge/index.ts',
    button: './src/Button/index.ts',
    card: './src/Card/index.ts',
    dropdown: './src/DropDown/index.ts',
    form: './src/Form/index.ts',
    grid: './src/Grid/index.ts',
    hero: './src/Hero/index.ts',
    layout: './src/Layout/index.ts',
    list: './src/List/index.ts',
    menu: './src/Menu/index.ts',
    typography: './src/Typography/index.ts',
    // THEME
    theme: './src/theme/index.ts',
    // ICONS
    addevent: './src/Icon/Icons/AddEvent.component.tsx',
    arrowback: './src/Icon/Icons/ArrowBack.component.tsx',
    arrowforward: './src/Icon/Icons/ArrowForward.component.tsx',
    avataricon: './src/Icon/Icons/AvatarIcon.component.tsx',
    avataroutline: './src/Icon/Icons/AvatarOutline.component.tsx',
    barcode: './src/Icon/Icons/BarCode.component.tsx',
    bulletlist: './src/Icon/Icons/BulletList.component.tsx',
    calendar: './src/Icon/Icons/Calendar.component.tsx',
    camera: './src/Icon/Icons/Camera.component.tsx',
    cart: './src/Icon/Icons/Cart.component.tsx',
    cashback: './src/Icon/Icons/CashBack.component.tsx',
    cells: './src/Icon/Icons/Cells.component.tsx',
    chat: './src/Icon/Icons/Chat.component.tsx',
    check: './src/Icon/Icons/Check.component.tsx',
    checksmall: './src/Icon/Icons/CheckSmall.component.tsx',
    chevrondown: './src/Icon/Icons/ChevronDown.component.tsx',
    chevrondownsmall: './src/Icon/Icons/ChevronDownSmall.component.tsx',
    chevronleft: './src/Icon/Icons/ChevronLeft.component.tsx',
    chevronleftsmall: './src/Icon/Icons/ChevronLeftSmall.component.tsx',
    chevronright: './src/Icon/Icons/ChevronRight.component.tsx',
    chevronrightsmall: './src/Icon/Icons/ChevronRightSmall.component.tsx',
    chevronup: './src/Icon/Icons/ChevronUp.component.tsx',
    chevronupsmall: './src/Icon/Icons/ChevronUpSmall.component.tsx',
    clock: './src/Icon/Icons/Clock.component.tsx',
    close: './src/Icon/Icons/Close.component.tsx',
    closesmall: './src/Icon/Icons/CloseSmall.component.tsx',
    commentmore: './src/Icon/Icons/CommentMore.component.tsx',
    creditcard: './src/Icon/Icons/CreditCard.component.tsx',
    crosshairs: './src/Icon/Icons/CrossHairs.component.tsx',
    cut: './src/Icon/Icons/Cut.component.tsx',
    disabled: './src/Icon/Icons/Disabled.component.tsx',
    dislike: './src/Icon/Icons/Dislike.component.tsx',
    download: './src/Icon/Icons/Download.component.tsx',
    ellipses: './src/Icon/Icons/Ellipses.component.tsx',
    ellipsesvertical: './src/Icon/Icons/EllipsesVertical.component.tsx',
    envelope: './src/Icon/Icons/Envelope.component.tsx',
    envelopeopen: './src/Icon/Icons/EnvelopeOpen.component.tsx',
    error: './src/Icon/Icons/Error.component.tsx',
    expand: './src/Icon/Icons/Expand.component.tsx',
    gear: './src/Icon/Icons/Gear.component.tsx',
    giftcard: './src/Icon/Icons/GiftCard.component.tsx',
    hamburger: './src/Icon/Icons/Hamburger.component.tsx',
    heart: './src/Icon/Icons/Heart.component.tsx',
    heartoutline: './src/Icon/Icons/HeartOutline.component.tsx',
    home: './src/Icon/Icons/Home.component.tsx',
    info: './src/Icon/Icons/Info.component.tsx',
    infooutline: './src/Icon/Icons/InfoOutline.component.tsx',
    laptop: './src/Icon/Icons/Laptop.component.tsx',
    lightning: './src/Icon/Icons/Lightning.component.tsx',
    like: './src/Icon/Icons/Like.component.tsx',
    listicon: './src/Icon/Icons/ListIcon.component.tsx',
    lock: './src/Icon/Icons/Lock.component.tsx',
    map: './src/Icon/Icons/Map.component.tsx',
    marker: './src/Icon/Icons/Marker.component.tsx',
    markeroutline: './src/Icon/Icons/MarkerOutline.component.tsx',
    mobile: './src/Icon/Icons/Mobile.component.tsx',
    news: './src/Icon/Icons/News.component.tsx',
    pencil: './src/Icon/Icons/Pencil.component.tsx',
    play: './src/Icon/Icons/Play.component.tsx',
    plus: './src/Icon/Icons/Plus.component.tsx',
    plussmall: './src/Icon/Icons/PlusSmall.component.tsx',
    print: './src/Icon/Icons/Print.component.tsx',
    question: './src/Icon/Icons/Question.component.tsx',
    questionoutline: './src/Icon/Icons/QuestionOutline.component.tsx',
    refresh: './src/Icon/Icons/Refresh.component.tsx',
    retailmenotlogo: './src/Icon/Icons/RetailMeNotLogo.component.tsx',
    sadface: './src/Icon/Icons/SadFace.component.tsx',
    search: './src/Icon/Icons/Search.component.tsx',
    share: './src/Icon/Icons/Share.component.tsx',
    sliders: './src/Icon/Icons/Sliders.component.tsx',
    star: './src/Icon/Icons/Star.component.tsx',
    starhalf: './src/Icon/Icons/StarHalf.component.tsx',
    staroutline: './src/Icon/Icons/StarOutline.component.tsx',
    success: './src/Icon/Icons/Success.component.tsx',
    successoutline: './src/Icon/Icons/SuccessOutline.component.tsx',
    tag: './src/Icon/Icons/Tag.component.tsx',
    upload: './src/Icon/Icons/Upload.component.tsx',
    tagadd: './src/Icon/Icons/TagAdd.component.tsx',
};



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
