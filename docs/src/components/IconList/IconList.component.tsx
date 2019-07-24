/* Helper components for the icon.mdx documentation */

import * as React from 'react';
import styled from 'styled-components';
import { Typography } from '@retailmenot/anchor';
import * as Icons from './Icons';

const iconKeys = Object.keys(Icons);

const StyledIconList = styled.section`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    height:100%;
    padding-top:1rem;

    .cell {
        width: 12.5%;
        height:4rem;
        text-align:center;
        padding-bottom:2rem;
    }
`;

const IconTitle = styled(Typography)`
    padding-bottom:0.5rem !important;
    margin:0;
`;

// A visual listing of every icon along with its name.
export const IconList = () => (
    <StyledIconList>
        {iconKeys.map( key => (
            <div className="cell" key={`cell-${key}`}>
                <IconTitle tag="h6">{key}</IconTitle>
                {React.createElement(Icons[key], {})}
            </div>
        ))}
    </StyledIconList>
);

// The number of icons currently available.
export const IconCount = () => <span>{iconKeys.length}</span>;
