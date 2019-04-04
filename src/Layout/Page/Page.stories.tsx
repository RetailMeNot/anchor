// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
// COMPONENT
import { Page } from './Page.component';
// README
import * as README from './README.md';

const StyledStory = styled.div``;

storiesOf('Components/Layout/Page', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('default', () => (
        <StyledStory>
            <Page>Story</Page>
        </StyledStory>
    ));
