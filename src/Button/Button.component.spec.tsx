// VENDOR
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import { ThemeProvider } from '@xstyled/styled-components';
// ANCHOR
import { Star } from '..';
import { RootTheme } from '../theme';
// COMPONENT
import { Button } from './Button.component';

describe('Component: Button', () => {
    it('should be defined', () => {
        const subject = (
            <ThemeProvider theme={RootTheme}>
                <Button>Test</Button>
            </ThemeProvider>
        );
        const wrapper = mount(subject);
        const component = shallow(subject);

        expect(subject).toBeDefined();
        expect(wrapper).toBeDefined();
        expect(component).toBeDefined();
        const tree = renderer.create(subject).toJSON();

        expect(tree).toMatchSnapshot();
    });

    describe('Variant: Primary', () => {
        it('should render a filled button', () => {
            const subject = (
                <ThemeProvider theme={RootTheme}>
                    <Button variant="filled">Text</Button>
                </ThemeProvider>
            );
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should have a disabled state', () => {
            const subject = (
                <ThemeProvider theme={RootTheme}>
                    <Button variant="filled" disabled>
                        Text
                    </Button>
                </ThemeProvider>
            );
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should render properly when flipped', () => {
            const subject = (
                <ThemeProvider theme={RootTheme}>
                    <Button variant="filled" flip>
                        Text
                    </Button>
                </ThemeProvider>
            );
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should render properly when flipped and circular', () => {
            const subject = (
                <ThemeProvider theme={RootTheme}>
                    <Button variant="filled" flip circular>
                        Text
                    </Button>
                </ThemeProvider>
            );
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should have a revealed state when flipped', () => {
            const subject = (
                <ThemeProvider theme={RootTheme}>
                    <Button variant="filled" flip revealed>
                        Text
                    </Button>
                </ThemeProvider>
            );
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should render hovered, active and focused states', () => {
            const subject = (
                <ThemeProvider theme={RootTheme}>
                    <Button variant="filled" forceHover>
                        Text
                    </Button>
                    <Button variant="filled" forceActive>
                        Text
                    </Button>
                    <Button variant="filled" forceFocus>
                        Text
                    </Button>
                </ThemeProvider>
            );
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should render with a prefix', () => {
            const subject = (
                <ThemeProvider theme={RootTheme}>
                    <Button variant="filled" prefix={<Star />}>
                        Text
                    </Button>
                </ThemeProvider>
            );
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should render with a suffix', () => {
            const subject = (
                <ThemeProvider theme={RootTheme}>
                    <Button variant="filled" suffix={<Star />}>
                        Text
                    </Button>
                </ThemeProvider>
            );
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should accept a color theme', () => {
            const subject = (
                <ThemeProvider theme={RootTheme}>
                    <Button
                        variant="filled"
                        colorTheme={{
                            dark: '#444466',
                            base: '#666688',
                            light: '#8888aa',
                        }}
                    >
                        Text
                    </Button>
                </ThemeProvider>
            );
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Variant: Outline', () => {
        it('should render an outline button', () => {
            const subject = (
                <ThemeProvider theme={RootTheme}>
                    <Button variant="outline">Text</Button>
                </ThemeProvider>
            );
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should render hovered, active and focused states', () => {
            const subject = (
                <ThemeProvider theme={RootTheme}>
                    <Button variant="outline" forceHover>
                        Text
                    </Button>
                    <Button variant="outline" forceActive>
                        Text
                    </Button>
                    <Button variant="outline" forceFocus>
                        Text
                    </Button>
                </ThemeProvider>
            );
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should be disableable', () => {
            const subject = (
                <ThemeProvider theme={RootTheme}>
                    <Button variant="outline" disabled>
                        Text
                    </Button>
                </ThemeProvider>
            );
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Variant: Minimal', () => {
        it('should render an minimal button', () => {
            const subject = (
                <ThemeProvider theme={RootTheme}>
                    <Button variant="minimal">Text</Button>
                </ThemeProvider>
            );
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should render hovered, active and focused states', () => {
            const subject = (
                <ThemeProvider theme={RootTheme}>
                    <Button variant="minimal" forceHover>
                        Text
                    </Button>
                    <Button variant="minimal" forceActive>
                        Text
                    </Button>
                    <Button variant="minimal" forceFocus>
                        Text
                    </Button>
                </ThemeProvider>
            );
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should be disableable', () => {
            const subject = (
                <ThemeProvider theme={RootTheme}>
                    <Button variant="minimal" disabled>
                        Text
                    </Button>
                </ThemeProvider>
            );
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Reverse', () => {
        describe('Variant: Primary', () => {
            it('should render a filled button', () => {
                const subject = (
                    <ThemeProvider theme={RootTheme}>
                        <Button variant="filled" reverse>
                            Text
                        </Button>
                    </ThemeProvider>
                );
                const tree = renderer.create(subject).toJSON();
                expect(tree).toMatchSnapshot();
            });

            it('should render hovered, active and focused states', () => {
                const subject = (
                    <ThemeProvider theme={RootTheme}>
                        <Button variant="filled" reverse forceHover>
                            Text
                        </Button>
                        <Button variant="filled" reverse forceActive>
                            Text
                        </Button>
                        <Button variant="filled" reverse forceFocus>
                            Text
                        </Button>
                    </ThemeProvider>
                );
                const tree = renderer.create(subject).toJSON();
                expect(tree).toMatchSnapshot();
            });

            it('should have a disabled state', () => {
                const subject = (
                    <ThemeProvider theme={RootTheme}>
                        <Button variant="filled" reverse disabled>
                            Text
                        </Button>
                    </ThemeProvider>
                );
                const tree = renderer.create(subject).toJSON();
                expect(tree).toMatchSnapshot();
            });
        });

        describe('Variant: Outline', () => {
            it('should render an outline button', () => {
                const subject = (
                    <ThemeProvider theme={RootTheme}>
                        <Button variant="outline" reverse>
                            Text
                        </Button>
                    </ThemeProvider>
                );
                const tree = renderer.create(subject).toJSON();
                expect(tree).toMatchSnapshot();
            });

            it('should render hovered, active and focused states', () => {
                const subject = (
                    <ThemeProvider theme={RootTheme}>
                        <Button variant="outline" reverse forceHover>
                            Text
                        </Button>
                        <Button variant="outline" reverse forceActive>
                            Text
                        </Button>
                        <Button variant="outline" reverse forceFocus>
                            Text
                        </Button>
                    </ThemeProvider>
                );
                const tree = renderer.create(subject).toJSON();
                expect(tree).toMatchSnapshot();
            });

            it('should be disableable', () => {
                const subject = (
                    <ThemeProvider theme={RootTheme}>
                        <Button variant="outline" reverse disabled>
                            Text
                        </Button>
                    </ThemeProvider>
                );
                const tree = renderer.create(subject).toJSON();
                expect(tree).toMatchSnapshot();
            });
        });

        describe('Variant: Minimal', () => {
            it('should render an minimal button', () => {
                const subject = (
                    <ThemeProvider theme={RootTheme}>
                        <Button variant="minimal" reverse>
                            Text
                        </Button>
                    </ThemeProvider>
                );
                const tree = renderer.create(subject).toJSON();
                expect(tree).toMatchSnapshot();
            });

            it('should render hovered, active and focused states', () => {
                const subject = (
                    <ThemeProvider theme={RootTheme}>
                        <Button variant="minimal" reverse forceHover>
                            Text
                        </Button>
                        <Button variant="minimal" reverse forceActive>
                            Text
                        </Button>
                        <Button variant="minimal" reverse forceFocus>
                            Text
                        </Button>
                    </ThemeProvider>
                );
                const tree = renderer.create(subject).toJSON();
                expect(tree).toMatchSnapshot();
            });

            it('should be disableable', () => {
                const subject = (
                    <ThemeProvider theme={RootTheme}>
                        <Button variant="minimal" reverse disabled>
                            Text
                        </Button>
                    </ThemeProvider>
                );
                const tree = renderer.create(subject).toJSON();
                expect(tree).toMatchSnapshot();
            });
        });
    });

    describe('Sizes', () => {
        it('should render an lg button', () => {
            const subject = (
                <ThemeProvider theme={RootTheme}>
                    <Button size="lg">Text</Button>
                </ThemeProvider>
            );
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should render a md button', () => {
            const subject = (
                <ThemeProvider theme={RootTheme}>
                    <Button size="md">Text</Button>
                </ThemeProvider>
            );
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should render an sm button', () => {
            const subject = (
                <ThemeProvider theme={RootTheme}>
                    <Button size="sm">Text</Button>
                </ThemeProvider>
            );
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should render an xs button', () => {
            const subject = (
                <ThemeProvider theme={RootTheme}>
                    <Button size="xs">Text</Button>
                </ThemeProvider>
            );
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Icon Only', () => {
        it('should render icon-only using a prefix', () => {
            const subject = (
                <ThemeProvider theme={RootTheme}>
                    <Button prefix={<Star />} />
                </ThemeProvider>
            );
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should render icon-only using a suffix', () => {
            const subject = (
                <ThemeProvider theme={RootTheme}>
                    <Button suffix={<Star />} />
                </ThemeProvider>
            );
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should render a circular icon', () => {
            const subject = (
                <ThemeProvider theme={RootTheme}>
                    <Button prefix={<Star />} circular />
                </ThemeProvider>
            );
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Theme Provided', () => {
        it('should use custom size variants from theme', () => {
            const CustomTheme = {
                ...RootTheme,
                buttons: {
                    ...RootTheme.buttons,
                    sizes: {
                        humongous: {
                            minWidth: 30,
                            height: 8,
                            affixSpacing: 3,
                            padding: 4,
                            contentPadding: 5,
                            fontSize: 1.5,
                        },
                    },
                },
            };

            const subject = (
                <ThemeProvider theme={CustomTheme}>
                    <Button size="humongous" />
                </ThemeProvider>
            );
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
