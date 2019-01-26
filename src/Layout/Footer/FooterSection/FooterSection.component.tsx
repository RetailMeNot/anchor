// REACT
import * as React from 'react';
// COMPONENTS
// VENDOR
import styled, { css } from 'styled-components';
// STYLES
import { colors } from '../../../theme';

const reset = css`
  margin: 0;
  padding: 0;
`;

export const StyledFooterSectionElement = styled.section`
  width: 110px;

  h4 {
    ${reset};
    margin-bottom: 0.75rem;
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 1rem;
    color: ${colors.neutrals.charcoal.light};
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
  }
`;

interface FooterSectionProps {
  className?: string;
  title?: string;
  children?: any;
}

export const FooterSection = ({ children, title }: FooterSectionProps): React.ReactElement<any> => (
  <StyledFooterSectionElement>
    {title && <h4>{title}</h4>}
    {children}
  </StyledFooterSectionElement>
);

export default FooterSection;
