import * as React from 'react';
import styled, { css } from '@xstyled/styled-components';
import { withPrefix } from 'gatsby';

type WaveImages = 1 | 2 | 3 | 4 | 5;

const WaveAnimations = css`
    @keyframes wave {
        0% {
            margin-left: 0;
        }
        100% {
            margin-left: -1600px;
        }
    }

    @keyframes swell {
        0%,
        100% {
            transform: translate3d(0, -25rpx, 0);
        }
        50% {
            transform: translate3d(0, 5rpx, 0);
        }
    }
`;

interface WaveProps {
    // Which SVG to use.
    image?: WaveImages;
    duration?: string;
    top?: string;
}

const StyledWave = styled('div')<WaveProps>`
    ${WaveAnimations};
    position: absolute;
    width: 6400rpx;
    transform: translate3d(0, 0, 0);
    height: 500rpx;
    top: ${props => props.top};
    background: url(${props =>
            withPrefix(`/images/waves/wave-${props.image}.svg`)})
        repeat-x;
    animation: wave ${props => props.duration}
        cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
`;

export const Wave = ({
    duration = '62s',
    image = 1,
    top = '0',
}: WaveProps): React.ReactElement<any> => (
    <StyledWave duration={duration} image={image} top={top} />
);
