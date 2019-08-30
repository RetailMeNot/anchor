// REACT
import * as React from 'react';
// VENDOR
import styled from '@xstyled/styled-components';
import { Typography } from '@retailmenot/anchor';
// COMPONENTS
import { sections, SiteLink } from '../Utils';

const StyledArticle = styled('article')`
    padding: 1rem;
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
    // TODO: This is fragile. Need to rethink how sections is structured.
    const components = sections[1].links;

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
                        !component.hide && component.description && (
                            <StyledArticle key={component.title.toLowerCase()}>
                                <Typography tag="h3" weight="600">
                                    {component.title}
                                </Typography>

                                <Typography tag="p">
                                    {component.description}
                                </Typography>

                                <SiteLink to={component.path} />
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
