// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// COMPONENT
import { CustomAdaptor } from './Adaptor.component';
// ENZYME
import { shallow, mount } from 'enzyme';

// TEST SETUP
const subject = <CustomAdaptor minWidth={200} />;
const wrapper = mount(subject);
const component = shallow(subject);

describe('Component: Adaptor', () => {
    it('should be defined', () => {
        expect(subject).toBeDefined();
        expect(wrapper).toBeDefined();
        expect(component).toBeDefined();
        const tree = renderer.create(subject).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
