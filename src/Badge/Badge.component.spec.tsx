// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// COMPONENT
import { Badge } from './Badge.component';
import { Cart } from '../Icon';
// ENZYME
import { shallow, mount } from 'enzyme';
/* tslint:disable no-import-side-effect*/
import 'jest-styled-components';
/* tslint:enable */

describe('Component: Badge', () => {
    it('should be defined and match its snapshot', () => {
        const subject = <Badge count={1} />;
        const wrapper = mount(subject);
        const component = shallow(subject);
        const tree = renderer.create(subject).toJSON();

        expect(subject).toBeDefined();
        expect(wrapper).toBeDefined();
        expect(component).toBeDefined();
        expect(tree).toMatchSnapshot();
    });
    it('should be able to render with an icon', () => {
        const subject = (
            <Badge count={1}>
                <Cart scale="lg" />
            </Badge>
        );
        const wrapper = mount(subject);
        const tree = renderer.create(subject).toJSON();

        expect(wrapper.exists('.cart')).toBe(true);
        expect(tree).toMatchSnapshot();
    });
    it('should render a dot as the default `size`', () => {
        const subject = <Badge count={1} />;
        const tree = renderer.create(subject).toJSON();

        expect(tree).toMatchSnapshot();
    });
    it('should render the count with absolute positioning if `standalone` is false', () => {
        const subject = (
            <Badge
                count={1}
                standalone={false}
                offsetBottom={1.2}
                offsetLeft={0.9}
            >
                <Cart scale="lg" />
            </Badge>
        );
        const tree = renderer.create(subject).toJSON();
        const wrapper = mount(subject);

        expect(wrapper.find('div.anchor-badge-count')).toHaveStyleRule(
            'position',
            'absolute'
        );
        expect(tree).toMatchSnapshot();
    });
    it('should render the count without absolute positioning if `standalone` is true', () => {
        const subject = (
            <Badge
                count={1}
                standalone={true}
                offsetBottom={1.2}
                offsetLeft={0.9}
            />
        );
        const tree = renderer.create(subject).toJSON();
        const wrapper = mount(subject);

        expect(wrapper.find('div.anchor-badge-count')).not.toHaveStyleRule(
            'position',
            'absolute'
        );
        expect(tree).toMatchSnapshot();
    });
    it('should render a single-digit count in a small badge with only partially rounded border-radius', () => {
        const subject = (
            <Badge count={5} offsetBottom={1.1} offsetLeft={0.6} size="small">
                <Cart scale="lg" />
            </Badge>
        );
        const tree = renderer.create(subject).toJSON();
        const wrapper = mount(subject);

        expect(wrapper.find('div.anchor-badge-count')).toHaveStyleRule(
            'border-radius',
            '0.4rem'
        );
        expect(tree).toMatchSnapshot();
    });
    it('should render a double-digit count in a small badge with fully rounded border-radius', () => {
        const subject = (
            <Badge count={16} offsetBottom={1.1} offsetLeft={0.6} size="small">
                <Cart scale="lg" />
            </Badge>
        );
        const tree = renderer.create(subject).toJSON();
        const wrapper = mount(subject);

        expect(wrapper.find('div.anchor-badge-count')).toHaveStyleRule(
            'border-radius',
            '1rem'
        );
        expect(tree).toMatchSnapshot();
    });
    it('should render a single-digit count in a large badge with fully rounded border-radius', () => {
        const subject = (
            <Badge count={2} offsetBottom={1.1} offsetLeft={0.6} size="large">
                <Cart scale="lg" />
            </Badge>
        );
        const tree = renderer.create(subject).toJSON();
        const wrapper = mount(subject);

        expect(wrapper.find('div.anchor-badge-count')).toHaveStyleRule(
            'border-radius',
            '1rem'
        );
        expect(tree).toMatchSnapshot();
    });
    it('should hide the count by default if `count` is 0', () => {
        const subject = <Badge count={0} size="small" />;
        const wrapper = mount(subject);
        const tree = renderer.create(subject).toJSON();

        expect(wrapper.find('div.anchor-badge-count')).toHaveStyleRule(
            'display',
            'none'
        );
        expect(tree).toMatchSnapshot();
    });
    it('should show the count if `showZero` is true, even if `count` is 0 ', () => {
        const subject = <Badge count={0} showZero={true} size="small" />;
        const wrapper = mount(subject);
        const tree = renderer.create(subject).toJSON();

        expect(wrapper.find('div.anchor-badge-count')).toHaveStyleRule(
            'display',
            'flex'
        );
        expect(wrapper.find('div.anchor-badge-count').text()).toBe('0');
        expect(tree).toMatchSnapshot();
    });
    it('should render `count` if `count` is less than `overflowCount`', () => {
        const subject = <Badge count={3} overflowCount={5} size="large" />;
        const wrapper = mount(subject);
        const tree = renderer.create(subject).toJSON();

        expect(wrapper.find('div.anchor-badge').text()).toBe('3');
        expect(tree).toMatchSnapshot();
    });
    it('should render `overflowCount`+ if `count` is more than `overflowCount`', () => {
        const subject = <Badge count={8} overflowCount={6} size="large" />;
        const wrapper = mount(subject);
        const tree = renderer.create(subject).toJSON();

        expect(wrapper.find('div.anchor-badge').text()).toBe('6+');
        expect(tree).toMatchSnapshot();
    });
    it('should render a count with the border color of `borderColorHover` if `isParentHovered` is true.', () => {
        const subject = (
            <Badge
                borderColor="white"
                borderColorHover="palevioletred"
                count={1}
                isParentHovered={true}
            />
        );
        const tree = renderer.create(subject).toJSON();
        const wrapper = mount(subject);

        expect(wrapper.find('div.anchor-badge-count')).toHaveStyleRule(
            'border',
            '0.125rem solid palevioletred'
        );
        expect(tree).toMatchSnapshot();
    });
});
