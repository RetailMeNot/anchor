// REACT
import * as React from 'react';
// VENDOR
import styled from '@xstyled/styled-components';
import { ColorSwatch } from '../ColorSwatch';
import { Typography } from '../../../../src/Typography';
// INTERFACES
interface ColorSwatchFamilyProps {
    baseColorHexCode: string;
    baseColorName: string;
    darkColorHexCode?: string;
    lightColorHexCode?: string;
}

// STYLES
const StyledColorSwatchFamily = styled.div<{
    baseColorName: string;
    baseColorHexCode: string;
    darkColorHexCode?: string;
    lightColorHexCode?: string;
}>`
    box-sizing: border-box;
    margin: 2rem 0;

    h2 {
        margin: 1rem 0;
    }
`;

// JSX MARKUP
export const ColorSwatchFamily = ({
    baseColorHexCode,
    baseColorName,
    darkColorHexCode,
    lightColorHexCode,
}: ColorSwatchFamilyProps): React.ReactElement<any> => (
    <StyledColorSwatchFamily
        baseColorName={baseColorName}
        baseColorHexCode={baseColorHexCode}
        darkColorHexCode={darkColorHexCode}
        lightColorHexCode={lightColorHexCode}
    >
        <Typography tag="h3" weight={600}>
            {baseColorName}
        </Typography>

        <ColorSwatch
            colorHexCode={baseColorHexCode}
            colorName={`${baseColorName}.base`}
        />

        {lightColorHexCode && (
            <ColorSwatch
                colorHexCode={lightColorHexCode}
                colorName={`${baseColorName}.light`}
            />
        )}

        {darkColorHexCode && (
            <ColorSwatch
                colorHexCode={darkColorHexCode}
                colorName={`${baseColorName}.dark`}
            />
        )}
    </StyledColorSwatchFamily>
);
