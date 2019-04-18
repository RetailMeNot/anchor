// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// import { text } from '@storybook/addon-knobs';
// VENDOR
import styled from 'styled-components';
// COMPONENTS
import ResultsContainer from './ResultsContainer.component';
// README
import * as README from './README.md';
// THEME

const StyledStory = styled.div`
    padding: 2rem 5rem;
`;

storiesOf('Components/AutoComplete/ResultsContainer', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('Default', () => (
        <StyledStory>
            <p>ResultsContainer 1</p>
            <ResultsContainer
                emitSelectedItem={() => true}
                emitActiveIndex={() => true}
                emitActiveTerm={() => true}
                dataSource={[]}
            />
        </StyledStory>
    ));
