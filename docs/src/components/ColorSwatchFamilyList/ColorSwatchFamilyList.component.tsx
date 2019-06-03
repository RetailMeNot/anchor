// REACT
import React from 'react';
// VENDOR
import { ColorSwatchFamily } from '../ColorSwatchFamily';
import { Typography } from '../../../../src/Typography';
// THEME
import { colors } from '../../../../src/theme';

// JSX MARKUP
export const ColorSwatchFamilyList = (): React.ReactElement<any> => (
    <React.Fragment>
        <Typography tag="p">
            {' '}
            Each color swatch has 4 pills representing the color contrast when
            used on these colors:
        </Typography>
        <ul>
            <li>
                <code>#FFFFFF</code>
            </li>
            <li>
                <code>#FAFAFA</code>
            </li>
            <li>
                <code>#F1F1F1</code>
            </li>
            <li>
                <code>#000000</code>
            </li>
        </ul>

        <Typography tag="p">
            📋 Click the variable name, hex code, or rgb code to copy it.
            Clicking the colored top section will copy the hex code.
        </Typography>

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
