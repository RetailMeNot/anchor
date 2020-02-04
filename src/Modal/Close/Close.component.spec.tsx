// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { ThemeProvider } from '@xstyled/styled-components';
// COMPONENT
import { RootTheme } from '../../theme';
import { Modal } from '..';
const { Close } = Modal;

describe('Component: Modal.Close', () => {
    it('should render', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <Close />
            </ThemeProvider>
        );
        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should match snapshot with alignment set', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <Close align="left" />
            </ThemeProvider>
        );
        const tree = renderer.create(subject).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
