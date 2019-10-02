// VENDOR
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import { ThemeProvider } from '@xstyled/styled-components';
// ANCHOR
import { CardActionArea } from './CardActionArea.component';
import { RootTheme } from '../../theme';

// TEST SETUP
const subject = (
    <ThemeProvider theme={RootTheme}>
        <CardActionArea />
    </ThemeProvider>
);
const wrapper = mount(subject);
const component = shallow(subject);

describe('Component: CardActionArea', () => {
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
