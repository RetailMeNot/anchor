// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// ENZYME
import { mount } from 'enzyme';

// COMPONENT
import { Modal, ModalProvider } from './Modal.component';

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

        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
