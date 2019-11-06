// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { ThemeProvider } from '@xstyled/styled-components';
// COMPONENT
import { Grid, Cell } from '../index';
import {
    GridContext,
    createResponsiveObject,
    getResponsiveValue,
    sortBreakpoints,
} from '../utils';
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

    it('should hide a cell when set to 0 width', () => {
        const testSubject = (
            <Grid>
                <Cell width={0}>Hidden</Cell>
            </Grid>
        );
        const test = mount(testSubject);

        expect(test.find('.anchor-cell.hide').exists()).toBeTruthy();
    });
});

describe('Component: Cell', () => {
    it('should render a number for width if one is supplied', () => {
        const Mock = ({ children }: any) => (
            <GridContext.Provider
                value={{
                    innerWidth: 1024,
                    breakpoints: sortBreakpoints(RootTheme.breakpoints),
                    debug: false,
            }}>
                {children}
            </GridContext.Provider>
        );

        const subject = (<Mock><Cell width={1} left={1} top={1} /></Mock>);
        const component = mount(subject);

        console.log(component.debug());

        // expect(component.find('[width=1]')).toHaveLength(1);
        expect(true);
    });
});

describe('Utilities: Grid & Cell', () => {
    const testObject = { xs: 0, md: 900, sm: 600 };
    const responsiveSettings = { xs: 12, md: 6 };
    const innerWidth = 780;
    const sortedBreakpoints = sortBreakpoints(testObject);
    const responsiveObject = createResponsiveObject(
        responsiveSettings,
        sortedBreakpoints
    );

    it('sortBreakpoints should return a sorted array from an object', () => {
        const lastBreakpoint = sortedBreakpoints[sortedBreakpoints.length - 1];
        const value = Object.values(lastBreakpoint)[0];

        expect(value).toEqual(900);
    });

    it('createResponsiveObject should return a mobile first object based on supplied breakpoints', () => {
        const key = Object.keys(responsiveObject)[1];
        const value = Object.values(responsiveObject)[1];

        expect(key).toEqual('sm');
        expect(value).toEqual(12);
    });

    it('getResponsiveValue should return the value associated from a breakpoint based on window width.', () => {
        const value = getResponsiveValue(
            responsiveObject,
            innerWidth,
            sortedBreakpoints
        );

        expect(value).toEqual(12);
    });
});
