// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import styled from 'styled-components';
import { ThemeProvider } from '@xstyled/styled-components';
// COMPONENTS
import { AutoComplete } from './AutoComplete.component';
import { Search } from '../Icon';
import { Grid, Cell } from '../Grid';
import { Item } from '../List';
import { Typography } from '../Typography';
import { colors, RootTheme } from '../theme';
// README
import * as README from './README.md';
// THEME

const StyledStory = styled('div')`
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
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <Grid columns={1}>
                    <Cell width={1}>
                        <Typography tag="h1">AutoComplete 1</Typography>
                        <br />
                        <AutoComplete
                            placeholder="Search here..."
                            onFilter={(newTerm: any) => {
                                setTempData(tempDataStringSource(newTerm));
                            }}
                            prefix={<Search color={colors.ash.base} />}
                            dataSource={tempData}
                        />
                    </Cell>
                </Grid>
            </StyledStory>
        </ThemeProvider>
    );
};

const CustomResult = ({ index, currentIndex, label }: any) => {
    const isLink = index === 2;
    return isLink ? (
        <Item
            key={index}
            active={index === currentIndex}
            onSelect={() => {
                window.open('http://www.google.com', '_blank');
            }}
        >
            Link: {label}
        </Item>
    ) : (
        <Item active={index === currentIndex}>{label}</Item>
    );
};

const StateBasedAutoCompleteStoryCustomResult = () => {
    const [tempData, setTempData] = useState<string[]>(
        tempDataStringSource('')
    );
    return (
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <Grid columns={1}>
                    <Cell width={1}>
                        <Typography tag="h1">AutoComplete 1</Typography>
                        <br />
                        <AutoComplete
                            placeholder="Search here..."
                            onFilter={(newTerm: any) => {
                                setTempData(tempDataStringSource(newTerm));
                            }}
                            prefix={<Search color={colors.ash.base} />}
                            dataSource={tempData}
                            resultTemplate={CustomResult}
                        />
                    </Cell>
                </Grid>
            </StyledStory>
        </ThemeProvider>
    );
};

storiesOf('Components/AutoComplete', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('String Array Results', () => <StateBasedAutoCompleteStory />)
    .add('Custom Results Template', () => (
        <StateBasedAutoCompleteStoryCustomResult />
    ))
    .add('Object Array Results', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <Grid columns={1}>
                    <Cell width={1}>
                        <Typography tag="h1">AutoComplete 1</Typography>
                        <br />
                        <AutoComplete
                            allowClear={true}
                            placeholder="Search here..."
                            prefix={<Search color={colors.ash.base} />}
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
        </ThemeProvider>
    ));
