// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import styled from 'styled-components';
// COMPONENT
import Input from './Input.component';
import Icon from '../../Icon';
// README
import * as README from './README.md';

const StyledStory = styled.div`
    padding: 2rem 5rem;
`;

const validate = (value: any) => {
    if (value !== 'test') {
        return 'You can only input test';
    }
    return null;
};

const formatPhoneNumber = (value: any) => {
    let phoneNumber = '';
    const input = value.replace(/\D/g, '').substring(0, 10);
    const zip = input.substring(0, 3);
    const middle = input.substring(3, 6);
    const last = input.substring(6, 10);
    if (input.length > 6) {
        phoneNumber = `${zip}-${middle}-${last}`;
    } else if (input.length > 3) {
        phoneNumber = `${zip}-${middle}`;
    } else if (input.length >= 0) {
        phoneNumber = `${zip}`;
    }
    return phoneNumber;
};

storiesOf('Components/Input', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('with Prefix', () => (
        <StyledStory>
            <Input label="Search" prefix={<Icon.Search />} />
        </StyledStory>
    ))
    .add('without Prefix', () => (
        <StyledStory>
            <Input label="First Name" />
        </StyledStory>
    ))
    .add('with errors', () => (
        <StyledStory>
            <Input label="Validated Input" validate={validate} />
        </StyledStory>
    ))
    .add('with format', () => (
        <StyledStory>
            <Input label="Phone Number" format={formatPhoneNumber} />
        </StyledStory>
    ))
    .add('with placeholder', () => (
        <StyledStory>
            <Input label="Email" placeholder="email@rmn.com" />
        </StyledStory>
    ))
    .add('disabled', () => (
        <StyledStory>
            <Input label="Disabled Example" disabled={true} />
        </StyledStory>
    ));
