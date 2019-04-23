// REACT
import * as renderer from 'react-test-renderer';
// COMPONENT
import * as Icon from './';

describe('Component: Icon', () => {
    Object.keys(Icon).forEach((key: string) => {
        it(`should render out a ${key}`, () => {
            const subject = Icon[key]({});
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
