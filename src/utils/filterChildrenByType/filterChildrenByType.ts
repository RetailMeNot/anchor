// REACT
import * as React from 'react';
// UTILS
import { get } from '../get/get';

export const filterChildrenByType = (
    children: React.ReactChild[],
    type: string | string[],
    warn?: boolean
): React.ReactChild[] => {
    const goodChildren: React.ReactChild[] = [];
    const acceptedTypes: string[] = Array.isArray(type) ? [...type] : [type];

    React.Children.forEach(children, (child: any) => {
        const childType: string = get(child, 'type.displayName', 'unknown');

        if (acceptedTypes.includes(childType)) {
            goodChildren.push(child);
        } else {
            if (warn) {
                /* eslint-disable no-console, max-len  */
                console.warn(
                    `Children of type ${childType} not allowed in this component. Accepted types are ${acceptedTypes.join(
                        ', '
                    )}`
                );
            }
        }
    });

    return goodChildren;
};
