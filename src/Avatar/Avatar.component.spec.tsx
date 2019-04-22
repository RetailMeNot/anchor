// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// COMPONENT
import { Avatar } from './Avatar.component';
// ENZYME
import { shallow, mount } from 'enzyme';

// TEST SETUP
const subject = <Avatar />;
const wrapper = mount(subject);
const component = shallow(subject);

describe('Component: Avatar', () => {
    it('should match its snapshot.', () => {
        expect(subject).toBeDefined();
        expect(wrapper).toBeDefined();
        expect(component).toBeDefined();
        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should set a default avatar if none is provided', () => {
        expect(wrapper.exists('svg')).toBe(true);
    });
    it('should render the first two characters of any label passed in', () => {
        const testLabel = 'TT';
        const subjectWithInitials = mount(<Avatar label={testLabel} />);
        expect(subjectWithInitials.find('div.avatar-container').text()).toBe(
            testLabel
        );
    });
});
