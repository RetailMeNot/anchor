// VENDOR
import * as React from 'react';
import * as renderer from 'react-test-renderer';
/* tslint:disable no-import-side-effect*/
import 'jest-styled-components';
/* tslint:enable */

// COMPONENT
import { ControlLabel } from './ControlLabel.component';

describe('Component: ControlLabel', () => {
    it('should be defined', () => {
        const subject = <ControlLabel value="value" label="label" control={<div/>}/>;

        const tree = renderer.create(subject).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
