// VENDOR
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import { ThemeProvider } from '@xstyled/styled-components';
// ANCHOR
import { RootTheme } from '../../theme';
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
