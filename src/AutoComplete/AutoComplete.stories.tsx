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
                    <br/>
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
                    <br />
                    <AutoComplete
                        placeholder="Search here..."
                        prefix={<Icon color={colors.ash.base} type="search" />}
                        dataSource={[
                            {
                                label: 'Title of a section 1',
                                id: 1,
                                someBoolean: false,
                                listItemType: 'title',
                            },
                            { label: 'Item 1', id: 2, someBoolean: true },
                            { label: 'Item 3', id: 3, someBoolean: true },
                            { label: 'Item 4', id: 4, someBoolean: true },
                            { label: 'Item 5', id: 5, someBoolean: true },
                            {
                                label: 'Title of a section 2',
                                id: 6,
                                someBoolean: true,
                                listItemType: 'title',
                            },
                            { label: 'Item 7', id: 7, someBoolean: true },
                            { label: 'Item 8', id: 8, someBoolean: true },
                            {
                                label: 'Title of a section 3',
                                id: 9,
                                someBoolean: true,
                                listItemType: 'title',
                            },
                            {
                                listItemType: 'divider',
                            },
                            { label: 'Item 11', id: 11, someBoolean: true },
                        ]}
                    />
                </Cell>
            </Grid>
        </StyledStory>
    ));
