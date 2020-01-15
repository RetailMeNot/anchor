// VENDOR
import * as React from 'react';
import classNames from 'classnames';
import styled, { css, ThemeContext } from '@xstyled/styled-components';
import { th, space as spaceStyles, SpaceProps } from '@xstyled/system';
// ANCHOR
import { Position, Variant, variantStyles } from '../utils';

interface TabProps extends React.HTMLAttributes<HTMLDivElement>, SpaceProps {
    className?: string;

    position?: Position;
    active?: boolean;
    disabled?: boolean;
    activeBorder?: string;
    activeBorderColor?: string;

    spacing?: string;
    offset?: string;
    border?: string;
    margin?: string;
    padding?: string;
    background?: string;
    borderRadius?: string;

    variant?: Variant;
}

interface StyledTabProps extends TabProps {
    tabTheme?: any;
}

const StyledTab = styled('div')<StyledTabProps>`
    display: flex;
    cursor: pointer;
    user-select: none;
    position: relative;

    transition: 250ms ease background, 250ms ease color, 125ms ease border-color;

    &.disabled {
        color: text.disabled;
        cursor: not-allowed;
    }

    ${({ tabTheme }) => tabTheme.styles}
    ${spaceStyles}
    ${({ background, active, borderRadius = 'base' }) =>
        css({
            color: active ? 'primary.base' : undefined,
            background: th.color(background),
            borderRadius,
        })}

    ${({
        tabTheme,
        active,
        activeBorder = tabTheme.activeBorder,
        activeBorderColor = tabTheme.activeBorderColor,
        spacing = tabTheme.spacing,
        position = 'top',
    }) =>
        ({
            left: css({
                borderRight: active ? activeBorder : undefined,
                borderRightColor: active ? activeBorderColor : undefined,
                marginBottom: spacing,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                textAlign: 'right',
                justifyContent: 'flex-end',
                '&:last-of-type': {
                    marginBottom: 0,
                },
            }),
            top: css({
                borderBottom: active ? activeBorder : undefined,
                borderBottomColor: active ? activeBorderColor : undefined,
                marginRight: spacing,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                '&:last-of-type': {
                    marginRight: 0,
                },
            }),
            bottom: css({
                borderTop: active ? activeBorder : undefined,
                borderTopColor: active ? activeBorderColor : undefined,
                marginRight: spacing,
                borderTopLeftRadius: 0,
                borderTopRightRadius: 0,
                '&:last-of-type': {
                    marginRight: 0,
                },
            }),
            right: css({
                borderLeft: active ? activeBorder : undefined,
                borderLeftColor: active ? activeBorderColor : undefined,
                marginBottom: spacing,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                textAlign: 'left',
                '&:last-of-type': {
                    marginBottom: 0,
                },
            }),
        }[position])}
`;

export const Tab = ({
    className,
    position = 'top',
    onClick,
    disabled,
    active,
    ...props
}: TabProps): React.ReactElement<TabProps> => {
    const theme = React.useContext(ThemeContext);

    const tabTheme = variantStyles({ ...props, theme }).tab || {};

    return (
        <StyledTab
            className={classNames(
                'anchor-tabs-header-item',
                className,
                active && 'active',
                disabled && 'disabled'
            )}
            disabled={disabled}
            position={position}
            onClick={!disabled ? onClick : undefined}
            active={active}
            tabTheme={tabTheme}
            {...props}
        />
    );
};
