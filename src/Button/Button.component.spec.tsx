// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// COMPONENT
import Button, { Button as Styles } from './Button.component';
// ENZYME
import { shallow, mount } from 'enzyme';

// TEST SETUP
const subject = <Button>Test</Button>;
const wrapper = mount(subject);
const component = shallow(subject);

describe('Component: Button', () => {
    it('should be defined', () => {
        /* tslint:disable */
        console.log(subject);
        console.log(wrapper.debug());
        console.log(component.debug());
        console.log(Styles);

        /* tslint:enable */
        expect(subject).toBeDefined();
        expect(wrapper).toBeDefined();
        expect(component).toBeDefined();
        const tree = renderer.create(<Button>Submit</Button>).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
