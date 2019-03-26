// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import { Grid, Cell } from 'styled-css-grid';
import styled from 'styled-components';
// COMPONENT
import { XS, CustomAdaptor, StandardBreakpoints } from '../../Grid';

const StyledStory = styled.div`
    padding: 2rem 5rem;
`;

storiesOf('Components/Grid/Flex & Box', module)
  .add('Layout', () => (
    <StyledStory>
      <h4>Three column layout</h4>
      <Grid columns={3}>
        <Cell width={1}>1</Cell>
        <Cell width={1}>2</Cell>
        <Cell width={1}>3</Cell>
      </Grid>
    </StyledStory>
  ))
  .add('Adaptive Layout', () => (
    <StyledStory>
      <h4>Three columns on every device except xs (max: {StandardBreakpoints.xs.max}px)</h4>
      <CustomAdaptor minWidth={StandardBreakpoints.xs.max}>
        <Grid columns={3}>
          <Cell width={1}>1</Cell>
          <Cell width={1}>2</Cell>
          <Cell width={1}>3</Cell>
        </Grid>
      </CustomAdaptor>
      <XS>
        <Grid columns={1}>
          <Cell width={1}>1</Cell>
          <Cell width={1}>2</Cell>
          <Cell width={1}>3</Cell>
        </Grid>
      </XS>
    </StyledStory>
  ));
