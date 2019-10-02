// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// VENDOR
import { shallow, mount } from 'enzyme';
// COMPONENT
import { Divider } from './Divider.component';

describe('Component: Divider', () => {
    it('should be defined', () => {
        const subject = <Divider />;
        const wrapper = mount(subject);
        const component = shallow(subject);

        expect(subject).toBeDefined();
        expect(wrapper).toBeDefined();
        expect(component).toBeDefined();
        const tree = renderer.create(subject).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
