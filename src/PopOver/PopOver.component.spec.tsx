// VENDOR
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { ThemeProvider } from '@xstyled/styled-components';
import { shallow, mount } from 'enzyme';
// // ANCHOR
import { RootTheme } from '../../src/theme';
import { PopOver } from './PopOver.component';
import { Button } from '../Button';

describe('Component: PopOver', () => {
    it('should be defined.', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <PopOver active={true} position="bottomStart" content="Hello!">
                    <Button />
                </PopOver>
            </ThemeProvider>
        );
        const wrapper = mount(subject);
        const component = shallow(subject);

        expect(subject).toBeDefined();
        expect(wrapper).toBeDefined();
        expect(component).toBeDefined();
        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
        expect(true);
    });
});
