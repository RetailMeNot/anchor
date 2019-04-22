// REACT
import * as React from 'react';
// SUBJECT
import { filterChildrenByType } from './filterChildrenByType';
// VENDOR
import { mount } from 'enzyme';
// COMPONENTS
import { Badge, Button } from '../../index';

describe('Util: filterChildrenByType', () => {
    it('should return the type of any component passed to it.', () => {
        const Subject = ({ children }: any) => (
            <div>{filterChildrenByType(children, ['Badge'])}</div>
        );
        const subject = (
            <Subject>
                <Badge />
                <Button>Test</Button>
            </Subject>
        );
        expect(mount(subject).children().length).toEqual(1);
    });
});
