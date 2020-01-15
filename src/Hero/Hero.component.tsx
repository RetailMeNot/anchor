// REACT
import * as React from 'react';
// VENDOR
import styled, { css } from '@xstyled/styled-components';
import { th, space as spaceStyles, SpaceProps } from '@xstyled/system';
import classnames from 'classnames';
// ANCHOR
import {
    Typography,
    TypographyProps,
    TextAlign,
} from '../Typography/Typography.component';

// Hero
// ------------------------------------------------------------------------------------------------------------------

interface StyledHeroProps extends React.HTMLAttributes<HTMLDivElement>, SpaceProps {
    align?: TextAlign;
    background?: string;
    color?: string;
    minHeight?: string;
}

const StyledHero = styled('section')<StyledHeroProps>`
    box-sizing: border-box;
    position: relative;
    width: 100%;
    margin: 0 auto;
    display: block;
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${({ background, color = 'white', align, minHeight }) =>
        css({
            background: th.color(background),
            color,
            minHeight,
            textAlign: align,
        })}
    ${spaceStyles}
`;

interface HeroProps extends React.HTMLAttributes<HTMLDivElement>, SpaceProps {
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
    ${spaceStyles}
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
    ${spaceStyles}
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
