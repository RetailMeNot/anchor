// VENDOR
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import { ThemeProvider } from '@xstyled/styled-components';
import { RootTheme } from '../theme';
// COMPONENT
import { AutoComplete } from './AutoComplete.component';

describe('Component: AutoComplete', () => {
    it('should be defined', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <AutoComplete
                    placeholder="Search..."
                    dataSource={[{ value: 1, label: 'Result Item 1' }]}
                />
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

    it('should render with a suffix and prefix', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <AutoComplete
                    prefix={<div>prefix</div>}
                    suffix={<div>suffix</div>}
                    dataSource={[{ value: 1, label: 'Result Item 1' }]}
                />
            </ThemeProvider>
        );

        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render with a shadow', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <AutoComplete
                    shadow={true}
                    dataSource={[{ value: 1, label: 'Result Item 1' }]}
                />
            </ThemeProvider>
        );

        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render without a border', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <AutoComplete
                    border={false}
                    dataSource={[{ value: 1, label: 'Result Item 1' }]}
                />
            </ThemeProvider>
        );

        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should pass additional input attributes via inputProps', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <AutoComplete inputProps={{ autoCapitalize: 'false' }} />
            </ThemeProvider>
        );
        const wrapper = mount(subject);

        expect(wrapper.find({ autoCapitalize: 'false' })).toBeDefined();
    });
});
