// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import styled from 'styled-components';
import { color } from '@storybook/addon-knobs';
// COMPONENT
import { Icon, Icons } from './Icon.component';
import { Grid, CenteredCell } from '../Grid';

const StyledStory = styled.div`
    padding: 2rem 5rem;
`;

storiesOf('Components/Icon', module).add('All Icons', () => (
    <StyledStory>
        <Grid columns={10} minRowHeight="24px" gap="15px">
            {Object.keys(Icons).map((key: any) => (
                <CenteredCell key={key} width={1}>
                    <Icon color={color('Icon Color', '#222')} type={key} />
                </CenteredCell>
            ))}
        </Grid>
    </StyledStory>
));
