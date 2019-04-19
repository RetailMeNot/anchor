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
import { colors } from '../theme';
// README
import * as README from './README.md';
// THEME

const StyledStory = styled.div`
    box-sizing: border-box;
    min-width: 90vw;
`;

const { useState } = React;

const tempDataStringSource = (newTerm: string | number) => {
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
    const [tempData, setTempData] = useState<string[]>(
        tempDataStringSource('')
    );
    return (
        <StyledStory>
            <Grid columns={1}>
                <Cell width={1}>
                    <Typography tag="h1">AutoComplete 1</Typography>
                    <AutoComplete
                        placeholder="Search here..."
                        onFilter={(newTerm: any) => {
                            setTempData(tempDataStringSource(newTerm));
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
    const [tempData, setTempData] = useState<string[]>(
        tempDataStringSource('')
    );
    return (
        <StyledStory>
            <Grid columns={1}>
                <Cell width={1}>
                    <Typography tag="h1">AutoComplete 1</Typography>
                    <AutoComplete
                        placeholder="Search here..."
                        onFilter={(newTerm: any) => {
                            setTempData(tempDataStringSource(newTerm));
                        }}
                        prefix={<Icon color={colors.ash.base} type="search" />}
                        dataSource={tempData}
                    />
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
    .add('String Array Results', () => <StateBasedAutoCompleteStory />)
    .add('Object Array Results', () => (
        <StyledStory>
            <Grid columns={1}>
                <Cell width={1}>
                    <Typography tag="h1">AutoComplete 1</Typography>
                    <AutoComplete
                        placeholder="Search here..."
                        prefix={<Icon color={colors.ash.base} type="search" />}
                        dataSource={[
                            { label: 'a', id: 1, isAdmin: true },
                            { label: 'b', id: 2, isAdmin: false, listItemType: 'title' },
                            { label: 'c', id: 3, isAdmin: true },
                            { label: 'd', id: 3, isAdmin: true },
                            { label: 'e', id: 3, isAdmin: true },
                            { label: 'f', id: 3, isAdmin: true },
                            { label: 'd', id: 3, isAdmin: true },
                            { label: 'e', id: 3, isAdmin: true },
                            { label: 'f', id: 3, isAdmin: true },
                            { label: 'd', id: 3, isAdmin: true },
                            { label: 'e', id: 3, isAdmin: true },
                        ]}
                    />
                </Cell>
            </Grid>
        </StyledStory>
    ))
    .add('Custom Results List', () => (
        <StateBasedAutoCompleteStoryWithCustomResults />
    ));
