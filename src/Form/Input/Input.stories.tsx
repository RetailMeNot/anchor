// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import styled, { ThemeProvider } from '@xstyled/styled-components';
// COMPONENT
import { Input } from './Input.component';
import { Search, Mobile } from '../../Icon';
import { RootTheme } from '../../theme';
import { Button } from '../../Button';
// README
import * as README from './README.md';

const StyledStory = styled('div')`
    padding: 2rem 5rem;
`;

const InputStories = () => {
    const { useState } = React;
    const [textInputVal, setTextInputVal] = useState<string>('');
    const [numberInputVal, setNumberInputVal] = useState<number | string>('');
    const [phoneInputVal, setPhoneInputVal] = useState<number | string>('');

    return (
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <div>
                    <div>
                        <Input
                            placeholder="Enter text here"
                            label="Enter text here"
                            type="text"
                            value={textInputVal}
                            onChange={newVal => setTextInputVal(newVal)}
                        />
                        <Button
                            size="sm"
                            onClick={() => {
                                setTextInputVal('');
                            }}
                        >
                            Clear text input
                        </Button>
                    </div>
                    <div>
                        <Input
                            placeholder="Enter a number here"
                            type="number"
                            suffix={<Search color="text.placeholder" />}
                            value={numberInputVal}
                            onChange={newVal => setNumberInputVal(newVal)}
                        />
                    </div>
                    <div>
                        <Input
                            placeholder="(512) 666-6666"
                            label="Enter a phone number here"
                            prefix={<Mobile color="text.placeholder" />}
                            type="tel"
                            value={phoneInputVal}
                            onChange={newVal => setPhoneInputVal(newVal)}
                        />
                    </div>
                    <div>
                        <Input
                            prefix={<Search color="text.placeholder" />}
                            type="number"
                        />
                    </div>
                </div>
            </StyledStory>
        </ThemeProvider>
    );
};

storiesOf('Components/Form/Input', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('Default', () => <InputStories />);
