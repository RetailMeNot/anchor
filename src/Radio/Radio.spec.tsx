// VENDOR
import * as React from 'react';
import { mount } from 'enzyme';
/* tslint:disable no-import-side-effect*/
import 'jest-styled-components';
/* tslint:enable */

// COMPONENT
import { Radio } from './Radio.component';

describe('Component: Radio', () => {
    it('should be defined', () => {
        const subject = <Radio />;

        const wrapper = mount(subject);
        expect(wrapper.html()).toMatchSnapshot();
    });
});
