// VENDOR
import * as React from 'react';
import { mount } from 'enzyme';
/* tslint:disable no-import-side-effect*/
import 'jest-styled-components';
/* tslint:enable */

// COMPONENT
import { Toggle } from './Toggle.component';

describe('Component: Toggle', () => {
    it('should be defined', () => {
        const subject = <Toggle />;

        const wrapper = mount(subject);
        expect(wrapper.html()).toMatchSnapshot();
    });
});
