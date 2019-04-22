// REACT
import * as React from 'react';
import classNames from 'classnames';
import {
    IconSVGProps,
    Scale,
    StyledIcon,
    DefaultColor,
    DefaultScale,
} from '../utils';

/* tslint:disable max-line-length */
export const Refresh = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
}: IconSVGProps) => (
    <StyledIcon className={classNames('anchor-icon refresh', className)}>
        <svg
            width={Scale[scale]}
            height={Scale[scale]}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <defs>
                <path
                    d="M15.127 6.698a.733.733 0 0 1-.907-.51c-.786-2.772-3.347-4.67-6.22-4.67-2.294 0-4.36 1.149-5.52 3.149h1.78c.407 0 .733.257.733.667 0 .402-.326.666-.733.666H.786C.38 6 0 5.725 0 5.322V1.819c0-.403.26-.738.667-.738.406 0 .666.335.666.738v1.544C2.667 1.276 5.273 0 7.906 0c3.528 0 6.714 2.376 7.681 5.785.106.39-.067.799-.46.913zM16 10.792v3.497c0 .41-.26.737-.667.737-.406 0-.666-.328-.666-.737V12.63C13.333 14.718 10.713 16 8.093 16c-3.527 0-6.713-2.376-7.68-5.786-.106-.389.09-.798.483-.912a.72.72 0 0 1 .895.51c.787 2.772 3.342 4.613 6.215 4.613 2.233 0 4.267-1.092 5.44-3.09H11.74c-.407 0-.733-.266-.733-.668 0-.41.326-.667.733-.667h3.473c.407 0 .787.383.787.792z"
                    id="refresh-a"
                />
            </defs>
            <g fill="none" fillRule="evenodd">
                <path d="M0 0h16v16H0z" />
                <use fill={color} xlinkHref="#refresh-a" />
            </g>
        </svg>
    </StyledIcon>
);
