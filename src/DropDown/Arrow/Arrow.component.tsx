// VENDOR
import styled, { css } from '@xstyled/styled-components';
import { th } from '@xstyled/system';
// COMPONENTS
import { Position } from '../DropDown.component';

export const DefaultSize = '0.625rem';

export interface ArrowProps {
    position: Position;
    indent?: string;
    size?: string;
    border?: string;
    shadow?: string;
    background?: string;
}

export const Arrow = styled('div')<ArrowProps>`
    position: absolute;
    box-sizing: border-box;
    ${({ background, shadow, border, size = DefaultSize }) =>
        css({
            width: size,
            height: size,
            border,
            background: th.color(background),
            boxShadow: shadow,
        })}
    z-index: -1;
    transform: rotate(45deg);

    ${({ position, indent, size = DefaultSize }) => {
        switch (position) {
            case 'bottom':
                return css({
                    top: `calc(-${size} / 2)`,
                    left: `calc(50% - ${size} / 2)`,
                });
            case 'bottomEnd':
                return css({
                    top: `calc(-${size} / 2)`,
                    right: indent,
                });
            case 'bottomStart':
                return css({
                    top: `calc(-${size} / 2)`,
                    left: indent,
                });
            case 'top':
                return css({
                    bottom: `calc(-${size} / 2)`,
                    right: `calc(50% - ${size} / 2)`,
                });
            case 'topEnd':
                return css({
                    bottom: `calc(-${size} / 2)`,
                    right: indent,
                });
            case 'topStart':
                return css({
                    bottom: `calc(-${size} / 2)`,
                    left: indent,
                });
            case 'right':
                return css({
                    top: `calc(50% - ${size} / 2)`,
                    left: `calc(-${size} / 2)`,
                });
            case 'rightEnd':
                return css({
                    bottom: indent,
                    left: `calc(-${size} / 2)`,
                });
            case 'rightStart':
                return css({
                    top: indent,
                    left: `calc(-${size} / 2)`,
                });
            case 'left':
                return css({
                    top: `calc(50% - ${size} / 2)`,
                    right: `calc(-${size} / 2)`,
                });
            case 'leftEnd':
                return css({
                    bottom: indent,
                    right: `calc(-${size} / 2)`,
                });
            case 'leftStart':
                return css({
                    top: indent,
                    right: `calc(-${size} / 2)`,
                });
        }
        return null;
    }}
`;
