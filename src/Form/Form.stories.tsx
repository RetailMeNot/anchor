// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import styled, { ThemeProvider } from '@xstyled/styled-components';
// ANCHOR
import { RootTheme } from '../theme';
// SUBJECT
import { ControlLabel, Radio, Toggle } from '.';

const StyledStory = styled.div`
    padding: 1rem;
    color: #555;
`;

storiesOf('Components/Form', module).add('Example', () =>
    React.createElement(() => {
        const [veganOptionsEnabled, setVeganOptionsEnabled] = React.useState(
            true
        );
        const [realDealEnabled, setRealDealEnabled] = React.useState(true);
        const [selectedVeganOption, setSelectedVeganOption] = React.useState(
            'salad'
        );

        function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
            setSelectedVeganOption(event.target.value);
        }

        const StyledForm = styled('form')`
            display: flex;
            flex-direction: column;
        `;

        return (
            <ThemeProvider theme={RootTheme}>
                <StyledStory>
                    <StyledForm>
                        <ControlLabel
                            value="dairyFree"
                            label="Vegan Option"
                            weight={600}
                            control={
                                <Toggle
                                    checked={veganOptionsEnabled}
                                    onChange={() =>
                                        setVeganOptionsEnabled(
                                            !veganOptionsEnabled
                                        )
                                    }
                                />
                            }
                        />
                        <ControlLabel
                            value="salad"
                            label="Salad"
                            disabled={!veganOptionsEnabled}
                            marginLeft="2rem"
                            control={
                                <Radio
                                    onChange={handleChange}
                                    checked={selectedVeganOption === 'salad'}
                                />
                            }
                        />
                        <ControlLabel
                            value="seitan"
                            label="Seitan Steak"
                            disabled={!veganOptionsEnabled}
                            marginLeft="2rem"
                            control={
                                <Radio
                                    onChange={handleChange}
                                    checked={selectedVeganOption === 'seitan'}
                                />
                            }
                        />
                        <ControlLabel
                            value="dairyFree"
                            label="Dairy Free"
                            weight={600}
                            control={
                                <Toggle
                                    checked={realDealEnabled}
                                    onChange={() =>
                                        setRealDealEnabled(!realDealEnabled)
                                    }
                                />
                            }
                        />
                    </StyledForm>
                </StyledStory>
            </ThemeProvider>
        );
    })
);
