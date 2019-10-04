// VENDOR
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { ThemeProvider } from '@xstyled/styled-components';
import { shallow, mount } from 'enzyme';
// ANCHOR
import { RootTheme } from '../../src/theme';
import { Pagination } from './Pagination.component';

describe('Component: Pagination', () => {
    it('should be defined.', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <Pagination totalPages={5} />
            </ThemeProvider>
        );
        const wrapper = mount(subject);
        const component = shallow(subject);

        expect(subject).toBeDefined();
        expect(wrapper).toBeDefined();
        expect(component).toBeDefined();
        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render with many pages.', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <Pagination totalPages={100} />
            </ThemeProvider>
        );
        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render with current page in the middle.', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <Pagination totalPages={20} current={10} />
            </ThemeProvider>
        );
        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render on the last page.', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <Pagination totalPages={20} current={20} />
            </ThemeProvider>
        );
        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
