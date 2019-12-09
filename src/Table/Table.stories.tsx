// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
// VENDOR
import styled, { ThemeProvider } from '@xstyled/styled-components';
// ANCHOR
import { RootTheme } from '../../src/theme';
import { Table } from './Table.component';
import { Typography } from '../Typography';

const { Cell, Row, Head, Body, HeaderCell } = Table;

const StyledStory = styled('div')`
    padding: 2rem;
    color: text.base;
    font-family: base;
`;

const createData = (name: string, color: string, rating: string) => ({
    name,
    color,
    rating,
});
const data = [
    createData('Pear', 'Green', '4/5'),
    createData('Apple', 'Red', '2/5'),
    createData('Banana', 'Yellow', '4/5'),
    createData('Grapefruit', 'Orange', '3.5/5'),
    createData('Apricot', 'Orange', '1.5/5'),
];

storiesOf('Components/Table', module).add('Default', () => (
    <ThemeProvider theme={RootTheme}>
        <StyledStory>
            <Typography
                tag="h3"
                scale={24}
                weight={500}
                mb="0.5rem"
                color="text.light"
            >
                Fruit Table
            </Typography>
            <Table
                width={text('width', '33.75rem')}
                size={select<'md' | 'sm'>('size', ['md', 'sm'], 'md')}
                background={text('background', '') || undefined}
                altBackground={text('altBackground', '') || undefined}
            >
                <Head>
                    <Row>
                        <HeaderCell scope="col" />
                        <HeaderCell scope="col">
                            <Typography scale={28} weight={600} tag="p">
                                $4
                            </Typography>
                            <Typography
                                scale={14}
                                color="text.light"
                                weight="normal"
                            >
                                (30 Day Qty)
                            </Typography>
                        </HeaderCell>
                        <HeaderCell scope="col">
                            <Typography scale={28} weight={600} tag="p">
                                $10
                            </Typography>
                            <Typography
                                scale={14}
                                color="text.light"
                                weight="normal"
                            >
                                (90 Day Qty)
                            </Typography>
                        </HeaderCell>
                    </Row>
                </Head>
                <Body>
                    {data.map(({ name, color, rating }) => (
                        <Row key={name}>
                            <HeaderCell
                                scope="row"
                                align="left"
                                color="#91609c"
                                fontWeight={600}
                            >
                                {name}
                            </HeaderCell>
                            <Cell
                                align="center"
                                width={{ xs: '1px', md: '200px' }}
                            >
                                {color}
                            </Cell>
                            <Cell
                                align="center"
                                width={{ xs: '1px', md: '200px' }}
                            >
                                {rating}
                            </Cell>
                        </Row>
                    ))}
                </Body>
            </Table>
        </StyledStory>
    </ThemeProvider>
));
