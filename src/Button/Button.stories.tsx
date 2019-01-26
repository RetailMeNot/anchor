// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
// import { checkA11y } from '@storybook/addon-a11y';
// VENDOR
import styled from 'styled-components';
// COMPONENT
import Button from './Button.component';

const StyledStory = styled.div`
  padding: 2rem 5rem;
`;

storiesOf('Components/Button', module)
  // .addDecorator(checkA11y) // TODO: wtf doesn't this work?
  .add('Primary', () => (
      <StyledStory>
          <Button
            disabled={boolean('Disabled', false)}
            onClick={action('onClick')}
          >
            {text('Button Label', 'Story Button')}
          </Button>
      </StyledStory>
  ))
  .add('Secondary', () => (
      <StyledStory>
          <Button
            disabled={boolean('Disabled', false)}
            variant="secondary"
          >{
            text('Button Label', 'Story Button')}
          </Button>
      </StyledStory>
  ))
  .add('Text', () => (
    <StyledStory>
      <Button
        variant="text"
      >
          {text('Button Label', 'Story Button')}
      </Button>
    </StyledStory>
  ));
