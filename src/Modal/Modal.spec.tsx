// REACT
import * as React from 'react';

// ENZYME
import { mount } from 'enzyme';

// STYLED COMPONENTS
/* tslint:disable no-import-side-effect*/
import 'jest-styled-components';
/* tslint:enable */

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
        expect(wrapper.html()).toMatchSnapshot();
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
        expect(wrapper.html()).toMatchSnapshot();
    });
});
