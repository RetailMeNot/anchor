// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// VENDOR
import { shallow } from 'enzyme';
// COMPONENT
import {
    Layout,
    DEFAULT_LAYOUT_WIDTH,
    DEFAULT_CONTENT_WIDTH,
    TRANSPARENT,
} from './Layout.component';

describe('Component: Layout', () => {
    const subject = <Layout />;
    const component = shallow(subject);

    it('should match its snapshot.', () => {
        expect(subject).toBeDefined();
        expect(component).toBeDefined();

        const tree = renderer.create(subject).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render with default settings.', () => {
        expect(component.find('.anchor-layout').exists()).toBeTruthy();
        expect(component.find('StyledLayout').prop('layoutWidth')).toEqual(
            DEFAULT_LAYOUT_WIDTH
        );
        expect(
            component.find('StyledLayout').prop('layoutBackgroundColor')
        ).toEqual(TRANSPARENT);
        expect(
            component.find('StyledContent').prop('contentBackgroundColor')
        ).toEqual(TRANSPARENT);
        expect(component.find('StyledContent').prop('contentWidth')).toEqual(
            DEFAULT_CONTENT_WIDTH
        );
    });

    it('should render with passed props.', () => {
        const layoutWidth = '80px';
        const layoutBackgroundColor = '#ffffff';
        const contentWidth = '2rem';
        const contentBackgroundColor = 'orange';
        const testSubject = shallow(
            <Layout
                layoutWidth={layoutWidth}
                layoutBackgroundColor={layoutBackgroundColor}
                contentWidth={contentWidth}
                contentBackgroundColor={contentBackgroundColor}
            />
        );

        expect(testSubject.find('StyledLayout').prop('layoutWidth')).toEqual(
            layoutWidth
        );
        expect(
            testSubject.find('StyledLayout').prop('layoutBackgroundColor')
        ).toEqual(layoutBackgroundColor);
        expect(testSubject.find('StyledContent').prop('contentWidth')).toEqual(
            contentWidth
        );
        expect(
            testSubject.find('StyledContent').prop('contentBackgroundColor')
        ).toEqual(contentBackgroundColor);
    });
});
