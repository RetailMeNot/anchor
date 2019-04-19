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

export const DefaultColor = '#222';
export const DefaultScale = 'md';

export const StyledIcon = styled.div`
    display: inline-flex;
    min-width: 1.5rem;
    min-height: 1.5rem;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    z-index: 2;

    svg {
        flex: 0 0 auto;
    }
`;
StyledIcon.displayName = 'AnchorIcon';
