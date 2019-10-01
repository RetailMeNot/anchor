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
// README
import * as README from './README.md';
// THEME
import { RootTheme } from '../theme';

const StyledStory = styled('div')`
    padding: 2rem 5rem;
`;

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
                    >
                        <Button size="lg">Hover over me</Button>
                    </Tooltip>
                </>
            </ThemeProvider>
        </StyledStory>
    ));