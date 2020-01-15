// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// VENDOR
import { mount } from 'enzyme';
import { Typography } from './Typography.component';
// COMPONENT
import { RootTheme } from '../theme';
import { ThemeProvider } from '@xstyled/styled-components';

describe('Component: Typography', () => {
    it('match its snapshot', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <Typography>Test text</Typography>
            </ThemeProvider>
        );
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
                mount(
                    <ThemeProvider theme={RootTheme}>
                        <Typography as={element}>Test text</Typography>
                    </ThemeProvider>
                ).exists(element)
            ).toBeTruthy();
        });
    });
    it('should a span by default', () => {
        expect(
            mount(
                <ThemeProvider theme={RootTheme}>
                    <Typography>Test text</Typography>
                </ThemeProvider>
            ).exists('span')
        ).toBeTruthy();
    });
    it('should accept a custom size', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <Typography size={2}>Text</Typography>
            </ThemeProvider>
        );
        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should accept a custom lineHeight', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <Typography lineHeight={3}>Text</Typography>
            </ThemeProvider>
        );
        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should accept a custom display', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <Typography display="block">Text</Typography>
            </ThemeProvider>
        );
        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
