// VENDOR
import * as React from 'react';
import styled, { css } from '@xstyled/styled-components';

// ANCHOR
import { Theme, TRANSITION_SPEED, REVEAL_BACKGROUND_COLOR } from '../utils';

export interface StyledFlipProps extends React.HTMLAttributes<HTMLDivElement> {
    circular?: boolean;
    height: number;
    flipColor: string;
}

export const StyledFlip = styled('div')<StyledFlipProps>`
    position: absolute;
    top: -1px;
    right: -1px;
    content: '';

    ${({ circular, height }) =>
        circular
            ? css`
                  border-top-right-radius: circular;
                  border-bottom-left-radius: circular;
                  width: ${height / 2}rem;
                  height: ${height / 2}rem;
              `
            : css`
                  border-top-right-radius: base;
                  border-bottom-left-radius: base;
                  width: 1.25rem;
                  height: 1.25rem;
              `};

    transition: ${TRANSITION_SPEED} ease opacity;
    background: linear-gradient(
        45deg,
        ${({ flipColor }) => flipColor},
        ${({ flipColor }) => flipColor} 50%,
        ${REVEAL_BACKGROUND_COLOR} 0
    );
`;

export const Flip = ({
    circular,
    colorTheme,
    height,
}: {
    circular?: boolean;
    colorTheme: Theme;
    height: number;
}): React.ReactElement<StyledFlipProps> => (
    <>
        <StyledFlip
            circular={circular}
            flipColor={colorTheme.base}
            height={height}
        />
        <StyledFlip
            circular={circular}
            className="flip-base"
            flipColor={colorTheme.light}
            height={height}
        />
    </>
);
