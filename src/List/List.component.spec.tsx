// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// COMPONENT
import { List } from './List.component';
// ENZYME
import { shallow, mount } from 'enzyme';

// TEST SETUP
const subject = <List />;
const wrapper = mount(subject);
const component = shallow(subject);

describe('Component: List', () => {
    it('should be defined', () => {
        expect(subject).toBeDefined();
        expect(wrapper).toBeDefined();
        expect(component).toBeDefined();
        const tree = renderer.create(subject).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
