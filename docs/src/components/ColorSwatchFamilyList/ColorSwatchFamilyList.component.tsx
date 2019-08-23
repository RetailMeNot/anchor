// REACT
import React from 'react';
// VENDOR
import { ColorSwatchFamily } from '../ColorSwatchFamily';
// THEME
import { colors } from '../../../../src/theme';

// JSX MARKUP
export const ColorSwatchFamilyList = (): React.ReactElement<any> => (
    <React.Fragment>
        {Object.keys(colors).map(key => (
            <ColorSwatchFamily
                baseColorHexCode={colors[key].base}
                baseColorName={key}
                darkColorHexCode={colors[key].dark}
                key={key}
                lightColorHexCode={colors[key].light}
            />
        ))}
    </React.Fragment>
);
