// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
// ANCHOR
import { colors } from '../theme/index';
import * as README from './README.md';
// SUBJECT
import { Modal } from './Modal.component';

const StyledStory = styled.div`
    background: ${colors.white.base};
    width: 100vw;
`;

storiesOf('Components/Modal', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('Default', () => (
        <StyledStory>
            <Modal />
        </StyledStory>
    ));
