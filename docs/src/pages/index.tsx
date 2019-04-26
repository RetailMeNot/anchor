// REACT
import * as React from 'react';
// VENDOR
import styled, { css } from 'styled-components';
import { withPrefix } from 'gatsby';
// COMPONENTS
import { Page } from '../components/Layout';
// THEME


const StyledIndexPage = styled.div`
    overflow-y: hidden;
    overflow-x: hidden;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

const StyledLogo = styled.img`
    flex: 1 1 auto;
    padding: 12.5rem 2rem 0;
`;

const StyledCaption = styled.p`
    flex: 1 1 auto;
    padding: 1rem 2rem 0;
    font-family: AvenirNext-Medium, Avenir, sans-serif;
    font-size: 1.25rem;
    color: #222222;
    text-align: center;
    line-height: 1.5rem;
`;

const StyledOcean = styled.div`
    margin-top: 3rem;
    height: 28rem;
    width: 100%;
    position: relative;
`;

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
            transform: translate3d(0, -25px, 0);
        }
        50% {
            transform: translate3d(0, 5px, 0);
        }
    }
`;

const StyledWave = css`
    position: absolute;
    width: 6400px;
    transform: translate3d(0, 0, 0);
    height: 500px;
`;

const StyledWaveSix = styled.div`
    ${StyledWave};
    ${WaveAnimations};
    background: url(${withPrefix('/images/waves/wave-1.svg')}) repeat-x;
    top: 120px;
    animation: wave 67s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
`;

const StyledWaveFive = styled.div`
    ${StyledWave};
    ${WaveAnimations};
    top: 80px;
    background: url(${withPrefix('/images/waves/wave-2.svg')}) repeat-x;
    animation: wave 65s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
`;

const StyledWaveFour = styled.div`
    ${StyledWave};
    ${WaveAnimations};
    top: 50px;
    background: url(${withPrefix('/images/waves/wave-3.svg')}) repeat-x;
    animation: wave 62s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
`;

const StyledWaveThree = styled.div`
    ${StyledWave};
    ${WaveAnimations};
    top: 20px;
    background: url(${withPrefix('/images/waves/wave-4.svg')}) repeat-x;
    animation: wave 85s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
`;

const StyledWaveTwo = styled.div`
    ${StyledWave};
    ${WaveAnimations};
    top: 10px;
    background: url(${withPrefix('/images/waves/wave-5.svg')}) repeat-x;
    animation: wave 88s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
`;

const StyledWaveOne = styled.div`
    ${StyledWave};
    ${WaveAnimations};
    top: 0;
    background: url(${withPrefix('/images/waves/wave-6.svg')}) repeat-x;
    animation: wave 89s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
`;

export const IndexPage = (): React.ReactElement<any> => (
    <Page>
        <StyledIndexPage>
            <StyledLogo src={withPrefix('/images/anchor-logo.svg')} />
            <StyledCaption>
                A design system by <strong>RetailMeNot</strong>. Coming soon.
            </StyledCaption>
            <StyledOcean>
                <StyledWaveOne />
                <StyledWaveTwo />
                <StyledWaveThree />
                <StyledWaveFour />
                <StyledWaveFive />
                <StyledWaveSix />
            </StyledOcean>
        </StyledIndexPage>
    </Page>
);

export default IndexPage;
