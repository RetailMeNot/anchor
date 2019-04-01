// REACT
import * as React from 'react';
// VENDOR
import classNames from 'classnames';
import styled from 'styled-components';
// COMPONENTS
import {
    // STAR
    Star,
    StarOutline,
    StarHalf,
    // HEART
    Heart,
    HeartOutline,
    // ENVELOPE
    Envelope,
    EnvelopeOpen,
    // ARROWS
    ArrowBack,
    ArrowForward,
    // PENCIL
    Pencil,
    // CLOSE
    Close,
    CloseSmall,
    // CHEVRONS
    ChevronDown,
    ChevronUp,
    ChevronRight,
    ChevronLeft,
    ChevronDownSmall,
    ChevronUpSmall,
    ChevronRightSmall,
    ChevronLeftSmall,
    // PLUS
    Plus,
    PlusSmall,
    // QUESTION
    Question,
    QuestionOutline,
    // INFO
    Info,
    InfoOutline,
    // SUCCESS
    Success,
    SuccessOutline,
    // ERROR
    Error,
    // CHECK
    Check,
    CheckSmall,
    // DEVICES
    Mobile,
    Print,
    Laptop,
    // LIKE
    Like,
    Dislike,
    // LOCK
    Lock,
    // COMMENT MORE
    CommentMore,
    // CHAT
    Chat,
    // GRID
    Grid,
    // GEAR
    Gear,
    // HOME
    Home,
    // MARKERS
    Marker,
    MarkerOutline,
    // TAGS
    Tag,
    TagAdd,
    // REFRESH
    Refresh,
    // SAD FACE
    SadFace,
    // CLOCK
    Clock,
    // EXPAND
    Expand,
    // LIGHTNING
    Lightning,
    // AVATARS
    Avatar,
    AvatarOutline,
    // SEARCH
    Search,
    // LISTS
    List,
    BulletList,
    // CAMERA
    Camera,
    // CART
    Cart,
    // MAP
    Map,
    // SLIDERS
    Sliders,
    // CROSS HAIRS
    CrossHairs,
    // CREDIT CARD
    CreditCard,
    // GIFT CARD
    GiftCard,
    // BAR CODE
    BarCode,
    // CASH BACK
    CashBack,
    // NEWS
    News,
    // CUT
    Cut,
    // RETAILMENOT LOGO
    RetailMeNotLogo,
    // DISABLED
    Disabled,
    // CALENDAR
    Calendar,
    AddEvent,
    // ELLIPSES
    Ellipses,
    EllipsesVertical,
    // UPLOAD
    Upload,
    // DOWNLOAD
    Download,
    // SHARE
    Share,
    // PLAY
    Play,
    // HAMBURGER
    Hamburger,
} from './SVGs';
// THEME

type IconTypes =
    // STAR
    | 'star'
    | 'star-outline'
    | 'star-half'
    // HEART
    | 'heart'
    | 'heart-outline'
    // ENVELOPE
    | 'envelope'
    | 'envelope-open'
    // ARROWS
    | 'arrow-back'
    | 'arrow-forward'
    // PENCIL
    | 'pencil'
    // CLOSE
    | 'close'
    | 'close-small'
    // CHEVRONS
    | 'chevron-down'
    | 'chevron-up'
    | 'chevron-right'
    | 'chevron-left'
    | 'chevron-down-small'
    | 'chevron-up-small'
    | 'chevron-right-small'
    | 'chevron-left-small'
    // PLUS
    | 'plus'
    | 'plus-small'
    // QUESTION
    | 'question'
    | 'question-outline'
    // INFO
    | 'info'
    | 'info-outline'
    // SUCCESS
    | 'success'
    | 'success-outline'
    // ERROR
    | 'error'
    // CHECK
    | 'check'
    | 'check-small'
    // DEVICES
    | 'mobile'
    | 'print'
    | 'laptop'
    // LIKE
    | 'like'
    | 'dislike'
    // LOCK
    | 'lock'
    // COMMENT MORE
    | 'comment-more'
    // CHAT
    | 'chat'
    // GRID
    | 'grid'
    // GEAR
    | 'gear'
    // HOME
    | 'home'
    // MARKERS
    | 'marker'
    | 'marker-outline'
    // TAGS
    | 'tag'
    | 'tag-add'
    // REFRESH
    | 'refresh'
    // SAD FACE
    | 'sad-face'
    // CLOCK
    | 'clock'
    // EXPAND
    | 'expand'
    // LIGHTNING
    | 'lightning'
    // AVATARS
    | 'avatar'
    | 'avatar-outline'
    // SEARCH
    | 'search'
    // LISTS
    | 'list'
    | 'bullet-list'
    // CAMERA
    | 'camera'
    // CART
    | 'cart'
    // MAP
    | 'map'
    // SLIDERS
    | 'sliders'
    // CROSS HAIRS
    | 'cross-hairs'
    // CREDIT CARD
    | 'credit-card'
    // GIFT CARD
    | 'gift-card'
    // BAR CODE
    | 'bar-code'
    // CASH BACK
    | 'cash-back'
    // NEWS
    | 'news'
    // CUT
    | 'cut'
    // RETAILMENOT LOGO
    | 'retail-me-not-logo'
    // DISABLED
    | 'disabled'
    // CALENDAR
    | 'calendar'
    | 'add-event'
    // ELLIPSES
    | 'ellipses'
    | 'ellipses-vertical'
    // UPLOAD
    | 'upload'
    // DOWNLOAD
    | 'download'
    // SHARE
    | 'share'
    // PLAY
    | 'play'
    // HAMBURGER
    | 'hamburger';

