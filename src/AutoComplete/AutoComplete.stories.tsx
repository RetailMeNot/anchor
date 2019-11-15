// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
// VENDOR
import styled, { ThemeProvider } from '@xstyled/styled-components';
// COMPONENTS
import { AutoComplete } from './AutoComplete.component';
import { Search } from '../Icon';
import { Item } from '../List';
import { Typography } from '../Typography';
import { RootTheme } from '../theme';
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
                <div>
                    <div>
                        <Typography tag="h1">AutoComplete 1</Typography>
                        <br />
                        <AutoComplete
                            debug={boolean('debug', false)}
                            placeholder="Search here..."
                            onFilter={(newTerm: any) => {
                                setTempData(tempDataStringSource(newTerm));
                            }}
                            prefix={<Search color="borders.base" />}
                            dataSource={tempData}
                        />
                    </div>
                </div>
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
                <div>
                    <div>
                        <Typography tag="h1">AutoComplete 1</Typography>
                        <br />
                        <AutoComplete
                            debug={boolean('debug', false)}
                            placeholder="Search here..."
                            onFilter={(newTerm: any) => {
                                setTempData(tempDataStringSource(newTerm));
                            }}
                            prefix={<Search color="borders.base" />}
                            dataSource={tempData}
                            resultTemplate={CustomResult}
                        />
                    </div>
                </div>
            </StyledStory>
        </ThemeProvider>
    );
};

interface DataPoint {
    label: string;
    id: number;
    url: string;
}

const BasicFilter = () => {
    const dataSource: DataPoint[] = [
        { label: 'Google', id: 1, url: 'http://www.google.com' },
        { label: 'Kotaku', id: 2, url: 'http://www.kotaku.com' },
        { label: 'io9', id: 3, url: 'http://www.io9.com' },
    ];

    const [filteredData, setFilteredData] = React.useState(dataSource);

    const filter = (val: string) => {
        setFilteredData(dataSource.filter( data => {
            return data.label.toLowerCase().includes(val.toLowerCase());
        }));
    };

    const select = (val: string) => {
        const result = dataSource.find((item: DataPoint) => {
            return val === item.label;
        });

        if (result) {
            window.open(result.url);
        }
    };

    return(
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <AutoComplete
                    dataSource={filteredData.length ? filteredData : dataSource}
                    onFilter={filter}
                    onSelect={select}
                    placeholder="Search here..."
                    prefix={<Search color="borders.base" />}
                />
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
                <div>
                    <div>
                        <Typography tag="h1">AutoComplete 1</Typography>
                        <br />
                        <AutoComplete
                            debug={boolean('debug', false)}
                            allowClear={true}
                            placeholder="Search here..."
                            prefix={<Search color="borders.base" />}
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
                    </div>
                </div>
            </StyledStory>
        </ThemeProvider>
    ))
    .add('Simple Filtering', () => <BasicFilter />);
