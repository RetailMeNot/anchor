// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import styled from 'styled-components';
// COMPONENT
import Icon from './Icon.component';

const StyledStory = styled.div`
    padding: 2rem 5rem;
`;

storiesOf('Components/Icon', module)
.add('hamburger', () => (
    <StyledStory>
        <Icon type="hamburger" />
    </StyledStory>
))
  .add('tag-add', () => (
    <StyledStory>
      <Icon type="tag-add" />
    </StyledStory>
  ));
