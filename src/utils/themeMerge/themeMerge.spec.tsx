// VENDOR
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { ThemeProvider } from '@xstyled/styled-components';
// THEME
import { themeMerge } from './themeMerge';
import { RootTheme } from '../../theme';
import { Button } from '../../Button';
import { Tabs } from '../../Tabs';

const { Pane } = Tabs;

// TEST SETUP
const TestTheme = {
    fonts: {
        base: 'Comic Sans MS',
    },
    colors: {
        primary: {
            base: '#ff0000',
        },
    },
    radii: {
        circular: undefined,
    },
    typography: {
        as: {
            a: undefined,
        },
    },
    exampleComponent: {
        xs: '1rem',
        md: '2rem',
    },
};

const subject = themeMerge(TestTheme, RootTheme);

describe('theme: themeMerge()', () => {
    it('should default to RootTheme if no baseTheme is passed', () => {
        const testingDefault = themeMerge(TestTheme);

        for (const key in RootTheme) {
            if (RootTheme[key]) {
                expect(testingDefault.hasOwnProperty(key)).toBe(true);
            }
        }
    });

    it('should have all root keys from baseTheme', () => {
        for (const key in RootTheme) {
            if (RootTheme[key]) {
                expect(subject.hasOwnProperty(key)).toBe(true);
            }
        }
    });

    it('should remove properties from the object if the value is set to undefined', () => {
        expect(subject.typography['as'].a).toBeUndefined();
        expect(subject.radii['circular']).toBeUndefined();
    });

    it('should have newly added root keys and values', () => {
        expect(subject.exampleComponent.xs).toBe('1rem');
        expect(subject.exampleComponent.md).toBe('2rem');
    });

    it('should not mutate RootTheme', () => {
        subject.skeleton['colorStart'] = '#00ff00';
        expect(RootTheme.skeleton['colorStart']).toBe('#E7E7E7');
        expect(subject.skeleton['colorStart']).toBe('#00ff00');
    });

    it('should overwrite RootTheme values with new values', () => {
        expect(subject.fonts.base).toBe('Comic Sans MS');
        // Oddly can't read 'primary' with dot notation. Verified that the value is there and usable.
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

    it('should not affect values set with the css() function', () => {
        const Test = () => (
            <Tabs variant="regular">
                <Pane>Test 1</Pane>
                <Pane>Test 2</Pane>
            </Tabs>
        );

        const tree = renderer.create(<Test />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
