// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';

// STYLED COMPONENTS
/* tslint:disable no-import-side-effect*/
import 'jest-styled-components';
/* tslint:enable */

// COMPONENT
import { Modal } from '..';
const { Header } = Modal;

describe('Component: Modal.Header', () => {
    it('should render with title', () => {
        const subject = <Header title="Header Title" />;
        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
