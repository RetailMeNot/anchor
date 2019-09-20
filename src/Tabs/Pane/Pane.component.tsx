// VENDOR
import * as React from 'react';
import classNames from 'classnames';
import styled, { css } from '@xstyled/styled-components';
import { th, space as spaceStyles, SpaceProps } from '@xstyled/system';

interface PaneProps extends React.HTMLAttributes<HTMLDivElement>, SpaceProps {
    key?: any;
    active?: boolean;

    background?: string;
    border?: string;
}

const StyledPane = styled('div')<PaneProps>`
    flex-grow: 1;
    ${spaceStyles}
    ${({ active, background = 'white', border }) =>
        css({
            display: active ? 'block' : 'none',
            border,
            background: th.color(background),
        })}
`;

export const Pane = ({
    className,
    children,
    padding = '1rem',
    active = false,
    ...props
}: any): React.ReactElement<any> => (
    <StyledPane
        className={classNames('anchor-tabs-pane', className)}
        active={active}
        padding={padding}
        {...props}
    >
        {children}
    </StyledPane>
);
