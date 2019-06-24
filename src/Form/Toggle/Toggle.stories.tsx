// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import styled from 'styled-components';
// ANCHOR
import { colors } from '../../theme/index';
// SUBJECT
import * as README from './README.md';
import { Toggle } from './Toggle.component';

const { useState } = React;

const StyledStory = styled.div`
    background: ${colors.white.base};
`;

storiesOf('Components/Form/Toggle', module)
    .addParameters({ readme: { sidebar: README } })
    .add('Default', () =>
        React.createElement(() => {
            const [checked, setChecked] = useState<boolean>(true);

            return (
                <StyledStory>
                    <Toggle
                        checked={checked}
                        knobSize={text('knobSize', null) || undefined}
                        disabled={boolean('disabled', false)}
                        onChange={() => setChecked(!checked)}
                    />
                </StyledStory>
            );
        })
    );
