/*
    Renders the value given to it with modification depending on the data type and content.

    Strings containing hex or rgba values are rendered with a small color box next to them.
*/

import * as React from 'react';
import styled, { css } from '@xstyled/styled-components';

const colorRegex = /#[a-zA-Z0-9]{4,7}|[rgba|rgb]*\(.*\)/;

const extractColor = (val: string | number | object) => {
    if (typeof val === 'string') {
        const check = colorRegex.exec(val) || false;

        if (check) {
            return check[0];
        }
    }
    return false;
};

const ColorValue = styled('span')`
    display: inline-block;
    vertical-align: middle;
`;

interface ColorBoxProps {
    backgroundColor: string;
}

const ColorBox = styled('span')<ColorBoxProps>`
    width: 0.625rem;
    height: 0.625rem;
    display: inline-block;
    vertical-align: middle;
    border: solid black 1px;
    margin-left: 0.25rem;
    ${({ backgroundColor }) => css({ backgroundColor })}
`;

interface DataBlockProps {
    data: string | number | object;
}

export const DataBlock = ({ data }: DataBlockProps) => {
    const hexColor = React.useMemo(
        () => (typeof data === 'string' ? extractColor(data) : false),
        [data]
    );

    return (
        <span>
            {typeof data === 'function' ? (
                <span>func()</span>
            ) : hexColor ? (
                <>
                    <ColorValue>{data}</ColorValue>
                    <ColorBox backgroundColor={hexColor} />
                </>
            ) : (
                data
            )}
        </span>
    );
};
