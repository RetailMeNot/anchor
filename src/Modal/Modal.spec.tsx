// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// ENZYME
import { shallow, mount } from 'enzyme';
// COMPONENT
import { Modal } from './Modal.component';

describe('Component: Modal', () => {
    it('should be defined', () => {
        const subject = <Modal />;
        const wrapper = mount(subject);
        const component = shallow(subject);

        expect(subject).toBeDefined();
        expect(wrapper).toBeDefined();
        expect(component).toBeDefined();
        const tree = renderer.create(subject).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
