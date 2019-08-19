// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// VENDOR
import { ThemeProvider } from '@xstyled/styled-components';
// COMPONENT
import { RootTheme } from '../theme';
import { Tooltip } from './Tooltip.component';
// ENZYME
import { shallow } from 'enzyme';

describe('Component: Tooltip', () => {
    it('should be defined and match its snapshot.', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <Tooltip />
            </ThemeProvider>
        );
        // const wrapper = mount(subject);
        const component = shallow(subject);
        const tree = renderer.create(subject).toJSON();

        expect(subject).toBeDefined();
        // expect(wrapper).toBeDefined();
        expect(component).toBeDefined();
        expect(tree).toMatchSnapshot();
    });
});
