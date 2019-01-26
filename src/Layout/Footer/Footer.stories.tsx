// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
// COMPONENT
import { Footer } from './Footer.component';

const StyledStory = styled.div`
  padding: 2rem 0;
`;

storiesOf('Components/Footer', module).add('default', () => (
    <StyledStory>
        <Footer>Story</Footer>
    </StyledStory>
));
