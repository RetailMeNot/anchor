import { configure } from 'enzyme';
import * as EnzymeAdapter from 'enzyme-adapter-react-16';
/* tslint:disable no-import-side-effect */
import 'jest-styled-components';
/* tslint:enable no-import-side-effect */

configure({ adapter: new EnzymeAdapter() });
