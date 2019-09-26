// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// COMPONENT
import { Menu } from './Menu.component';
import { Item } from './Item';
// ENZYME
import { shallow, mount } from 'enzyme';

describe('Component: Menu', () => {
    it('should match its snapshot and render items.', () => {
        const subject = (
            <>
                <Menu>
                    <Item path="/">Test Item</Item>
                </Menu>
                <Menu size="sm">
                    <Item path="/">Test Item</Item>
                </Menu>
                <Menu size="lg">
                    <Item path="/">Test Item</Item>
                </Menu>
                </>
        );
        const wrapper = mount(subject);
        const component = shallow(subject);
        expect(subject).toBeDefined();
        expect(wrapper).toBeDefined();
        expect(component).toBeDefined();
        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
