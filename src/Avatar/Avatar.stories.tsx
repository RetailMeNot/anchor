// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import styled from 'styled-components';
import { text } from '@storybook/addon-knobs';
// COMPONENTS
import Avatar from './Avatar.component';
// THEME
import { colors } from '../theme';

const StyledStory = styled.div`
  padding: 2rem 5rem;
  background-color: ${colors.grapePurchase.base};
  color: ${colors.white.base};
`;

storiesOf('Components/Avatar', module)
  .add('Default', () => (
      <StyledStory>
          <p>Avatar</p>
          <Avatar />
          <p>Avatar With Initials</p>
          <Avatar label={text('Avatar Initials', 'CC')} />
      </StyledStory>
  ));
