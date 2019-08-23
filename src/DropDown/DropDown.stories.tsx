// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import styled, { ThemeProvider } from '@xstyled/styled-components';
import { text, select, boolean } from '@storybook/addon-knobs';
// COMPONENTS
import { DropDown } from './DropDown.component';
import { Button } from '../Button';
import { List, Item as ListItem } from '../List';
import { Typography } from '../Typography';
import { Container, Row, Col } from '../Grid';
// README
import * as README from './README.md';
import { RootTheme } from '../theme';
// THEME

const StyledStory = styled('div')`
    padding: 2rem 5rem;
`;

const listItemArray = [
    { key: 1, label: 'List Item 1' },
    { key: 2, label: 'List Item 2' },
    { key: 3, label: 'List Item 3' },
    { key: 4, label: 'List Item 4' },
    { key: 5, label: 'List Item 5' },
];

const MockList = () => (
    <List>
        {listItemArray.map(({ key, label }: any) => (
            <ListItem
                key={key}
                onClick={() => {
                    /* tslint:disable no-console */
                    console.log(`${label} has been clicked`);
                    /* tslint:enable no-console */
                }}
            >
                {label}
            </ListItem>
        ))}
    </List>
);

storiesOf('Components/DropDown', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('Default', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <Container>
                    <Row>
                        <Col offset={{ xs: 3, sm: 3, md: 3, lg: 3 }} lg={4}>
                            <div>
                                <Typography tag="h1">
                                    DropDown Default
                                </Typography>
                                <DropDown overlay={<MockList />}>
                                    <span>
                                        <span>
                                            <span>
                                                {/* deeply nested item */}
                                                <a>DropDown Link</a>
                                            </span>
                                        </span>
                                    </span>
                                </DropDown>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col offset={{ xs: 3, sm: 3, md: 3, lg: 3 }} lg={4}>
                            <div>
                                <Typography tag="h1">DropDown Right</Typography>
                                <DropDown
                                    overlay={<MockList />}
                                    position="right"
                                >
                                    <a>DropDown Link Right</a>
                                </DropDown>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col offset={{ xs: 3, sm: 3, md: 3, lg: 3 }} lg={4}>
                            <div>
                                <Typography tag="h1">DropDown Left</Typography>
                                <DropDown
                                    overlay={<MockList />}
                                    position="left"
                                >
                                    <a>DropDown Link Left</a>
                                </DropDown>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col offset={{ xs: 3, sm: 3, md: 3, lg: 3 }} lg={4}>
                            <div>
                                <Typography tag="h1">DropDown Top</Typography>
                                <DropDown
                                    overlay={<MockList />}
                                    position="top"
                                    trigger="click"
                                >
                                    <a>DropDown Link Top</a>
                                </DropDown>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </StyledStory>
        </ThemeProvider>
    ))
    .add('Knobs Demo', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <Container>
                    <Row>
                        <Col offset={{ xs: 3, sm: 3, md: 3, lg: 3 }} lg={4}>
                            <div>
                                <Typography tag="h1">DropDown</Typography>
                                <DropDown
                                    overlay={<MockList />}
                                    position={select<
                                        'top' | 'bottom' | 'right' | 'left'
                                    >(
                                        'Dropdown Position',
                                        ['top', 'bottom', 'right', 'left'],
                                        'bottom'
                                    )}
                                    trigger={select<'click' | 'hover'>(
                                        'Dropdown Trigger',
                                        ['click', 'hover'],
                                        'hover'
                                    )}
                                    showArrow={boolean('showArrow', false)}
                                    shadow={text('shadow', '') || undefined}
                                    background={text('background', '') || undefined}
                                >
                                    <Button>{text('Dropdown Text', 'Dropdown')}</Button>
                                </DropDown>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </StyledStory>
        </ThemeProvider>
    ));
