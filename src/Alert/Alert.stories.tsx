// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import styled, { ThemeProvider } from '@xstyled/styled-components';
import { select, boolean, text } from '@storybook/addon-knobs';
// ANCHOR
import { RootTheme } from '../../src/theme';
import { Alert, AlertTypes } from './Alert.component';
import { InfoOutline } from '../Icon';

const StyledStory = styled('div')`
    padding: 2rem;
    color: text.base;
    font-family: base;
`;

storiesOf('Components/Alert', module)
    .add('Default', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <Alert
                    variant={select(
                        'Variant',
                        [
                            AlertTypes.warning,
                            AlertTypes.error,
                            AlertTypes.success,
                            AlertTypes.info,
                        ],
                        AlertTypes.warning
                    )}
                    closable={boolean('Closable', true)}
                    message={text('Message', 'This is a message')}
                    description={text('Description', 'This is a description')}
                    onClose={() => {
                        /* tslint:disable no-console */
                        console.log('Alert has closed!');
                        /* tslint:enable no-console */
                    }}
                />
            </StyledStory>
        </ThemeProvider>
    ))
    .add('With Icon', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <Alert
                    variant={select(
                        'Variant',
                        [
                            AlertTypes.warning,
                            AlertTypes.error,
                            AlertTypes.success,
                            AlertTypes.info,
                        ],
                        AlertTypes.warning
                    )}
                    closable={boolean('Closable', true)}
                    message={text('Message', 'This is a message')}
                    description={text('Description', 'This is a description')}
                    icon={<InfoOutline scale="md" />}
                />
            </StyledStory>
        </ThemeProvider>
    ));
