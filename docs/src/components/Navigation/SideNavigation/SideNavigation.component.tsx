// REACT
import * as React from 'react';
// VENDOR
import { Link } from 'gatsby';
import styled from '@xstyled/styled-components';
// COMPONENTS
import { Collapse, CollapseGroup } from '@retailmenot/anchor';
// TODO: Change the config to allow ts extensions. This works, but tsconfig is having a snit.
import { sections } from './sections';

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

interface SectionProperties {
    title: string;
    pattern: string;
    links: object[];
}

interface LinkProperties {
    title: string;
    path: string;
}

export class SideNavigation extends React.PureComponent {
    mainOpenIndex: number;

    // I'm using PureComponent in order to use a constructor since ComponentWillMount is being deprecated.
    // I need to get the index of the current section in order to pass that value to CollapseGroup.
    // This is what makes the correct Collapse component open when navigating the site.
    constructor(props: object) {
        super(props);
    }

    componentDidMount(): void {
        sections.forEach((section: SectionProperties, i: number) => {
            const { pattern } = section;
            const { pathname } = window.location;
            // Compares the current url with the path associated to a section and gets its index if it matches.
            if (pattern.length > 0 && pathname.includes(pattern)) {
                this.mainOpenIndex = i;
            }
        });
    }

    render() {
        return (
            <StyledCollapseGroup
                theme="compact"
                openIndex={this.mainOpenIndex}
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
            </StyledCollapseGroup>
        );
    }
}
