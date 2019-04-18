// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from 'styled-components';
// COMPONENTS
import { Typography } from '../Typography';
// THEME
import { sizes } from '../theme';

interface ListProps {
    className?: string;
    children?: any;
    title?: string;
    hidden?: boolean;
}

const StyledList = styled.div`
    box-sizing: border-box;
    .title {
        box-sizing: border-box;
        margin: 0;
        padding: ${sizes.padding.md};
    }
`;

const DefaultProps: ListProps = {};

export const List: React.FunctionComponent<ListProps> = ({
    className,
    children,
    title,
    ...props
}: ListProps = DefaultProps): React.ReactElement<any> => (
    <StyledList className={classNames('anchor-list', className)} {...props}>
        {title && (
            <Typography
                tag="p"
                weight={600}
                scale={12}
                color="ash"
                hue="dark"
                className="title"
            >
                {title}
            </Typography>
        )}
        {children}
    </StyledList>
);

List.defaultProps = DefaultProps;

export default List;
