// REACT
import * as React from 'react';
// VENDOR
import styled from 'styled-components';
import { ColorSwatch } from '../ColorSwatch';
import { Typography } from '../../../../src/Typography';
// THEME
import { colors } from '../../../../src/theme';


// INTERFACES
interface ColorSwatchFamilyProps {
  baseColorHexCode: string;
  baseColorName: string;
  darkColorHexCode?: string;
  lightColorHexCode?: string;
}


// STYLES
const StyledColorSwatchFamily = styled.div`
  box-sizing: border-box;
  margin: 2rem 0;

  h2 {
    margin: 1rem 0;
  }
`;


// JSX MARKUP
export const ColorSwatchFamily = ({ baseColorHexCode, baseColorName, darkColorHexCode, lightColorHexCode }: ColorSwatchFamilyProps): React.ReactElement<any> => (
  <StyledColorSwatchFamily
    baseColorName={baseColorName}
    baseColorHexCode={baseColorHexCode}
    darkColorHexCode={darkColorHexCode}
    lightColorHexCode={lightColorHexCode}
  >

    <Typography tag="h2" weight="600">{baseColorName}</Typography>

    <ColorSwatch
      colorHexCode={baseColorHexCode}
      colorName={`${baseColorName}.base`}
    ></ColorSwatch>

    { lightColorHexCode && (
      <ColorSwatch
        colorHexCode={lightColorHexCode}
        colorName={`${baseColorName}.light`}
      ></ColorSwatch>
    )}

    { darkColorHexCode && (
      <ColorSwatch
        colorHexCode={darkColorHexCode}
        colorName={`${baseColorName}.dark`}
      ></ColorSwatch>
    )}

  </StyledColorSwatchFamily>
);