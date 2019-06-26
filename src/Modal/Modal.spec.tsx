// REACT
import * as React from 'react';
// VENDOR
import { mount } from 'enzyme';
// COMPONENT
import { Modal, ModalProvider } from './Modal.component';

describe('Component: Modal', () => {
    it('should be defined', () => {
        const subject = (
            <ModalProvider>
                <Modal isOpen>Contents</Modal>
            </ModalProvider>
        );

        const wrapper = mount(subject);
        expect(wrapper).toBeDefined();
    });

    it('should render children', () => {
        const subject = (
            <ModalProvider>
                <Modal isOpen>Contents</Modal>
            </ModalProvider>
        );

        const wrapper = mount(subject);
        expect(wrapper.find(Modal).text()).toEqual('Contents');
    });
});
