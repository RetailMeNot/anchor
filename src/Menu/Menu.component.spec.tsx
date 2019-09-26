// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// COMPONENT
import { Menu } from './Menu.component';
import { Item } from './Item';

describe('Component: Menu', () => {
    it('should match its snapshot and render items.', () => {
        const subject = (
            <div>
                <Menu>
                    <Item path="/">Test Item</Item>
                </Menu>
                <Menu size="sm">
                    <Item path="/">Test Item</Item>
                </Menu>
                <Menu size="lg">
                    <Item path="/">Test Item</Item>
                </Menu>
            </div>
        );
        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
