// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import styled, { ThemeProvider } from '@xstyled/styled-components';
// ANCHOR
import { RootTheme } from '../../src/theme';
// import { Typography } from '../Typography';
import { Carousel } from './Carousel.component';

const CarouselItem = styled('div')`
    background-color: white;
    border: base;
    box-shadow: 0 0.125rem 0.6875rem 0 rgba(0, 0, 0, 0.1);
    border-radius: base;
    font-family: base;
    padding: 16;
    margin: 16;
`;

storiesOf('Components/Carousel', module)
    .add('Default', () => {
        return (
            <ThemeProvider theme={RootTheme}>
                <Carousel>
                    <CarouselItem>Hello</CarouselItem>
                    <CarouselItem>Hi my name is long and hopefully will cause wrapping because it's important to see how the carousel handles something long.</CarouselItem>
                    <CarouselItem>Sup</CarouselItem>
                </Carousel>
            </ThemeProvider>
        );
    });
