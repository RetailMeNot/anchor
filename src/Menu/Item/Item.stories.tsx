// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import styled, { ThemeProvider } from '@xstyled/styled-components';
// COMPONENTS
import { Item } from './Item.component';
import { RootTheme } from '../../theme';

const StyledStory = styled('div')`
    padding: 2rem 5rem;
`;

storiesOf('Components/Menu/Item', module).add('Primary', () => (
    <ThemeProvider theme={RootTheme}>
        <StyledStory>
            <p>Item</p>
            <Item label="Link" path="/" />
        </StyledStory>
    </ThemeProvider>
));
