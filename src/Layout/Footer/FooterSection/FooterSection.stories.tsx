// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
// VENDOR
import { ThemeProvider } from '@xstyled/styled-components';
// COMPONENT
import { FooterSection } from './FooterSection.component';
// README
import * as README from './README.md';
import { RootTheme } from '../../../theme';

const StyledStory = styled('div')`
    padding: 10rem;
`;

storiesOf('Components/Layout/Footer/FooterSection', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('default', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <FooterSection title="Section Title">
                    <ul>
                        <li>
                            <a href="#">Link 1</a>
                        </li>
                        <li>
                            <a href="#">Link 2</a>
                        </li>
                        <li>
                            <a href="#">Link 3</a>
                        </li>
                        <li>
                            <a href="#">Link 4</a>
                        </li>
                    </ul>
                </FooterSection>
            </StyledStory>
        </ThemeProvider>
    ));
