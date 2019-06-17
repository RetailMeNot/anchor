// VENDOR
import styled from '@xstyled/styled-components';

export interface StyledHitAreaProps {
    buttonHeight: number;
    buttonWidth?: number;
}

export const HitArea = styled.div<StyledHitAreaProps>`
    position: absolute;

    // overlap border
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;

    // expand using margin to get to 3 rem tall and wide
    margin: ${({ buttonHeight, buttonWidth }: StyledHitAreaProps) =>
        `-${(3 - buttonHeight) / 2}rem ${
            buttonWidth && buttonWidth < 3
                ? `-${(3 - buttonWidth) / 2}rem`
                : '0'
        }`};
`;
