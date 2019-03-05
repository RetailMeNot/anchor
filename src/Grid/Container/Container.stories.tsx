// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// import { text, boolean } from '@storybook/addon-knobs';
// import { checkA11y } from '@storybook/addon-a11y';
// VENDOR
import styled from 'styled-components';
import { Box, Flex } from '@rebass/grid';
// COMPONENT
import Container from './Container.component';

const StyledStory = styled.div`
    padding: 2rem 5rem;

    .container {
        border: solid thin grey;
        > div > div {
            border: solid thin lightgrey;
        }
    }
`;

const columnArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

storiesOf('Components/Container', module).add('All', () => (
    <StyledStory>
        <Container className="container" py={2}>
            <Flex>
                {columnArray.map(i => (
                    <Box key={i} width={[1 / 12]}>
                        <Flex justifyContent="center">{i}</Flex>
                    </Box>
                ))}
            </Flex>
            <br />
            <Flex>
                <Box width={320}>
                    <Flex justifyContent="center">1</Flex>
                </Box>
                <Box width={[1]}>
                    <Flex justifyContent="center">1</Flex>
                </Box>
            </Flex>
        </Container>
    </StyledStory>
));
