// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
// VENDOR
import { ThemeProvider } from '@xstyled/styled-components';
// COMPONENT
import { MobileCTA } from './MobileCTA.component';
// README
import * as README from './README.md';
import { RootTheme } from '../../../theme';

const StyledStory = styled.div`
    padding: 10rem;
`;

storiesOf('Components/Layout/Footer/MobileCTA', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('default', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <MobileCTA />
            </StyledStory>
        </ThemeProvider>
    ));
