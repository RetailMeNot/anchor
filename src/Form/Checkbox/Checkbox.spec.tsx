// VENDOR
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { ThemeProvider } from '@xstyled/styled-components';
// ANCHOR
import { RootTheme } from '../../theme/index';
// COMPONENT
import { Checkbox } from './Checkbox.component';

describe('Component: Checkbox', () => {
    it('should be defined', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <Checkbox />
            </ThemeProvider>
        );

        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should be disableable', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <Checkbox disabled />
            </ThemeProvider>
        );

        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('can be checked', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <Checkbox checked />
            </ThemeProvider>
        );

        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
