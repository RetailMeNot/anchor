// REACT
import * as React from 'react';
// VENDOR
import { Link } from 'gatsby';
import styled from '@xstyled/styled-components';
// COMPONENTS
import { Collapse, CollapseGroup } from '@retailmenot/anchor';
// TODO: Change the config to allow ts extensions. This works, but tsconfig is having a snit.
import { sections } from './sections';
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

interface SideNavigationProps {
    location?: object;
}

interface SectionProperties {
    title: string;
    pattern: string;
    links: object[];
}

interface LinkProperties {
    title: string;
    path: string;
}

class SideNavigation extends React.PureComponent<SideNavigationProps> {
    state = {
        mainOpenIndex: false,
    };

    componentWillMount() {
        let mainOpenIndex = 0;

        sections.forEach((section: SectionProperties, i: number) => {
            const { pattern } = section;
            const { pathname } = this.props.location;
            // Compares the current url with the path associated to a section and gets its index if it matches.
            if (pattern.length && pathname.includes(pattern)) {
                mainOpenIndex = i;
            }
        });

        this.setState({mainOpenIndex});
    }

    render() {
        const { mainOpenIndex } = this.state;

        return ( mainOpenIndex !== false && (
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
                                (link: LinkProperties, j: number) => (
                                    <li key={`link-key-${j}`}>
                                        <Link
                                            to={link.path}
                                            activeClassName="active"
                                        >
                                            {link.title}
                                        </Link>
                                    </li>
                                )
                            )}
                        </ul>
                    </Collapse>
                ))}
            </StyledCollapseGroup>)
        );
    }
}

// HOC adds the location prop to SideNavigation
export const EnhancedSideNavigation = AddLocation(SideNavigation);
