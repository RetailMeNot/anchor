// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import styled, { ThemeProvider } from '@xstyled/styled-components';
// COMPONENTS
import {
    responsiveValues,
    responsiveQuery,
    Container,
    Row,
    Col,
    Visible,
    ScreenClass,
    ScreenBadge,
    Hidden,
} from './';
import { Typography } from '../../Typography';
// README
import * as README from './README.md';
import { RootTheme } from '../../theme';

const StyledStory = styled('div')`
    padding: 2rem 5rem;
`;

const ResponsiveQueryExample = styled('div')`
    padding: 1rem;
    ${props => responsiveQuery(props, responsiveValues.xs)`
        background-color: red;

        .anchor-typography {
            color: #00FFFF;
        }
    `}
    ${props => responsiveQuery(props, responsiveValues.sm)`
        background-color: orange;

        .anchor-typography {
            color: #005AFF;
        }
    `}
    ${props => responsiveQuery(props, responsiveValues.md)`
        background-color: yellow;

        .anchor-typography {
            color: #0000FF;
        }
    `}
    ${props => responsiveQuery(props, responsiveValues.lg)`
        background-color: green;

        .anchor-typography {
            color: #FF7FFF;
        }
    `}
    ${props => responsiveQuery(props, responsiveValues.xl)`
        background-color: blue;

        .anchor-typography {
            color: #FFFF00;
        }
    `}
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
    ))
    .add('responsiveQuery', () => (
        <ThemeProvider theme={RootTheme}>
            <ResponsiveQueryExample>
                <Typography tag="h1">Resize The Window</Typography>
                <Typography tag="p" pt="2">
                    For each breakpoint, xs | sm | md | lg | xl, a new media
                    query is generated.
                </Typography>
            </ResponsiveQueryExample>
        </ThemeProvider>
    ));
