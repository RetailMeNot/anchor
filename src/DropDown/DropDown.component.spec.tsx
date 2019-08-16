// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// COMPONENT
import { DropDown } from './DropDown.component';
// ENZYME
import { shallow, mount } from 'enzyme';

// TEST SETUP
const subject = <DropDown overlay={<div>1</div>} />;
const component = shallow(subject);

describe('Component: DropDown', () => {
    test('should render in the DOM', () => {
        expect(subject).toBeDefined();
        expect(component).toBeDefined();
        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
    test('should toggle when clicked', () => {
        const wrapper = mount(subject);
        wrapper.find('div.anchor-drop-down').simulate('click');
        expect(
            wrapper.find('div.anchor-down-down-container').props().hidden
        ).toBeFalsy();
        wrapper.find('div.anchor-drop-down').simulate('click');
        expect(
            wrapper.find('div.anchor-down-down-container').props().hidden
        ).toBeTruthy();
    });
});
