// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// COMPONENT
import { ResultsContainer } from './ResultsContainer.component';
import { Item } from '../../List';
// ENZYME
import { shallow, mount } from 'enzyme';

describe('Component: ResultsContainer', () => {
    it('should be defined', () => {
        const subject = (
            <ResultsContainer
                term="a"
                emitSelectedItem={() => true}
                emitActiveTerm={() => true}
                dataSource={[
                    { value: 1, label: 'Result Item 1' },
                    { value: 2, label: 'Result Item 2' },
                ]}
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

    it('should accept a resultTemplate', () => {
        const CustomResult = ({ index, currentIndex, label }: any) => (
            <Item key={index} active={index === currentIndex}>
                {label}
            </Item>
        );

        const subject = (
            <ResultsContainer
                term="a"
                emitSelectedItem={() => true}
                emitActiveTerm={() => true}
                dataSource={[
                    { value: 1, label: 'Result Item 1' },
                    { value: 2, label: 'Result Item 2' },
                ]}
                resultTemplate={CustomResult}
            />
        );

        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
