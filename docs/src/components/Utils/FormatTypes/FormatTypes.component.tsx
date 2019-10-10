/*
    Based on https://codepen.io/impirator/pen/gVzrxW by Michael Speed Elder

    Used to format the listing of all the different possible options for Types in the api sections
    using flexbox and different colors to make the various options stand apart from each other.

    Requires an array of values to iterate over. It's smart enough to render single quotes around
    strings and no quotes around numbers. If the 'noInterpret' prop is passed, it won't make any
    assumptions and will output exactly what is in the array without escaping content using
    html-react-parser.
*/

// REACT
import * as React from 'react';
// VENDOR
import styled from '@xstyled/styled-components';
import parse from 'html-react-parser';

const StyledFormatTypes = styled('div')`
    display: flex;
    flex-flow: row wrap;

    .type:after {
        color: text.meta;
        content: '|';
        dispay: inline-block;
        padding: 0 0.5rem;
    }

    .type:last-of-type:after {
        content: '';
    }
`;

interface FormatTypesProps {
    data: [];
    noInterpret?: boolean;
}

export const FormatTypes = ({
    data,
    noInterpret,
}: FormatTypesProps): React.ReactElement<any> => (
    <StyledFormatTypes>
        {data.length &&
            data.map(type => {
                if (noInterpret) {
                    return (
                        <span key={type} className="type">
                            {parse(type)}
                        </span>
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
