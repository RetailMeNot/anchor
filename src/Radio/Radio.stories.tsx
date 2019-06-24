// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import styled from 'styled-components';
// ANCHOR
// SUBJECT
import * as README from './README.md';
import { Radio } from './Radio.component';

// const { useState } = React;

const StyledStory = styled.div`
    background: #f1f1f1;
    padding: 1rem;
`;

storiesOf('Components/Radio', module)
    .addParameters({ readme: { sidebar: README } })
    .add('Default', () =>
        React.createElement(() => {
            const [selectedValue, setSelectedValue] = React.useState('banana');

            function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
                setSelectedValue(event.target.value);
            }

            const size = text('size', null) || undefined;
            const disabled = boolean('disabled', false);

            return (
                <StyledStory>
                    <Radio
                        checked={selectedValue === 'banana'}
                        onChange={handleChange}
                        value="banana"
                        size={size}
                        disabled={disabled}
                    >
                        Banana
                    </Radio>

                    <Radio
                        checked={selectedValue === 'blueberry'}
                        onChange={handleChange}
                        value="blueberry"
                        size={size}
                        disabled={disabled}
                    >
                        Blueberry
                    </Radio>

                    <Radio
                        checked={selectedValue === 'orange'}
                        onChange={handleChange}
                        value="orange"
                        size={size}
                        disabled={disabled}
                    >
                        Orange
                    </Radio>
                </StyledStory>
            );
        })
    );
