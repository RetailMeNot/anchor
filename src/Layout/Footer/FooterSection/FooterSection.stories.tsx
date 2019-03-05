// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
// COMPONENT
import { FooterSection } from './FooterSection.component';

const StyledStory = styled.div`
    padding: 10rem;
`;

storiesOf('Components/Footer/FooterSection', module).add('default', () => (
    <StyledStory>
        <FooterSection title="Section Title">
            <ul>
                <li>
                    <a href="#">Link 1</a>
                </li>
                <li>
                    <a href="#">Link 2</a>
                </li>
                <li>
                    <a href="#">Link 3</a>
                </li>
                <li>
                    <a href="#">Link 4</a>
                </li>
            </ul>
        </FooterSection>
    </StyledStory>
));
