// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import styled from 'styled-components';
// COMPONENTS
import Badge from './Badge.component';
import { Icon } from '../Icon';
// THEME

const StyledStory = styled.div`
    padding: 2rem 5rem;
`;

storiesOf('Components/Badge', module).add('Default', () => (
    <StyledStory>
        <p>Badge 1</p>
        <Badge count={1}>
            <Icon type="cart" />
        </Badge>
    </StyledStory>
));
