// REACT
import * as React from 'react';
// STORYBOOK
import { storiesOf } from '@storybook/react';
import { color, select } from '@storybook/addon-knobs';
// VENDOR
import styled from 'styled-components';
// COMPONENTS
import { Grid as StyleGrid } from '../Grid';
import { Typography } from '../Typography';
import { Icon } from './';
import { DefaultColor } from './utils';

// README
import * as README from './README.md';

const StyledStory = styled.div`
    padding: 2rem 5rem;

    div {
        text-align: center;
    }
`;

storiesOf('Components/Icon', module)
    .addParameters({
        readme: {
            sidebar: README,
        },
    })
    .add('All Icons', () => (
        <StyledStory>
            <StyleGrid columns={5} minRowHeight="24px" gap="15px">
                <div>
                    <Typography as="p" scale={12}>
                        AddEvent
                    </Typography>
                    <Icon.AddEvent />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        ArrowBack
                    </Typography>
                    <Icon.ArrowBack />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        ArrowForward
                    </Typography>
                    <Icon.ArrowForward />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        Avatar
                    </Typography>
                    <Icon.Avatar />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        AvatarOutline
                    </Typography>
                    <Icon.AvatarOutline />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        BarCode
                    </Typography>
                    <Icon.BarCode />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        BulletList
                    </Typography>
                    <Icon.BulletList />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        Calendar
                    </Typography>
                    <Icon.Calendar />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        Camera
                    </Typography>
                    <Icon.Camera />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        Cart
                    </Typography>
                    <Icon.Cart />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        CashBack
                    </Typography>
                    <Icon.CashBack />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        Chat
                    </Typography>
                    <Icon.Chat />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        Check
                    </Typography>
                    <Icon.Check />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        CheckSmall
                    </Typography>
                    <Icon.CheckSmall />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        ChevronDown
                    </Typography>
                    <Icon.ChevronDown />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        ChevronDownSmall
                    </Typography>
                    <Icon.ChevronDownSmall />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        ChevronLeft
                    </Typography>
                    <Icon.ChevronLeft />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        ChevronLeftSmall
                    </Typography>
                    <Icon.ChevronLeftSmall />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        ChevronRight
                    </Typography>
                    <Icon.ChevronRight />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        ChevronRightSmall
                    </Typography>
                    <Icon.ChevronRightSmall />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        ChevronUp
                    </Typography>
                    <Icon.ChevronUp />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        ChevronUpSmall
                    </Typography>
                    <Icon.ChevronUpSmall />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        Clock
                    </Typography>
                    <Icon.Clock />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        Close
                    </Typography>
                    <Icon.Close />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        CloseSmall
                    </Typography>
                    <Icon.CloseSmall />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        CommentMore
                    </Typography>
                    <Icon.CommentMore />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        CreditCard
                    </Typography>
                    <Icon.CreditCard />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        CrossHairs
                    </Typography>
                    <Icon.CrossHairs />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        Cut
                    </Typography>
                    <Icon.Cut />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        Disabled
                    </Typography>
                    <Icon.Disabled />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        Dislike
                    </Typography>
                    <Icon.Dislike />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        Download
                    </Typography>
                    <Icon.Download />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        Ellipses
                    </Typography>
                    <Icon.Ellipses />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        EllipsesVertical
                    </Typography>
                    <Icon.EllipsesVertical />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        Envelope
                    </Typography>
                    <Icon.Envelope />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        EnvelopeOpen
                    </Typography>
                    <Icon.EnvelopeOpen />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        Error
                    </Typography>
                    <Icon.Error />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        Expand
                    </Typography>
                    <Icon.Expand />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        Gear
                    </Typography>
                    <Icon.Gear />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        GiftCard
                    </Typography>
                    <Icon.GiftCard />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        Grid
                    </Typography>
                    <Icon.Grid />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        Hamburger
                    </Typography>
                    <Icon.Hamburger />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        Heart
                    </Typography>
                    <Icon.Heart />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        HeartOutline
                    </Typography>
                    <Icon.HeartOutline />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        Home
                    </Typography>
                    <Icon.Home />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        Info
                    </Typography>
                    <Icon.Info />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        InfoOutline
                    </Typography>
                    <Icon.InfoOutline />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        Laptop
                    </Typography>
                    <Icon.Laptop />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        Lightning
                    </Typography>
                    <Icon.Lightning />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        Like
                    </Typography>
                    <Icon.Like />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        List
                    </Typography>
                    <Icon.List />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        Lock
                    </Typography>
                    <Icon.Lock />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        Map
                    </Typography>
                    <Icon.Map />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        Marker
                    </Typography>
                    <Icon.Marker />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        MarkerOutline
                    </Typography>
                    <Icon.MarkerOutline />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        Mobile
                    </Typography>
                    <Icon.Mobile />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        News
                    </Typography>
                    <Icon.News />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        Pencil
                    </Typography>
                    <Icon.Pencil />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        Play
                    </Typography>
                    <Icon.Play />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        Plus
                    </Typography>
                    <Icon.Plus />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        PlusSmall
                    </Typography>
                    <Icon.PlusSmall />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        Print
                    </Typography>
                    <Icon.Print />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        Question
                    </Typography>
                    <Icon.Question />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        QuestionOutline
                    </Typography>
                    <Icon.QuestionOutline />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        Refresh
                    </Typography>
                    <Icon.Refresh />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        RetailMeNotLogo
                    </Typography>
                    <Icon.RetailMeNotLogo />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        SadFace
                    </Typography>
                    <Icon.SadFace />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        Search
                    </Typography>
                    <Icon.Search />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        Share
                    </Typography>
                    <Icon.Share />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        Sliders
                    </Typography>
                    <Icon.Sliders />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        Star
                    </Typography>
                    <Icon.Star />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        StarHalf
                    </Typography>
                    <Icon.StarHalf />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        StarOutline
                    </Typography>
                    <Icon.StarOutline />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        Success
                    </Typography>
                    <Icon.Success />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        SuccessOutline
                    </Typography>
                    <Icon.SuccessOutline />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        Tag
                    </Typography>
                    <Icon.Tag />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        TagAdd
                    </Typography>
                    <Icon.TagAdd />
                </div>
                <div>
                    <Typography as="p" scale={12}>
                        Upload
                    </Typography>
                    <Icon.Upload />
                </div>
            </StyleGrid>
        </StyledStory>
    ))
    .add('Size & Color', () => (
        <StyledStory>
            <Icon.AddEvent
                color={color('color', DefaultColor)}
                scale={select(
                    'scale',
                    ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
                    'md'
                )}
            />
        </StyledStory>
    ));
