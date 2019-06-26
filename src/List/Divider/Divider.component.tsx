// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from '@xstyled/styled-components';
// THEME
import { colors } from '../../theme';

export interface DividerProps {
    onMouseOver?: (event: React.MouseEvent) => any;
    onMouseOut?: (event: React.MouseEvent) => any;
    onSelect?: (...props: any) => any;
    active?: boolean;
    value?: string | number;
    children?: any;
    className?: string;
}

const StyledDivider = styled('div')`
    height: .5rem;
    border-top: solid thin ${colors.ash.light}
    margin-top: 1rem;
`;

const DefaultProps: DividerProps = {};

export const Divider = ({
    className,
}: DividerProps): React.ReactElement<any> => (
    <StyledDivider className={classNames('anchor-list-divider', className)} />
);

Divider.defaultProps = DefaultProps;
