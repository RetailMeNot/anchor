// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';

// COMPONENT
import { Typography } from './Typography.component';

// ENZYME
import { mount } from 'enzyme';

// STYLED COMPONENTS
/* tslint:disable no-import-side-effect*/
import 'jest-styled-components';
/* tslint:enable */

describe('Component: Typography', () => {
    it('match its snapshot', () => {
        const subject = <Typography>Test text</Typography>;
        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render all text elements', () => {
        [
            'p',
            'span',
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
            'blockquote',
            'address',
            'code',
            'pre',
        ].forEach((element: any) => {
            expect(
                mount(<Typography tag={element}>Test text</Typography>).exists(
                    element
                )
            ).toBeTruthy();
        });
    });
    it('should a span by default', () => {
        expect(
            mount(<Typography>Test text</Typography>).exists('span')
        ).toBeTruthy();
    });
    it('should accept a custom size', () => {
        const subject = <Typography size={2}>Text</Typography>;
        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should accept a custom lineHeight', () => {
        const subject = <Typography lineHeight={3}>Text</Typography>;
        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should accept a custom display', () => {
        const subject = <Typography display="block">Text</Typography>;
        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
