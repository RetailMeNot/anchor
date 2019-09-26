// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// COMPONENT
import { Item } from './Item.component';

describe('Component: Item', () => {
    it('should be defined', () => {
        const subject = <Item path="/" />;
        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render with label', () => {
        const subject = <Item path="/" label="label" />;

        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
