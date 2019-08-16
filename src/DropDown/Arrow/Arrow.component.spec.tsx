// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// COMPONENT
import { renderArrow } from './Arrow.component';
// ENZYME
import { shallow, mount } from 'enzyme';

// TEST SETUP
const subject = (
    <div>
        {renderArrow('top', true)}
        <br />
        {renderArrow('bottom', true)}
        <br />
        {renderArrow('left', true)}
        <br />
        {renderArrow('right', true)}
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
