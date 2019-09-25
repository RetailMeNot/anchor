// REACT
import * as React from 'react';
// VENDOR
import styled from '@xstyled/styled-components';
import { th } from '@xstyled/system';
import { Typography } from '@retailmenot/anchor';
// COMPONENTS
import { COMPONENTS, sections, SiteLink } from '../Utils';

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

type ModeTypes = 'description' | 'all';

interface ComponentInfoProps {
    title: string;
    mode?: ModeTypes;
}

export const ComponentInfo = ({
    title,
    mode,
}: ComponentInfoProps): React.ReactElement<any> => {
    const [{ links: components }] = sections.filter(
        section => section.title === COMPONENTS
    );

    if (title && mode === MODES.description) {
        const component = components.filter(obj => obj.title === title);
        const description =
            component && component[0].description
                ? component[0].description
                : 'No Description';

        return <Typography tag="p">{description}</Typography>;
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
                                    {component.description}
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

    return (
        <Typography tag="span">
            No mode defined. Possible values are:{' '}
            <pre>{Object.values(MODES).join(', ')}</pre>.
        </Typography>
    );
};
