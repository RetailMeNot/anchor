// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import styled from 'styled-components';
// ANCHOR
import { Button, Typography } from '..';
import { colors } from '../theme/index';
// SUBJECT
import * as README from './README.md';
import { Modal, ModalProvider, ModalSize } from './Modal.component';

const { useState } = React;
const { Close, Header, Content, Footer } = Modal;

const StyledStory = styled.div`
    background: ${colors.white.base};
    width: 100vw;
`;

const sizeOptions: ModalSize[] = ['sm', 'lg'];

storiesOf('Components/Modal', module)
    .addParameters({ readme: { sidebar: README } })
    .add('Default', () => {
        const OpenModalButton = () => {
            const [isOpen, setIsOpen] = useState<boolean>(true);

            return (
                <div>
                    <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
                    <Modal
                        size={select('size', sizeOptions, 'sm')}
                        isOpen={isOpen}
                        onBackgroundClick={() => setIsOpen(false)}
                        onEscapeKeydown={() => setIsOpen(false)}
                    >
                        <Header title="It's dangerous to go alone.">
                            <Close onClick={() => setIsOpen(false)} />
                        </Header>
                        <Content>Stuff in the middle</Content>
                        <Footer>
                            <Button>Accept</Button>
                            <Button variant="text">Decline</Button>
                        </Footer>
                    </Modal>
                </div>
            );
        };

        return (
            <ModalProvider>
                <StyledStory>
                    <span>Hi there, there's a thing</span>
                    <OpenModalButton />
                </StyledStory>
            </ModalProvider>
        );
    })
    .add('Content', () => {
        return (
            <ModalProvider>
                <StyledStory>
                    <Modal size={select('size', sizeOptions, 'sm')} isOpen>
                        <Close />
                        <Content>Content Area</Content>
                    </Modal>
                </StyledStory>
            </ModalProvider>
        );
    })
    .add('Header + Content', () => {
        return (
            <ModalProvider>
                <StyledStory>
                    <Modal size={select('size', sizeOptions, 'sm')} isOpen>
                        <Header title="Header Area">
                            <Close />
                        </Header>
                        <Content>Content Area</Content>
                    </Modal>
                </StyledStory>
            </ModalProvider>
        );
    })
    .add('Content + Footer', () => {
        return (
            <ModalProvider>
                <StyledStory>
                    <Modal size={select('size', sizeOptions, 'sm')} isOpen>
                        <Content>Content Area</Content>
                        <Footer>Footer Area</Footer>
                    </Modal>
                </StyledStory>
            </ModalProvider>
        );
    })
    .add('Blank', () => {
        return (
            <ModalProvider>
                <StyledStory>
                    <Modal size={select('size', sizeOptions, 'sm')} isOpen />
                </StyledStory>
            </ModalProvider>
        );
    })
    .add('Customized', () => {
        return (
            <ModalProvider>
                <StyledStory>
                    <Modal
                        size={select('size', sizeOptions, 'sm')}
                        isOpen
                        height="25rem"
                        width="30rem"
                        background={`linear-gradient(170deg, ${
                            colors.flashPink.base
                        } 0%, ${colors.fireSale.light} 50%, ${
                            colors.white.base
                        } 50.25%)`}
                        color="white"
                    >
                        <Close color="white" />
                        <Content>
                            <Typography
                                tag="p"
                                scale={24}
                                weight={600}
                                color="white"
                                hue="light"
                                align="center"
                            >
                                Customized Example
                            </Typography>
                            <Typography
                                tag="p"
                                color="white"
                                hue="light"
                                align="center"
                            >
                                With some other text
                            </Typography>
                        </Content>
                        <Footer>
                            <Button>Accept</Button>
                            <Button variant="text">Decline</Button>
                        </Footer>
                    </Modal>
                </StyledStory>
            </ModalProvider>
        );
    });
