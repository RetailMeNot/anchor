// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import { color } from '@storybook/addon-knobs';
// VENDOR
import styled from 'styled-components';
// COMPONENTS
import CardActionArea from './CardActionArea.component';
// THEME
import { colors } from '../../theme';

const StyledStory = styled.div`
    padding: 2rem 5rem;
`;

storiesOf('Components/Card/CardActionArea', module).add('Default', () => (
    <StyledStory>
        <CardActionArea backgroundColor={color('Background Color', colors.silver.light)}>
            The action area is a large section dedicated for card actions. You can specify a backgroundColor
        </CardActionArea>
    </StyledStory>
));
