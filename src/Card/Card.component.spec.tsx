// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// COMPONENT
import Card from './Card.component';
// ENZYME
import { shallow, mount } from 'enzyme';

// TEST SETUP
const testContent = 'Test';
const subject = (
    <Card>
        <p>{testContent}</p>
    </Card>
);
const component = shallow(subject);

describe('Component: Card', () => {
    it('should match its snapshot.', () => {
        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render its contents', () => {
        expect(component.find('p').text()).toBe(testContent);
    });
    it('should render the CardAction component when an action is provided', () => {
        const testAction = 'Test Action';
        const testSubject = <Card action={<p>{testAction}</p>} />;
        expect(
            mount(testSubject)
                .find('div.anchor-card-action')
                .text()
        ).toBe(testAction);
    });
    it('should render the CardActionArea component when one is provided', () => {
        const testAction = 'Test Action';
        const testSubject = <Card actionArea={<p>{testAction}</p>} />;
        expect(
            mount(testSubject)
                .find('div.anchor-card-action-area')
                .text()
        ).toBe(testAction);
    });
});
