// REACT
import * as React from 'react';

// VENDOR
import styled, { css } from '@xstyled/styled-components';
import { th } from '@xstyled/system';
import classnames from 'classnames';

// ANCHOR
import { cloneWithProps } from '../../utils/cloneWithProps/cloneWithProps';
import { Typography } from '../../Typography/index';
import { space as spaceStyles, SpaceProps } from '../../theme/system.theme';

const StyledLabel = styled('label')<ControlLabelProps>`
    position: relative;
    display: flex;
    ${({ labelPlacement, disabled }) =>
        css({
            color: disabled ? 'text.disabled' : 'inherit',
            flexDirection: labelPlacement === 'right' ? 'row' : 'row-reverse',
            cursor: disabled ? 'not-allowed' : 'pointer',
        })}
    ${spaceStyles}
    font-family: ${th('typography.fontFamily')};
`;

interface ControlLabelProps extends SpaceProps {
    children?: any;
    className?: string;
    id?: string;

    disabled?: boolean;
    value?: string;
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
    disabled,
    ...props
}: ControlLabelProps): React.ReactElement<ControlLabelProps> => (
    <StyledLabel
        className={classnames('anchor-control-label', className)}
        htmlFor={id}
        value={value}
        label={label}
        control={control}
        disabled={disabled}
        labelPlacement={labelPlacement}
        {...props}
    >
        {cloneWithProps(control, { value, disabled })}
        {
            <Typography
                marginLeft={
                    labelPlacement === 'right' ? labelSpacing : undefined
                }
                marginRight={
                    labelPlacement === 'left' ? labelSpacing : undefined
                }
            >
                {label}
            </Typography>
        }
    </StyledLabel>
);
