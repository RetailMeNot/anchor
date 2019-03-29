// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from 'styled-components';
// COMPONENTS
import {
    Hamburger,
    ChevronDown,
    ChevronUp,
    ChevronRight,
    Cart,
    Search,
    TagAdd,
    CheckCircle,
    Ellipses,
} from './SVGs';
// THEME

type IconTypes =
    | 'hamburger'
    | 'chevron-down'
    | 'chevron-up'
    | 'chevron-right'
    | 'cart'
    | 'search'
    | 'tag-add'
    | 'ellipses'
    | 'check-circle';

export interface IconSVGProps {
    width?: number;
    height?: number;
    color?: string;
}

interface IconProps {
    type: IconTypes;
    children?: any;
    className?: string;
    color?: string;
    width?: number;
    height?: number;
}

const StyledIcon = styled.div`
    display: inline-flex;
    width: 1.5rem;
    height: 1.5rem;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    z-index: 2;

    > svg {
        flex: 0 0 1.25rem;
    }
`;

const DefaultProps: IconProps = {
    type: 'hamburger', // TODO: default icon
    color: '#222',
};

const Icons = {
    hamburger: Hamburger,
    'chevron-down': ChevronDown,
    'chevron-up': ChevronUp,
    'chevron-right': ChevronRight,
    cart: Cart,
    search: Search,
    'tag-add': TagAdd,
    'check-circle': CheckCircle,
    ellipses: Ellipses,
};

export const Icon = ({
    className,
    type,
    color,
    width,
    height,
    ...props
}: IconProps = DefaultProps): React.ReactElement<any> => (
    <StyledIcon className={classNames(className)} {...props}>
        {Icons[type]({ color, width, height })}
    </StyledIcon>
);

Icon.defaultProps = DefaultProps;

export default Icon;
