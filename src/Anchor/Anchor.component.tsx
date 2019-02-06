// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled, { css } from 'styled-components';
// THEME
import { colors, fonts } from '../theme';

interface AnchorProps {
  children?: any;
  disabled?: boolean;
  className?: string;

  href?: string;
}

export const commonTextLinkStyle = css`
  font-family: ${fonts.fontFamily};
  color: ${colors.accent.savvyCyan.base};
  font-size: 1rem;
`;

export const StyledAnchor = styled.a`
  cursor: pointer;
	text-decoration: none;
  ${commonTextLinkStyle}
`;

const DefaultProps: AnchorProps = {};

export const Anchor = ({ className, ...props }: AnchorProps = DefaultProps): React.ReactElement<any> =>
  <StyledAnchor className={classNames(className)} {...props} />;

Anchor.defaultProps = DefaultProps;

export default Anchor;
