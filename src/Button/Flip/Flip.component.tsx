// VENDOR
import * as React from 'react';
import styled from '@xstyled/styled-components';
import { th } from '@xstyled/system';
// ANCHOR
import { Theme, TRANSITION_SPEED, REVEAL_BACKGROUND_COLOR } from '../utils';

export interface StyledFlipProps extends React.HTMLAttributes<HTMLDivElement> {
    flipColor: string;
}

export const StyledFlip = styled('div')<StyledFlipProps>`
    border-top-right-radius: ${th.radius('base')};
    border-bottom-left-radius: ${th.radius('base')};

    position: absolute;
    top: -1px;
    right: -1px;
    width: 1.25rem;
    height: 1.25rem;
    content: '';

    transition: ${TRANSITION_SPEED} ease opacity;
    background: linear-gradient(
        45deg,
        ${({ flipColor }) => flipColor},
        ${({ flipColor }) => flipColor} 50%,
        ${REVEAL_BACKGROUND_COLOR} 0
    );
`;

export const Flip = ({
    colorTheme,
}: {
    colorTheme: Theme;
}): React.ReactElement<StyledFlipProps> => (
    <>
        <StyledFlip flipColor={colorTheme.base} />
        <StyledFlip className="flip-base" flipColor={colorTheme.light} />
    </>
);
