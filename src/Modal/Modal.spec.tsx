// VENDOR
import * as React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
/* tslint:disable no-import-side-effect*/
import 'jest-styled-components';
/* tslint:enable */

// ANCHOR
import { anchorTheme } from '../theme';

// COMPONENT
import { Modal, ModalProvider } from './Modal.component';
const { Header, Content, Footer, Close } = Modal;

describe('Component: Modal', () => {
    it('should be defined', () => {
        const subject = (
            <ModalProvider>
                <div>
                    <button />
                    <Modal isOpen>Contents</Modal>
                </div>
            </ModalProvider>
        );

        const wrapper = mount(subject);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render with modal components', () => {
        const subject = (
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
        );

        const wrapper = mount(subject);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render identically with the anchor theme provided', () => {
        const subject = (
            <ModalProvider>
                <Modal isOpen>
                    <Header>
                        <Close />
                    </Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Modal>
            </ModalProvider>
        );

        const wrapper = mount(subject);

        const themedWrapper = mount(
            <ThemeProvider theme={anchorTheme}>{subject}</ThemeProvider>
        );

        expect(wrapper.html()).toEqual(
            themedWrapper.find(ModalProvider).html()
        );
    });
});
