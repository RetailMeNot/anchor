// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// VENDOR
import { ThemeProvider } from '@xstyled/styled-components';
// COMPONENT
import { Modal } from '..';
import { RootTheme } from '../../theme';
const { Header } = Modal;

describe('Component: Modal.Header', () => {
    it('should render with title', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <Header title="Header Title" />
            </ThemeProvider>
        );
        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
