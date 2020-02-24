// VENDOR
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { ThemeProvider } from '@xstyled/styled-components';
// ANCHOR
import { RootTheme } from '../../src/theme';
import { Adapt } from './Adapt.component';

describe('Component: Adapt', () => {
    it('should be defined.', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <Adapt forEach={{ xs: 'blue', md: 'green' }}>
                    {(value, breakpoint) => (
                        <div>{`${value} | ${breakpoint}`}</div>
                    )}
                </Adapt>
            </ThemeProvider>
        );

        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should not show below the minimum specified breakpoint.', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <Adapt forEach={{ md: 'green' }}>
                    {(value, breakpoint) => (
                        <div>{`${value} | ${breakpoint}`}</div>
                    )}
                </Adapt>
            </ThemeProvider>
        );

        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should order breakpoints that were specified out of order.', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <Adapt forEach={{ md: 'green', xs: 'blue' }}>
                    {(value, breakpoint) => (
                        <div>{`${value} | ${breakpoint}`}</div>
                    )}
                </Adapt>
            </ThemeProvider>
        );

        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
