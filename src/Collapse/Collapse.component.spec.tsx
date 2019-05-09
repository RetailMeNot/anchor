// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// Vendor
import { shallow, mount } from 'enzyme';
// COMPONENT
import { Collapse } from './';
import { ArrowBack } from '../Icon';
// STYLED COMPONENTS
/* tslint:disable no-import-side-effect*/
import 'jest-styled-components';

describe('Component: Collapse', () => {
    it('should match its snapshot.', () => {
        const subject = <Collapse />;
        const component = shallow(subject);

        expect(subject).toBeDefined();
        expect(component).toBeDefined();

        const tree = renderer.create(subject).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should show content when isOpen is true.', () => {
        const subject = <Collapse isOpen={true}>Hello World!</Collapse>;
        const component = shallow(subject);

        expect(
            component.find('.anchor-collapse-content').exists()
        ).toBeTruthy();
    });

    it('should not show content by default.', () => {
        const subject = <Collapse>Hello World!</Collapse>;
        const component = shallow(subject);

        expect(component.find('.anchor-collapse-content').exists()).toBeFalsy();
    });

    it('should use custom openText as closeText if no closeText is given.', () => {
        const sampleText = 'No Toggling Text';
        const subject = (
            <Collapse openText={sampleText} isOpen={true}>
                Hello World!
            </Collapse>
        );
        const component = shallow(subject);

        expect(
            component.find('.anchor-collapse-button').contains(sampleText)
        ).toBeTruthy();
    });

    it('should toggle content when the button is clicked.', () => {
        const subject = <Collapse>Hello World!</Collapse>;
        const wrapper = mount(subject);
        const toggleButton = wrapper.find('.anchor-collapse-button');

        toggleButton.simulate('click');

        expect(wrapper.find('.anchor-collapse-content').exists()).toBeTruthy();
    });

    it('should use different open icon when passed as a prop.', () => {
        const subject = (
            <Collapse openIcon={<ArrowBack />}>Hello World!</Collapse>
        );
        const wrapper = mount(subject);

        expect(wrapper.find('.anchor-icon.arrow-back').exists()).toBeTruthy();
    });

    it('should use different close icon when passed as a prop.', () => {
        const subject = (
            <Collapse closeIcon={<ArrowBack />} isOpen={true}>
                Hello World!
            </Collapse>
        );
        const wrapper = mount(subject);

        expect(wrapper.find('.anchor-icon.arrow-back').exists()).toBeTruthy();
    });
});
