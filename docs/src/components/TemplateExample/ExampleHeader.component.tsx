import * as React from 'react';
import styled from '@xstyled/styled-components';

interface ExampleHeaderProps {
    children?: any;
    vertical?: boolean;
}

const StyledExampleHeader = styled('header')<ExampleHeaderProps>`
    background-color: accent.dark;
    color: white;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    text-align: center;
    display: flex;
    max-width: 10rem;

    ${({ vertical }) => (vertical ? 'flex-direction: column' : null)}
`;

export const ExampleHeader = ({
    children,
    vertical,
}: ExampleHeaderProps): React.ReactElement<any> => (
    <StyledExampleHeader vertical={vertical}>{children}</StyledExampleHeader>
);
