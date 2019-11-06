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
import { Input } from '../Form/Input';
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

const CustomInput = React.forwardRef(({...props}) => <Input {...props} autoCapitalize="off" />);

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
                            inputComponent={CustomInput}
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
    ));
