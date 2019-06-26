// REACT
import * as React from 'react';

// VENDOR
import styled from '@xstyled/styled-components';
import classnames from 'classnames';
// ANCHOR
import {
    Typography,
    TypographyProps,
    TextAlign,
} from '../Typography/Typography.component';
import { colors } from '../theme';

// Hero
// ------------------------------------------------------------------------------------------------------------------

interface StyledHeroProps {
    align?: TextAlign;
    background?: string;
    color?: string;
    minHeight?: string;
}

const StyledHero = styled.section<StyledHeroProps>`
    background: ${props => props.background};
    box-sizing: border-box;
    position: relative;
    width: 100%;
    margin: 0 auto;
    display: block;
    color: ${({ color = colors.white.base }) => color};
    text-align: ${props => props.align};
    min-height: ${props => props.minHeight};
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

interface HeroProps {
    background?: string;
    align?: TextAlign;
    color?: string;
    className?: string;
    children?: any;
    minHeight?: string;
}

export const Hero = ({
    background = 'transparent',
    align = 'center',
    minHeight = '7.5rem',
    className,
    children,
    ...props
}: HeroProps): React.ReactElement<any> => (
    <StyledHero
        className={classnames('anchor-hero', className)}
        background={background}
        align={align}
        minHeight={minHeight}
        {...props}
    >
        {children}
    </StyledHero>
);

// Hero.Title
// ------------------------------------------------------------------------------------------------------------------

const StyledTitle = styled(Typography)`
    text-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.09);
    position: relative;
`;

export const HeroTitle = ({
    className,
    children,
    tag = 'h1',
    weight = 600,
    scale = 32,
    ...props
}: TypographyProps): React.ReactElement<any> => (
    <StyledTitle
        className={classnames('anchor-hero-title', className)}
        tag={tag}
        weight={weight}
        scale={scale}
        {...props}
    >
        {children}
    </StyledTitle>
);

Hero.Title = HeroTitle;

// Hero.Subtitle
// ------------------------------------------------------------------------------------------------------------------

const StyledSubtitle = styled(Typography)`
    text-shadow: 0 0.125rem 0.125rem rgba(0, 0, 0, 0.04);
    position: relative;
    display: block;
`;

export const HeroSubtitle = ({
    className,
    children,
    scale = 18,
    weight = 600,
    ...props
}: TypographyProps): React.ReactElement<any> => (
    <StyledSubtitle
        className={classnames('anchor-hero-subtitle', className)}
        scale={scale}
        weight={weight}
        {...props}
    >
        {children}
    </StyledSubtitle>
);

Hero.Subtitle = HeroSubtitle;
