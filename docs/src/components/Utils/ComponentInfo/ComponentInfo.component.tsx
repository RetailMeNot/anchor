/*
    This component is designed to read from the `sections` object that is also part of `Utils`.  It
    accepts the name of an Anchor component, then uses that to pull the description property of that
    component and render it to the page.

    It has two modes, `all` and `description`. When set to `all`, the entire list of components are
    rendered including links to their full documentation entries on this site, and their code on
    GitHub.

    EX:

    <ComponentInfo title="Avatar" />
*/

// REACT
import * as React from 'react';
// VENDOR
import styled from '@xstyled/styled-components';
import { th } from '@xstyled/system';
// ANCHOR & COMPONENTS
import { Typography } from '@retailmenot/anchor';
import { COMPONENTS, sections, SiteLink } from '../index';

const StyledArticle = styled('article')`
    padding: 1rem;
`;

const TitleLink = styled('a')`
    font-size: 1.25rem;
    text-decoration: none;
    line-height: 1.5rem;
    font-weight: 600;
    color: inherit;
    font-family: ${th('typography.fontFamily')};

    &:hover {
        text-decoration: underline;
    }
`;

const MODES = {
    description: 'description',
    all: 'all',
};

// Template literals are used in the `sections` object to allow wrapping to another line. This
// regex finds those extra spaces allowing them to be replaced with a single space.
const tooManySpaces = new RegExp(/\s+/g);

type ModeTypes = keyof typeof MODES;

interface ComponentInfoProps {
    title: string;
    mode?: ModeTypes;
}

export const ComponentInfo = ({
    title,
    mode = 'description',
}: ComponentInfoProps): React.ReactElement<any> => {
    const [{ links: components }] = sections.filter(
        section => section.title === COMPONENTS
    );

    if (title && mode === MODES.description) {
        const [component] = components.filter(obj => obj.title === title);
        const description =
            component && component.description
                ? component.description
                : 'No Description';

        return (
            <Typography tag="p">
                {description.replace(tooManySpaces, ' ')}
            </Typography>
        );
    }

    if (mode === MODES.all) {
        return (
            <>
                {components.map(
                    component =>
                        !component.hide &&
                        component.description && (
                            <StyledArticle key={component.title.toLowerCase()}>
                                <TitleLink
                                    href={`//github.com/RetailMeNot/anchor/tree/master/src/${component.title}`}
                                    target="_blank"
                                >
                                    {component.title}
                                </TitleLink>

                                <Typography tag="p">
                                    {component.description.replace(
                                        tooManySpaces,
                                        ' '
                                    )}
                                </Typography>

                                {component.path && (
                                    <SiteLink to={component.path} />
                                )}
                            </StyledArticle>
                        )
                )}
            </>
        );
    }

    return <Typography tag="span">title is a required field.</Typography>;
};
