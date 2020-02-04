// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import { color, select } from '@storybook/addon-knobs';
// VENDOR
import styled, { ThemeProvider } from '@xstyled/styled-components';
// COMPONENTS
import { Button } from '../Button';
import { Typography } from '../Typography';
import * as Icon from './';
import { DefaultColor } from './utils';

// README
import * as README from './README.md';
import { RootTheme } from '../theme';

const StyledStory = styled('div')`
    padding: 2rem 5rem;
    color: text.base;
`;

const StyledGrid = styled('div')`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

const StyledCell = styled('div')`
    width: 5rem;
    height: 5rem;
    margin: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

storiesOf('Components/Icon', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('All Icons', () => {
        const selectedColor = color('color', DefaultColor) || undefined;
        const scale = select(
            'scale',
            ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
            'lg'
        );

        return (
            <ThemeProvider theme={RootTheme}>
                <StyledStory>
                    <StyledGrid>
                        {Object.keys(Icon).map((iconKey: string) => (
                            <StyledCell key={iconKey}>
                                <Typography
                                    as="p"
                                    scale={14}
                                    mb="0.5rem"
                                    weight={500}
                                >
                                    {iconKey}
                                </Typography>
                                <Button
                                    circular
                                    variant="minimal"
                                    prefix={React.createElement(Icon[iconKey], {
                                        color: selectedColor,
                                        scale,
                                    })}
                                />
                            </StyledCell>
                        ))}
                    </StyledGrid>
                </StyledStory>
            </ThemeProvider>
        );
    })
    .add('Size & Color', () => {
        const iconKey = select('Select an Icon', Object.keys(Icon), 'AddEvent');

        return (
            <ThemeProvider theme={RootTheme}>
                <StyledStory>
                    {React.createElement(Icon[iconKey], {
                        color: color('color', DefaultColor),
                        scale: select(
                            'scale',
                            ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
                            'md'
                        ),
                    })}
                </StyledStory>
            </ThemeProvider>
        );
    });
