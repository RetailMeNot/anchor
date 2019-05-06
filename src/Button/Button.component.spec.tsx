// REACT
import * as React from 'react';
import * as renderer from 'react-test-renderer';
// ANCHOR
import { Star } from '..';
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

        it('should render with an icon', () => {
            const subject = (
                <Button variant="primary" icon={Star}>
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
        it('should render an xlarge button', () => {
            const subject = <Button size="xlarge">Text</Button>;
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should render a large button', () => {
            const subject = <Button size="large">Text</Button>;
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should render a small button', () => {
            const subject = <Button size="small">Text</Button>;
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should render an xsmall button', () => {
            const subject = <Button size="xsmall">Text</Button>;
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });

    describe('Icon Only', () => {
        it('should render an icon only', () => {
            const subject = <Button icon={Star} />;
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('should render a circular icon', () => {
            const subject = <Button icon={Star} circular />;
            const tree = renderer.create(subject).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
