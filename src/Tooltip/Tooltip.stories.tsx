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

const TooltipMessage = ({event}: any) => (
    <div>
        <Typography pb="3" pr="3">Hello there! Would you like this message to go away?</Typography>
        <Button onClick={event} size="xs" variant="minimal" prefix={<Close color="red" />} />
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
                    >
                        <Button size="lg">Hover over me</Button>
                    </Tooltip>
                </>
            </ThemeProvider>
        </StyledStory>
    ))
    .add('Arrows & JSX', () => {
        const [hidden, setHidden] = React.useState(false);

        return (
            <StyledStory>
                <ThemeProvider theme={RootTheme}>
                    <Tooltip
                        background="black"
                        content={<TooltipMessage event={() => setHidden(!hidden)} />}
                        hidden={hidden}
                        position="bottomStart"
                        showArrow
                        wrapContent={false}
                    >
                        <Typography tag="h2">
                            Hovering does nothing. The Tooltip only goes away when the red button is
                            clicked.
                        </Typography>

                        {hidden &&
                            <>
                                <br />
                                <Button onClick={() => setHidden(false)} size="sm">
                                    Bring it Back!
                                </Button>
                            </>
                        }
                    </Tooltip>
                </ThemeProvider>
            </StyledStory>
        );
    });
