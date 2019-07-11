// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// COMPONENT
import { Modal } from '..';
const { Close } = Modal;

describe('Component: Modal.Close', () => {
    it('should render', () => {
        const subject = <Close />;
        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should match snapshot with alignment set', () => {
        const subject = <Close align="left" />;
        const tree = renderer.create(subject).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
