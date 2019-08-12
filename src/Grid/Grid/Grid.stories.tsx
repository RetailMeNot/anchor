// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import styled, { ThemeProvider } from '@xstyled/styled-components';
// COMPONENTS
import {
    Container,
    Row,
    Col,
    Visible,
    ScreenClass,
    ScreenBadge,
    Hidden,
} from '../../Grid';
import { Typography } from '../../Typography';
// README
import * as README from './README.md';
import { RootTheme } from '../../theme';

const StyledStory = styled('div')`
    padding: 2rem 5rem;
`;

storiesOf('Components/Grid/Responsive', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('Basic Grid', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <Container>
                    <Row>
                        <Col debug={true} md={4} xl={6}>
                            <Typography>Column 1</Typography>
                        </Col>
                        <Col debug={true} md={4} xl={6}>
                            <Typography>Column 2</Typography>
                        </Col>
                        <Col debug={true} md={4} xl={6}>
                            <Typography>Column 3</Typography>
                        </Col>
                        <Col debug={true} md={4} xl={6}>
                            <Typography>Column 4</Typography>
                        </Col>
                    </Row>
                </Container>
            </StyledStory>
        </ThemeProvider>
    ))
    .add('Visible', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <Container>
                    <Visible xs={true}>
                        <Col>
                            <Typography>I'm visible in xs</Typography>
                        </Col>
                    </Visible>
                    <Visible sm={true} md={true}>
                        <Col>
                            <Typography>I'm visible in sm & md</Typography>
                        </Col>
                    </Visible>
                    <Visible md={true}>
                        <Col>
                            <Typography>I'm visible in md</Typography>
                        </Col>
                    </Visible>
                    <Visible lg={true}>
                        <Col>
                            <Typography>I'm visible in lg</Typography>
                        </Col>
                    </Visible>
                </Container>
            </StyledStory>
        </ThemeProvider>
    ))
    .add('Hidden', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <Container>
                    <Hidden xs={true}>
                        <Col>
                            <Typography>I'm Hidden in xs</Typography>
                        </Col>
                    </Hidden>
                    <Hidden sm={true} md={true}>
                        <Col>
                            <Typography>I'm Hidden in sm & md</Typography>
                        </Col>
                    </Hidden>
                    <Hidden md={true}>
                        <Col>
                            <Typography>I'm Hidden in md</Typography>
                        </Col>
                    </Hidden>
                    <Hidden lg={true}>
                        <Col>
                            <Typography>I'm Hidden in lg</Typography>
                        </Col>
                    </Hidden>
                </Container>
            </StyledStory>
        </ThemeProvider>
    ))
    .add('ScreenClass', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <Container>
                    <ScreenClass
                        render={(resolution: string) => (
                            <Typography>I'm {resolution}</Typography>
                        )}
                    />
                </Container>
            </StyledStory>
        </ThemeProvider>
    ))
    .add('ScreenBadge', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <Container>
                    <ScreenBadge />
                </Container>
            </StyledStory>
        </ThemeProvider>
    ));
