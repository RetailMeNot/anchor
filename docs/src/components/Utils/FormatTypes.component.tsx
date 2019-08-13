/*
    Based on https://codepen.io/impirator/pen/gVzrxW by Michael Speed Elder

    Used to format the listing of all the different possible options for Types in the api sections
    using flexbox and different colors to make the various options stand apart from each other.

    Requires an array of values to iterate over. It's smart enough to render single quotes around
    strings and no quotes around numbers. If the 'noInterpret' prop is passed, it won't make any
    assumptions and will output exactly what is in the array without escaping content using
    dangerouslySetInnerHTML.
*/

import * as React from 'react';
import styled from '@xstyled/styled-components';
import { colors } from '@retailmenot/anchor';

const StyledFormatTypes = styled('div')`
    display: flex;
    flex-flow: row wrap;

    .type:after {
        color: ${colors.ash.base};
        content: '|';
        dispay: inline-block;
        padding: 0 0.5rem;
    }

    .type:last-of-type:after {
        content: '';
    }
`;

interface FormatTypesProps {
    types: [];
    noInterpret?: boolean;
}

export const FormatTypes = ({
    types,
    noInterpret,
}: FormatTypesProps): React.ReactElement<any> => (
    <StyledFormatTypes>
        {types.length &&
            types.map(type => {
                if (noInterpret) {
                    return (
                        <span
                            key={type}
                            className="type"
                            dangerouslySetInnerHTML={{ __html: type }}
                        />
                    );
                }

                return (
                    <span key={type} className="type">
                        {typeof type === 'string' ? `'${type}'` : type}
                    </span>
                );
            })}
    </StyledFormatTypes>
);
