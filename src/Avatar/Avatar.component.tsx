// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from 'styled-components';
import { rgba } from 'polished';
// COMPONENTS

// THEME
import { colors, fonts } from '../theme';

interface AvatarProps {
    className?: string;
    // Configuration
    label?: string;
    src?: string | React.ReactElement<any> | React.FunctionComponent;
}

/* tslint:disable max-line-length */
const DefaultAvatar: React.FunctionComponent<AvatarProps> = () => (
    <svg
        width="36px"
        height="36px"
        viewBox="0 0 22 22"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
        >
            <path
                d="M22,20.4267753 C22,21.2958994 21.296,22 20.4285714,22 L1.57142857,22 C0.704,22 0,21.2958994 0,20.4267753 L0,18.950993 C0,15.4242035 2.805,12.5590799 6.25428571,12.5590799 L6.292,12.5590799 L6.292,12.5575082 C7.60728571,13.550793 9.22585714,14.162166 11,14.162166 C12.7741429,14.162166 14.3927143,13.550793 15.708,12.5575082 L15.708,12.5590799 L15.7457143,12.5590799 C19.195,12.5590799 22,15.4242035 22,18.950993 L22,20.4267753 Z M11,0 C14.4712857,0 17.2857143,2.817974 17.2857143,6.29447064 C17.2857143,9.77096728 14.4712857,12.5889413 11,12.5889413 C7.52871429,12.5889413 4.71428571,9.77096728 4.71428571,6.29447064 C4.71428571,2.817974 7.52871429,0 11,0 Z"
                id="Combined-Shape"
                fill="#A6A6A6"
            />
        </g>
    </svg>
);
/* tslint:enable max-line-length */

const StyledAvatar = styled.div`
    border: solid 0.1875rem ${rgba(colors.white.base, 0.4)};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 2rem;
    border-radius: 50%;

    svg {
        justify-self: baseline;
        height: 1.5rem;
        margin-bottom: -0.375rem;
    }
`;

const InnerBorder = styled.div`
    flex: 0 0 1.625rem;
    width: 1.625rem;
    height: 1.625rem;
    font-family: ${fonts.fontFamily};
    font-size: 0.75rem;
    background-color: ${colors.silver.base};
    color: ${colors.charcoal.light};
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    overflow: hidden;
`;

const DefaultProps: AvatarProps = {};

export const Avatar = ({
    className,
    src,
    label,
    ...props
}: AvatarProps = DefaultProps): React.ReactElement<any> => (
    <StyledAvatar className={classNames(className)} {...props}>
        <InnerBorder>
            {/* TODO: handle image src */}
            {label ? label.substr(0, 2).toUpperCase() : <DefaultAvatar />}
        </InnerBorder>
    </StyledAvatar>
);

Avatar.defaultProps = DefaultProps;

export default Avatar;
