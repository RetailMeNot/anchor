// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import styled from 'styled-components';
// COMPONENT
import { Input } from './Input.component';
import { Search, Mobile } from '../../Icon';
import { Grid, Cell } from '../../Grid';
import { colors } from '../../theme';
// README
import * as README from './README.md';

const StyledStory = styled.div`
    padding: 2rem 5rem;
`;

const Derp = () => (
    <StyledStory>
        <Grid columns="200px">
            <Cell>
                <Input
                    placeholder="Enter text here"
                    label="Enter text here"
                    type="text"
                />
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
);

storiesOf('Components/Form/Input', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('Default', () => (<Derp />));
