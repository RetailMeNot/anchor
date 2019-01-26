// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import styled from 'styled-components';
// COMPONENTS
import AutoComplete from './AutoComplete.component';
import {Icon} from '../Icon';
// THEME

const StyledStory = styled.div`
  padding: 2rem 5rem;
`;

storiesOf('Components/AutoComplete', module)
  .add('Default', () => (
      <StyledStory>
        <p>AutoComplete 1</p>
        <AutoComplete prefix={<Icon type="search"/>} dataSource={[1, 2, 3, 4]} />
        <p>AutoComplete 2</p>
        <AutoComplete
          size="large"
          placeholder="Stores, brands, categories, etc."
          dataSource={[1, 2, 3, 4]}
          prefix={<Icon type="search"/>}
        />
      </StyledStory>
  ));
