// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
// COMPONENT
import * as Icon from './';
// import { AddEvent } from './Icons/AddEvent.component';

describe('Component: Icon', () => {
    Object.keys(Icon).forEach((key: string) => {
        it(`should render out a ${key}`, () => {
            const Component = Icon[key];
            const tree = renderer.create(<Component />).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    Object.keys(Icon).forEach((key: string) => {
        it(`should scale`, () => {
            const subject = React.createElement(Icon[key], { scale: 'lg' });
            const component = shallow(subject);

            expect(
                component
                    .find('svg')
                    .find({ width: 24, height: 24 })
                    .exists()
            ).toBeTruthy();
        });
    });
});
