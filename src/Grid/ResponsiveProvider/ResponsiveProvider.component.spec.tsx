// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { ThemeProvider } from '@xstyled/styled-components';
// COMPONENT
import { ResponsiveProvider } from './ResponsiveProvider.component';
import { RootTheme } from '../../theme';
// ENZYME
import { shallow, mount } from 'enzyme';

jest.useFakeTimers();

describe('Component: ResponsiveProvider', () => {
    it('should be defined', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <ResponsiveProvider />
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

    it('should use breakpoint prop if passed.', () => {
        const breakpoints = {
            lg: 300,
            sm: 100,
        };
        const subject = <ResponsiveProvider breakpoints={breakpoints} />;
        const wrapper = mount(subject);
        const responsiveProvider = wrapper.find('BasicResponsiveProvider');
        const bpVal1 = Object.values(
            responsiveProvider.state().breakpoints[0]
        )[0];
        const bpVal2 = Object.values(
            responsiveProvider.state().breakpoints[1]
        )[0];

        expect(bpVal1).toEqual(100);
        expect(bpVal2).toEqual(300);
    });

    it("should use RootTheme if no breakpoints are passed and there's no ThemeProvider.", () => {
        const subject = <ResponsiveProvider />;
        const wrapper = mount(subject);
        const responsiveProvider = wrapper.find('BasicResponsiveProvider');
        const bpVal1 = Object.values(
            responsiveProvider.state().breakpoints[0]
        )[0];
        const bpVal2 = Object.values(
            responsiveProvider.state().breakpoints[1]
        )[0];

        expect(bpVal1).toEqual(RootTheme.breakpoints.xs);
        expect(bpVal2).toEqual(RootTheme.breakpoints.sm);
    });

    it('should update state when the window is resized.', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <ResponsiveProvider />
            </ThemeProvider>
        );
        const wrapper = mount(subject);
        const responsiveProvider = wrapper.find('BasicResponsiveProvider');

        Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: 200,
        });
        window.dispatchEvent(new Event('resize'));
        jest.runAllTimers(); // Necessary because the event is debounced

        expect(responsiveProvider.state().innerWidth).toBe(200);
    });

    it('should remove window event listeners on unmount.', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <ResponsiveProvider />
            </ThemeProvider>
        );
        const wrapper = mount(subject);
        const remover = jest.spyOn(window, 'removeEventListener');

        wrapper.unmount();

        expect(remover).toHaveBeenCalled();
    });

    it('should show the debug box when debug is enabled.', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <ResponsiveProvider debug />
            </ThemeProvider>
        );
        const wrapper = mount(subject);

        expect(wrapper.find('StyledDebug')).toBeDefined();
    });

    it("shouldn't bother doing anything with the window if it doesn't exist.", () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <ResponsiveProvider windowDep={false} />
            </ThemeProvider>
        );
        const wrapper = mount(subject);
        const responsiveProvider = wrapper.find('BasicResponsiveProvider');
        const remover = jest.spyOn(window, 'removeEventListener');

        wrapper.unmount();

        expect(remover).toHaveBeenCalled();
        expect(responsiveProvider.state().innerWidth).toBe(0);
    });
});
