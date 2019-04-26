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
export const RetailMeNotLogo = ({
    color = DefaultColor,
    scale = DefaultScale,
    className,
}: IconSVGProps) => (
    <StyledIcon
        className={classNames('anchor-icon retail-me-not-logo', className)}
        scale={scale}
    >
        <svg
            width={Scale[scale]}
            height={Scale[scale]}
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <defs>
                <path
                    d="M8.851 6.84c.811-2.172 1.55-4.254 1.975-5.465 1.761-.198 2.665.336 2.665 1.633 0 1.264-1.098 2.515-3.425 3.388-.437.163-.847.313-1.215.445m-4.157 4.505c-1.028 2.08-1.662 2.956-2.47 3.079-.366.056-.65-.111-.65-.64 0-.576.624-2.714 3.97-4.43-.339.852-.637 1.56-.85 1.99m9.873 1.495c-.416.126-1.149.23-1.703-.004-.524-.22-.85-.753-1.253-1.76-.346-.863-.867-2.345-1.226-3.44C14.207 6.287 16 4.57 16 2.646 16 .852 14.51-.33 11.204.082 9.741.264 8.67.462 7.537.679c-4.236.808-5.824 2.604-5.824 4.452 0 1.25 1.117 2.117 2.412 2.117.882 0 .967-.481.705-.674-.548-.403-.877-.807-.877-1.501 0-1.086.832-2.476 3.891-3.143l.517-.113a339.104 339.104 0 0 1-2.227 6.027C1.462 9.682 0 12.197 0 13.944 0 15.25 1.046 16 2.282 16c1.882 0 3.363-1.238 4.548-4.022.459-1.077.963-2.351 1.462-3.656.351 1.126.823 2.559 1.159 3.429.339.883.648 1.517 1.11 1.97.56.548 1.244.82 2.135.82 1.147 0 1.936-.556 2.282-1.163.222-.388-.05-.648-.411-.538"
                    id="retail-me-not-logo-a"
                />
            </defs>
            <g fill="none" fillRule="evenodd">
                <path d="M0 0h16v16H0z" />
                <use fill={color} xlinkHref="#retail-me-not-logo-a" />
            </g>
        </svg>
    </StyledIcon>
);
