// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';

// STYLED COMPONENTS
/* tslint:disable no-import-side-effect*/
import 'jest-styled-components';
/* tslint:enable */

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
