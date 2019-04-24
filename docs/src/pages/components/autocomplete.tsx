// REACT
import * as React from 'react';
// VENDOR
import { AutoComplete, Search } from '@retailmenot/anchor';
// COMPONENTS

// THEME
import { colors } from '../../../../src/theme';

export default () => (
    <div>
        <h1>Autocomplete</h1>
        <AutoComplete
            allowClear={true}
            placeholder="Search here..."
            prefix={<Search color={colors.ash.base} />}
            dataSource={[
                {
                    label: 'Title of a section 1',
                    id: 1,
                    someBoolean: false,
                    listItemType: 'title',
                },
                { label: 'Item 1', id: 2, someBoolean: true },
                { label: 'Item 3', id: 3, someBoolean: true },
                { label: 'Item 4', id: 4, someBoolean: true },
                { label: 'Item 5', id: 5, someBoolean: true },
                {
                    label: 'Title of a section 2',
                    id: 6,
                    someBoolean: true,
                    listItemType: 'title',
                },
                { label: 'Item 7', id: 7, someBoolean: true },
                { label: 'Item 8', id: 8, someBoolean: true },
                {
                    label: 'Title of a section 3',
                    id: 9,
                    someBoolean: true,
                    listItemType: 'title',
                },
                {
                    listItemType: 'divider',
                },
                { label: 'Item 11', id: 11, someBoolean: true },
            ]}
        />
    </div>
);
