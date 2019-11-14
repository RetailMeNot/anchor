// VENDOR
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
// COMPONENT
import { Adaptor } from './Adaptor.component';
import { ResponsiveProvider } from '../ResponsiveProvider';

describe('Component: Adaptor', () => {
    it('should be defined', () => {
        const subject = (
            <ResponsiveProvider>
                <Adaptor from="xs" to="xl" />;
            </ResponsiveProvider>
        );

        const wrapper = mount(subject);
        const component = shallow(subject);

        expect(subject).toBeDefined();
        expect(wrapper).toBeDefined();
        expect(component).toBeDefined();
        const tree = renderer.create(subject).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it("should warn the user that they can't only provide the 'to' prop without 'from'", () => {
        const subject = (
            <ResponsiveProvider>
                <Adaptor to="xl" />;
            </ResponsiveProvider>
        );

        const wrapper = mount(subject);
        const component = shallow(subject);

        expect(subject).toBeDefined();
        expect(wrapper).toBeDefined();
        expect(component).toBeDefined();
        const tree = renderer.create(subject).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it("should warn the user that if using 'from' and/or 'to' that they must use ResponsiveProvider.", () => {
        const subject = (
            <Adaptor from="xs" to="xl">
                Test
            </Adaptor>
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
