// REACT
import * as React from 'react';
// VENDOR
import styled from '@xstyled/styled-components';
// COMPONENTS & ANCHOR
import { AddLocation } from '../AddLocation';
import { getLink, NEXT, PREVIOUS, sections, SiteLink } from '../../Utils';
import { LinkProperties } from '../../Utils/sections';

interface StyledNextPreviousProps {
    justifyContent: string;
}

const StyledNextPrevious = styled('nav')<StyledNextPreviousProps>`
    display: flex;
    flext-flow: row nowrap;
    justify-content: ${({ justifyContent }) => justifyContent};
    padding: 1rem;
    margin-top: 5rem;
    background-color: #fafafa;
    border-radius: 4px;
`;

interface Location {
    [key: string]: string;
}

interface NextPreviousProps {
    location: Location;
    section: string;
}

interface State {
    [key: string]: any;
}

class NextPrevious extends React.PureComponent<NextPreviousProps> {
    state = {
        next: undefined,
        previous: undefined,
    };

    constructor(props: NextPreviousProps) {
        super(props);
        // Received from the AddLocation HOC
        const { location } = props;
        // Finds the section that the current page is in
        const [currentSection] = sections.filter(section => {
            return location.pathname.includes(section.pattern);
        });

        if (currentSection) {
            const { links }: LinkProperties = currentSection;
            // Gets the index of the this page's link entry in the section
            const indexOfLink = links.reduce(
                (currentIndex: number, link: LinkProperties, index: number) => {
                    return link.path === location.pathname
                        ? index
                        : currentIndex;
                },
                0
            );
            // Uses getLink helper method to find the previous/next link entries relative to where
            // the user is.
            const previous = getLink(links, indexOfLink, PREVIOUS);
            const next = getLink(links, indexOfLink, NEXT);

            this.state = {
                previous,
                next,
            };
        }
    }

    render() {
        const { previous, next }: State = this.state;
        const justifyContent =
            next && previous === undefined ? 'flex-end' : 'space-between';

        return previous || next ? (
            <StyledNextPrevious justifyContent={justifyContent}>
                {previous !== undefined && (
                    <span>
                        <SiteLink to={previous.path}>
                            &laquo; {previous.title}
                        </SiteLink>
                    </span>
                )}

                {next !== undefined && (
                    <span>
                        <SiteLink to={next.path}>{next.title} &raquo;</SiteLink>
                    </span>
                )}
            </StyledNextPrevious>
        ) : null;
    }
}

export const EnhancedNextPrevious = AddLocation(NextPrevious);
