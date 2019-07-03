// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import { boolean, select, text } from '@storybook/addon-knobs';
import styled, { ThemeProvider } from '@xstyled/styled-components';
// ANCHOR
import { RootTheme } from '../../theme';
// SUBJECT
import * as README from './README.md';
import { ControlLabel } from './ControlLabel.component';
import { Radio } from '../Radio';
import { Toggle } from '../Toggle';

const StyledStory = styled.div`
    padding: 1rem;
    color: #555;
`;

storiesOf('Components/Form/ControlLabel', module)
    .addParameters({ readme: { sidebar: README } })
    .add('Default', () =>
        React.createElement(() => {
            const [checked, setChecked] = React.useState<boolean>(true);

            const labelPlacement = select<'left' | 'right'>(
                'labelPlacement',
                ['left', 'right'],
                'right'
            );
            const disabled = boolean('disabled', false);
            const labelSpacing = text('labelSpacing', '') || undefined;
            const label = text('label', 'Label for the control');

            const controls = { Toggle, Radio };
            const Control =
                controls[select('control', ['Toggle', 'Radio'], 'Toggle')];

            return (
                <ThemeProvider theme={RootTheme}>
                    <StyledStory>
                        <ControlLabel
                            label={label}
                            disabled={disabled}
                            labelPlacement={labelPlacement}
                            labelSpacing={labelSpacing}
                            control={
                                <Control
                                    onChange={() => setChecked(!checked)}
                                    checked={checked}
                                />
                            }
                        />
                    </StyledStory>
                </ThemeProvider>
            );
        })
    );
