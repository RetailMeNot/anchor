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

type InputState = {
    text?: string;
    number?: string | number;
    tel?: string | number;
    filtered?: string;
};

const InputStories = () => {
    const { useState } = React;
    const [inputValues, setInputValues] = useState<InputState>({
        text: '',
        number: '',
        tel: '',
        filtered: '',
    });

    return (
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <div>
                    <div>
                        <Input
                            placeholder="Enter text here"
                            label="Enter text here"
                            type="text"
                            value={inputValues.text}
                            onChange={newVal =>
                                setInputValues({ ...inputValues, text: newVal })
                            }
                        />
                        <Button
                            size="sm"
                            onClick={() => {
                                setInputValues({ ...inputValues, text: '' });
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
                            value={inputValues.number}
                            onChange={newVal =>
                                setInputValues({
                                    ...inputValues,
                                    number: newVal,
                                })
                            }
                        />
                    </div>
                    <div>
                        <Input
                            placeholder="(512) 666-6666"
                            label="Enter a phone number here"
                            prefix={<Mobile color="text.placeholder" />}
                            type="tel"
                            value={inputValues.tel}
                            onChange={newVal =>
                                setInputValues({ ...inputValues, tel: newVal })
                            }
                        />
                    </div>
                    <div>
                        <Input
                            prefix={<Search color="text.placeholder" />}
                            type="number"
                        />
                    </div>
                    <div>
                        <Input
                            placeholder="Only [0-9], max of 5 characters"
                            value={inputValues.filtered}
                            onChange={newVal =>
                                setInputValues({
                                    ...inputValues,
                                    filtered: newVal,
                                })
                            }
                            filter={value =>
                                value?.replace(/\D/g, '')?.substring(0, 5)
                            }
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
