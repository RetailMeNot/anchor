// VENDOR
import styled from 'styled-components';

type ScaleFactors = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export interface IconSVGProps {
    scale?: ScaleFactors;
    color?: string;
    className?: string;
    children?: any;
}

export const Scale = {
    xs: 8,
    sm: 14,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
};

export const DefaultColor = 'currentColor';
export const DefaultScale = 'md';

export const StyledIcon = styled.span<IconSVGProps>`
    display: inline-block;
    height: ${({ scale = 'md' }: IconSVGProps) => `${Scale[scale] / 16}rem`};
    width: ${({ scale = 'md' }: IconSVGProps) => `${Scale[scale] / 16}rem`};
    line-height: 0;
`;

StyledIcon.displayName = 'AnchorIcon';
