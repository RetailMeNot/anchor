// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import styled from 'styled-components';
// COMPONENTS
import Item from './Item.component';

const StyledStory = styled.div`
  padding: 2rem 5rem;
`;

storiesOf('Components/Item', module)
  .add('Primary', () => (
      <StyledStory>
          <p>Item</p>
        <Item>Item 1</Item>
      </StyledStory>
  ));
