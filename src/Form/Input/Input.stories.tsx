// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import styled from 'styled-components';
// COMPONENT
import { Input } from './Input.component';
import { Icon } from '../../Icon';
import { Grid, Cell } from '../../Grid';
import { colors } from '../../theme';
// README
import * as README from './README.md';

const StyledStory = styled.div`
    padding: 2rem 5rem;
`;

storiesOf('Components/Form/Input', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('default', () => (
        <StyledStory>
            <Grid columns="200px">
                <Cell>
                    <Input
                        placeholder="Enter text here"
                        label="Enter text here"
                        type="text"
                    />
                </Cell>
                <Cell>
                    <Input
                        placeholder="Enter a number here"
                        type="number"
                        suffix={<Icon color={colors.ash.dark} type="search" />}
                    />
                </Cell>
                <Cell>
                    <Input
                        placeholder="(512) 666-6666"
                        label="Enter a phone number here"
                        prefix={<Icon color={colors.ash.dark} type="mobile" />}
                        type="tel"
                    />
                </Cell>
                <Cell>
                    <Input
                        prefix={<Icon color={colors.ash.dark} type="search" />}
                        type="number"
                    />
                </Cell>
            </Grid>
        </StyledStory>
    ));
// .add('without Prefix', () => (
//     <StyledStory>
//         <Input label="First Name" />
//     </StyledStory>
// ))
// .add('with errors', () => (
//     <StyledStory>
//         <Input label="Validated Input" validate={validate} />
//     </StyledStory>
// ))
// .add('with format', () => (
//     <StyledStory>
//         <Input label="Phone Number" format={formatPhoneNumber} />
//     </StyledStory>
// ))
// .add('with placeholder', () => (
//     <StyledStory>
//         <Input label="Email" placeholder="email@rmn.com" />
//     </StyledStory>
// ))
// .add('disabled', () => (
//     <StyledStory>
//         <Input label="Disabled Example" disabled={true} />
//     </StyledStory>
// ));
