/*
    Designed to recursively render content. As long as 'data' prop is an object, it will continue
    the recursion. When 'data' is not an object then the key/value pair is shown. The opening and
    closing of each secction is controlled here, and the recursive content is rerendered rather than
    hidden. This maybe should change?

    The final rendering of the actual value from the key/value pair is controlled by the 'DataBlock'
    component.
*/

import * as React from 'react';
import styled from '@xstyled/styled-components';
import { Button } from '@retailmenot/anchor';
import { DataBlock } from '../DataBlock';

interface ExpandBlockProps {
    children?: any;
    data: object | string | number;
    level: number;
    open?: boolean;
}

const StyledExpandBlock = styled('div')`
    font-family: mono;
    padding-left: 1.5rem;
    border-left: dark;

    &.level-0 {
        border-left-style: none;
    }

    &.closed {
        display: none;
    }
`;

const StyledButton = styled(Button)`
    text-align: left;
    display: inline;
    padding-left: 0;

    &.open {
        color: green;
    }
`;

const Prefix = styled('div')`
    display: inline-block;
    color: black;
    height: 1rem;
    width: 1rem;
    border: dashed 1px;
    border-radius: base;
    margin-right: 0.5rem;
    text-align: center;
    line-height: 1rem;
    font-weight: 500;
`;

const Key = styled('span')`
    display: inline-block;
    font-weight: bold;
    padding-right: 0.5rem;
    font-family: base;
    font-size: 0.75rem;
`;

export const ExpandBlock = ({
    children,
    level,
    data,
    open,
}: ExpandBlockProps) => {
    const dataKeys = typeof data === 'object' ? Object.keys(data) : false;
    const [isOpen, setIsOpen] = React.useState(open);

    return (
        <StyledExpandBlock className={`level-${level}`}>
            {open === true || open === undefined ? (
                dataKeys ? (
                    <div>
                        <StyledButton
                            block={false}
                            className={isOpen ? 'open' : undefined}
                            prefix={<Prefix>{!isOpen ? '+' : '-'}</Prefix>}
                            onClick={() => setIsOpen(!isOpen)}
                            size="sm"
                            variant="minimal"
                        >
                            {children}
                        </StyledButton>

                        {isOpen &&
                            dataKeys.map(dataKey => (
                                <ExpandBlock
                                    key={dataKey}
                                    level={level + 1}
                                    data={data[dataKey]}
                                    open={open}
                                >
                                    {dataKey}
                                </ExpandBlock>
                            ))}
                    </div>
                ) : (
                    <div>
                        <Key>{children}:</Key>
                        <DataBlock data={data} />
                    </div>
                )
            ) : null}
        </StyledExpandBlock>
    );
};
