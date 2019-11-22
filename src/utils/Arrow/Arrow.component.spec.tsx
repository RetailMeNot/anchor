// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// COMPONENT
import { Arrow } from './Arrow.component';
// ENZYME
import { shallow, mount } from 'enzyme';

// TEST SETUP
const subject = (
    <div>
        <Arrow position="top" />
        <Arrow position="bottom" />
        <Arrow position="left" />
        <Arrow position="right" />
    </div>
);
const wrapper = mount(subject);
const component = shallow(subject);

describe('Component: DropDown', () => {
    describe('Component: Arrow', () => {
        test('should render in the DOM', () => {
            expect(subject).toBeDefined();
            expect(wrapper).toBeDefined();
            expect(component).toBeDefined();
            const tree = renderer.create(subject).toJSON();

            expect(tree).toMatchSnapshot();
        });
    });
});
