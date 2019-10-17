// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// VENDOR
import { shallow, mount } from 'enzyme';
import { RootTheme } from '../../theme';
import { ThemeProvider } from '@xstyled/styled-components';
// COMPONENT
import { Item } from './Item.component';

// TEST SETUP
const subject = (
    <ThemeProvider theme={RootTheme}>
        <Item
            onSelect={() => null}
            onMouseOver={() => null}
            onMouseOut={() => null}
        >
            Item
        </Item>
    </ThemeProvider>
);
const wrapper = mount(subject);
const component = shallow(subject);

describe('Component: Item', () => {
    it('should be defined', () => {
        expect(subject).toBeDefined();
        expect(wrapper).toBeDefined();
        expect(component).toBeDefined();
        const tree = renderer.create(subject).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
