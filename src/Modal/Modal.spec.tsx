// REACT
import * as React from 'react';
// ENZYME
import { mount } from 'enzyme';
// COMPONENT
import { Modal, ModalProvider } from './Modal.component';
import { RootTheme } from '../theme';
import { ThemeProvider } from '@xstyled/styled-components';
const { Header, Content, Footer, Close } = Modal;

describe('Component: Modal', () => {
    it('should be defined', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <ModalProvider>
                    <div>
                        <button />
                        <Modal isOpen>Contents</Modal>
                    </div>
                </ModalProvider>
            </ThemeProvider>
        );

        const wrapper = mount(subject);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render with modal components', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <ModalProvider>
                    <div>
                        <button />
                        <Modal isOpen>
                            <Header title="Header Title">
                                <Close />
                            </Header>
                            <Content>Content</Content>
                            <Footer>Footer</Footer>
                        </Modal>
                    </div>
                </ModalProvider>
            </ThemeProvider>
        );

        const wrapper = mount(subject);
        expect(wrapper).toMatchSnapshot();
    });
});
