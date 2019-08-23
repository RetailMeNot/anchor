/*
    This component exists for the modal.mdx documentation.

    Although this component is very close to the examples given in the Modal documentation, the key
    difference is that in this code I'm importing the ModalProvider rather than putting it at the
    top of the gatsby site like I did in the code examples. The ThemeProvider and RootTheme are
    already in the Page.component.
*/

import * as React from 'react';
import styled from '@xstyled/styled-components';
import { Typography, ModalProvider } from '@retailmenot/anchor';
import { ModalAndButton } from './ModalAndButton.component';

const StyledModalExample = styled.div`
    border: solid black 1px;
    padding: 1rem;
    margin: 1rem;
    background-color: white;
    max-width: 30rem;
`;

export const ModalExample = () => (
    <ModalProvider>
        <StyledModalExample>
            <Typography tag="h2" mt="0">
                An Example Page
            </Typography>

            <section>
                <Typography tag="p" pb="2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc tempor ante quis mauris hendrerit, sed egestas nulla
                    porttitor. Pellentesque habitant morbi tristique senectus et
                    netus et malesuada fames ac turpis egestas. Quisque
                    convallis, risus non ornare lacinia, enim neque malesuada
                    nisi, nec bibendum enim orci eu diam. Nunc vulputate
                    placerat magna non ultrices. Aenean pharetra ante at sapien
                    facilisis, eget accumsan quam suscipit.
                </Typography>

                <ModalAndButton />
            </section>
        </StyledModalExample>
    </ModalProvider>
);
