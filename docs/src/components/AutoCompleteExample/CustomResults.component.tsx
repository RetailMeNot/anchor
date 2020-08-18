import * as React from 'react';
import { ListItem, Check, Typography } from '@retailmenot/anchor';

type Value = {
    active: boolean;
    id: string;
    key: string;
    label: string;
    onMouseOver: (event?: React.MouseEvent) => void;
    onSelect: (event?: React.FocusEvent) => void;
    [key: string]: any; // Value also contains any additional custom fields passed via the dataSource prop
}

interface CustomResultsProps {
    index: number;
    currentIndex: number;
    label: string;
    value: Value;
}

export const CustomResults = ({
    index,
    currentIndex,
    value: {
        active,
        id,
        isLink, // custom field from datasource
        key,
        label,
        onMouseOver,
        onSelect,
    },
}: CustomResultsProps) => isLink ? (
        <ListItem
            key={key}
            active={active}
            onMouseOver={onMouseOver}
            onSelect={() => {
                window.open('http://www.google.com', '_blank');
            }}
            prefix={<Check />}
        >
            <Typography pl="2" weight={600}>{label}</Typography>
        </ListItem>
    ) : (
        <ListItem active={active} key={key} onSelect={onSelect} onMouseOver={onMouseOver}>
            <Typography weight={600} mr="2">{label}</Typography>
            (active: {active.toString()}, currentIndex: {currentIndex}, id: {id}, key: {key} index: {index})
        </ListItem>
    );
