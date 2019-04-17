// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import styled from 'styled-components';
// COMPONENTS
import AutoComplete from './AutoComplete.component';
import { Icon } from '../Icon';
import { Grid, Cell } from '../Grid';
import { Typography } from '../Typography';
import { colors } from '../theme';
// README
import * as README from './README.md';
// THEME

const StyledStory = styled.div`
    box-sizing: border-box;
    min-width: 90vw;
`;

storiesOf('Components/AutoComplete', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('Default', () => (
        <StyledStory>
            <Grid columns={1}>
                <Cell width={1}>
                    <Typography as="h1">AutoComplete 1</Typography>
                    <AutoComplete
                        placeholder="Search here..."
                        prefix={<Icon color={colors.ash.base} type="search" />}
                        dataSource={[
                            { value: 'Result Item 1', label: 'Result Item 1' },
                            { value: 'Result Item 2', label: 'Result Item 2' },
                            { value: 'Result Item 3', label: 'Result Item 3' },
                            { value: 'Result Item 4', label: 'Result Item 4' },
                            { value: 'Result Item 5', label: 'Result Item 5' },
                        ]}
                    />
                </Cell>
            </Grid>
        </StyledStory>
    ));
