// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
// VENDOR
import styled from 'styled-components';
import { ThemeProvider } from '@xstyled/styled-components';
// COMPONENTS
import { Card } from './Card.component';
import { Grid, CenteredCell, Cell } from '../Grid';
import { DropDown } from '../DropDown';
import { Ellipses } from '../Icon';
import { colors, fonts, RootTheme } from '../theme';
import { Button } from '../Button';
import { CardActionArea } from './CardActionArea';
// README
import * as README from './README.md';
// THEME

const StyledStory = styled('div')`
    h2 {
        font-family: ${fonts.fontFamily};
        font-weight: normal;
        color: ${colors.charcoal.light};
        margin-bottom: 0.5rem;
    }
    h3 {
        font-family: ${fonts.fontFamily};
        font-weight: normal;
        color: ${colors.charcoal.light};
        margin: 0;
    }
    p {
        color: ${colors.ash.base};
        margin: 0;
    }
    .card-action-area {
        padding: 0 0.5rem;
    }
`;

/* tslint:disable max-line-length */
const TwoRowWithActionCardContent = () => (
    <Grid minRowHeight="60px" columns="250px" flow="column" gap="0">
        <CenteredCell top={1} left={1}>
            <svg width="180" height="90" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                    <path
                        stroke="#979797"
                        fill="#D8D8D8"
                        d="M.5.5h179v89H.5z"
                    />
                    <path
                        d="M46.468 32.344h2.112V53.08h10.56V55H46.468V32.344zm14.528 11.328c0-1.728.288-3.317.864-4.768.576-1.45 1.376-2.704 2.4-3.76 1.024-1.056 2.256-1.883 3.696-2.48 1.44-.597 3.024-.896 4.752-.896 1.728 0 3.312.299 4.752.896s2.672 1.424 3.696 2.48 1.824 2.31 2.4 3.76c.576 1.45.864 3.04.864 4.768 0 1.728-.288 3.323-.864 4.784-.576 1.461-1.376 2.72-2.4 3.776-1.024 1.056-2.256 1.877-3.696 2.464-1.44.587-3.024.88-4.752.88-1.728 0-3.312-.293-4.752-.88s-2.672-1.408-3.696-2.464-1.824-2.315-2.4-3.776c-.576-1.461-.864-3.056-.864-4.784zm2.112 0c0 1.408.224 2.72.672 3.936a9.345 9.345 0 0 0 1.92 3.168c.832.896 1.84 1.6 3.024 2.112s2.512.768 3.984.768 2.8-.256 3.984-.768a8.878 8.878 0 0 0 3.024-2.112 9.345 9.345 0 0 0 1.92-3.168c.448-1.216.672-2.528.672-3.936s-.224-2.72-.672-3.936a9.345 9.345 0 0 0-1.92-3.168 8.878 8.878 0 0 0-3.024-2.112c-1.184-.512-2.512-.768-3.984-.768s-2.8.256-3.984.768a8.878 8.878 0 0 0-3.024 2.112 9.345 9.345 0 0 0-1.92 3.168c-.448 1.216-.672 2.528-.672 3.936zm44.736 9.856a14.705 14.705 0 0 1-4.112 1.584c-1.419.31-2.864.464-4.336.464-1.728 0-3.312-.293-4.752-.88s-2.672-1.408-3.696-2.464-1.824-2.315-2.4-3.776c-.576-1.461-.864-3.056-.864-4.784 0-1.728.288-3.317.864-4.768.576-1.45 1.376-2.704 2.4-3.76 1.024-1.056 2.256-1.883 3.696-2.48 1.44-.597 3.024-.896 4.752-.896 3.37 0 6.09 1.045 8.16 3.136l-1.536 1.6a6.585 6.585 0 0 0-1.264-1.136 8.61 8.61 0 0 0-1.632-.896c-.587-.245-1.2-.437-1.84-.576a8.9 8.9 0 0 0-1.888-.208c-1.472 0-2.8.256-3.984.768a8.878 8.878 0 0 0-3.024 2.112 9.345 9.345 0 0 0-1.92 3.168c-.448 1.216-.672 2.528-.672 3.936s.224 2.72.672 3.936a9.345 9.345 0 0 0 1.92 3.168c.832.896 1.84 1.6 3.024 2.112s2.512.768 3.984.768c1.216 0 2.357-.096 3.424-.288a8.798 8.798 0 0 0 2.912-1.056v-7.616h-5.44v-1.92h7.552v10.752zm4.736-9.856c0-1.728.288-3.317.864-4.768.576-1.45 1.376-2.704 2.4-3.76 1.024-1.056 2.256-1.883 3.696-2.48 1.44-.597 3.024-.896 4.752-.896 1.728 0 3.312.299 4.752.896s2.672 1.424 3.696 2.48 1.824 2.31 2.4 3.76c.576 1.45.864 3.04.864 4.768 0 1.728-.288 3.323-.864 4.784-.576 1.461-1.376 2.72-2.4 3.776-1.024 1.056-2.256 1.877-3.696 2.464-1.44.587-3.024.88-4.752.88-1.728 0-3.312-.293-4.752-.88s-2.672-1.408-3.696-2.464-1.824-2.315-2.4-3.776c-.576-1.461-.864-3.056-.864-4.784zm2.112 0c0 1.408.224 2.72.672 3.936a9.345 9.345 0 0 0 1.92 3.168c.832.896 1.84 1.6 3.024 2.112s2.512.768 3.984.768 2.8-.256 3.984-.768a8.878 8.878 0 0 0 3.024-2.112 9.345 9.345 0 0 0 1.92-3.168c.448-1.216.672-2.528.672-3.936s-.224-2.72-.672-3.936a9.345 9.345 0 0 0-1.92-3.168 8.878 8.878 0 0 0-3.024-2.112c-1.184-.512-2.512-.768-3.984-.768s-2.8.256-3.984.768a8.878 8.878 0 0 0-3.024 2.112 9.345 9.345 0 0 0-1.92 3.168c-.448 1.216-.672 2.528-.672 3.936z"
                        fill="#9B9B9B"
                        fillRule="nonzero"
                    />
                </g>
            </svg>
        </CenteredCell>
        <Cell center={true} top={2} left={1}>
            <h2>Card Title</h2>
            <p>Brief summary section for card details.</p>
        </Cell>
    </Grid>
);

