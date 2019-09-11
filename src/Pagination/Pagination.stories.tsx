// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import { boolean, number, select } from '@storybook/addon-knobs';
// VENDOR
import styled, { ThemeProvider } from '@xstyled/styled-components';
import { th } from '@xstyled/system';
// ANCHOR
import * as Icon from '../Icon';
import { RootTheme } from '../../src/theme';
import { Pagination } from './Pagination.component';

const StyledStory = styled('div')`
    padding: 2rem;
    color: text.body;
    font-family: ${th('typography.fontFamily')};
`;

const ResultsContainer = styled('div')`
    border: light;
    background-color: white;
    margin: 1rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: stretch;
`;

const Result = styled('div')`
    box-sizing: border-box;
    background-color: ${({ color }) => color};
    height: 8rem;
    width: 20%;
    flex-basis: 1;
    flex-shrink: 0;
    min-width: 7rem;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    margin: 1rem;
    padding: 1rem;
`;

const iconNames = Object.keys(Icon);

storiesOf('Components/Pagination', module)
    .add('Default', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <Pagination
                    size={select<'sm' | 'xs'>('size', ['sm', 'xs'], 'sm')}
                    totalPages={number('totalPages', 15) || undefined}
                    totalResults={number('totalResults', 0) || undefined}
                    pageSize={number('pageSize', 10) || undefined}
                    showGoto={boolean('showGoto', false)}
                    variant={select<'pager' | 'minimal'>(
                        'variant',
                        ['pager', 'minimal'],
                        'pager'
                    )}
                />
            </StyledStory>
        </ThemeProvider>
    ))
    .add('Example', () =>
        React.createElement(() => {
            const totalResults = number('totalResults', 100);
            const pageSize = number('pageSize', 12);

            const items = Array.from(Array(totalResults)).map((_, i) => ({
                name: `Result ${i + 1}`,
                color: `hsla(${Math.sin(i) * 356}, 69%, 66%, 1)`,
                icon: iconNames[i % iconNames.length],
            }));

            const fetch = (
                {
                    page,
                    pageSize: size,
                }: {
                    page: number;
                    pageSize: number;
                },
                cb: (arg: any) => any
            ) => cb(items.slice((page - 1) * size, size * page));

            const [current, setCurrent] = React.useState<number>(1);
            const [results, setResults] = React.useState(
                items.slice(0, pageSize)
            );

            return (
                <ThemeProvider theme={RootTheme}>
                    <StyledStory>
                        <Pagination
                            current={current}
                            pageSize={pageSize}
                            totalResults={totalResults}
                            onChange={page => {
                                setCurrent(page);
                                fetch({ page, pageSize }, data =>
                                    setResults(data)
                                );
                            }}
                            size={select<'sm' | 'xs'>(
                                'size',
                                ['sm', 'xs'],
                                'sm'
                            )}
                            showGoto={boolean('showGoto', false)}
                            variant={select<'pager' | 'minimal'>(
                                'variant',
                                ['pager', 'minimal'],
                                'pager'
                            )}
                        />
                        <ResultsContainer>
                            {results.map(({ name, color, icon }) => (
                                <Result color={color}>
                                    {name}
                                    {React.createElement(Icon[icon], {
                                        scale: 'xl',
                                    })}
                                </Result>
                            ))}
                        </ResultsContainer>
                    </StyledStory>
                </ThemeProvider>
            );
        })
    )
    .add('Controlled', () =>
        React.createElement(() => {
            const [current, setCurrent] = React.useState<number>(1);

            return (
                <ThemeProvider theme={RootTheme}>
                    <StyledStory>
                        <Pagination
                            size={select<'sm' | 'xs'>(
                                'size',
                                ['sm', 'xs'],
                                'sm'
                            )}
                            onChange={page => setCurrent(page)}
                            current={current}
                            totalPages={number('totalPages', 10) || undefined}
                            totalResults={
                                number('totalResults', 0) || undefined
                            }
                            pageSize={number('pageSize', 10) || undefined}
                            showGoto={boolean('showGoto', false)}
                            variant={select<'pager' | 'minimal'>(
                                'variant',
                                ['pager', 'minimal'],
                                'pager'
                            )}
                        />
                    </StyledStory>
                </ThemeProvider>
            );
        })
    );
