// REACT
import * as React from 'react';
// VENDOR
import { Link } from 'gatsby';
import styled from '@xstyled/styled-components';
// COMPONENTS
import { Collapse, CollapseGroup } from '@retailmenot/anchor';
// TODO: Change the config to allow ts extensions. This works, but tsconfig is having a snit.
import {
    LinkProperties,
    SectionProperties,
    sections,
} from '../../Utils';
import { AddLocation } from '../AddLocation';

const StyledCollapseGroup = styled(CollapseGroup)`
    li a {
        text-decoration: none;

        &.active {
            /* TODO: When we have a dedicated theme provider these colors should be moved into it. */
            background-color: #e3eef6;
            color: #007ecd;
        }
    }
`;

const LinkTitle = styled('div')`
    font-weight:bold;
    padding: 1rem  2.75rem 0.5rem;
`;

interface SideNavigationProps {
    location?: object;
}

class SideNavigation extends React.PureComponent<SideNavigationProps> {
    state = {
        mainOpenIndex: false,
    };

    componentDidMount() {
        const { pathname } = this.props.location;

        const mainOpenIndex = sections.reduce(
            (openIndex: number, section: SectionProperties, index: number) => {
                const { pattern } = section;

                // Compares the current url with the path associated to a section and gets its index if it matches.
                return pattern.length && pathname.includes(pattern)
                    ? index
                    : openIndex;
            },
            0
        );

        this.setState({ mainOpenIndex });
    }

    render() {
        const { mainOpenIndex } = this.state;

        return (
            mainOpenIndex !== false && (
                <StyledCollapseGroup
                    variant="compact"
                    openIndex={mainOpenIndex}
                    accordion
                >
                    {sections.map((section: SectionProperties, i: number) => (
                        <Collapse
                            openedText={section.title}
                            key={`collapse-key-${i}`}
                        >
                            <ul>
                                {section.links.map(
                                    (link: LinkProperties, j: number) => {
                                        return(!link.hide ?
                                            <li key={`link-key-${j}`}>
                                                {
                                                    link.type === 'title' ?
                                                        <LinkTitle>{link.title}</LinkTitle>
                                                    : (
                                                        <Link
                                                            to={link.path}
                                                            activeClassName="active"
                                                        >
                                                            {link.title}
                                                        </Link>
                                                    )
                                                }
                                            </li>
                                        : null
                                        );
                                    }
                                )}
                            </ul>
                        </Collapse>
                    ))}
                </StyledCollapseGroup>
            )
        );
    }
}

// HOC adds the location prop to SideNavigation
export const EnhancedSideNavigation = AddLocation(SideNavigation);
