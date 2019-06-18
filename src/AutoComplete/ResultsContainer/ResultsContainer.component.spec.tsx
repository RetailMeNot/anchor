// REACT
import * as React from 'react';
// VENDOR
import * as renderer from 'react-test-renderer';
import { ThemeProvider } from '@xstyled/styled-components';
import { shallow, mount } from 'enzyme';
// COMPONENT
import { RootTheme } from '../../theme';
import { ResultsContainer } from './ResultsContainer.component';
import { Item } from '../../List';

describe('Component: ResultsContainer', () => {
    it('should be defined', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <ResultsContainer
                    term="a"
                    emitSelectedItem={() => true}
                    emitActiveTerm={() => true}
                    dataSource={[
                        { value: 1, label: 'Result Item 1' },
                        { value: 2, label: 'Result Item 2' },
                    ]}
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

    it('should accept a resultTemplate', () => {
        const CustomResult = ({ index, currentIndex, label }: any) => (
            <Item key={index} active={index === currentIndex}>
                {label}
            </Item>
        );

        const subject = (
            <ThemeProvider theme={RootTheme}>
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
            </ThemeProvider>
        );

        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