const BrandCardContent = ({ title }: { title: string }) => (
    <Grid columns="165px" flow="column" rows="90px 48px" gap="0">
        <CenteredCell center={true} top={1} left={1}>
            <svg width="120" height="60" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                    <path
                        stroke="#979797"
                        fill="#D8D8D8"
                        d="M.5.5h119v59H.5z"
                    />
                    <path
                        d="M30.979 21.563h1.408v13.824h7.04v1.28h-8.448V21.563zm9.685 7.552c0-1.152.192-2.212.576-3.179a7.567 7.567 0 0 1 1.6-2.507 7.26 7.26 0 0 1 2.464-1.653c.96-.398 2.016-.597 3.168-.597 1.152 0 2.208.199 3.168.597a7.26 7.26 0 0 1 2.464 1.653 7.567 7.567 0 0 1 1.6 2.507c.384.967.576 2.027.576 3.179 0 1.152-.192 2.215-.576 3.189a7.542 7.542 0 0 1-1.6 2.517 7.134 7.134 0 0 1-2.464 1.643c-.96.391-2.016.587-3.168.587-1.152 0-2.208-.196-3.168-.587a7.134 7.134 0 0 1-2.464-1.643 7.542 7.542 0 0 1-1.6-2.517c-.384-.974-.576-2.037-.576-3.19zm1.408 0c0 .938.15 1.813.448 2.624a6.23 6.23 0 0 0 1.28 2.112 5.918 5.918 0 0 0 2.016 1.408c.79.341 1.675.512 2.656.512.981 0 1.867-.171 2.656-.512a5.918 5.918 0 0 0 2.016-1.408 6.23 6.23 0 0 0 1.28-2.112c.299-.811.448-1.686.448-2.624 0-.939-.15-1.814-.448-2.624a6.23 6.23 0 0 0-1.28-2.112 5.918 5.918 0 0 0-2.016-1.408c-.79-.342-1.675-.512-2.656-.512-.981 0-1.867.17-2.656.512-.79.341-1.461.81-2.016 1.408a6.23 6.23 0 0 0-1.28 2.112 7.532 7.532 0 0 0-.448 2.624zm29.824 6.57a9.803 9.803 0 0 1-2.741 1.056c-.946.207-1.91.31-2.891.31-1.152 0-2.208-.196-3.168-.587a7.134 7.134 0 0 1-2.464-1.643 7.542 7.542 0 0 1-1.6-2.517c-.384-.974-.576-2.037-.576-3.19 0-1.151.192-2.21.576-3.178a7.567 7.567 0 0 1 1.6-2.507 7.26 7.26 0 0 1 2.464-1.653c.96-.398 2.016-.597 3.168-.597 2.247 0 4.06.697 5.44 2.09l-1.024 1.067a4.39 4.39 0 0 0-.843-.757 5.74 5.74 0 0 0-1.088-.598 7.031 7.031 0 0 0-1.226-.384 5.933 5.933 0 0 0-1.259-.138c-.981 0-1.867.17-2.656.512-.79.341-1.461.81-2.016 1.408a6.23 6.23 0 0 0-1.28 2.112 7.532 7.532 0 0 0-.448 2.624c0 .938.15 1.813.448 2.624a6.23 6.23 0 0 0 1.28 2.112 5.918 5.918 0 0 0 2.016 1.408c.79.341 1.675.512 2.656.512.81 0 1.572-.064 2.283-.192a5.865 5.865 0 0 0 1.941-.704v-5.078h-3.627v-1.28h5.035v7.168zm3.157-6.57c0-1.152.192-2.212.576-3.179a7.567 7.567 0 0 1 1.6-2.507 7.26 7.26 0 0 1 2.464-1.653c.96-.398 2.016-.597 3.168-.597 1.152 0 2.208.199 3.168.597a7.26 7.26 0 0 1 2.464 1.653 7.567 7.567 0 0 1 1.6 2.507c.384.967.576 2.027.576 3.179 0 1.152-.192 2.215-.576 3.189a7.542 7.542 0 0 1-1.6 2.517 7.134 7.134 0 0 1-2.464 1.643c-.96.391-2.016.587-3.168.587-1.152 0-2.208-.196-3.168-.587a7.134 7.134 0 0 1-2.464-1.643 7.542 7.542 0 0 1-1.6-2.517c-.384-.974-.576-2.037-.576-3.19zm1.408 0c0 .938.15 1.813.448 2.624a6.23 6.23 0 0 0 1.28 2.112 5.918 5.918 0 0 0 2.016 1.408c.79.341 1.675.512 2.656.512.982 0 1.867-.171 2.656-.512a5.918 5.918 0 0 0 2.016-1.408 6.23 6.23 0 0 0 1.28-2.112c.299-.811.448-1.686.448-2.624 0-.939-.149-1.814-.448-2.624a6.23 6.23 0 0 0-1.28-2.112 5.918 5.918 0 0 0-2.016-1.408c-.789-.342-1.674-.512-2.656-.512-.981 0-1.866.17-2.656.512-.789.341-1.461.81-2.016 1.408a6.23 6.23 0 0 0-1.28 2.112 7.532 7.532 0 0 0-.448 2.624z"
                        fill="#9B9B9B"
                        fillRule="nonzero"
                    />
                </g>
            </svg>
        </CenteredCell>
        <Cell center={true} top={2} left={1}>
            <h3>{title}</h3>
        </Cell>
    </Grid>
);

