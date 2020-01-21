import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { ThemeProvider } from '@xstyled/styled-components';
import { RootTheme, themeMerge } from '../../theme';
import { Button } from '../../Button';

// TEST SETUP
const data = {
    fonts: {
        base: 'Comic Sans MS',
    },
    colors: {
        primary: {
            base: '#ff0000',
        },
    },
    exampleComponent: {
        xs: '1rem',
        md: '2rem',
    },
};

const subject = themeMerge(data, RootTheme);

describe('theme: themeMerge()', () => {
    it('should have all keys from RootTheme', () => {
        for (const key in RootTheme) {
            if (RootTheme[key]) {
                expect(subject.hasOwnProperty(key)).toBe(true);
            }
        }
    });

    it('should have newly added root keys and values', () => {
        expect(subject.exampleComponent.xs).toBe('1rem');
        expect(subject.exampleComponent.md).toBe('2rem');
    });

    it('should overwrite RootTheme values with new values', () => {
        expect(subject.fonts.base).toBe('Comic Sans MS');
        // Oddly can't read 'primary' with dot notation. Verified that the value is there and usable.
        // tslint:disable-next-line: no-string-literal
        expect(subject.colors['primary'].base).toBe('#ff0000');
    });

    it('should keep sibling keys', () => {
        expect(subject.fonts.mono).toBe(
            `'SFMono-Regular', Consolas, Liberation Mono, Menlo, Courier, monospace`
        );
    });

    it('should not alter RootTheme values', () => {
        expect(RootTheme.fonts.base).toBe(
            `Avenir Next, Segoe UI, Helvetica Neue, Helvetica, Roboto, sans-serif`
        );
    });

    it("should not affect Button's functions() established in the theme", () => {
        const TestButton = () => <Button variant="filled">Hello</Button>;
        const Test = () => (
            <ThemeProvider theme={subject}>
                <TestButton />
            </ThemeProvider>
        );

        const tree = renderer.create(<Test />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
