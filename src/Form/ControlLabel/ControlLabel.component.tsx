// REACT
import * as React from 'react';

// VENDOR
import styled, { css } from '@xstyled/styled-components';
import classnames from 'classnames';

// ANCHOR
import { cloneWithProps } from '../../utils/cloneWithProps/cloneWithProps';
import {
    Typography,
    TypographyProps,
} from '../../Typography/Typography.component';
import { space as spaceStyles, SpaceProps } from '../../theme/system.theme';

const StyledLabel = styled(Typography)<ControlLabelProps>`
    position: relative;
    display: inline-flex;
    ${spaceStyles}
    ${({ labelPlacement, disabled }) =>
        css({
            flexDirection: labelPlacement === 'right' ? 'row' : 'row-reverse',
            cursor: disabled ? 'not-allowed' : 'pointer',
        })}
`;

interface ControlLabelProps
    extends SpaceProps,
        TypographyProps,
        React.HTMLAttributes<any> {
    className?: string;
    id?: string;
    children?: any;
    disabled?: boolean;
    value?: string;
    label: string;
    name?: string;
    control?: React.ReactElement<any>;
    labelPlacement?: 'left' | 'right';
    labelSpacing?: string | number;
}

export const ControlLabel = ({
    id,
    label,
    className,
    labelPlacement = 'right',
    labelSpacing = '0.5rem',
    marginBottom = '1rem',
    lineHeight = 1.375,
    value,
    disabled,
    control,
    name,
    ...props
}: ControlLabelProps): React.ReactElement<ControlLabelProps> => (
    <StyledLabel
        className={classnames('anchor-control-label', className)}
        tag="label"
        htmlFor={id}
        color={disabled ? 'text.disabled' : undefined}
        value={value}
        label={label}
        disabled={disabled}
        control={control}
        name={name}
        labelPlacement={labelPlacement}
        marginBottom={marginBottom}
        lineHeight={lineHeight}
        {...props}
    >
        {control &&
            cloneWithProps(control, {
                value,
                disabled,
                name,
                marginLeft:
                    labelPlacement === 'left' ? labelSpacing : undefined,
                marginRight:
                    labelPlacement === 'right' ? labelSpacing : undefined,
            })}
        {label}
    </StyledLabel>
);
