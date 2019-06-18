// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// VENDOR
import { shallow, mount } from 'enzyme';
// COMPONENT
import { CollapseGroup } from './CollapseGroup.component';
import { Collapse } from '../Collapse.component';

describe('Component: CollapseGroup', () => {
    it('should match its snapshot.', () => {
        const subject = (
            <CollapseGroup theme="comfortable">
                <Collapse>Hello World</Collapse>
                <Collapse>Hello World</Collapse>
                <Collapse>Hello World</Collapse>
            </CollapseGroup>
        );
        const component = shallow(subject);

        expect(subject).toBeDefined();
        expect(component).toBeDefined();

        const tree = renderer.create(subject).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it("should show only one Collapse component's content when accordion is true.", () => {
        const subject = (
            <CollapseGroup accordion openIndex={1}>
                <Collapse>Hello World</Collapse>
                <Collapse>Hello World</Collapse>
                <Collapse>Hello World</Collapse>
            </CollapseGroup>
        );
        const wrapper = mount(subject);
        const toggleButton = wrapper.find('.anchor-collapse-button').first();
        toggleButton.simulate('click');

        expect(
            wrapper.find('StyledCollapse.anchor-collapse.open')
        ).toHaveLength(1);
    });

    // tslint:disable-next-line: max-line-length
    it("should assign props specified on the component to child Collapse child component's, and override them.", () => {
        const subject = (
            <CollapseGroup theme="comfortable">
                <Collapse>Hello World</Collapse>
                <Collapse theme="none">Hello World</Collapse>
                <Collapse>Hello World</Collapse>
            </CollapseGroup>
        );
        const component = mount(subject);

        expect(
            component.find('StyledCollapse.anchor-collapse.comfortable')
        ).toHaveLength(3);
    });

    it('should remove the bottom border of Collapse child components.', () => {
        const subject = (
            <CollapseGroup>
                <Collapse>Hello World</Collapse>
                <Collapse>Hello World</Collapse>
                <Collapse>Hello World</Collapse>
            </CollapseGroup>
        );
        const wrapper = mount(subject);

        expect(
            wrapper
                .find('StyledCollapse.anchor-collapse')
                .at(0)
                .hasClass('no-bottom-border')
        ).toEqual(true);
        expect(
            wrapper
                .find('StyledCollapse.anchor-collapse')
                .at(1)
                .hasClass('no-bottom-border')
        ).toEqual(true);
        expect(
            wrapper
                .find('StyledCollapse.anchor-collapse')
                .at(2)
                .hasClass('no-bottom-border')
        ).toEqual(false);
    });
});
