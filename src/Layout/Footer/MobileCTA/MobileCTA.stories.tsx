// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
// COMPONENT
import { MobileCTA } from './MobileCTA.component';

const StyledStory = styled.div`
    padding: 10rem;
`;

storiesOf('Components/Footer/MobileCTA', module).add('default', () => (
    <StyledStory>
        <MobileCTA />
    </StyledStory>
));
