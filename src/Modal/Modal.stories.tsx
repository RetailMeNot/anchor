// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
// ANCHOR
import { colors } from '../theme/index';
// SUBJECT
import * as README from './README.md';
import { Modal, ModalProvider } from './Modal.component';

const { useState } = React;
const { Close, Header, Content, Footer } = Modal;

const StyledStory = styled.div`
    background: ${colors.white.base};
    width: 100vw;
`;

const OpenModalButton = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    return (
        <div>
            <button onClick={() => setIsOpen(true)}>Click me</button>
            <Modal
                size="sm"
                isOpen={isOpen}
                onBackgroundClick={() => setIsOpen(false)}
                onEscapeKeydown={() => setIsOpen(false)}
            >
                <Header title="It's dangerous to go alone.">
                    <Close onClick={() => setIsOpen(false)} />
                </Header>
                <Content>Stuff in the middle</Content>
                <Footer>Stuff at the bottom</Footer>
            </Modal>
        </div>
    );
};

storiesOf('Components/Modal', module)
    .addParameters({ readme: { sidebar: README } })
    .add('Default', () => (
        <ModalProvider>
            <StyledStory>
                <span>Hey checkout this cool modal!</span>
                <OpenModalButton />
            </StyledStory>
        </ModalProvider>
    ));
