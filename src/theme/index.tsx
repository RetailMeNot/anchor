// Theme Files
import { typography } from './typography.theme';
import { ColorsTheme } from './colors.theme';
import { ThemeProvider as XstyledThemeProvider } from '@xstyled/styled-components';
import styled from '@xstyled/styled-components';
import { space as spaceStyles, SpaceProps } from '@xstyled/system';
import { BUTTON_KEY, BUTTON_THEME } from '../Button';
import { INPUT_KEY, INPUT_THEME } from '../Form/Input/utils';
import React from 'react';
import {Button} from '../Button';
import classNames from 'classnames';

export const RootTheme = {
    typography,
    radii: { none: '0', base: '4px', modal: '8px', circular: '1000px' },
    [BUTTON_KEY]: BUTTON_THEME,
    [INPUT_KEY]: INPUT_THEME,
    colors: ColorsTheme,
    fonts: {
        base:
            'Avenir Next, Segoe UI, Helvetica Neue, Helvetica, Roboto, sans-serif',
        mono: `'SFMono-Regular', Consolas, Liberation Mono, Menlo, Courier, monospace`,
    },
    // These are all minimums
    breakpoints: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1600,
    },
    // todo: we should likely remove the color.borders colors and just use this
    // or find a way to reference the colors.border colors here
    // e.g. `thin solid borders.base`
    borders: {
        light: `thin solid ${ColorsTheme.borders.light}`,
        base: `thin solid ${ColorsTheme.borders.base}`,
        dark: `thin solid ${ColorsTheme.borders.dark}`,
    },

    skeleton: {
        colorStart: '#E7E7E7',
        colorEnd: '#D3D3D3',
    },
};

// Exporting out @xstyled's ThemeProvider. Only way I could get it to work w/o issues.
// export class ThemeProvider2 extends XstyledThemeProvider {}

interface IterableObject {
    [s: number]: number | string | boolean | IterableObject;
  }

interface DebugProps {
    property: number | string | boolean | IterableObject;
    propertyName: string;
    rootProperty?: boolean;
}

interface StyledDebugProps {
    indent?: number;
}

const StyledDebug = styled('div')<StyledDebugProps>`
    font-family: mono;
    margin-top: 0.5rem;
    color: white;

    .category .category h2 {
        background-color: #ec8947;
    }

    .category .category .box {
        border-color: #ec8947;
    }

    .category .category .category h2 {
        background-color: #b84343;
        color: white;
    }

    .category .category .category .box {
        border-color: #b84343;
    }

    .category .category .category .category h2 {
        background-color: #91cdd2;
        color: black;
    }

    .category .category .category .category .box {
        border-color: #91cdd2;
    }

    .category .category .category .category .category h2 {
        background-color: #567224;
        color: white;
    }

    .category .category .category .category .category .box {
        border-color: #567224;
    }
`;

const StyledH2 = styled('h2')`
    ${spaceStyles}
    background-color: #ffea92;
    color: black;
    margin-bottom: 0;
    margin-top: 0;
    padding: 0.25rem 0.5rem 0.25rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 0 1rem 1rem 0;
`;

interface BoxProps extends SpaceProps {
    show?: boolean;
}

const Box = styled('div')<BoxProps>`
    ${spaceStyles}
    width: 20rem;
    border-left: solid #ffea92 2px;
    margin: 0.5rem;
    ${({show}) => `display: ${show ? 'block' : 'none'}`}
`;

const Category = styled('div')<SpaceProps>`
    ${spaceStyles}
    width: 20rem;
`;


const ColorBox = styled('div')<any>`
    width: 1rem;
    height: 1rem;
    display: inline-block;
    vertical-align: middle;
    margin-left: 0.5rem;
    background-color: ${({backgroundColor}) => backgroundColor};
    border: solid white 1px;
`;

const Debug = ({property, propertyName}: DebugProps) => {
    const [show, setShow] = React.useState(false);

    return(
        <StyledDebug>
            {(property || property === 0)
                ? (
                    typeof property === 'number' ||
                    typeof property === 'string' ||
                    typeof property === 'boolean' ||
                    typeof property === 'function'
                        ? (
                                <>
                                    <span style={{fontWeight: 'bold'}}>{propertyName}: </span>
                                    <span>
                                        {typeof property === 'function'
                                            ? 'function'
                                            : /^#[a-zA-Z0-9]{4,7}/.test(property.toString())
                                                ? (<>
                                                    <span style={{fontStyle: 'italic'}}>{property.toString()}</span>
                                                    <ColorBox backgroundColor={property} />
                                                    </>)
                                                : <span style={{fontStyle: 'italic'}}>{property.toString()}</span>
                                        }
                                    </span>
                                </>
                            )
                        :
                            <Category pl={0} className="category">
                                <StyledH2 onClick={() => setShow(!show)}>{propertyName}</StyledH2>
                                <Box pl={2} className="box" show={show}>
                                    {Object.values(property).map((_property, index) => (
                                        <Debug
                                            key={index}
                                            property={_property}
                                            propertyName={Object.getOwnPropertyNames(property)[index]}
                                        />
                                    ))}
                                </Box>
                            </Category>
                    )
                : (
                    <>
                       Empty.
                    </>
                )
            }
        </StyledDebug>
    );
};

const DebugWrapper = styled('div')`
    background-color: rgba(0,0,0,.75);
    border-left-color: transparent;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    overflow: hidden;
    width: 30rem;
    padding: 1rem 2rem 1rem 0;

    &.closed {
        height:2.4rem;
        width: auto;
        padding-right: 1rem;

        .debug-scroll {
            display: none;
        }
    }
`;

const DebugScroll = styled('div')`
    height: 100%;
    overflow-y: auto;
    width: 100%;
`;

interface ThemeProviderProps {
    children?: any;
    debug?: boolean;
    theme?: any;
}

export const ThemeProvider = ({ children, debug, theme }: ThemeProviderProps) => {
    const isOpen = localStorage.themeProviderDebug === 'true';
    const [isOpenState, setIsOpenState] = React.useState(isOpen);

    return (
        <XstyledThemeProvider theme={theme}>
            {debug &&
                <DebugWrapper className={classNames(!isOpenState ? 'closed' : null)}>
                    <Button
                        onClick={() => {
                            localStorage.themeProviderDebug = !isOpenState;
                            setIsOpenState(!isOpenState);
                        }}
                        size="sm"
                    >
                        ThemeProvider Debug
                    </Button>

                    <DebugScroll className="debug-scroll">
                        <Debug property={theme} propertyName="Theme" />
                    </DebugScroll>
                </DebugWrapper>
            }
            {children}
        </XstyledThemeProvider>
    );
};
