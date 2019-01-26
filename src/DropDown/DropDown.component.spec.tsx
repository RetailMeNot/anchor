// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// COMPONENT
import DropDown from './DropDown.component';
// ENZYME
import { shallow, mount } from 'enzyme';

// TEST SETUP
const subject = <DropDown overlay={<div>1</div>} />;
const wrapper = mount(subject);
const component = shallow(subject);

describe('Component: DropDown', () => {
    it('should be defined', () => {
        /* tslint:disable */
        console.log(subject);
        console.log(wrapper.debug());
        console.log(component.debug());

        /* tslint:enable */
        expect(subject).toBeDefined();
        expect(wrapper).toBeDefined();
        expect(component).toBeDefined();
        const tree = renderer.create(subject).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
