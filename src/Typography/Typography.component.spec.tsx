// VENDOR
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { Typography } from './Typography.component';
import styled, { css, ThemeProvider } from '@xstyled/styled-components';
// ANCHOR
import { RootTheme } from '../theme';
import { themeMerge } from '../utils/themeMerge';

const themeWithCssBlockVariant = themeMerge({
    typography: {
        as: {
            h5: css`
                background-color: blue;
            `,
        },
        scale: {
            24: css`
                background-color: green;
            `,
        },
    },
});

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
    it('should be extendable via styled', () => {
        const RedText = styled(Typography)`
            color: red;
        `;

        const subject = (
            <ThemeProvider theme={RootTheme}>
                <RedText>I should be red!</RedText>
            </ThemeProvider>
        );

        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should be extendable via styled', () => {
        const RedText = styled(Typography)`
            color: red;
        `;

        const subject = (
            <ThemeProvider theme={RootTheme}>
                <RedText as="h1">I should be an h1 and be red!</RedText>
            </ThemeProvider>
        );

        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should be allow for custom classNames to be added', () => {
        const RedText = styled(Typography)`
            color: red;
        `;

        const subject = (
            <ThemeProvider theme={RootTheme}>
                <Typography className="customClass">
                    Typography customClass
                </Typography>
                <RedText className="customClass">RedText customClass</RedText>
                <RedText as="h1" className="customClass">
                    RedText h1 customClass
                </RedText>
            </ThemeProvider>
        );

        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('scale should take precendence over as variants', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <Typography className="customClass" as="h5" scale={32}>
                    Typography customClass
                </Typography>
            </ThemeProvider>
        );

        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should work with css block as-variants', () => {
        const subject = (
            <ThemeProvider theme={themeWithCssBlockVariant}>
                <Typography className="customClass" as="h5">
                    Typography customClass
                </Typography>
            </ThemeProvider>
        );

        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should work with css block scale variants', () => {
        const subject = (
            <ThemeProvider theme={themeWithCssBlockVariant}>
                <Typography className="customClass" scale={24}>
                    Typography customClass
                </Typography>
            </ThemeProvider>
        );

        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('scale should still take precendence with css block as-variants', () => {
        const subject = (
            <ThemeProvider theme={themeWithCssBlockVariant}>
                <Typography className="customClass" as="h5" scale={32}>
                    Typography customClass
                </Typography>
            </ThemeProvider>
        );

        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
