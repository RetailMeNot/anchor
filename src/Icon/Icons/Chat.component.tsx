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
export const Chat = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
}: IconSVGProps) => (
    <StyledIcon className={classNames('anchor-icon chat', className)}>
        <svg
            width={Scale[scale]}
            height={Scale[scale]}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <defs>
                <path
                    d="M14.092 14.41a2.781 2.781 0 0 1-.738-.416.672.672 0 0 0-.77-.048 4.99 4.99 0 0 1-2.607.721c-1.992 0-3.715-1.133-4.384-2.757.352.054.707.09 1.068.09 2.968 0 5.482-1.841 6.341-4.375 1.035.75 1.659 1.857 1.659 3.042 0 .714-.222 1.416-.645 2.029a.67.67 0 0 0-.117.378c0 .164.014.717.193 1.336M3.354 9.731a.67.67 0 0 0-.424.151 3.34 3.34 0 0 1-1.001.544 5.763 5.763 0 0 0 .266-1.675.661.661 0 0 0-.115-.372A4.248 4.248 0 0 1 1.339 6c0-2.573 2.388-4.666 5.322-4.666 2.884 0 5.239 2.019 5.321 4.53-.082 2.662-2.437 4.803-5.321 4.803a5.526 5.526 0 0 1-2.95-.833.671.671 0 0 0-.357-.103m11.889 3.532A4.874 4.874 0 0 0 16 10.667c0-1.803-1.029-3.459-2.703-4.437.003-.03.009-.059.011-.09a.646.646 0 0 0 .014-.14l-.001-.137.001-.143a.67.67 0 0 0-.016-.15C13.06 2.462 10.174 0 6.661 0 2.988 0 0 2.692 0 6c0 1.033.293 2.045.851 2.939-.03.557-.195 1.436-.669 1.938A.664.664 0 0 0 .67 12c.067 0 1.477-.01 2.723-.808.22.118.448.218.679.311C4.62 14.094 7.08 16 9.977 16c1.028 0 2.028-.24 2.919-.699 1.12.691 2.376.699 2.435.699a.668.668 0 0 0 .483-1.128c-.398-.412-.54-1.136-.571-1.609"
                    id="chat-a"
                />
            </defs>

            <g fill="none" fillRule="evenodd">
                <path d="M0 0h16v16H0z" />
                <use fill={color} xlinkHref="#chat-a" />
            </g>
        </svg>
    </StyledIcon>
);

export default Chat;
