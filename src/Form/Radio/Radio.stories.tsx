// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import { boolean, text, color } from '@storybook/addon-knobs';
import styled, { ThemeProvider } from '@xstyled/styled-components';
// ANCHOR
import { RootTheme } from '../../theme';
// SUBJECT
import * as README from './README.md';
import { Radio } from './Radio.component';

const StyledStory = styled('div')`
    background: #f1f1f1;
    padding: 1rem;
`;

storiesOf('Components/Form/Radio', module)
    .addParameters({ readme: { sidebar: README } })
    .add('Default', () =>
        React.createElement(() => {
            const [selectedValue, setSelectedValue] = React.useState('banana');

            function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
                setSelectedValue(event.target.value);
            }

            const size = text('size', null) || undefined;
            const fillSize = text('fillSize', null) || undefined;
            const fillColor = color('fillColor', '') || undefined;
            const disabled = boolean('disabled', false);

            const options = [
                { value: 'banana', label: 'Banana' },
                { value: 'blueberry', label: 'Blueberry' },
                { value: 'orange', label: 'Orange' },
            ];

            return (
                <ThemeProvider theme={RootTheme}>
                    <StyledStory>
                        {options.map(({ value, label }) => (
                            <Radio
                                key={label}
                                checked={selectedValue === value}
                                onChange={handleChange}
                                value={value}
                                size={size}
                                fillSize={fillSize}
                                fillColor={fillColor}
                                disabled={disabled}
                            >
                                {label}
                            </Radio>
                        ))}
                    </StyledStory>
                </ThemeProvider>
            );
        })
    );
