// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// COMPONENT
import Icon from './Icon.component';
// ENZYME
import { shallow, mount } from 'enzyme';

// TEST SETUP
const subject = <Icon type="hamburger" />;
const component = shallow(subject);

describe('Component: Button', () => {
    it('should match its snapshot', () => {
        const tree = renderer.create(subject).toJSON();
        expect(component).toBeDefined();
        expect(tree).toMatchSnapshot();
    });
    it('should render a default icon', () => {
        const testSubject = mount(<Icon />);
        expect(testSubject.find('svg').exists()).toBeTruthy();
    });
    it('should render a default icon', () => {
        const testSubject = mount(<Icon />);
        expect(testSubject.find('svg').exists()).toBeTruthy();
    });
    it('should render a search icon', () => {
        const testSubject = mount(<Icon type="search" />);
        expect(testSubject.find('mask#search-icon-mask').exists()).toBeTruthy();
    });
});
