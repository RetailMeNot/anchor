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
  .add('All', () => (
      <StyledStory>
        <Icon type="hamburger" />
      </StyledStory>
  ));
