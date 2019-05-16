// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';

// STYLED COMPONENTS
/* tslint:disable no-import-side-effect*/
import 'jest-styled-components';
/* tslint:enable */

// COMPONENT
import { Modal } from '..';
const { Footer } = Modal;

describe('Component: Modal.Footer', () => {
    it('should render', () => {
        const subject = <Footer>Text</Footer>;
        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
