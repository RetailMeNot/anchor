// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// COMPONENT
import { Modal } from '..';
const { Content } = Modal;

describe('Component: Modal.Content', () => {
    it('should render', () => {
        const subject = <Content>Text</Content>;
        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
