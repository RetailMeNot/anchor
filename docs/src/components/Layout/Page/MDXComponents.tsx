/*
    These are components that will be fed into the MDXProvider.
    https://mdxjs.com/advanced/components#mdxprovider
*/

import * as React from 'react';
import styled from '@xstyled/styled-components';
// ANCHOR & COMPONENTS
import { Typography } from '@retailmenot/anchor';
import { CodePreview } from '../../CodePreview';
import { InlineCodeStyle } from '../../Utils';

const StyledInlineCode = styled('span')`
    ${InlineCodeStyle};
`;

const StyledLi = styled('li')`
    padding-bottom: 0.5rem;
`;

const StyledHr = styled('hr')`
    margin: 2rem 0;
    color: borders.base;
    background-color: borders.base;
    border-style: none;
    height: 1px;
`;

const Components: any = {};

Components.code = (props: any) => <CodePreview {...props} />;
Components.wrapper = (props: any) => <React.Fragment {...props} />;
Components.inlineCode = (props: any) => <StyledInlineCode {...props} />;
Components.pre = (props: any) => <Typography as="pre" {...props} />;
Components.p = (props: any) => <Typography as="p" pb="4" {...props} />;
Components.a = (props: any) => (
    <Typography color="primary.base" as="a" {...props} />
);
Components.blockquote = (props: any) => (
    <Typography as="blockquote" {...props} />
);
Components.strong = (props: any) => (
    <Typography weight={600} as="strong" {...props} />
);
Components.ul = (props: any) => <ul {...props} />;
Components.ol = (props: any) => <ol {...props} />;
Components.li = (props: any) => (
    <StyledLi>
        <Typography {...props} />
    </StyledLi>
);
Components.hr = (props: any) => <StyledHr {...props} />;

Components.h1 = ({ children, ...props }: any) => (
    <Typography
        id={`${children}`.toLowerCase()}
        weight={600}
        as="h1"
        {...props}
        children={children}
        pb="3"
    />
);
Components.h2 = ({ children, ...props }: any) => (
    <>
        <Typography
            as="a"
            name={children
                .split(' ')
                .join('-')
                .toLowerCase()}
        />
        <Typography
            id={`${children.split(' ').join('-')}`.toLowerCase()}
            weight={600}
            as="h2"
            lineHeight={2.3}
            {...props}
            children={children}
            pb="3"
        />
    </>
);
Components.h3 = ({ children, ...props }: any) => (
    <>
        <Typography
            as="a"
            name={children
                .split(' ')
                .join('-')
                .toLowerCase()}
        />
        <Typography
            id={`${children.split(' ').join('-')}`.toLowerCase()}
            weight={600}
            as="h3"
            lineHeight={2.5}
            {...props}
            children={children}
            pb="2"
        />
    </>
);
Components.h4 = ({ children, ...props }: any) => (
    <>
        <Typography
            as="a"
            name={children
                .split(' ')
                .join('-')
                .toLowerCase()}
        />
        <Typography
            id={`${children.split(' ').join('-')}`.toLowerCase()}
            weight={600}
            as="h4"
            {...props}
            children={children}
        />
    </>
);
Components.h5 = ({ children, ...props }: any) => (
    <>
        <Typography
            as="a"
            name={children
                .split(' ')
                .join('-')
                .toLowerCase()}
        />
        <Typography
            id={`${children.split(' ').join('-')}`.toLowerCase()}
            weight={600}
            as="h5"
            {...props}
            children={children}
        />
    </>
);
Components.h6 = ({ children, ...props }: any) => (
    <>
        <Typography
            as="a"
            name={children
                .split(' ')
                .join('-')
                .toLowerCase()}
        />
        <Typography
            id={`${children.split(' ').join('-')}`.toLowerCase()}
            weight={600}
            as="h6"
            mb="1"
            {...props}
            children={children}
        />
    </>
);

export const MDXComponents = Components;
