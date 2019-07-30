// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { ThemeProvider } from '@xstyled/styled-components';
// ANCHOR
import { RootTheme } from '../../theme/index';
// SUBJECT
import * as README from './README.md';
import { Checkbox } from './Checkbox.component';

const { useState } = React;

storiesOf('Components/Form/Checkbox', module)
    .addParameters({ readme: { sidebar: README } })
    .add('Default', () =>
        React.createElement(() => {
            const [checked, setChecked] = useState<boolean>(true);
            return (
                <ThemeProvider theme={RootTheme}>
                    <Checkbox
                        checked={checked}
                        disabled={boolean('disabled', false)}
                        onChange={() => setChecked(!checked)}
                    />
                </ThemeProvider>
            );
        })
    );
