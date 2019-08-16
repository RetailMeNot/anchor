// REACT
import * as React from 'react';
// VENDOR
import styled, { css } from '@xstyled/styled-components';
// COMPONENTS
import { Position } from '../DropDown.component';

const ArrowBase = css`
    position: absolute;
    width: 0;
    height: 0;
`;

const CaretHeight = '0.4rem';
const CaretIndent = '0.75rem';
const CaretSize = '0.5rem';

export const ArrowUp = styled('div')`
    ${ArrowBase};
    top: -${CaretHeight};
    left: ${CaretIndent};
    border-left: ${CaretSize} solid transparent;
    border-right: ${CaretSize} solid transparent;
    border-bottom: ${CaretSize} solid white;
`;

export const ArrowDown = styled('div')`
    ${ArrowBase};
    bottom: -${CaretHeight};
    left: ${CaretIndent};
    border-left: ${CaretSize} solid transparent;
    border-right: ${CaretSize} solid transparent;
    border-top: ${CaretSize} solid white;
`;
export const ArrowRight = styled('div')`
    ${ArrowBase};
    top: ${CaretIndent};
    right: -${CaretHeight};
    border-top: ${CaretSize} solid transparent;
    border-bottom: ${CaretSize} solid transparent;
    border-left: ${CaretSize} solid white;
`;

export const ArrowLeft = styled('div')`
    ${ArrowBase};
    top: ${CaretIndent};
    left: -${CaretHeight};
    border-top: ${CaretSize} solid transparent;
    border-bottom: ${CaretSize} solid transparent;
    border-right: ${CaretSize} solid white;
`;

export const renderArrow = (position: Position, isShown?: boolean) => {
    let arrowElement;
    if (isShown) {
        switch (position) {
            case 'bottom':
                arrowElement = <ArrowUp />;
                break;
            case 'top':
                arrowElement = <ArrowDown />;
                break;
            case 'right':
                arrowElement = <ArrowLeft />;
                break;
            case 'left':
                arrowElement = <ArrowRight />;
                break;
            default:
                break;
        }
    }
    return arrowElement;
};
