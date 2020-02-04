// VENDOR
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { ThemeProvider } from '@xstyled/styled-components';
import { shallow, mount } from 'enzyme';
// ANCHOR
import { RootTheme } from '../../src/theme';
import { Table } from './Table.component';
const { Head, Body, Cell, Footer, Row, HeaderCell } = Table;

describe('Component: Table', () => {
    const table = (
        <ThemeProvider theme={RootTheme}>
            <Table />
        </ThemeProvider>
    );

    const wrapper = mount(table);
    const component = shallow(table);

    expect(table).toBeDefined();
    expect(wrapper).toBeDefined();
    expect(component).toBeDefined();

    it('should match snapshot.', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <Table />
            </ThemeProvider>
        );

        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render with all the bells and whistles', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <Table>
                    <Head>
                        <Row>
                            <HeaderCell>Fruit</HeaderCell>
                            <HeaderCell>Color</HeaderCell>
                            <HeaderCell>Calories</HeaderCell>
                        </Row>
                    </Head>
                    <Body>
                        <Row>
                            <Cell>Apple</Cell>
                            <Cell>Red</Cell>
                            <Cell>95</Cell>
                        </Row>
                        <Row>
                            <Cell>Banana</Cell>
                            <Cell>Yellow</Cell>
                            <Cell>105</Cell>
                        </Row>
                        <Row>
                            <Cell>Cranberry</Cell>
                            <Cell>Red</Cell>
                            <Cell>2</Cell>
                        </Row>
                    </Body>
                    <Footer>
                        <Row>
                            <Cell>People use tfoots?</Cell>
                        </Row>
                    </Footer>
                </Table>
            </ThemeProvider>
        );

        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
