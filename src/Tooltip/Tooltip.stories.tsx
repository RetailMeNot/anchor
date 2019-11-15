// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import { select, boolean, text } from '@storybook/addon-knobs';
// VENDOR
import styled, { ThemeProvider } from '@xstyled/styled-components';
// COMPONENTS
import { Position } from '../utils/position/position';
import { Tooltip } from './Tooltip.component';
import { Button } from '../Button';
import { Typography } from '../Typography';
import { Close } from '../Icon';
// README
import * as README from './README.md';
// THEME
import { RootTheme } from '../theme';

const StyledStory = styled('div')`
    padding: 2rem 5rem;
`;

const TooltipMessage = ({ event }: any) => (
    <div>
        <Typography pb="3" pr="3">
            Hello there! Would you like this message to go away?
        </Typography>
        <Button
            onClick={event}
            size="xs"
            variant="minimal"
            prefix={<Close color="red" />}
        />
    </div>
);

storiesOf('Components/Tooltip', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('Default', () => (
        <StyledStory>
            <ThemeProvider theme={RootTheme}>
                <>
                    <Typography tag="h1">Tool Tip Demo</Typography>
                    <Tooltip
                        wrapContent={boolean('Tooltip wrapContent', false)}
                        position={select<Position>(
                            'Tooltip Position',
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
                            'topEnd'
                        )}
                        content={text('Tooltip Text', 'Text')}
                        maxWidth={text('Tooltip width', 'auto')}
                        delay={text('Tooltip delay', '') || undefined}
                        background={text('Tooltip background', '') || undefined}
                        showArrow={boolean('Show Arrow', false)}
                        arrowIndent={text('Arrow Indent', '') || undefined}
                        arrowSize={text('Arrow Size', '') || undefined}
                    >
                        <Button size="lg">Hover over me</Button>
                    </Tooltip>
                </>
            </ThemeProvider>
        </StyledStory>
    ))
    .add('Arrows & JSX', () => {
        const [show, setShow] = React.useState(true);

        return (
            <StyledStory>
                <ThemeProvider theme={RootTheme}>
                    <Tooltip
                        background={text('Tooltip background', '#000')}
                        content={
                            <TooltipMessage event={() => setShow(!show)} />
                            // This rule is causing the build to fail, but lint insists on it
                            // tslint:disable-next-line: jsx-curly-spacing
                        }
                        position={select<Position>(
                            'Tooltip Position',
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
                        show={show}
                        showArrow={boolean('Show Arrow', true)}
                        arrowIndent={text('Arrow Indent', '') || undefined}
                        arrowSize={text('Arrow Size', '') || undefined}
                        wrapContent={false}
                    >
                        <Typography tag="h2">
                            Hovering does nothing. The Tooltip only goes away
                            when the red x is clicked.
                        </Typography>

                        {!show && (
                            <>
                                <br />
                                <Button onClick={() => setShow(true)} size="sm">
                                    Bring it Back!
                                </Button>
                            </>
                        )}
                    </Tooltip>
                </ThemeProvider>
            </StyledStory>
        );
    });
