// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// VENDOR
import { shallow } from 'enzyme';
// COMPONENT
import {
    SidebarLayout,
    DEFAULT_LAYOUT_WIDTH,
    TRANSPARENT,
    DEFAULT_CONTENT_WIDTH,
    RIGHT,
} from './SidebarLayout.component';

describe('Component: SidebarLayout', () => {
    const subject = <SidebarLayout />;
    const component = shallow(subject);

    it('should be defined.', () => {
        expect(subject).toBeDefined();
        expect(component).toBeDefined();

        const tree = renderer.create(subject).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render with default settings.', () => {
        expect(component.find('.anchor-sidebar-layout').exists()).toBeTruthy();

        expect(component.find('StyledLayout').prop('layoutWidth')).toEqual(
            DEFAULT_LAYOUT_WIDTH
        );

        expect(
            component.find('StyledLayout').prop('layoutBackgroundColor')
        ).toEqual(TRANSPARENT);

        expect(component.find('StyledContent').prop('contentWidth')).toEqual(
            DEFAULT_CONTENT_WIDTH
        );

        expect(
            component.find('StyledContent').prop('contentBackgroundColor')
        ).toEqual(TRANSPARENT);
    });

    it('should render with passed props.', () => {
        const layoutWidth = '80px';
        const layoutBackgroundColor = '#ffffff';
        const contentWidth = '2rem';
        const contentBackgroundColor = 'orange';
        const sidebarWidth = '5.5rem';
        const testSubject = shallow(
            <SidebarLayout
                layoutWidth={layoutWidth}
                layoutBackgroundColor={layoutBackgroundColor}
                contentWidth={contentWidth}
                contentBackgroundColor={contentBackgroundColor}
                sidebarWidth={sidebarWidth}
                sidebarAlign={RIGHT}
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
        // TODO: a refactor revealed this may not have been working as intended
        // expect(component.find(`[columns="${sidebarWidth} 1fr "]`).exists()).toBeTruthy();
    });
});
