/**
 * This component is used at the top of dropdown.mdx to immediately show an example of what
 * a card looks like. This same example is given again at the bottom of the page but with the
 * live code editor.
 */

import * as React from 'react';
import { DropDown } from '@retailmenot/anchor';
import { MyList } from './MyList.component';
import { MouseOverMe } from './MouseOverMe.component';

export const DropDownExample = () => (
    <div>
        <DropDown
            arrowIndent="0.75rem"
            arrowSize="0.625rem"
            background="white"
            border="base"
            borderRadius="base"
            shadow="0 0 0.5rem 0 rgba(0,0,0,0.2)"
            overlay={<MyList />}
            position="bottom"
            showArrow={true}
            spacing="0.75rem"
            trigger="hover"
        >
            <MouseOverMe color="white">Seriously, Mouse Over Me</MouseOverMe>
        </DropDown>
    </div>
);
