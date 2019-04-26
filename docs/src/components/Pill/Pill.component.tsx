// REACT
import * as React from 'react';
// VENDOR
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
// THEME
import { sizes, fonts } from '../../../../src/theme';


// INTERFACES
interface PillProps {
  backgroundColor: string;
  textColor: string;
  value: number;
}


// STYLES
export const StyledPill = styled.div`
  box-sizing: border-box;
  color: ${props => props.textColor };
  font-size: 0.8rem;
  display: inline-block;
  background-color: ${props => props.backgroundColor };
  border-radius: 2rem;
  padding: 0 0.5rem;
  margin-right: 0.5rem;
  text-align: center;
  width: 3rem;
`;


// JSX MARKUP
export const Pill = ({
  backgroundColor,
  textColor,
  value
}: PillProps): React.ReactElement<any> => (
  <StyledPill
    backgroundColor={backgroundColor}
    textColor={textColor}
    value={value}
  >{value}</StyledPill>
);
