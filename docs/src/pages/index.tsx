// REACT
import * as React from 'react';
// VENDOR
import styled, { css } from 'styled-components';
import { withPrefix } from 'gatsby';
// COMPONENTS
import { Page } from '../components/Layout';
// THEME

const StyledIndexPage = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLogo = styled.img`
  flex: 1 1 auto;
  padding-top: 5rem;
`;

const StyledCaption = styled.p`
  flex: 1 1 auto;
  padding-top: 1rem;
  font-family: AvenirNext-Medium, Avenir, sans-serif;
  font-size: 1.25rem;
  color: #222222;
  text-align: center;
  line-height: 1.5rem;
`;

const StyledOcean = styled.div`
  height: 10%;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: -9;
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
    0%, 100% {
      transform: translate3d(0,-25px,0);
    }
    50% {
      transform: translate3d(0,5px,0);
    }
  }
`;

const StyledWave = css`
  position: absolute;
  top: -80px;
  width: 6400px;
  transform: translate3d(0, 0, 0);
  height: 1000px;
`;

const StyledWaveSix = styled.div`
  ${StyledWave}
  ${WaveAnimations}
  background: url(${ withPrefix('/images/waves/wave-1.svg')}) repeat-x;
  top: -20px;
  animation: wave 27s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
`;

const StyledWaveFive = styled.div`
  ${StyledWave}
  ${WaveAnimations}
  top: -120px;
  background: url(${ withPrefix('/images/waves/wave-2.svg')}) repeat-x;
  animation: wave 25s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
`;

const StyledWaveFour = styled.div`
  ${StyledWave}
  ${WaveAnimations}
  top: -140px;
  background: url(${ withPrefix('/images/waves/wave-3.svg')}) repeat-x;
  animation: wave 22s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
`;

const StyledWaveThree = styled.div`
  ${StyledWave}
  ${WaveAnimations}
  top: -160px;
  background: url(${ withPrefix('/images/waves/wave-4.svg')}) repeat-x;
  animation: wave 25s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
`;

const StyledWaveTwo = styled.div`
  ${StyledWave}
  ${WaveAnimations}
  top: -180px;
  background: url(${ withPrefix('/images/waves/wave-5.svg')}) repeat-x;
  animation: wave 28s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
`;

const StyledWaveOne = styled.div`
  ${StyledWave}
  ${WaveAnimations}
  top: -200px;
  background: url(${ withPrefix('/images/waves/wave-6.svg')}) repeat-x;
  animation: wave 29s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
`;

export const IndexPage = (): React.ReactElement<any> => (
  <Page>
    <StyledIndexPage>
      <StyledLogo src={withPrefix('/images/anchor-logo.svg')} />
      <StyledCaption>A design system by <strong>RetailMeNot</strong>. Coming soon.</StyledCaption>
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
