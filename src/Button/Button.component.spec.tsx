// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// ANCHOR
import { Star } from '..';
import { colors } from '../theme';
// COMPONENT
import { Button } from './Button.component';
// ENZYME
import { shallow, mount } from 'enzyme';
// STYLED COMPONENTS
/* tslint:disable no-import-side-effect*/
import 'jest-styled-components';
/* tslint:enable */

describe('Component: Button', () => {
    it('should be defined', () => {
        const subject = <Button>Test</Button>;
        const wrapper = mount(subject);
        const component = shallow(subject);

        expect(subject).toBeDefined();
        expect(wrapper).toBeDefined();
        expect(component).toBeDefined();
        const tree = renderer.create(<Button>Submit</Button>).toJSON();

        expect(tree).toMatchSnapshot();
    });

    describe('Variant: Primary', () => {
        it('should render a primary button', () => {
            const subject = <Button variant="primary">Text</Button>;
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should have a disabled state', () => {
            const subject = (
                <Button variant="primary" disabled>
                    Text
                </Button>
            );
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should render properly when flipped', () => {
            const subject = (
                <Button variant="primary" flip>
                    Text
                </Button>
            );
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should have a revealed state when flipped', () => {
            const subject = (
                <Button variant="primary" flip revealed>
                    Text
                </Button>
            );
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should render hovered, active and focused states', () => {
            const subject = (
                <React.Fragment>
                    <Button variant="primary" forceHover>
                        Text
                    </Button>
                    <Button variant="primary" forceActive>
                        Text
                    </Button>
                    <Button variant="primary" forceFocus>
                        Text
                    </Button>
                </React.Fragment>
            );
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should render with a prefix', () => {
            const subject = (
                <Button variant="primary" prefix={<Star />}>
                    Text
                </Button>
            );
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should render with a suffix', () => {
            const subject = (
                <Button variant="primary" suffix={<Star />}>
                    Text
                </Button>
            );
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should accept a color theme', () => {
            const subject = (
                <Button variant="primary" colorTheme={colors.dealEnvy}>
                    Text
                </Button>
            );
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Variant: Outline', () => {
        it('should render an outline button', () => {
            const subject = <Button variant="outline">Text</Button>;
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should render hovered, active and focused states', () => {
            const subject = (
                <React.Fragment>
                    <Button variant="outline" forceHover>
                        Text
                    </Button>
                    <Button variant="outline" forceActive>
                        Text
                    </Button>
                    <Button variant="outline" forceFocus>
                        Text
                    </Button>
                </React.Fragment>
            );
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should be disableable', () => {
            const subject = (
                <Button variant="outline" disabled>
                    Text
                </Button>
            );
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Variant: Minimal', () => {
        it('should render an minimal button', () => {
            const subject = <Button variant="minimal">Text</Button>;
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should render hovered, active and focused states', () => {
            const subject = (
                <React.Fragment>
                    <Button variant="minimal" forceHover>
                        Text
                    </Button>
                    <Button variant="minimal" forceActive>
                        Text
                    </Button>
                    <Button variant="minimal" forceFocus>
                        Text
                    </Button>
                </React.Fragment>
            );
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should be disableable', () => {
            const subject = (
                <Button variant="minimal" disabled>
                    Text
                </Button>
            );
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Reverse', () => {
        describe('Variant: Primary', () => {
            it('should render a primary button', () => {
                const subject = (
                    <Button variant="primary" reverse>
                        Text
                    </Button>
                );
                const tree = renderer.create(subject).toJSON();
                expect(tree).toMatchSnapshot();
            });

            it('should render hovered, active and focused states', () => {
                const subject = (
                    <React.Fragment>
                        <Button variant="primary" reverse forceHover>
                            Text
                        </Button>
                        <Button variant="primary" reverse forceActive>
                            Text
                        </Button>
                        <Button variant="primary" reverse forceFocus>
                            Text
                        </Button>
                    </React.Fragment>
                );
                const tree = renderer.create(subject).toJSON();
                expect(tree).toMatchSnapshot();
            });

            it('should have a disabled state', () => {
                const subject = (
                    <Button variant="primary" reverse disabled>
                        Text
                    </Button>
                );
                const tree = renderer.create(subject).toJSON();
                expect(tree).toMatchSnapshot();
            });
        });

        describe('Variant: Outline', () => {
            it('should render an outline button', () => {
                const subject = (
                    <Button variant="outline" reverse>
                        Text
                    </Button>
                );
                const tree = renderer.create(subject).toJSON();
                expect(tree).toMatchSnapshot();
            });

            it('should render hovered, active and focused states', () => {
                const subject = (
                    <React.Fragment>
                        <Button variant="outline" reverse forceHover>
                            Text
                        </Button>
                        <Button variant="outline" reverse forceActive>
                            Text
                        </Button>
                        <Button variant="outline" reverse forceFocus>
                            Text
                        </Button>
                    </React.Fragment>
                );
                const tree = renderer.create(subject).toJSON();
                expect(tree).toMatchSnapshot();
            });

            it('should be disableable', () => {
                const subject = (
                    <Button variant="outline" reverse disabled>
                        Text
                    </Button>
                );
                const tree = renderer.create(subject).toJSON();
                expect(tree).toMatchSnapshot();
            });
        });

        describe('Variant: Minimal', () => {
            it('should render an minimal button', () => {
                const subject = (
                    <Button variant="minimal" reverse>
                        Text
                    </Button>
                );
                const tree = renderer.create(subject).toJSON();
                expect(tree).toMatchSnapshot();
            });

            it('should render hovered, active and focused states', () => {
                const subject = (
                    <React.Fragment>
                        <Button variant="minimal" reverse forceHover>
                            Text
                        </Button>
                        <Button variant="minimal" reverse forceActive>
                            Text
                        </Button>
                        <Button variant="minimal" reverse forceFocus>
                            Text
                        </Button>
                    </React.Fragment>
                );
                const tree = renderer.create(subject).toJSON();
                expect(tree).toMatchSnapshot();
            });

            it('should be disableable', () => {
                const subject = (
                    <Button variant="minimal" reverse disabled>
                        Text
                    </Button>
                );
                const tree = renderer.create(subject).toJSON();
                expect(tree).toMatchSnapshot();
            });
        });
    });

    describe('Sizes', () => {
        it('should render an lg button', () => {
            const subject = <Button size="lg">Text</Button>;
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should render a md button', () => {
            const subject = <Button size="md">Text</Button>;
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should render an sm button', () => {
            const subject = <Button size="sm">Text</Button>;
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should render an xs button', () => {
            const subject = <Button size="xs">Text</Button>;
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Icon Only', () => {
        it('should render icon-only using a prefix', () => {
            const subject = <Button prefix={<Star />} />;
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should render icon-only using a suffix', () => {
            const subject = <Button suffix={<Star />} />;
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should render a circular icon', () => {
            const subject = <Button prefix={<Star />} circular />;
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
