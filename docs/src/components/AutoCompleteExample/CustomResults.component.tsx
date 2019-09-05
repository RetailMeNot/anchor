import * as React from 'react';
import { ListItem, Check, Typography } from '@retailmenot/anchor';

interface Values {
    [key: string]: any;
}

interface CustomResultsProps {
    index: number;
    currentIndex: number;
    label: string;
    value?: Values;
}

export const CustomResults = ({
    index,
    currentIndex,
    label,
    value,
}: CustomResultsProps) => {
    const isLink = value ? value.isLink : false;

    return isLink ? (
        <ListItem
            key={index}
            active={index === currentIndex}
            onSelect={() => {
                window.open('http://www.google.com', '_blank');
            }}
            prefix={<Check />}
        >
            <Typography pl="2">Link: {label}</Typography>
        </ListItem>
    ) : (
        <ListItem active={index === currentIndex}>{label}</ListItem>
    );
};
