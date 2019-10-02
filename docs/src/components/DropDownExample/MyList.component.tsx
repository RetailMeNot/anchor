/**
 * This component is pulled into the CodePreview component and added to its scope. I went this route
 * in order to pull together all the pices in the live code editor rather than just have a bunch
 * of code samples.
 */

import * as React from 'react';
import { List, ListDivider, ListItem, ListTitle } from '@retailmenot/anchor';

export const MyList = () => (
    <List>
        <ListTitle>I Am a Title</ListTitle>
        <ListItem>I Am Item #1</ListItem>
        <ListItem>I Am Item #2</ListItem>
        <ListDivider />
        <ListItem>I Am Item #3</ListItem>
    </List>
);
