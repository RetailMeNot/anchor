// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from '@xstyled/styled-components';
import { space as spaceStyles, SpaceProps } from '@xstyled/system';

export interface DividerProps extends React.HTMLAttributes<HTMLDivElement>, SpaceProps {
    onMouseOver?: (event: React.MouseEvent) => any;
    onMouseOut?: (event: React.MouseEvent) => any;
    onSelect?: (...props: any) => any;
    active?: boolean;
    value?: string | number;
    children?: any;
    className?: string;
}

const StyledDivider = styled('div')<DividerProps>`
    height: 0.5rem;
    padding: 0.5rem 1rem;
    hr {
        border: none;
        border-top: light;
    }
    ${spaceStyles}
`;

export const Divider = ({
    className,
    ...props
}: DividerProps): React.ReactElement<any> => (
    <StyledDivider
        className={classNames('anchor-list-divider', className)}
        {...props}
    >
        <hr />
    </StyledDivider>
);
