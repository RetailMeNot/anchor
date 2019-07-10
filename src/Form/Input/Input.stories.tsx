// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import styled, { ThemeProvider } from '@xstyled/styled-components';
// COMPONENT
import { Input } from './Input.component';
import { Search, Mobile } from '../../Icon';
import { Grid, Cell } from '../../Grid';
import { colors, RootTheme } from '../../theme';
import { Button } from '../../Button';
// README
import * as README from './README.md';

const StyledStory = styled('div')`
    padding: 2rem 5rem;
`;

const InputStories = () => {
    const { useState } = React;
    const [someInputVal, setSomeInputVal] = useState<string>('');
    return (
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <Grid columns="500px">
                    <Cell>
                        <Input
                            placeholder="Enter text here"
                            label="Enter text here"
                            type="text"
                            value={someInputVal}
                            onChange={newVal => setSomeInputVal(newVal)}
                        />
                        <Button
                            size="sm"
                            onClick={() => {
                                setSomeInputVal('');
                            }}
                        >
                            Clear text input
                        </Button>
                    </Cell>
                    <Cell>
                        <Input
                            placeholder="Enter a number here"
                            type="number"
                            suffix={<Search color={colors.ash.dark} />}
                        />
                    </Cell>
                    <Cell>
                        <Input
                            placeholder="(512) 666-6666"
                            label="Enter a phone number here"
                            prefix={<Mobile color={colors.ash.dark} />}
                            type="tel"
                        />
                    </Cell>
                    <Cell>
                        <Input
                            prefix={<Search color={colors.ash.dark} />}
                            type="number"
                        />
                    </Cell>
                </Grid>
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
