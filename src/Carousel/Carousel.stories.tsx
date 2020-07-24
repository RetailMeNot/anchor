// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import { ThemeProvider } from '@xstyled/styled-components';
// ANCHOR
import { RootTheme } from '../../src/theme';
// import { Typography } from '../Typography';
import { Carousel } from './Carousel.component';

storiesOf('Components/Carousel', module)
    .add('Default', () => {
        return (
            <ThemeProvider theme={RootTheme}>
                <Carousel>
                    <div>Hello</div>
                    <div>Hi</div>
                </Carousel>
            </ThemeProvider>
        );
    });
