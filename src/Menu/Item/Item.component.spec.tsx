// VENDOR
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// import
import { ThemeProvider } from '@xstyled/styled-components';
// ANCHOR
import { RootTheme } from '../../theme';
import { Item } from './Item.component';

describe('Component: Item', () => {
    it('should be defined', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <Item path="/" />
            </ThemeProvider>
        );
        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render with label', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <Item path="/" label="label" />
            </ThemeProvider>
        );

        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
