// VENDOR
import * as React from 'react';
import styled, { css } from '@xstyled/styled-components';
import { space as spaceStyles, SpaceProps } from '@xstyled/system';
// ANCHOR
import { Button, ChevronDown, ChevronUp } from '../';
// UTILS
import { get } from '../utils/get/get';

enum enumIconAlignment {
    left = 'left',
    right = 'right',
}

type IconAlignment = keyof typeof enumIconAlignment;

interface Collapse2Props {
    children?: any;
    closedIcon?: React.ReactElement;
    closedText?: string;
    iconAlignment?: IconAlignment;
    openedIcon?: React.ReactElement;
    openedText?: string;
}

/* Main wrapper */
const StyledCollapse = styled('div')`
    border-top: base;
    border-bottom: base;
`;

/* Extending Button to expose some styling options */
const CollapseButton = styled(Button)`
    color: text.base;
    font-weight: normal;
    ${({prefix}) => css({ justifyContent: prefix ? 'end' : 'space-between'})}
`;

interface StyledOverflowContainer {
    isOpen: boolean;
    openHeight: string;
}

/* An overflow container that hides children when collapsed */
const StyledOverflowContainer = styled('div')<StyledOverflowContainer>`
    overflow-y: hidden;
    transition: all 1000ms;
    ${({isOpen, openHeight}) =>  css({ height: isOpen ? openHeight + '!important' : '0px !important'})}
`;

/* Container of the children. This is what is used to get the height of the content. */
const StyledContainer = styled('div')<SpaceProps>`
    ${spaceStyles}
`;

export const Collapse2 = ({
    children,
    closedIcon = <ChevronUp />,
    openedIcon = <ChevronDown />,
    closedText = 'Click to open',
    openedText = 'Click to close',
    iconAlignment = enumIconAlignment.right,
}: Collapse2Props) => {
    const container = React.useRef<HTMLDivElement>(null);
    const overflowContainer = React.useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [openHeight, setOpenHeight] = React.useState<string>('');
    const buttonText = isOpen ? openedText : closedText;

    /*
        Once the component is mounted the height of the container is recorded and made an inline-style.
        This is necessary in order to have the sliding animation of showing/hiding content.
    */
    React.useEffect(() => {
        const containerHeight = get(container.current, 'clientHeight', 0);

        if (container && container.current && overflowContainer && overflowContainer.current) {
            overflowContainer.current.style.height = containerHeight + 'px';
            setOpenHeight(containerHeight);
        }
    }, []);

    return(
        <StyledCollapse>
            <CollapseButton
                block
                onClick={() => setIsOpen(!isOpen)}
                variant="minimal"
                prefix={
                    iconAlignment === enumIconAlignment.left
                        ? isOpen
                        ? closedIcon
                        : openedIcon
                        : undefined
                }
                suffix={
                    iconAlignment === enumIconAlignment.right
                        ? isOpen
                        ? closedIcon
                        : openedIcon
                        : undefined
                }
            >
                {buttonText}
            </CollapseButton>

            <StyledOverflowContainer
                isOpen={isOpen}
                openHeight={openHeight}
                ref={overflowContainer}
            >
                <StyledContainer ref={container} p="2">
                    {children}
                </StyledContainer>
            </StyledOverflowContainer>
        </StyledCollapse>
    );
};