export interface IconSVGProps {
    width?: number;
    height?: number;
    color?: string;
}

interface IconProps {
    type?: IconTypes;
    children?: any;
    className?: string;
    color?: string;
    width?: number;
    height?: number;
}

const StyledIcon = styled.div`
    display: inline-flex;
    width: 1.5rem;
    height: 1.5rem;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    z-index: 2;

    > svg {
        flex: 0 0 auto;
    }
`;

export const Icons = {
    // STAR
    star: Star,
    'star-outline': StarOutline,
    'star-half': StarHalf,
    // HEART
    heart: Heart,
    'heart-outline': HeartOutline,
    // ENVELOPE
    envelope: Envelope,
    'envelope-open': EnvelopeOpen,
    // ARROWS
    'arrow-back': ArrowBack,
    'arrow-forward': ArrowForward,
    // PENCIL
    pencil: Pencil,
    // CLOSE
    close: Close,
    'close-small': CloseSmall,
    // CHEVRONS
    'chevron-down': ChevronDown,
    'chevron-up': ChevronUp,
    'chevron-right': ChevronRight,
    'chevron-left': ChevronLeft,
    'chevron-down-small': ChevronDownSmall,
    'chevron-up-small': ChevronUpSmall,
    'chevron-right-small': ChevronRightSmall,
    'chevron-left-small': ChevronLeftSmall,
    // PLUS
    plus: Plus,
    'plus-small': PlusSmall,
    // QUESTION
    question: Question,
    'question-outline': QuestionOutline,
    // INFO
    info: Info,
    'info-outline': InfoOutline,
    // SUCCESS
    success: Success,
    'success-outline': SuccessOutline,
    // ERROR
    error: Error,
    // CHECK
    check: Check,
    'check-small': CheckSmall,
    // DEVICES
    mobile: Mobile,
    print: Print,
    laptop: Laptop,
    // LIKE
    like: Like,
    dislike: Dislike,
    // LOCK
    lock: Lock,
    // COMMENT MORE
    'comment-more': CommentMore,
    // CHAT
    chat: Chat,
    // GRID
    grid: Grid,
    // GEAR
    gear: Gear,
    // HOME
    home: Home,
    // MARKERS
    marker: Marker,
    'marker-outline': MarkerOutline,
    // TAGS
    tag: Tag,
    'tag-add': TagAdd,
    // REFRESH
    refresh: Refresh,
    // SAD FACE
    'sad-face': SadFace,
    // CLOCK
    clock: Clock,
    // EXPAND
    expand: Expand,
    // LIGHTNING
    lightning: Lightning,
    // AVATARS
    avatar: Avatar,
    'avatar-outline': AvatarOutline,
    // SEARCH
    search: Search,
    // LISTS
    list: List,
    'bullet-list': BulletList,
    // CAMERA
    camera: Camera,
    // CART
    cart: Cart,
    // MAP
    map: Map,
    // SLIDERS
    sliders: Sliders,
    // CROSS HAIRS
    'cross-hairs': CrossHairs,
    // CREDIT CARD
    'credit-card': CreditCard,
    // GIFT CARD
    'gift-card': GiftCard,
    // BAR CODE
    'bar-code': BarCode,
    // CASH BACK
    'cash-back': CashBack,
    // NEWS
    news: News,
    // CUT
    cut: Cut,
    // RETAILMENOT LOGO
    'retail-me-not-logo': RetailMeNotLogo,
    // DISABLED
    disabled: Disabled,
    // CALENDAR
    calendar: Calendar,
    'add-event': AddEvent,
    // ELLIPSES
    ellipses: Ellipses,
    'ellipses-vertical': EllipsesVertical,
    // UPLOAD
    upload: Upload,
    // DOWNLOAD
    download: Download,
    // SHARE
    share: Share,
    // PLAY
    play: Play,
    // HAMBURGER
    hamburger: Hamburger,
};

export const Icon = ({
    className,
    type = 'hamburger',
    color = '#222',
    width,
    height,
    ...props
}: IconProps): React.ReactElement<any> => (
    <StyledIcon className={classNames(className)} {...props}>
        {Icons[type]({ color, width, height })}
    </StyledIcon>
);

export default Icon;
