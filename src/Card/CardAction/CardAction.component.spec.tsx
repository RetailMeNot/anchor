// VENDOR
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import { ThemeProvider } from '@xstyled/styled-components';
// ANCHOR
import { RootTheme } from '../../theme';
import { CardAction } from './CardAction.component';

// TEST SETUP
const subject = (
    <ThemeProvider theme={RootTheme}>
        <CardAction />
    </ThemeProvider>
);
const wrapper = mount(subject);
const component = shallow(subject);

describe('Component: CardAction', () => {
    it('should be defined', () => {
        expect(subject).toBeDefined();
        expect(wrapper).toBeDefined();
        expect(component).toBeDefined();
        const tree = renderer.create(subject).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
