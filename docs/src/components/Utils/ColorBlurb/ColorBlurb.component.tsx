/*
    Many of the components have props for colors, and most of them have very similar descriptions
    in the api table. This component tries to consolidate variations of those descriptions in one
    place.
*/

// REACT
import * as React from 'react';
// VENDOR
import styled from '@xstyled/styled-components';
import { Link } from 'gatsby';
// ANCHOR & COMPONENTS
import { Typography } from '@retailmenot/anchor';

interface ColorBlurbProps {
    /* If the text is referring to background or font color */
    background?: boolean;
    /* If the background accepts gradients. Should really only use this the background prop ^ */
    gradient?: boolean;
    /* Adds a message that the default colors come from Anchor's colors object */
    defaultTheme?: boolean;
    /* Specifies what component/prop the color is for. */
    label: string;
}

// TODO: Tried to import the InlineCodeStyle module from Page so it wouldn't be necessary to
// duplicate this css but getting 'undefined' from it which has me stumped. Need to fix that.
const StyledTypography = styled(Typography)`
    pre {
        display: inline;
        background-color: rgba(27, 31, 35, 0.05);
        font-family: 'SFMono-Regular', Consolas, Liberation Mono, Menlo, Courier,
            monospace;
        border-radius: 0.1875rem;
        padding: 0.2em 0.4em;
        font-size: 0.85rem;
    }
`;

export const ColorBlurb = ({
    background,
    gradient,
    defaultTheme,
    label,
}: ColorBlurbProps): React.ReactElement<any> => (
    <StyledTypography>
        Sets the {background ? 'background' : 'font'} color of the{' '}
        <pre>{label}</pre>.
        {defaultTheme ? (
            <Typography pl="1">
                It uses{' '}
                <Link to="/theme/colors">
                    <pre>colors</pre>
                </Link>{' '}
                from <strong>Anchor</strong> by default, but any valid CSS color
                value can be provided
                {background && gradient && ', including gradients'}.
            </Typography>
        ) : (
            <Typography pl="1">
                Any valid CSS color value can be provided
                {background && gradient && ', including gradients'}.
            </Typography>
        )}
    </StyledTypography>
);
