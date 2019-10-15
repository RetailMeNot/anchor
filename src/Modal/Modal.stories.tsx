// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import { boolean, select, number, text } from '@storybook/addon-knobs';
import styled, { ThemeProvider } from '@xstyled/styled-components';
// ANCHOR
import { Button, Typography } from '..';
import { RootTheme } from '../theme';
// SUBJECT
import * as README from './README.md';
import {
    Modal,
    BaseModalBackground,
    ModalProvider,
    ModalSize,
} from './Modal.component';

const { useState } = React;
const { Close, Header, Content, Footer } = Modal;

const StyledStory = styled('div')`
    background: white;
    width: 100vw;
    height: 120vh;
`;

const sizeOptions: ModalSize[] = ['sm', 'lg'];

storiesOf('Components/Modal', module)
    .addParameters({ readme: { sidebar: README } })
    .add('Default', () => {
        const OpenModalButton = () => {
            const [isOpen, setIsOpen] = useState<boolean>(true);

            return (
                <React.Fragment>
                    <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
                    <Modal
                        size={select('size', sizeOptions, 'lg')}
                        isOpen={isOpen}
                        onBackgroundClick={() => setIsOpen(false)}
                        onEscapeKeydown={() => setIsOpen(false)}
                        allowScroll={boolean('allowScroll', false)}
                    >
                        <Header title="It's dangerous to go alone.">
                            <Close onClick={() => setIsOpen(false)} />
                        </Header>
                        <Content>
                            <Typography>Stuff in the middle</Typography>
                        </Content>
                        <Footer>
                            <Button
                                block
                                onClick={() => setIsOpen(false)}
                                variant="outline"
                            >
                                Decline
                            </Button>
                            <Button block onClick={() => setIsOpen(false)}>
                                Accept
                            </Button>
                        </Footer>
                    </Modal>
                </React.Fragment>
            );
        };

        return (
            <ThemeProvider theme={RootTheme}>
                <ModalProvider>
                    <StyledStory>
                        <Typography tag="h5">Click this button!</Typography>
                        <OpenModalButton />
                    </StyledStory>
                </ModalProvider>
            </ThemeProvider>
        );
    })
    .add('Blank', () => {
        return (
            <ThemeProvider theme={RootTheme}>
                <ModalProvider>
                    <StyledStory>
                        <Modal
                            size={select('size', sizeOptions, 'sm')}
                            isOpen
                        />
                    </StyledStory>
                </ModalProvider>
            </ThemeProvider>
        );
    })
    .add('Content', () => {
        return (
            <ThemeProvider theme={RootTheme}>
                <ModalProvider>
                    <StyledStory>
                        <Modal size={select('size', sizeOptions, 'sm')} isOpen>
                            <Close />
                            <Content>
                                <Typography>Content Area</Typography>
                            </Content>
                        </Modal>
                    </StyledStory>
                </ModalProvider>
            </ThemeProvider>
        );
    })
    .add('Header + Content', () => {
        return (
            <ThemeProvider theme={RootTheme}>
                <ModalProvider>
                    <StyledStory>
                        <Modal size={select('size', sizeOptions, 'sm')} isOpen>
                            <Header title="Header Area">
                                <Close />
                            </Header>
                            <Content>
                                <Typography>Content Area</Typography>
                            </Content>
                        </Modal>
                    </StyledStory>
                </ModalProvider>
            </ThemeProvider>
        );
    })
    .add('Content + Footer', () => {
        return (
            <ThemeProvider theme={RootTheme}>
                <ModalProvider>
                    <StyledStory>
                        <Modal size={select('size', sizeOptions, 'sm')} isOpen>
                            <Close />
                            <Content>
                                <Typography>Content Area</Typography>
                            </Content>
                            <Footer>
                                <Typography>Footer Area</Typography>
                            </Footer>
                        </Modal>
                    </StyledStory>
                </ModalProvider>
            </ThemeProvider>
        );
    })
    .add('Oversized', () => {
        return (
            <ThemeProvider theme={RootTheme}>
                <ModalProvider>
                    <StyledStory>
                        <Modal
                            isOpen
                            height={text('height', '100rem')}
                            size={select('size', sizeOptions, 'lg')}
                            backgroundProps={{
                                padding: text(
                                    'background padding',
                                    '2rem 1rem'
                                ),
                            }}
                        >
                            <Header title="Oversized Modal">
                                <Close />
                            </Header>
                            <Content>
                                <Typography>Psst... down below!</Typography>
                            </Content>
                            <Footer>
                                <Typography>Psst... up above!</Typography>
                            </Footer>
                        </Modal>
                    </StyledStory>
                </ModalProvider>
            </ThemeProvider>
        );
    })
    .add('Custom Background', () => {
        const CustomBackground = styled(BaseModalBackground)`
            background-color: rgba(255, 0, 0, 0.6);
        `;

        return (
            <ThemeProvider theme={RootTheme}>
                <ModalProvider backgroundComponent={CustomBackground}>
                    <StyledStory>
                        <Modal size={select('size', sizeOptions, 'sm')} isOpen>
                            <Close />
                            <Header title="Modal with Custom Background" />
                        </Modal>
                    </StyledStory>
                </ModalProvider>
            </ThemeProvider>
        );
    })
    .add('Customized', () => {
        const OpenModalButton = () => {
            const [isOpen, setIsOpen] = useState<boolean>(true);

            const pinkColorScheme = {
                base: '#DF206C',
                light: '#E665A1',
                dark: '#B81D5B',
            };

            return (
                <React.Fragment>
                    <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

                    <Modal
                        isOpen={isOpen}
                        size={select('size', sizeOptions, 'sm')}
                        height={text('height', '25rem')}
                        width={text('width', '30rem')}
                        margin={text('margin', 'auto')}
                        background="linear-gradient(170deg, #DF206C 0%, #F16667 50%, white calc(50% + 1.25px))"
                        color={text('color', 'white')}
                        backgroundProps={{
                            opacity: number('backgroundProps.opacity', 0.2),
                        }}
                        allowScroll={boolean('allowScroll', false)}
                        shadow={text(
                            'shadow',
                            '0 0.375rem 0.5rem 0.25rem rgba(0,0,0,0.13)'
                        )}
                        onBackgroundClick={() => setIsOpen(false)}
                        onEscapeKeydown={() => setIsOpen(false)}
                    >
                        <Close reverse onClick={() => setIsOpen(false)} />
                        <Content>
                            <Typography
                                tag="h2"
                                scale={24}
                                weight={600}
                                align="center"
                            >
                                Customized Example
                            </Typography>
                            <Typography tag="p" align="center">
                                With some other text
                            </Typography>
                        </Content>
                        <Footer>
                            <Button
                                block
                                circular
                                variant="minimal"
                                colorTheme={pinkColorScheme}
                                onClick={() => setIsOpen(false)}
                            >
                                Decline
                            </Button>
                            <Button
                                block
                                circular
                                colorTheme={pinkColorScheme}
                                onClick={() => setIsOpen(false)}
                            >
                                Accept
                            </Button>
                        </Footer>
                    </Modal>
                </React.Fragment>
            );
        };

        return (
            <ThemeProvider theme={RootTheme}>
                <ModalProvider>
                    <StyledStory>
                        <OpenModalButton />
                    </StyledStory>
                </ModalProvider>
            </ThemeProvider>
        );
    });
