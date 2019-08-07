/**
 * This component is used at the top of dropdown.mdx to immediately show an example of what
 * a card looks like. This same example is given again at the bottom of the page but with the
 * live code editor.
 */

import * as React from 'react';
import { colors, DropDown } from '@retailmenot/anchor';
import { MyList } from './MyList.component';
import { MouseOverMe } from './MouseOverMe.component';

export const DropDownExample = () => (
    <DropDown overlay={<MyList />} position={{ left: 0 }}>
        <MouseOverMe color={colors.white.base}>
            Seriously, Mouse Over Me
        </MouseOverMe>
    </DropDown>
);
