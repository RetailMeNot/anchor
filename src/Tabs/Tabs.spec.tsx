// VENDOR
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { ThemeProvider } from '@xstyled/styled-components';
import { shallow, mount } from 'enzyme';
// ANCHOR
import { RootTheme } from '../../src/theme';
import { Tabs } from './Tabs.component';

const { Pane } = Tabs;

describe('Component: Tabs', () => {
    it('should be defined.', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <Tabs>
                    <Pane title="Tab 1">Content 1</Pane>
                    <Pane title="Tab 2">Content 2</Pane>
                    <Pane title="Tab 3">Content 3</Pane>
                </Tabs>
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
});
