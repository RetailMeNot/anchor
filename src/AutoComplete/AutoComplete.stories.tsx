// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import styled from 'styled-components';
// COMPONENTS
import AutoComplete from './AutoComplete.component';
import Icon from '../Icon';
// README
import * as README from './README.md';
// THEME

const StyledStory = styled.div`
    box-sizing: border-box;
    min-width: 90vw;
`;

storiesOf('Components/AutoComplete', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('Default', () => (
        <StyledStory>
            <p>AutoComplete 1</p>
            <AutoComplete prefix={<Icon.Search />} dataSource={[1, 2, 3, 4]} />
            <p>AutoComplete 2</p>
            <AutoComplete
                size="large"
                placeholder="Stores, brands, categories, etc."
                dataSource={[1, 2, 3, 4]}
                prefix={<Icon.Search />}
            />
        </StyledStory>
    ));
