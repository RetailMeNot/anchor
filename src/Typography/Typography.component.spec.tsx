// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// COMPONENT
import Typography from './Typography.component';
// ENZYME
import { mount } from 'enzyme';

// TEST SETUP
const subject = <Typography>Test text</Typography>;

describe('Component: Typography', () => {
    it('match its snapshot', () => {
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
                mount(<Typography as={element}>Test text</Typography>).exists(
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
});
