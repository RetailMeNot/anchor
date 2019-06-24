// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';
// VENDOR
import styled, { ThemeProvider } from '@xstyled/styled-components';
// COMPONENTS
import {
    Collapse,
    DEFAULT_OPENED_TEXT,
    DEFAULT_CLOSED_TEXT,
} from './Collapse.component';
import { CollapseGroup } from './CollapseGroup/CollapseGroup.component';
import * as Icon from '../Icon';
import { RootTheme, colors } from '../theme';
import { Typography } from '../Typography/Typography.component';
// README
import * as README from './README.md';

const TEXT = 'text';

const StyledComfortableStory = styled('div')`
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
        const iconOpenedPick = select(
            'iconOpened',
            Object.keys(Icon),
            'ChevronUp'
        );
        const iconClosedPick = select(
            'iconClosed',
            Object.keys(Icon),
            'ChevronDown'
        );

        return (
            <ThemeProvider theme={RootTheme}>
                <StyledComfortableStory>
                    <Collapse
                        variant={select<'compact' | 'comfortable' | 'none'>(
                            'variant',
                            ['compact', 'comfortable', 'none'],
                            'comfortable'
                        )}
                        isOpen={boolean('isOpen', false)}
                        openedText={text('openedText', DEFAULT_OPENED_TEXT)}
                        closedText={text('closedText', DEFAULT_CLOSED_TEXT)}
                        hasBottomBorder={boolean('hasBottomBorder', true)}
                        openedIcon={React.createElement(Icon[iconOpenedPick], {
                            color: colors.savvyCyan.base,
                        })}
                        closedIcon={React.createElement(Icon[iconClosedPick], {
                            color: colors.savvyCyan.base,
                        })}
                    >
                        {content === TEXT ? <TextContent /> : <ListContent />}
                    </Collapse>
                </StyledComfortableStory>
            </ThemeProvider>
        );
    })
    .add('CollapseGroup', () => {
        const content = select('Example Content', [TEXT, 'list'], TEXT);
        const iconOpenedPick = select(
            'iconOpened',
            Object.keys(Icon),
            'ChevronUp'
        );
        const iconClosedPick = select(
            'iconClosed',
            Object.keys(Icon),
            'ChevronDown'
        );

        const Content = content === TEXT ? TextContent : ListContent;

        return (
<<<<<<< HEAD
            <ThemeProvider theme={RootTheme}>
                <section>
                    <Typography tag="h2">CollapseGroup Example</Typography>
                    <Typography tag="p">
                        Adjusting Knobs for CollapseGroup will apply settings to
                        Collapse child components.
                    </Typography>
                    <CollapseGroup
                        variant={select(
                            'variant',
                            ['compact', 'comfortable', 'none'],
                            'comfortable'
                        )}
                        accordion={boolean('accordion', false)}
                        openIndex={0}
                        openedIcon={React.createElement(Icon[iconOpenedPick], {
                            color: colors.savvyCyan.base,
                        })}
                        closedIcon={React.createElement(Icon[iconClosedPick], {
                            color: colors.savvyCyan.base,
                        })}
                    >
                        <Collapse>
                            <Content />
                        </Collapse>
                        <Collapse>
                            <Content />
                        </Collapse>
                        <Collapse>
                            <Content />
                        </Collapse>
                    </CollapseGroup>
                </section>
            </ThemeProvider>
=======
            <section>
                <Typography tag="h2">CollapseGroup Example</Typography>
                <Typography tag="p">
                    Adjusting Knobs for CollapseGroup will apply settings to
                    Collapse child components.
                </Typography>
                <CollapseGroup
                    accordion={boolean('accordion', false)}
                    openIndex={0}
                    theme={select<'compact' | 'comfortable' | 'none'>(
                        'theme',
                        ['compact', 'comfortable', 'none'],
                        'comfortable'
                    )}
                    openedIcon={React.createElement(Icon[iconOpenedPick], {
                        color: colors.savvyCyan.base,
                    })}
                    closedIcon={React.createElement(Icon[iconClosedPick], {
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
>>>>>>> feat(Form): add basic radio and toggle inputs
        );
    });
