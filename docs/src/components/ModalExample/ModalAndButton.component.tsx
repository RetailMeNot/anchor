/*
    This component exists for the modal.mdx documentation.

    The code here should be copied verbatim for the "ModalAndButton Component Example" section.
*/

import * as React from 'react';
import { Modal, Button, Typography } from '@retailmenot/anchor';

const { Header, Footer, Close, Content } = Modal;

export const ModalAndButton = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <React.Fragment>
            <Button onClick={() => setIsOpen(true)}>
                Click Me For a Modal!
            </Button>

            <Modal
                size="sm"
                isOpen={isOpen}
                onBackgroundClick={() => setIsOpen(false)}
                onEscapeKeydown={() => setIsOpen(false)}
            >
                <Header title="Modal Example">
                    <Close onClick={() => setIsOpen(false)} />
                </Header>

                <Content>
                    <Typography as="h3">Hello World!</Typography>
                </Content>

                <Footer>
                    <Button
                        block
                        onClick={() => setIsOpen(false)}
                        variant="minimal"
                    >
                        Cancel
                    </Button>
                </Footer>
            </Modal>
        </React.Fragment>
    );
};
