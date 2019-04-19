// REACT
import * as React from 'react';

// VENDOR
import styled from 'styled-components';
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
    position: relative;
    width: 100%;
    margin: 0 auto;
    display: block;
    color: ${props => props.color};
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
    height?: string;
}

export const Hero = ({
    background = 'transparent',
    align = 'center',
    color = colors.white.base,
    minHeight = '7.5rem',
    className,
    children,
    ...props
}: HeroProps): React.ReactElement<any> => (
    <StyledHero
        className={classnames('anchor-hero', className)}
        background={background}
        align={align}
        color={color}
        minHeight={minHeight}
        {...props}
    >
        {children}
    </StyledHero>
);

export default Hero;

// Hero.Title
// ------------------------------------------------------------------------------------------------------------------

const StyledTitle = styled(Typography)`
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.09);
    position: relative;
    // https://github.com/styled-components/styled-components/issues/1816
    && {
        // margin: 0.375rem 0;
    }
`;

export const HeroTitle = ({
    className,
    children,
    tag = 'h1',
    weight = 600,
    size = 2,
    ...props
}: TypographyProps): React.ReactElement<any> => (
    <StyledTitle
        className={classnames('anchor-hero-title', className)}
        tag={tag}
        weight={weight}
        size={size}
        {...props}
    >
        {children}
    </StyledTitle>
);

Hero.Title = HeroTitle;

// Hero.Subtitle
// ------------------------------------------------------------------------------------------------------------------

const StyledSubtitle = styled(Typography)`
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
    position: relative;
    display: block;
    && {
        // margin: 0.375rem 0;
    }
`;

export const HeroSubtitle = ({
    className,
    children,
    scale = 16,
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
