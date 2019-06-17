// REACT
import * as React from 'react';

// ANCHOR
import { colors } from '../../theme/colors.theme';
import { sizes } from '../../theme/sizes.theme';
import { Theme, TRANSITION_SPEED } from '../utils';

// VENDOR
import styled from '@xstyled/styled-components';

export interface StyledFlipProps {
    flipColor: string;
}

export const StyledFlip = styled.div<StyledFlipProps>`
    border-top-right-radius: ${sizes.border.radius.base};
    border-bottom-left-radius: ${sizes.border.radius.base};

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
        ${colors.silver.base} 0
    );
`;

export const Flip = ({ colorTheme }: { colorTheme: Theme }) => (
    <React.Fragment>
        <StyledFlip flipColor={colorTheme.base} />
        <StyledFlip className="flip-base" flipColor={colorTheme.light} />
    </React.Fragment>
);
