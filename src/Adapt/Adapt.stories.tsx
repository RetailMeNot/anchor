// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import styled, { ThemeProvider } from '@xstyled/styled-components';
// ANCHOR
import { RootTheme } from '../../src/theme';
import { Button } from '../Button';
import { Typography } from '../Typography';
import { Adapt } from './Adapt.component';
import { object } from '@storybook/addon-knobs';

const StyledStory = styled('div')`
    padding: 2rem;
    color: text.base;
    font-family: base;
`;

storiesOf('Components/Adapt', module)
    .add('Default', () => {
        return (
            <ThemeProvider theme={RootTheme}>
                <StyledStory>
                    <Adapt
                        forEach={object('forEach', {
                            xs: 'apple',
                            md: 'strawberry',
                            lg: 'blueberry',
                        })}
                    >
                        {(value, breakpoint) => (
                            <div>
                                <p>Value: {value}</p>
                                <p>Breakpoint: {breakpoint}</p>
                            </div>
                        )}
                    </Adapt>
                </StyledStory>
            </ThemeProvider>
        );
    })
    .add('Button Example', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <Adapt
                    forEach={{
                        xs: 'xs',
                        sm: 'sm',
                        md: 'md',
                        lg: 'lg',
                    }}
                >
                    {(size, breakpoint) => (
                        <Button size={size} margin="0">
                            Hello at {breakpoint}
                        </Button>
                    )}
                </Adapt>
                <Typography as="p" mt="2rem">
                    It should look like the button is resizing based on the
                    breakpoint
                </Typography>
            </StyledStory>
        </ThemeProvider>
    ));
