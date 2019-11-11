// VENDOR
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import { ThemeProvider } from '@xstyled/styled-components';
// COMPONENT
import { Input } from './Input.component';
import { RootTheme } from '../../theme';
import {
    ArrowBack as ArrowBackIcon,
    ArrowForward as ArrowForwardIcon,
} from '../../Icon';

describe('Component: Form/Input', () => {
    it('should be defined', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <Input />
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

    it('should pass additional input attributes via inputProps', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <Input inputProps={{ autoCapitalize: 'false' }} />
            </ThemeProvider>
        );
        const wrapper = mount(subject);

        expect(wrapper.find({ autoCapitalize: 'false' })).toBeDefined();
    });

    it('should fire passed functions when events occur', () => {
        let value = 0;
        const changeValue = () => {
            value++;
        };
        const changeMock = jest.fn();

        const subject = (
            <ThemeProvider theme={RootTheme}>
                <Input
                    onKeyDown={changeValue}
                    onKeyUp={changeValue}
                    onBlur={changeValue}
                    onFocus={changeValue}
                    onChange={changeMock}
                    value="test"
                />
            </ThemeProvider>
        );
        const wrapper = mount(subject);
        const input = wrapper.find('input');

        input.simulate('keyDown');
        expect(value).toBe(1);
        input.simulate('keyUp');
        expect(value).toBe(2);
        input.simulate('blur');
        expect(value).toBe(3);
        input.simulate('focus');
        expect(value).toBe(4);
        input.simulate('change');
        expect(changeMock.mock.calls[0][0]).toBe('test');
    });

    it('should render suffix and prefix JSX.', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <Input
                    prefix={<ArrowForwardIcon />}
                    suffix={<ArrowBackIcon />}
                />
            </ThemeProvider>
        );
        const wrapper = mount(subject);

        expect(wrapper.find('anchor-icon.arrow-back')).toBeTruthy();
        expect(wrapper.find('anchor-icon.arrow-forward')).toBeTruthy();
    });
});
