/**
 * This is used on the front page to show the designer and developer cards. The bulk of this file
 * is related to the 'disabled' state. As of right now (8/29/2019), there is no content for the
 * designers section. This should/will change, and when it does it's possible this component can be
 * refactored to remove the disabled state.
 */

// VENDOR
import * as React from 'react';
import styled, { css } from '@xstyled/styled-components';
import { breakpoints } from '@xstyled/system';
import { Cell, Grid, Typography } from '@retailmenot/anchor';
import { withPrefix } from 'gatsby';
// COMPONENTS
import { SiteLink } from '../Utils';

interface HomeCardProps {
    description?: string;
    disabled?: boolean;
    imgSrc?: string;
    title?: string;
    to?: string | undefined;
}

const StyledHomeCard = styled('div')<HomeCardProps>`
    background: rgba(255, 255, 255, 0.95);
    border-radius: 0.5rem;
    border: solid #e1e1e1 1px;
    box-sizing: border-box;
    display: flex;
    height: 100%;
    overflow: hidden;
    padding: 1.5rem;
    position: relative;

    ${breakpoints({
        md: css`
            padding: 2.8125rem;
            height: 14.5265rem;
            background: #fff;
        `,
    })}

    ${({ disabled }) =>
        disabled &&
        css`
            &:after {
                background-color: #e1216b;
                bottom: 1rem;
                box-sizing: border-box;
                content: 'Coming Soon';
                display: block;
                font-family: base;
                padding: 0.5rem 1rem 0.5rem 2.4rem;
                position: absolute;
                right: -2.75rem;
                text-align: center;
                transform: rotate(-45deg);
                width: 12rem;
                z-index: 20;
                color: white;
            }

            &:before {
                background: rgba(255, 255, 255, 0.75);
                content: '';
                display: block;
                height: 100%;
                left: 0;
                position: absolute;
                top: 0;
                width: 100%;
                z-index: 10;
            }
        `}
`;
StyledHomeCard.displayName = "StyledHomeCard";

const StyledLeftCell = styled(Cell)`
    img {
        max-width: 4.3125rem;
    }
`;

export const HomeCard = ({
    description,
    disabled,
    imgSrc = '',
    title,
    to,
}: HomeCardProps): React.ReactElement<any> => (
    <StyledHomeCard disabled={disabled}>
        <Grid gap="0rem">
            <StyledLeftCell width={{xs: 3}} middle center>
                <img src={withPrefix(imgSrc)} alt={title} />
            </StyledLeftCell>

            <Cell width={7} left={5}>
                <Typography
                    tag="h3"
                    weight="bold"
                    scale="28"
                    color="#323232"
                    mt="0"
                >
                    {title}
                </Typography>

                <Typography tag="p" pt="0" mt="0">
                    {description}
                </Typography>

                {to && <SiteLink to={to} />}
            </Cell>
        </Grid>
    </StyledHomeCard>
);
