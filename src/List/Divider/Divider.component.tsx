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
    height: 0.5rem;
    padding: 0.5rem 1rem;
    hr {
        border: none;
        border-top: solid thin ${colors.ash.light};
    }
`;

const DefaultProps: DividerProps = {};

export const Divider = ({
    className,
}: DividerProps): React.ReactElement<any> => (
    <StyledDivider className={classNames('anchor-list-divider', className)}>
        <hr />
    </StyledDivider>
);

Divider.defaultProps = DefaultProps;
