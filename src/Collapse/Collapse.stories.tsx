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
import * as Icon from '../Icon';
import { colors } from '../theme';

// README
import * as README from './README.md';

const TEXT = 'text';

const StyledComfortableStory = styled.div`
    padding: 2rem 5rem;
`;

storiesOf('Components/Collapse', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('Default', () => {
        const iconOpenPick = select(
            'Example Icon Open',
            Object.keys(Icon),
            'ChevronUp'
        );
        const iconClosePick = select(
            'Example Icon Close',
            Object.keys(Icon),
            'ChevronDown'
        );
        const content = select('Example Content', [TEXT, 'list'], TEXT);

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
                    openIcon={React.createElement(Icon[iconOpenPick], {
                        color: colors.savvyCyan.base,
                    })}
                    closeIcon={React.createElement(Icon[iconClosePick], {
                        color: colors.savvyCyan.base,
                    })}
                >
                    {content === TEXT ? (
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nam eros ante, lacinia at imperdiet
                            consectetur, ultrices in elit. Vivamus vehicula nisl
                            id congue pulvinar.
                        </div>
                    ) : (
                        <ul>
                            <li>
                                <a>Grids & Layout</a>
                            </li>
                            <li>
                                <a>Cards</a>
                            </li>
                            <li>
                                <a>Color Usage</a>
                            </li>
                            <li>
                                <a>Typography</a>
                            </li>
                            <li>
                                <a>Icons</a>
                            </li>
                            <li>
                                <a>Animation</a>
                            </li>
                        </ul>
                    )}
                </Collapse>
            </StyledComfortableStory>
        );
    });
