// REACT
import * as React from 'react';
// VENDOR
import styled, { css } from '@xstyled/styled-components';
import { th } from '@xstyled/system';

const reset = css`
    margin: 0;
    padding: 0;
`;

const StyledFooterSectionElement = styled('section')`
    width: 6.875rem;
    font-family: ${th('typography.fontFamily')};
    font-size: 0.75rem;

    h4 {
        ${reset};
        margin-bottom: 0.75rem;
        font-weight: 700;
        font-size: 0.75rem;
        line-height: 1rem;
        color: font.body;
    }

    ul {
        list-style: none;
        ${reset};
    }

    li {
        ${reset};

        &:last-child {
            a {
                margin-bottom: 0;
            }
        }
    }

    a {
        display: block;
        margin-bottom: 0.75rem;
        text-decoration: none;
        color: text.body;
        font-weight: 500;
    }
`;

interface FooterSectionProps {
    className?: string;
    title?: string;
    children?: any;
}

export const FooterSection = ({
    children,
    title,
}: FooterSectionProps): React.ReactElement<any> => (
    <StyledFooterSectionElement className="anchor-footer-section">
        {title && <h4>{title}</h4>}
        {children}
    </StyledFooterSectionElement>
);
