// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// ENZYME
import { shallow, mount } from 'enzyme';
// ANCHOR
import { Button, Typography } from '..';
// COMPONENT
import { Hero } from './Hero.component';
const { Title, Subtitle } = Hero;

describe('Component: Hero', () => {
    it('should be defined', () => {
        const subject = <Hero />;
        const wrapper = mount(subject);
        const component = shallow(subject);

        expect(subject).toBeDefined();
        expect(wrapper).toBeDefined();
        expect(component).toBeDefined();
        const tree = renderer.create(subject).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render with title', () => {
        const subject = (
            <Hero>
                <Title>Hero Title</Title>
            </Hero>
        );
        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render with title and subtitle', () => {
        const subject = (
            <Hero>
                <Title>Hero Title</Title>
                <Subtitle>Hero Subtitle</Subtitle>
            </Hero>
        );
        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render with custom content', () => {
        const subject = (
            <Hero>
                <Title>Good Ole Title</Title>
                <Typography>Some Typography text</Typography>
                <Button>CTA</Button>
            </Hero>
        );
        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
