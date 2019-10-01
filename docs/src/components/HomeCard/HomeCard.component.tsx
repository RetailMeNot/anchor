/**
 * This is used on the front page to show the designer and developer cards. The bulk of this file
 * is related to the 'disabled' state. As of right now (8/29/2019), there is no content for the
 * designers section. This should/will change, and when it does it's possible this component can be
 * refactored to remove the disabled state.
 */

import * as React from 'react';
import styled, { css } from '@xstyled/styled-components';
import { th } from '@xstyled/system';
import { Typography } from '@retailmenot/anchor';
import { withPrefix } from 'gatsby';
import { SiteLink } from '../Utils';

interface HomeCardProps {
    description?: string;
    disabled?: boolean;
    imgSrc?: string;
    title?: string;
    to?: string | undefined;
}
// df4b6b
const StyledHomeCard = styled('div')<HomeCardProps>`
    background: #fff;
    border-radius: 0.5rem;
    border: solid #e1e1e1 1px;
    box-sizing: border-box;
    height: 14.5265rem;
    overflow: hidden;
    padding: 2.8125rem;
    position: relative;
    display: flex;

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

const StyledLeftCol = styled('div')`
    display: flex;
    width: 20%;
    align-items: center;
    justify-content: center;

    img {
        max-width: 4.3125rem;
    }
`;

const StyledRightCol = styled('div')`
    display: inline-block;
    padding-left: 2rem;
    width: 79%;
`;

export const HomeCard = ({
    description,
    disabled,
    imgSrc = '',
    title,
    to,
}: HomeCardProps): React.ReactElement<any> => (
    <StyledHomeCard disabled={disabled}>
        <StyledLeftCol>
            <img src={withPrefix(imgSrc)} alt={title} />
        </StyledLeftCol>

        <StyledRightCol>
            <Typography tag="h3" weight="bold" scale="28" color="#323232">
                {title}
            </Typography>

            <Typography tag="p" pt="0" mt="0">
                {description}
            </Typography>

            {to && <SiteLink to={to} />}
        </StyledRightCol>
    </StyledHomeCard>
);
