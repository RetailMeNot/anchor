// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// VENDOR
import { ThemeProvider } from '@xstyled/styled-components';
// COMPONENT
import { RootTheme } from '../theme';
import { Tooltip } from './Tooltip.component';
import { Position } from '../utils/position/position';

// ENZYME
import { mount, shallow } from 'enzyme';

const subject = (
    <ThemeProvider theme={RootTheme}>
        <Tooltip content="This is a tooltip">
            <button>Hover</button>
        </Tooltip>
    </ThemeProvider>
);

describe('Component: Tooltip', () => {
    it('should be defined and match its snapshot.', () => {
        const component = shallow(subject);
        const tree = renderer.create(subject).toJSON();

        expect(subject).toBeDefined();
        expect(component).toBeDefined();
        expect(tree).toMatchSnapshot();
    });
    it('should show a tooltip on hover.', () => {
        const wrapper = mount(subject);
        expect(wrapper.find(Tooltip).state().hidden).toBeTruthy();
        wrapper.find(Tooltip).simulate('mouseenter');
        wrapper.update();
        expect(wrapper.find(Tooltip).state().hidden).toBeFalsy();
        wrapper.find(Tooltip).simulate('mouseleave');
        wrapper.update();
        expect(wrapper.find(Tooltip).state().hidden).toBeTruthy();
    });
    it("should force tooltip's visibility when show is set to true", () => {
        const testSubject = (
            <ThemeProvider theme={RootTheme}>
                <Tooltip content="This is a tooltip" show={true}>
                    <button>Hover</button>
                </Tooltip>
            </ThemeProvider>
        );

        const wrapper = mount(testSubject);

        wrapper.simulate('mouseleave');
        wrapper.update();

        expect(
            wrapper.find('.anchor-tooltip-element.active').exists()
        ).toBeTruthy();
    });
    it('should show an arrow when showArrow is true.', () => {
        const testSubject = (
            <ThemeProvider theme={RootTheme}>
                <Tooltip
                    content="This is a tooltip"
                    show={true}
                    showArrow={true}
                >
                    <button>Hover</button>
                </Tooltip>
            </ThemeProvider>
        );

        const wrapper = mount(testSubject);

        expect(wrapper.find('Arrow').exists()).toBeTruthy();
    });
    it('should render all the different tooltip positions.', () => {
        [
            'topStart',
            'top',
            'topEnd',
            'rightStart',
            'right',
            'rightEnd',
            'bottomEnd',
            'bottom',
            'bottomStart',
            'leftEnd',
            'left',
            'leftStart',
        ].map((option: Position) => {
            const subjectInstance = (
                <ThemeProvider theme={RootTheme}>
                    <Tooltip content="This is a tooltip" position={option}>
                        <button>Hover</button>
                    </Tooltip>
                </ThemeProvider>
            );
            const component = shallow(subjectInstance);
            const tree = renderer.create(subjectInstance).toJSON();

            expect(subjectInstance).toBeDefined();
            expect(component).toBeDefined();
            expect(tree).toMatchSnapshot();
        });
    });
});
