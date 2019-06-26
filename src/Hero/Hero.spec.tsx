// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// VENDOR
import { shallow, mount } from 'enzyme';
import { ThemeProvider } from '@xstyled/styled-components';
// ANCHOR
import { Button, Typography } from '..';
// COMPONENT
import { Hero } from './Hero.component';
import { RootTheme } from '../theme';
const { Title, Subtitle } = Hero;

describe('Component: Hero', () => {
    it('should be defined', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <Hero />
            </ThemeProvider>
        );
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
            <ThemeProvider theme={RootTheme}>
                <Hero>
                    <Title>Hero Title</Title>
                </Hero>
            </ThemeProvider>
        );
        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render with title and subtitle', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <Hero>
                    <Title>Hero Title</Title>
                    <Subtitle>Hero Subtitle</Subtitle>
                </Hero>
            </ThemeProvider>
        );
        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render with custom content', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <Hero>
                    <Title>Good Ole Title</Title>
                    <Typography>Some Typography text</Typography>
                    <Button>CTA</Button>
                </Hero>
            </ThemeProvider>
        );
        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
