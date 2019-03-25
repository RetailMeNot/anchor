// REACT
import * as React from 'react';
// VENDOR
import styled from 'styled-components';
import classNames from 'classnames';
import { MDXProvider } from '@mdx-js/tag';
// COMPONENTS
import { NormalizeCSS, GlobalCSS } from '../../../../../src/theme';
import { Footer } from '../';
import { CodePreview } from '../../CodePreview';

export const StyledPageElement = styled.div`
`;

interface PageProps {
  className?: string;
  children?: any;
  enableFooter?: boolean;
}

const StyledContentBody = styled.div`
  main {
    width: 100%;
    background-color: white;
  }
`;

const Components: any = {};

Components.code = (props: any) => <CodePreview {...props} />;
Components.inlineCode = (props: any) => <code {...props} />;
Components.wrapper = (props: any) => <React.Fragment {...props} />;
Components.h1 = (props: any) => <h1 {...props} />;
Components.h2 = (props: any) => <h2 {...props} />;
Components.h3 = (props: any) => <h3 {...props} />;
Components.h4 = (props: any) => <h4 {...props} />;
Components.h5 = (props: any) => <h5 {...props} />;
Components.h6 = (props: any) => <h6 {...props} />;
Components.p = (props: any) => <p {...props} />;
Components.ul = (props: any) => <ul {...props} />;
Components.ol = (props: any) => <ol {...props} />;
Components.li = (props: any) => <li {...props} />;
Components.a = (props: any) => <a {...props} />;
Components.blockquote = (props: any) => <blockquote{...props} />;
Components.strong = (props: any) => <strong {...props} />;

export const Page = ({ children, className, enableFooter }: PageProps): React.ReactElement<any> => (
  <StyledPageElement className={classNames(className)}>
    <NormalizeCSS />
    <GlobalCSS />
    <StyledContentBody>
      <main>
        {/* TODO: Add bread-crumbing */}
        <MDXProvider components={Components}>
          {children}
        </MDXProvider>
        {enableFooter && <Footer />}
      </main>
    </StyledContentBody>
  </StyledPageElement>
);

export default Page;
