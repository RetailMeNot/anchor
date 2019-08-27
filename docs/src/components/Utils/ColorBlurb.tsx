/*
    Many of the components have props for colors, and most of them have very similar descriptions
    in the api table. This component tries to consolidate variations of those descriptions in one
    place.
*/

import * as React from 'react';
import { Typography } from '@retailmenot/anchor';
import { Link } from 'gatsby';

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

export const ColorBlurb = ({
    background,
    gradient,
    defaultTheme,
    label,
}: ColorBlurbProps): React.ReactElement<any> => (
    <Typography>
        Sets the {background ? 'background' : 'font'} color of the{' '}
        <pre>{label}</pre>.
        {defaultTheme ? (
            <Typography pl="1">
                It uses <Link to="/theme/colors"><pre>colors</pre></Link> from <strong>Anchor</strong> by
                default, but any valid CSS color value can be provided
                {background && gradient && ', including gradients'}.
            </Typography>
        ) : (
            <Typography pl="1">
                Any valid CSS color value can be provided
                {background && gradient && ', including gradients'}.
            </Typography>
        )}
    </Typography>
);
