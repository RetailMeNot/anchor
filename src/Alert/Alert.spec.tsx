// VENDOR
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { ThemeProvider } from '@xstyled/styled-components';
import { shallow, mount } from 'enzyme';
// ANCHOR
import { RootTheme } from '../../src/theme';
import { Alert } from './Alert.component';
import { Info, Check, Error } from '../Icon';

describe('Component: Alert', () => {
    it('should be closable', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <Alert
                    type="warning"
                    title="Test Title"
                    description="Test Description"
                    closable={true}
                />
            </ThemeProvider>
        );
        const wrapper = mount(subject);
        expect(wrapper.find('div.anchor-alert')).toHaveLength(1);
        wrapper.find('button.anchor-alert-close').simulate('click');
        wrapper.update();
        expect(wrapper.find('div.anchor-alert')).toHaveLength(0);
    });
    it('should match its snapshot.', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <>
                    <Alert
                        type="warning"
                        title="Test Title"
                        description="Test Description"
                    />
                    <Alert
                        type="warning"
                        title="Test Title"
                        description="Test Description"
                        icon={<Info />}
                    />
                    <Alert
                        type="info"
                        title="Test Title"
                        description="Test Description"
                    />
                    <Alert
                        type="info"
                        title="Test Title"
                        description="Test Description"
                        icon={<Info />}
                    />
                    <Alert
                        type="success"
                        title="Test Title"
                        description="Test Description"
                    />
                    <Alert
                        type="success"
                        title="Test Title"
                        description="Test Description"
                        icon={<Check />}
                    />
                    <Alert
                        type="error"
                        title="Test Title"
                        description="Test Description"
                    />
                    <Alert
                        type="error"
                        title="Test Title"
                        description="Test Description"
                        icon={<Error />}
                    />
                </>
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
