import * as React from 'react';
// SUBJECT
import { filterChildrenByType } from './filterChildrenByType';
// COMPONENTS
import { Badge, Button, Avatar } from '../../src';
describe('Util: filterChildrenByType', () => {
    it('should return the type of any component passed to it.', () => {
        const childrenList = filterChildrenByType(
            [<Badge key={1} />, <Button key={2}>1</Button>, <Avatar key={3} />],
            ['Badge']
        );
        expect(childrenList.length).toBe(1);
    });
});
