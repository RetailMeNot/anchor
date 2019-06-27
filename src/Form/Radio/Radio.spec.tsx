// VENDOR
import * as React from 'react';
import * as renderer from 'react-test-renderer';
/* tslint:disable no-import-side-effect*/
import 'jest-styled-components';
/* tslint:enable */

// COMPONENT
import { Radio } from './Radio.component';

describe('Component: Radio', () => {
    it('should be defined', () => {
        const subject = <Radio />;

        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
