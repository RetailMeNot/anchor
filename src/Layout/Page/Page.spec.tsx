// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// VENDOR
import { shallow, mount } from 'enzyme';
// COMPONENT
import Page, {
  Page as PageComponent,
  DEFAULT_HEADER_HEIGHT,
  DEFAULT_FOOTER_HEIGHT,
  DEFAULT_LAYOUT_WIDTH,
  TRANSPARENT,
  DEFAULT_CONTENT_WIDTH,
  DEFAULT_SIDEBAR_WIDTH,
  LEFT,
  RIGHT
} from './Page.component';

describe('Component: Page', () => {
  const subject = <PageComponent />;
  const wrapper = mount(subject);
  const component = shallow(subject);

  it('should be defined.', () => {
    expect(subject).toBeDefined();
    expect(component).toBeDefined();

    const tree = renderer.create(subject).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render with default settings', () => {
    expect(component.find('.anchor-page').exists()).toBeTruthy();
    expect(wrapper.find('Grid__Grid').prop('rows'))
      .toEqual(`minmax(${DEFAULT_HEADER_HEIGHT},auto) 1fr minmax(${DEFAULT_FOOTER_HEIGHT},auto)`);
  });

  it('should render with passed props.', () => {
    const header = <header>Test Header</header>;
    const footer = <footer>Test Footer</footer>;
    const footerHeight = '2rem';
    const headerHeight = '8rem';
    const testSubject = shallow(
      <PageComponent headerHeight={headerHeight} footerHeight={footerHeight} header={header} footer={footer} />
    );

    expect(testSubject.find('header').exists()).toBeTruthy();
    expect(testSubject.find('footer').exists()).toBeTruthy();
    expect(testSubject.find('Grid__Grid').prop('rows'))
      .toEqual(`minmax(${headerHeight},auto) 1fr minmax(${footerHeight},auto)`);
  });
});

describe('Component: DefaultLayout', () => {
  const subject = <Page.DefaultLayout />;
  const wrapper = mount(subject);
  const component = shallow(subject);

  it('should be defined.', () => {
    expect(subject).toBeDefined();
    expect(component).toBeDefined();

    const tree = renderer.create(subject).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render with default settings.', () => {
    expect(component.find('.anchor-default-layout').exists()).toBeTruthy();
    expect(wrapper.find('DefaultLayout').prop('layoutWidth'))
      .toEqual(DEFAULT_LAYOUT_WIDTH);
    expect(wrapper.find('DefaultLayout').prop('layoutBackgroundColor'))
      .toEqual(TRANSPARENT);
    expect(wrapper.find('DefaultLayout').prop('contentWidth'))
      .toEqual(DEFAULT_CONTENT_WIDTH);
    expect(wrapper.find('DefaultLayout').prop('contentBackgroundColor'))
      .toEqual(TRANSPARENT);
  });

  it('should render with passed props.', () => {
    const layoutWidth = '80px';
    const layoutBackgroundColor = '#ffffff';
    const contentWidth = '2rem';
    const contentBackgroundColor = 'orange';
    const testSubject = mount(
      <Page.DefaultLayout
        layoutWidth={layoutWidth}
        layoutBackgroundColor={layoutBackgroundColor}
        contentWidth={contentWidth}
        contentBackgroundColor={contentBackgroundColor} />
    );

    expect(testSubject.find('DefaultLayout').prop('layoutWidth'))
      .toEqual(layoutWidth);
    expect(testSubject.find('DefaultLayout').prop('layoutBackgroundColor'))
      .toEqual(layoutBackgroundColor);
    expect(testSubject.find('DefaultLayout').prop('contentWidth'))
      .toEqual(contentWidth);
    expect(testSubject.find('DefaultLayout').prop('contentBackgroundColor'))
      .toEqual(contentBackgroundColor);
  });
});

describe('Component: SidebarLayout', () => {
  const subject = <Page.SidebarLayout />;
  const wrapper = mount(subject);
  const component = shallow(subject);

  it('should be defined.', () => {
    expect(subject).toBeDefined();
    expect(component).toBeDefined();

    const tree = renderer.create(subject).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render with default settings.', () => {
    expect(component.find('.anchor-sidebar-layout').exists()).toBeTruthy();

    // tslint:disable-next-line: no-console
    console.log(wrapper.debug());

    expect(wrapper.find('SidebarLayout').prop('layoutWidth'))
      .toEqual(DEFAULT_CONTENT_WIDTH);
    expect(wrapper.find('SidebarLayout').prop('layoutBackgroundColor'))
      .toEqual(TRANSPARENT);
    expect(wrapper.find('SidebarLayout').prop('contentWidth'))
      .toEqual(DEFAULT_CONTENT_WIDTH);
    expect(wrapper.find('SidebarLayout').prop('contentBackgroundColor'))
      .toEqual(TRANSPARENT);
    expect(wrapper.find('SidebarLayout').prop('sidebarWidth'))
      .toEqual(DEFAULT_SIDEBAR_WIDTH);
    expect(wrapper.find('SidebarLayout').prop('sidebarAlign'))
      .toEqual(LEFT);
  });

  it('should render with passed props.', () => {
    const layoutWidth = '80px';
    const layoutBackgroundColor = '#ffffff';
    const contentWidth = '2rem';
    const contentBackgroundColor = 'orange';
    const sidebarWidth = '5.5rem';
    const testSubject = mount(
      <Page.SidebarLayout
        layoutWidth={layoutWidth}
        layoutBackgroundColor={layoutBackgroundColor}
        contentWidth={contentWidth}
        contentBackgroundColor={contentBackgroundColor}
        sidebarWidth={sidebarWidth}
        sidebarAlign={RIGHT}
      />
    );

    expect(testSubject.find('SidebarLayout').prop('layoutWidth'))
      .toEqual(layoutWidth);
    expect(testSubject.find('SidebarLayout').prop('layoutBackgroundColor'))
      .toEqual(layoutBackgroundColor);
    expect(testSubject.find('SidebarLayout').prop('contentWidth'))
      .toEqual(contentWidth);
    expect(testSubject.find('SidebarLayout').prop('contentBackgroundColor'))
      .toEqual(contentBackgroundColor);
    expect(testSubject.find('SidebarLayout').prop('sidebarWidth'))
      .toEqual(sidebarWidth);
    expect(testSubject.find('SidebarLayout').prop('sidebarAlign'))
      .toEqual(RIGHT);
  });
});

    // tslint:disable-next-line: no-console
    // console.log(wrapper.debug());