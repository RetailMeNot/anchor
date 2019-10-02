// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// VENDOR
import { shallow, mount } from 'enzyme';
import { RootTheme } from '../../theme';
import { ThemeProvider } from '@xstyled/styled-components';
// COMPONENT
import { Title } from './Title.component';

// TEST SETUP
const subject = (
    <ThemeProvider theme={RootTheme}>
        <Title>Title</Title>
    </ThemeProvider>
);
const wrapper = mount(subject);
const component = shallow(subject);

describe('Component: Title', () => {
    it('should be defined', () => {
        expect(subject).toBeDefined();
        expect(wrapper).toBeDefined();
        expect(component).toBeDefined();
        const tree = renderer.create(subject).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
