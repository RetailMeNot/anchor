// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// COMPONENT
import Icon from './Icon.component';
// ENZYME
import { mount } from 'enzyme';

// TEST SETUP
const subject = <Icon type="hamburger" />;

describe('Component: Icon', () => {
    it('should match its snapshot', () => {
        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render a default icon', () => {
        const testSubject = mount(<Icon />);
        expect(testSubject.find('svg').exists()).toBeTruthy();
    });
    it('should render a success icon', () => {
        const testSubject = mount(<Icon type="success" />);
        expect(testSubject.find('path#icon-success').exists()).toBeTruthy();
    });
});
