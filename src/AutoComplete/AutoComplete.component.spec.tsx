// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// COMPONENT
import { AutoComplete } from './AutoComplete.component';
// ENZYME
import { shallow, mount } from 'enzyme';

describe('Component: AutoComplete', () => {
    it('should be defined', () => {
        const subject = (
            <AutoComplete
                placeholder="Search..."
                dataSource={[{ value: 1, label: 'Result Item 1' }]}
            />
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
            <AutoComplete
                prefix={<div>prefix</div>}
                suffix={<div>suffix</div>}
                dataSource={[{ value: 1, label: 'Result Item 1' }]}
            />
        );

        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render with a shadow', () => {
        const subject = (
            <AutoComplete
                shadow={true}
                dataSource={[{ value: 1, label: 'Result Item 1' }]}
            />
        );

        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render without a border', () => {
        const subject = (
            <AutoComplete
                border={false}
                dataSource={[{ value: 1, label: 'Result Item 1' }]}
            />
        );

        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
