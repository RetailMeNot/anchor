// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// VENDOR
import { ThemeProvider } from '@xstyled/styled-components';
// COMPONENT
import { RootTheme } from '../theme';
import { Menu } from './Menu.component';
import { Item } from './Item';

describe('Component: Menu', () => {
    it('should match its snapshot and render items.', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <Menu>
                    <Item path="/">Test Item</Item>
                </Menu>
                <Menu size="sm">
                    <Item path="/">Test Item</Item>
                </Menu>
                <Menu size="lg">
                    <Item path="/">Test Item</Item>
                </Menu>
            </ThemeProvider>
        );
        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
