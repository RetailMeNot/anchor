// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from '@xstyled/styled-components';
import { th } from '@xstyled/system';
import { transparentize } from 'polished';

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    // Configuration
    label?: string;
    src?: string;
    alt?: string;
}

/* tslint:disable max-line-length */
const DefaultAvatar: React.FunctionComponent<AvatarProps> = () => (
    <svg
        width="36"
        height="36"
        viewBox="0 0 22 22"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M22 20.427c0 .869-.704 1.573-1.571 1.573H1.57A1.572 1.572 0 0 1 0 20.427V18.95c0-3.527 2.805-6.392 6.254-6.392h.038v-.001c1.315.993 2.934 1.604 4.708 1.604s3.393-.611 4.708-1.604v.001h.038c3.449 0 6.254 2.865 6.254 6.392v1.476zM11 0a6.29 6.29 0 0 1 6.286 6.294A6.29 6.29 0 0 1 11 12.59a6.29 6.29 0 0 1-6.286-6.295A6.29 6.29 0 0 1 11 0z"
            fill="#A6A6A6"
        />
    </svg>
);
/* tslint:enable max-line-length */

const StyledAvatar = styled('div')<AvatarProps>`
    border: solid 0.1875rem ${transparentize(0.6, 'white')};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 2rem;
    border-radius: circular;

    svg {
        justify-self: baseline;
        height: 1.5rem;
        margin-bottom: -0.375rem;
    }
`;

const InnerBorder = styled('div')`
    flex: 0 0 1.625rem;
    width: 1.625rem;
    height: 1.625rem;
    font-family: ${th('typography.fontFamily')};
    font-size: 0.75rem;
    font-weight: bold;
    color: text.body;
    background-color: neutrals.silver.base;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: circular;
    overflow: hidden;

    img {
        flex: 0 0 100%;
        max-width: 100%;
    }
`;

export const Avatar = ({
    className,
    src,
    label,
    alt,
    ...props
}: AvatarProps): React.ReactElement<AvatarProps> => (
    <StyledAvatar className={classNames('anchor-avatar', className)} {...props}>
        <InnerBorder className="anchor-avatar-container">
            {label && label.substr(0, 2).toUpperCase()}
            {src && <img src={src} alt={alt ? alt : 'Anchor Avatar'} />}
            {!label && !src && <DefaultAvatar />}
        </InnerBorder>
    </StyledAvatar>
);
