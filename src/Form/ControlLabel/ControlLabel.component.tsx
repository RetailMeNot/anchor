// REACT
import * as React from 'react';

// VENDOR
import styled, { css } from 'styled-components';
import classnames from 'classnames';

// ANCHOR
import { cloneWithProps } from '../../utils/cloneWithProps/cloneWithProps';
import { fonts } from '../../theme/fonts.theme';
import { Typography } from '../../Typography/index';

const StyledLabel = styled('label')<ControlLabelProps>`
    display: inline-flex;
    ${({ labelPlacement }) =>
        css({
            flexDirection: labelPlacement === 'right' ? 'row' : 'row-reverse',
        })}
    align-items: center;

    position: relative;
    cursor: pointer;

    margin-bottom: 1rem;
    font-family: ${fonts.fontFamily};
`;

interface ControlLabelProps {
    children?: any;
    className?: string;
    id?: string;

    value: string;
    label: string;
    control: React.ReactElement<any>;
    labelPlacement?: 'left' | 'right';
    labelSpacing?: string | number;
}

export const ControlLabel = ({
    id,
    label,
    className,
    labelPlacement = 'right',
    labelSpacing = '0.5rem',
    control,
    value,
    ...props
}: ControlLabelProps): React.ReactElement<ControlLabelProps> => (
    <StyledLabel
        className={classnames('anchor-control-label', className)}
        htmlFor={id}
        value={value}
        label={label}
        control={control}
        labelPlacement={labelPlacement}
        {...props}
    >
        {cloneWithProps(control, { value })}
        {
            <Typography
                marginLeft={labelPlacement === 'right' ? labelSpacing : undefined}
                marginRight={labelPlacement === 'left' ? labelSpacing : undefined}
            >
                {label}
            </Typography>
        }
    </StyledLabel>
);
