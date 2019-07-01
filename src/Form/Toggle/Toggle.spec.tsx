// VENDOR
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { ThemeProvider } from '@xstyled/styled-components';
// ANCHOR
import { RootTheme } from '../../theme';
// COMPONENT
import { Toggle } from './Toggle.component';

describe('Component: Toggle', () => {
    it('should be defined', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <Toggle />
            </ThemeProvider>
        );

        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should be disableable', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <Toggle disabled/>
            </ThemeProvider>
        );

        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('can be checked', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <Toggle checked/>
            </ThemeProvider>
        );

        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
