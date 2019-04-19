// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// ENZYME
import { shallow, mount } from 'enzyme';
// COMPONENT
import {Hero} from './Hero.component';
const { Title, Subtitle } = Hero;

// TEST SETUP
const subject = (
    <Hero>
        <Title>Hero Title</Title>
        <Subtitle>Hero Subtitle</Subtitle>
    </Hero>
);
const wrapper = mount(subject);
const component = shallow(subject);

describe('Component: Hero', () => {
    it('should be defined', () => {
        /* tslint:disable */
        console.log(subject);
        console.log(wrapper.debug());
        console.log(component.debug());

        /* tslint:enable */
        expect(subject).toBeDefined();
        expect(wrapper).toBeDefined();
        expect(component).toBeDefined();
        const tree = renderer.create(subject).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
