// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';
// VENDOR
import styled from 'styled-components';
// COMPONENT
import {
    Adaptor,
    LegacyBreakpoints,
    StandardBreakpoints,
} from './Adaptor.component';
// README
import * as README from './README.md';

const {
    LegacyDesktop,
    LegacyPhone,
    LegacyTablet,
    XS,
    SM,
    MD,
    LG,
    XL,
    XXL,
    CustomAdaptor,
} = Adaptor;

const StyledStory = styled.div`
    padding: 2rem 5rem;
`;

const dimension = ({ min, max }: { min?: number; max?: number }): string => {
    const notSet = 'Not Set';
    return `(${min ? `${min}px` : `${notSet}`} - ${
        max ? `${max}px` : `${notSet}`
    })`;
};

storiesOf('Components/Grid/Adaptor', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('Legacy Breakpoints', () => (
        <StyledStory>
            <h4>Resize this window to view the three breakpoints</h4>
            <LegacyDesktop>
                <p>
                    I am visible on Desktop{' '}
                    {dimension(LegacyBreakpoints.desktop)}
                </p>
            </LegacyDesktop>
            <LegacyTablet>
                <p>
                    I am visible on Tablet {dimension(LegacyBreakpoints.tablet)}
                </p>
            </LegacyTablet>
            <LegacyPhone>
                <p>
                    I am visible on Phone {dimension(LegacyBreakpoints.phone)}
                </p>
            </LegacyPhone>
        </StyledStory>
    ))
    .add('Standard Breakpoints', () => (
        <StyledStory>
            <h4>Resize this window to view the six different breakpoints</h4>
            <XS>
                <p>I am visible on xs {dimension(StandardBreakpoints.xs)}</p>
            </XS>
            <SM>
                <p>I am visible on sm {dimension(StandardBreakpoints.sm)}</p>
            </SM>
            <MD>
                <p>I am visible on md {dimension(StandardBreakpoints.md)}</p>
            </MD>
            <LG>
                <p>I am visible on lg {dimension(StandardBreakpoints.lg)}</p>
            </LG>
            <XL>
                <p>I am visible on xl {dimension(StandardBreakpoints.xl)}</p>
            </XL>
            <XXL>
                <p>I am visible on xxl {dimension(StandardBreakpoints.xxl)}</p>
            </XXL>
        </StyledStory>
    ))
    .add('Custom Breakpoints', () => (
        <StyledStory>
            <h4>Use knobs to set custom breakpoints</h4>
            <CustomAdaptor
                minWidth={number('Minimum Width', 1)}
                maxWidth={number('Maximum Width', 99999)}
            >
                <p>My dimensions are defined by knobs.</p>
            </CustomAdaptor>
        </StyledStory>
    ));
