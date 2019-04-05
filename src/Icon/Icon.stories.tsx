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
// README
import * as README from './README.md';

const StyledStory = styled.div`
    padding: 2rem 5rem;
`;

storiesOf('Components/Icon', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('All Icons', () => (
        <StyledStory>
            <Grid columns={10} minRowHeight="24px" gap="15px">
                {Object.keys(Icons).map((key: any) => (
                    <CenteredCell key={key} width={1}>
                        <Icon color={color('Icon Color', '#222')} type={key} />
                    </CenteredCell>
                ))}
            </Grid>
        </StyledStory>
    ))
    .add('Resize', () => (
        <StyledStory>
            <Icon scale="xs" type="chevron-right" />
            <Icon scale="sm" type="chevron-right" />
            <Icon scale="md" type="chevron-right" />
            <Icon scale="lg" type="chevron-right" />
            <Icon scale="xl" type="chevron-right" />
            <Icon scale="xxl" type="chevron-right" />
        </StyledStory>
    ));
