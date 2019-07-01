// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import styled, { ThemeProvider } from '@xstyled/styled-components';
// ANCHOR
import { RootTheme } from '../theme';
// SUBJECT
import { ControlLabel, Radio, Toggle } from '.';

const StyledStory = styled.div`
    padding: 1rem;
    color: #555;
`;

const ToggleableToggle = (props: any) => {
    const [checked, setChecked] = React.useState<boolean>(true);
    return (
        <Toggle
            checked={checked}
            onChange={() => setChecked(!checked)}
            {...props}
        />
    );
};

storiesOf('Components/Form', module).add('Example', () =>
    React.createElement(() => {
        const [selectedValue, setSelectedValue] = React.useState('banana');

        function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
            setSelectedValue(event.target.value);
        }

        const labelPlacement = select(
            'labelPlacement',
            ['left', 'right'],
            'right'
        );
        const labelSpacing = text('labelSpacing', '') || undefined;

        const StyledForm = styled('form')`
            display: flex;
            flex-direction: column;
        `;

        return (
            <ThemeProvider theme={RootTheme}>
                <StyledStory>
                    <StyledForm>
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
                        <ControlLabel
                            value="orange"
                            label="Orange"
                            labelPlacement={labelPlacement}
                            labelSpacing={labelSpacing}
                            disabled
                            control={
                                <Radio
                                    value="orange"
                                    onChange={handleChange}
                                    checked={selectedValue === 'orange'}
                                />
                            }
                        />
                        <br />
                        <ControlLabel
                            value="orange"
                            label="Daily Deals"
                            weight={600}
                            labelPlacement={labelPlacement}
                            labelSpacing={labelSpacing}
                            control={<ToggleableToggle />}
                        />
                        <ControlLabel
                            value="orange"
                            label="Daily Deals"
                            disabled
                            labelPlacement={labelPlacement}
                            labelSpacing={labelSpacing}
                            control={<ToggleableToggle />}
                        />
                    </StyledForm>
                </StyledStory>
            </ThemeProvider>
        );
    })
);
