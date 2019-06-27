// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import styled from 'styled-components';
// SUBJECT
import * as README from './README.md';
import { ControlLabel } from './ControlLabel.component';
import { Radio } from '../Radio';
import { Toggle } from '../Toggle';

const StyledStory = styled.div`
    background: #f1f1f1;
    padding: 1rem;
`;

const ToggleableToggle = () => {
    const [checked, setChecked] = React.useState<boolean>(true);
    return (
        <Toggle
            checked={checked}
            onChange={() => setChecked(!checked)}
         />
    );
}

storiesOf('Components/Form/ControlLabel', module)
    .addParameters({ readme: { sidebar: README } })
    .add('Default', () =>
        React.createElement(() => {
            const [selectedValue, setSelectedValue] = React.useState('banana');

            function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
                setSelectedValue(event.target.value);
            }

            const labelPlacement = select('labelPlacement', ['left', 'right'], 'right');
            const labelSpacing = text('labelSpacing', '') || undefined;

            return (
                <StyledStory>
                    <ControlLabel
                        value="banana"
                        label="Banana"
                        labelPlacement={labelPlacement}
                        labelSpacing={labelSpacing}
                        control={
                            <Radio
                                value="banana"
                                onChange={handleChange}
                                checked={selectedValue === 'banana'}
                            />
                        }
                    />
                    <br />
                    <ControlLabel
                        value="blueberry"
                        label="Blueberry"
                        labelPlacement={labelPlacement}
                        labelSpacing={labelSpacing}
                        control={
                            <Radio
                                value="blueberry"
                                onChange={handleChange}
                                checked={selectedValue === 'blueberry'}
                            />
                        }
                    />
                    <br />
                    <ControlLabel
                        value="orange"
                        label="Orange"
                        labelPlacement={labelPlacement}
                        labelSpacing={labelSpacing}
                        control={
                            <Radio
                                value="orange"
                                onChange={handleChange}
                                checked={selectedValue === 'orange'}
                            />
                        }
                    />
                    <br />
                    <br />
                    <br />
                    <ControlLabel
                        value="orange"
                        label="Daily Deals"
                        labelPlacement={labelPlacement}
                        labelSpacing={labelSpacing}
                        control={
                            <ToggleableToggle />
                        }
                    />
                    <br />
                    <ControlLabel
                        value="orange"
                        label="Daily Deals"
                        labelPlacement={labelPlacement}
                        labelSpacing={labelSpacing}
                        control={
                            <ToggleableToggle />
                        }
                    />
                </StyledStory>
            );
        })
    );
