// VENDOR
import * as React from 'react';
import styled, { ThemeProvider } from '@xstyled/styled-components';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import { select, boolean, text, number } from '@storybook/addon-knobs';
// ANCHOR
import { RootTheme } from '../../src/theme';
import { PopOver } from './PopOver.component';
import { Position } from '../utils/position/position';
import { Typography } from '../Typography';
import { Button } from '../Button';

const StyledStory = styled('div')`
    padding: 2rem;
    color: text.base;
    font-family: base;
`;

const StyledParagraph = styled(Typography)`
    border: base;
    border-radius: base;
`;

const PopOverExample = ({ closeEvent }: any) => (
    <div>
        <Typography pr="3">Click the button to close the PopOver.</Typography>
        <Button onClick={closeEvent}>Close</Button>
    </div>
);

const PopOverWithButton = () => {
    const [active, setActive] = React.useState<boolean>(true);

    return (
        <PopOver
            active={active}
            background="purple"
            color="white"
            content={<PopOverExample closeEvent={() => setActive(false)} />}
            position="bottomStart"
            shadow="0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.2)"
            showArrow
            spacing={0}
        >
            <Typography pb="3" tag="p">
                This is an example of the PopOver being controlled by a button.
            </Typography>
            {!active && (
                <Button onClick={() => setActive(true)}>
                    BRING IT BACK!!!
                </Button>
            )}
        </PopOver>
    );
};

storiesOf('Components/PopOver', module)
    .add('Default', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <Typography tag="h1">PopOver</Typography>
                <PopOver
                    active={boolean('Active', true)}
                    delay={text('Animation Delay', '') || undefined}
                    background={text('Background', '') || undefined}
                    border={text('Border', '') || undefined}
                    borderRadius={text('Border Radius', '') || undefined}
                    color={text('Color', '') || undefined}
                    content={text('Content', 'Text')}
                    position={select<Position>(
                        'Position',
                        [
                            'topStart',
                            'top',
                            'topEnd',
                            'rightStart',
                            'right',
                            'rightEnd',
                            'bottomEnd',
                            'bottom',
                            'bottomStart',
                            'leftEnd',
                            'left',
                            'leftStart',
                        ],
                        'bottomStart'
                    )}
                    shadow={
                        text('Shadow (buggy in Storybook)', '') || undefined
                    }
                    spacing={number('Spacing', 8) || undefined}
                    showArrow={boolean('Show Arrow', true)}
                    arrowIndent={text('Arrow Indent', '') || undefined}
                    arrowSize={text('Arrow Size', '') || undefined}
                    debug={boolean('Debug', false)}
                >
                    <StyledParagraph tag="p" p="2" my="3">
                        The PopOver allows programmatic control of the 'Popped
                        Over' content. Toggle the 'active' prop in the knobs
                        below to see. It can accept strings or JSX for its
                        content.
                    </StyledParagraph>
                </PopOver>
            </StyledStory>
        </ThemeProvider>
    ))
    .add('Resizeable', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <Typography tag="h1">PopOver</Typography>
                <PopOver
                    active={boolean('Active', true)}
                    delay={text('Animation Delay', '') || undefined}
                    background={text('Background', '') || undefined}
                    border={text('Border', '') || undefined}
                    borderRadius={text('Border Radius', '') || undefined}
                    color={text('Color', '') || undefined}
                    content={text('Content', 'Text')}
                    position={select<Position>(
                        'Position',
                        [
                            'topStart',
                            'top',
                            'topEnd',
                            'rightStart',
                            'right',
                            'rightEnd',
                            'bottomEnd',
                            'bottom',
                            'bottomStart',
                            'leftEnd',
                            'left',
                            'leftStart',
                        ],
                        'bottom'
                    )}
                    shadow={
                        text('Shadow (buggy in Storybook)', '') || undefined
                    }
                    spacing={number('Spacing', 8) || undefined}
                    showArrow={boolean('Show Arrow', true)}
                    arrowIndent={text('Arrow Indent', '') || undefined}
                    arrowSize={text('Arrow Size', '') || undefined}
                    debug={boolean('Debug', false)}
                >
                    <textarea />
                </PopOver>
            </StyledStory>
        </ThemeProvider>
    ))
    .add('Button to Control', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <PopOverWithButton />
            </StyledStory>
        </ThemeProvider>
    ));
