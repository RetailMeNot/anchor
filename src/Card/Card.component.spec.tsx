// VENDOR
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { ThemeProvider } from '@xstyled/styled-components';
// ANCHOR
import { RootTheme } from '../theme';
import { Card } from './Card.component';

// TEST SETUP
const testContent = 'Test';
const subject = (
    <ThemeProvider theme={RootTheme}>
        <Card>
            <p>{testContent}</p>
        </Card>
    </ThemeProvider>
);

describe('Component: Card', () => {
    it('should match its snapshot.', () => {
        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it('should render the CardAction component when an action is provided', () => {
        const testAction = 'Test Action';
        const testSubject = (
            <ThemeProvider theme={RootTheme}>
                <Card action={<p>{testAction}</p>} />
            </ThemeProvider>
        );
        expect(
            mount(testSubject)
                .find('div.anchor-card-action')
                .text()
        ).toBe(testAction);
    });
    it('should render the CardActionArea component when one is provided', () => {
        const testAction = 'Test Action';
        const testSubject = (
            <ThemeProvider theme={RootTheme}>
                <Card actionArea={<p>{testAction}</p>} />
            </ThemeProvider>
        );
        expect(
            mount(testSubject)
                .find('div.anchor-card-action-area')
                .text()
        ).toBe(testAction);
    });
});
