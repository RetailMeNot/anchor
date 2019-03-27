// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
// COMPONENT
import { Page } from './Page.component';

const StyledStory = styled.div`
`;

storiesOf('Components/Layout/Page', module).add('default', () => (
    <StyledStory>
        <Page>Story</Page>
    </StyledStory>
));