const WideCardContent = ({ title }: { title: string }) => (
    <Grid columns="96px minmax(400px, 750px) 90px" flow="column" gap="16px">
        <CenteredCell center={true} top={1} left={1}>
            <p>$1.00</p>
        </CenteredCell>
        <Cell top={1} left={2}>
            <div>
                <h3>{title}</h3>
                <p>Description of wide card</p>
            </div>
        </Cell>
        <CenteredCell top={1} left={3}>
            <Button>CTA</Button>
        </CenteredCell>
    </Grid>
);

const ActionArea = () => (
    <CardActionArea backgroundColor={colors.silver.light}>
        <Grid columns={1}>
            <Cell width={1}>
                <Button variant="minimal" size="sm">
                    Some Action
                </Button>
            </Cell>
        </Grid>
    </CardActionArea>
);
/* tslint:enable */

const CardAction = (
    <DropDown overlay={<div>123</div>}>
        <Ellipses color={colors.ash.light} />
    </DropDown>
);

storiesOf('Components/Card', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('Two Row With Action', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <Grid columns="repeat(auto-fit, 290px)">
                    {[1, 2, 3, 4].map((index: number) => (
                        <Cell width={1} key={index}>
                            <Card action={CardAction}>
                                <TwoRowWithActionCardContent />
                            </Card>
                        </Cell>
                    ))}
                </Grid>
            </StyledStory>
        </ThemeProvider>
    ))
    .add('Brand Cards', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <Grid columns="repeat(auto-fit, 200px)">
                    {[1, 2, 3, 4, 5].map((index: number) => (
                        <Cell key={index}>
                            <Card>
                                <BrandCardContent
                                    title={`Brand Name ${index}`}
                                    key={index}
                                />
                            </Card>
                        </Cell>
                    ))}
                </Grid>
            </StyledStory>
        </ThemeProvider>
    ))
    .add('Wide Cards With ActionArea', () => (
        <ThemeProvider theme={RootTheme}>
            <StyledStory>
                <Grid columns="minmax(400px, 900px)">
                    {[1, 2, 3, 4, 5].map((index: number) => (
                        <Cell key={index}>
                            <Card actionArea={<ActionArea />}>
                                <WideCardContent
                                    title={`Wide Card ${index}`}
                                    key={index}
                                />
                            </Card>
                        </Cell>
                    ))}
                </Grid>
            </StyledStory>
        </ThemeProvider>
    ));
