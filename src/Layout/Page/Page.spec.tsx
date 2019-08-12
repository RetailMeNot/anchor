// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// VENDOR
import { shallow } from 'enzyme';
// COMPONENT
import { Page } from './Page.component';

describe('Component: Page', () => {
    const subject = <Page />;
    // const wrapper = mount(subject);
    const component = shallow(subject);

    it('should be defined.', () => {
        expect(subject).toBeDefined();
        expect(component).toBeDefined();

        const tree = renderer.create(subject).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render with default settings', () => {
        expect(component.find('.anchor-page').exists()).toBeTruthy();
    });

    it('should render with passed props.', () => {
        const header = <header>Test Header</header>;
        const footer = <footer>Test Footer</footer>;
        const footerHeight = '2rem';
        const headerHeight = '8rem';
        const testSubject = shallow(
            <Page
                headerHeight={headerHeight}
                footerHeight={footerHeight}
                header={header}
                footer={footer}
            />
        );

        expect(testSubject.find('header').exists()).toBeTruthy();
        expect(testSubject.find('footer').exists()).toBeTruthy();
    });
});
