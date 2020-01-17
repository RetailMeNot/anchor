import { css } from '@xstyled/styled-components';

export type Position =
    | 'topStart'
    | 'top'
    | 'topEnd'
    | 'rightStart'
    | 'right'
    | 'rightEnd'
    | 'bottomEnd'
    | 'bottom'
    | 'bottomStart'
    | 'leftEnd'
    | 'left'
    | 'leftStart';

export const positionVariants = (
    position: Position,
    height: number,
    width: number,
    overlayHeight: number,
    overlayWidth: number,
    spacing = 0
) => {
    switch (position) {
        case 'topStart':
            return css({
                left: 0,
                top: 0,
                transform: `translate3d(0, -${overlayHeight + spacing}px, 0)`,
            });
        case 'top':
            return css({
                left: 0,
                top: 0,
                transform: `translate3d(${width / 2 -
                    overlayWidth / 2}px, -${overlayHeight + spacing}px, 0)`,
            });
        case 'rightStart':
            return css({
                left: 0,
                top: 0,
                transform: `translate3d(${width + spacing}px, 0, 0)`,
            });
        case 'right':
            return css({
                left: 0,
                top: 0,
                transform: `translate3d(${width + spacing}px, ${height / 2 -
                    overlayHeight / 2}px, 0)`,
            });
        case 'rightEnd':
            return css({
                left: 0,
                bottom: 0,
                transform: `translate3d(${width + spacing}px, 0, 0)`,
            });
        case 'bottomEnd':
            return css({
                right: 0,
                top: 0,
                transform: `translate3d(0, ${height + spacing}px, 0)`,
            });
        case 'bottom':
            return css({
                left: 0,
                top: 0,
                transform: `translate3d(${width / 2 -
                    overlayWidth / 2}px, ${height + spacing}px, 0)`,
            });
        case 'bottomStart':
            return css({
                left: 0,
                top: 0,
                transform: `translate3d(0, ${height + spacing}px, 0)`,
            });
        case 'leftEnd':
            return css({
                left: 0,
                bottom: 0,
                transform: `translate3d(-${overlayWidth + spacing}px, 0, 0)`,
            });
        case 'left':
            return css({
                left: 0,
                top: 0,
                transform: `translate3d(-${overlayWidth + spacing}px, ${height /
                    2 -
                    overlayHeight / 2}px, 0)`,
            });
        case 'leftStart':
            return css({
                left: 0,
                top: 0,
                transform: `translate3d(-${overlayWidth + spacing}px, 0, 0)`,
            });
        case 'topEnd':
        default:
            return css({
                right: 0,
                top: 0,
                transform: `translate3d(0, -${overlayHeight + spacing}px, 0)`,
            });
    }
};
