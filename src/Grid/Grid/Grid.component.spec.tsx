// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { ThemeProvider } from '@xstyled/styled-components';
// COMPONENT
import { Grid, Cell } from '../index';
import { RootTheme } from '../../theme';
// ENZYME
import { shallow, mount } from 'enzyme';

// TEST SETUP
const subject = (
    <ThemeProvider theme={RootTheme}>
        <Grid>
            <Cell>Cell 1</Cell>
            <Cell>Cell 2</Cell>
        </Grid>
    </ThemeProvider>
);
const wrapper = mount(subject);
const component = shallow(subject);

describe('Component: Grid & Cell', () => {
    it('should be defined', () => {
        expect(subject).toBeDefined();
        expect(wrapper).toBeDefined();
        expect(component).toBeDefined();
        const tree = renderer.create(subject).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
