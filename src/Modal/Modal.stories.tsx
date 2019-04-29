// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import { select, number, text } from '@storybook/addon-knobs';
import styled from 'styled-components';
// ANCHOR
import { Button, Typography } from '..';
import { colors } from '../theme/index';
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
                        size={select('size', sizeOptions, 'lg')}
                        isOpen={isOpen}
                        onBackgroundClick={() => setIsOpen(false)}
                        onEscapeKeydown={() => setIsOpen(false)}
                    >
                        <Header title="It's dangerous to go alone.">
                            <Close onClick={() => setIsOpen(false)} />
                        </Header>
                        <Content>Stuff in the middle</Content>
                        <Footer>
                            <Button
                                onClick={() => setIsOpen(false)}
                                variant="outline"
                            >
                                Decline
                            </Button>
                            <Button onClick={() => setIsOpen(false)}>
                                Accept
                            </Button>
                        </Footer>
                    </Modal>
                </div>
            );
        };

        return (
            <ModalProvider>
                <StyledStory>
                    <Typography>Click this button!</Typography>
                    <OpenModalButton />
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
                        <Close />
                        <Content>Content Area</Content>
                        <Footer>Footer Area</Footer>
                    </Modal>
                </StyledStory>
            </ModalProvider>
        );
    })
    .add('Oversized', () => {
        return (
            <ModalProvider>
                <StyledStory>
                    <Modal
                        isOpen
                        height={text('height', '100rem')}
                        size={select('size', sizeOptions, 'lg')}
                        backgroundProps={{
                            padding: text('background padding', '2rem 1rem'),
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
        );
    })
    .add('Custom Background', () => {
        const CustomBackground = styled(BaseModalBackground)`
            background-color: rgba(255, 0, 0, 0.6);
        `;

        return (
            <ModalProvider backgroundComponent={CustomBackground}>
                <StyledStory>
                    <Modal size={select('size', sizeOptions, 'sm')} isOpen>
                        <Close />
                        <Header title="Modal with Custom Background" />
                    </Modal>
                </StyledStory>
            </ModalProvider>
        );
    })
    .add('Customized', () => {
        return (
            <ModalProvider>
                <StyledStory>
                    <Modal
                        isOpen
                        size={select('size', sizeOptions, 'sm')}
                        height={text('height', '25rem')}
                        width={text('width', '30rem')}
                        margin={text('margin', '1rem')}
                        background={`linear-gradient(170deg, ${
                            colors.flashPink.base
                        } 0%, ${colors.fireSale.light} 50%, ${
                            colors.white.base
                        } calc(50% + 1.25px))`}
                        color={text('color', colors.white.base)}
                        backgroundProps={{
                            opacity: number('background opacity', 0.2),
                        }}
                    >
                        <Close color="white" />
                        <Content>
                            <Typography
                                tag="p"
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
                            <Button variant="outline">Decline</Button>
                            <Button>Accept</Button>
                        </Footer>
                    </Modal>
                </StyledStory>
            </ModalProvider>
        );
    });
