// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';

// STYLED COMPONENTS
/* tslint:disable no-import-side-effect*/
import 'jest-styled-components';
/* tslint:enable */

// COMPONENT
import { Modal } from '..';
const { Close } = Modal;

describe('Component: Modal.Close', () => {
    it('should render', () => {
        const subject = <Close />;
        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
