// VENDOR
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { ThemeProvider } from '@xstyled/styled-components';
import { shallow, mount } from 'enzyme';
// ANCHOR
import { RootTheme } from '../theme';
import { Skeleton } from './Skeleton.component';

describe('Component: Skeleton', () => {
    it('should be defined.', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <Skeleton />
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
    it('should render in textOnly mode when given only text', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <Skeleton>This is some sample text</Skeleton>
            </ThemeProvider>
        );

        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should wrap over nontext children and hide them', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <Skeleton>
                    <div>hide me!</div>
                </Skeleton>
            </ThemeProvider>
        );

        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should display just the children when not loading', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <Skeleton loading={false}>
                    <div>show me!</div>
                </Skeleton>
            </ThemeProvider>
        );

        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should support multiple color schemes', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <div>
                    <Skeleton colorStart="accent.dark" colorEnd="accent.light">
                        Apple
                    </Skeleton>
                    <Skeleton colorStart="accent.dark" colorEnd="accent.light">
                        Apple
                    </Skeleton>
                    <Skeleton
                        colorStart="secondary.dark"
                        colorEnd="secondary.light"
                    >
                        Banana
                    </Skeleton>
                </div>
            </ThemeProvider>
        );

        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
