// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
// import { checkA11y } from '@storybook/addon-a11y';
// VENDOR
import styled from 'styled-components';
// COMPONENT
import Anchor from './Anchor.component';

const StyledStory = styled.div`
  padding: 2rem 5rem;
`;

storiesOf('Components/Anchor', module)
  // .addDecorator(checkA11y) // TODO: wtf doesn't this work?
  .add('Primary', () => (
      <StyledStory>
          <Anchor
            disabled={boolean('Disabled', false)}
          >
            {text('Anchor Label', 'Story Anchor')}
          </Anchor>
      </StyledStory>
  ));
