// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';
// VENDOR
import styled from 'styled-components';
// COMPONENTS
import {
    Collapse,
    DEFAULT_OPEN_TEXT,
    DEFAULT_CLOSE_TEXT,
} from './Collapse.component';
import { CollapseGroup } from './CollapseGroup/CollapseGroup.component';
import * as Icon from '../Icon';
import { colors } from '../theme';
import { Typography } from '../Typography/Typography.component';
// README
import * as README from './README.md';

const TEXT = 'text';

const StyledComfortableStory = styled.div`
    padding: 2rem 5rem;
`;

const TextContent = () => (
    <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eros ante,
        lacinia at imperdiet consectetur, ultrices in elit. Vivamus vehicula
        nisl id congue pulvinar.
    </div>
);

const ListContent = () => (
    <ul>
        <li>
            <a>List Item 1</a>
        </li>
        <li>
            <a>List Item 2</a>
        </li>
        <li>
            <a>List Item 3</a>
        </li>
        <li>
            <a>List Item 4</a>
        </li>
    </ul>
);

storiesOf('Components/Collapse', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('Default', () => {
        const content = select('Example Content', [TEXT, 'list'], TEXT);
        const iconOpenPick = select('iconOpen', Object.keys(Icon), 'ChevronUp');
        const iconClosePick = select(
            'iconClose',
            Object.keys(Icon),
            'ChevronDown'
        );

        return (
            <StyledComfortableStory>
                <Collapse
                    isOpen={boolean('isOpen', false)}
                    openText={text('openText', DEFAULT_OPEN_TEXT)}
                    closeText={text('closeText', DEFAULT_CLOSE_TEXT)}
                    theme={select(
                        'theme',
                        ['compact', 'comfortable', 'none'],
                        'comfortable'
                    )}
                    hasBottomBorder={boolean('hasBottomBorder', true)}
                    openIcon={React.createElement(Icon[iconOpenPick], {
                        color: colors.savvyCyan.base,
                    })}
                    closeIcon={React.createElement(Icon[iconClosePick], {
                        color: colors.savvyCyan.base,
                    })}
                >
                    {content === TEXT ? <TextContent /> : <ListContent />}
                </Collapse>
            </StyledComfortableStory>
        );
    })
    .add('CollapseGroup', () => {
        const content = select('Example Content', [TEXT, 'list'], TEXT);
        const iconOpenPick = select('iconOpen', Object.keys(Icon), 'ChevronUp');
        const iconClosePick = select(
            'iconClose',
            Object.keys(Icon),
            'ChevronDown'
        );

        return (
            <section>
                <Typography tag="h2">CollapseGroup Example</Typography>
                <Typography tag="p">
                    Adjusting Knobs for CollapseGroup will apply settings to
                    Collapse child components.
                </Typography>
                <CollapseGroup
                    accordion={boolean('accordion', false)}
                    openIndex={0}
                    theme={select(
                        'theme',
                        ['compact', 'comfortable', 'none'],
                        'comfortable'
                    )}
                    openIcon={React.createElement(Icon[iconOpenPick], {
                        color: colors.savvyCyan.base,
                    })}
                    closeIcon={React.createElement(Icon[iconClosePick], {
                        color: colors.savvyCyan.base,
                    })}
                >
                    <Collapse>
                        {content === TEXT ? <TextContent /> : <ListContent />}
                    </Collapse>
                    <Collapse>
                        {content === TEXT ? <TextContent /> : <ListContent />}
                    </Collapse>
                    <Collapse>
                        {content === TEXT ? <TextContent /> : <ListContent />}
                    </Collapse>
                </CollapseGroup>
            </section>
        );
    });
