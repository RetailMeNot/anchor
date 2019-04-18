// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import styled from 'styled-components';
// COMPONENTS
import { AutoComplete } from './AutoComplete.component';
import { Icon } from '../Icon';
import { Grid, Cell } from '../Grid';
import { Typography } from '../Typography';
import { List, Item } from '../List';
import { colors } from '../theme';
// README
import * as README from './README.md';
// THEME

const StyledStory = styled.div`
    box-sizing: border-box;
    min-width: 90vw;
`;

const { useState } = React;

const tempDataSource = (newTerm: string | number) => {
    const newTermString = `${newTerm}`;
    return newTerm && newTermString.length
        ? [
              `${newTermString + newTermString}`,
              `${newTermString + newTermString + newTermString}`,
              `${newTermString +
                  newTermString +
                  newTermString +
                  newTermString}`,
          ]
        : [];
};

const StateBasedAutoCompleteStory = () => {
    const [tempData, setTempData] = useState<string[]>(tempDataSource(''));
    return (
        <StyledStory>
            <Grid columns={1}>
                <Cell width={1}>
                    <Typography tag="h1">AutoComplete 1</Typography>
                    <AutoComplete
                        placeholder="Search here..."
                        onFilter={(newTerm: any) => {
                            setTempData(tempDataSource(newTerm));
                        }}
                        prefix={<Icon color={colors.ash.base} type="search" />}
                        dataSource={tempData}
                    />
                </Cell>
            </Grid>
        </StyledStory>
    );
};

const StateBasedAutoCompleteStoryWithCustomResults = () => {
    const [tempData, setTempData] = useState<string[]>(tempDataSource(''));
    return (
        <StyledStory>
            <Grid columns={1}>
                <Cell width={1}>
                    <Typography tag="h1">AutoComplete 1</Typography>
                    <AutoComplete
                        placeholder="Search here..."
                        onFilter={(newTerm: any) => {
                            setTempData(tempDataSource(newTerm));
                        }}
                        prefix={<Icon color={colors.ash.base} type="search" />}
                        dataSource={tempData}
                    >
                        <List>
                            <Item>1</Item>
                        </List>
                    </AutoComplete>
                </Cell>
            </Grid>
        </StyledStory>
    );
};

storiesOf('Components/AutoComplete', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('Default', () => <StateBasedAutoCompleteStory />)
    .add('Custom Results List', () => (
        <StateBasedAutoCompleteStoryWithCustomResults />
    ));
