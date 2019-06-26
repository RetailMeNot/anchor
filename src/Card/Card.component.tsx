// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from '@xstyled/styled-components';
import { th } from '@xstyled/system';
// COMPONENTS
import { CardActionArea } from './CardActionArea';
import { CardAction } from './CardAction';
import { CardContent } from './CardContent';
// THEME

export type Gutters = 'none' | 'small' | 'medium' | 'large';

export interface CardProps {
    className?: string;
    children?: any;
    action?: any;
    actionArea?: any;
    gutter?: Gutters;
}

const StyledCard = styled('div')`
    position: relative;
    width: 100%;
    font-family: ${th('typography.fontFamily')};
    box-sizing: border-box;
    border-radius: base;
    border: solid thin ${th.color('borders.base')};
`;

export const Card: React.FunctionComponent<CardProps> = ({
    className,
    children,
    action,
    actionArea,
    gutter,
    ...props
}: CardProps): JSX.Element => (
    <StyledCard className={classNames('anchor-card', className)} {...props}>
        {action && <CardAction>{action}</CardAction>}
        <CardContent gutter={gutter} children={children} />
        {React.Children.map(actionArea, (child: any) => {
            if (child.type.name === 'ActionArea') {
                return actionArea;
            } else {
                return <CardActionArea>{actionArea}</CardActionArea>;
            }
        })}
    </StyledCard>
);
