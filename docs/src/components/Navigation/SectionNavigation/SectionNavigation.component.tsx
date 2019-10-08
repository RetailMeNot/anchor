// REACT
import * as React from 'react';
// VENDOR
import { Link } from 'gatsby';
import styled from '@xstyled/styled-components';
// COMPONENTS
import { Collapse, CollapseGroup } from '@retailmenot/anchor';
import {
    LinkProperties,
    SectionProperties,
    sections,
} from '../../Utils/sections';
import { AddLocation } from '../AddLocation';

const StyledCollapseGroup = styled(CollapseGroup)`
    li a {
        text-decoration: none;

        &.active {
            background-color: accent.base;
            color: accent.light;
        }
    }
`;

const LinkTitle = styled('div')`
    font-weight: bold;
    padding: 1rem 2.75rem 0.5rem;
`;
interface Location {
    [key: string]: string;
}

interface SectionNavigationProps {
    location?: Location;
}

class SectionNavigation extends React.PureComponent<SectionNavigationProps> {
    state = {
        mainOpenIndex: -1,
    };

    constructor(props: SectionNavigationProps) {
        super(props);
        // Received from the AddLocation HOC
        const {
            location: { pathname },
        } = props;

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

        this.state = { mainOpenIndex };
    }

    render() {
        const { mainOpenIndex } = this.state;

        return (
            mainOpenIndex >= 0 && (
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
                                        return !link.hide ? (
                                            <li key={`link-key-${j}`}>
                                                {link.type === 'title' ? (
                                                    <LinkTitle>
                                                        {link.title}
                                                    </LinkTitle>
                                                ) : (
                                                    <Link
                                                        to={link.path}
                                                        activeClassName="active"
                                                    >
                                                        {link.title}
                                                    </Link>
                                                )}
                                            </li>
                                        ) : null;
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

// HOC adds the location prop to SectionNavigation
export const EnhancedSectionNavigation = AddLocation(SectionNavigation);
