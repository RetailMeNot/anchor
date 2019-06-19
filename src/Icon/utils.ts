// VENDOR
import styled from '@xstyled/styled-components';
import { margin as marginStyles } from '../theme/system.theme';

type ScaleFactors = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export interface IconSVGProps {
    scale?: ScaleFactors;
    color?: string;
    className?: string;
    children?: any;
}

export const Scale = {
    xs: 8,
    sm: 14,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
};

export const DefaultColor = 'currentColor';
export const DefaultScale = 'md';

export const StyledIcon = styled.span<IconSVGProps>`
    ${marginStyles}
    display: inline-block;
    height: ${({ scale = 'md' }: IconSVGProps) => `${Scale[scale] / 16}rem`};
    width: ${({ scale = 'md' }: IconSVGProps) => `${Scale[scale] / 16}rem`};
    line-height: 0;
`;

StyledIcon.displayName = 'AnchorIcon';

export type AnchorIcons =
    | 'AddEvent'
    | 'ArrowBack'
    | 'ArrowForward'
    | 'AvatarIcon'
    | 'AvatarOutline'
    | 'BarCode'
    | 'BulletList'
    | 'Calendar'
    | 'Camera'
    | 'Cart'
    | 'CashBack'
    | 'Cells'
    | 'Chat'
    | 'Check'
    | 'CheckSmall'
    | 'ChevronDown'
    | 'ChevronDownSmall'
    | 'ChevronLeft'
    | 'ChevronLeftSmall'
    | 'ChevronRight'
    | 'ChevronRightSmall'
    | 'ChevronUp'
    | 'ChevronUpSmall'
    | 'Clock'
    | 'Close'
    | 'CloseSmall'
    | 'CommentMore'
    | 'CreditCard'
    | 'CrossHairs'
    | 'Cut'
    | 'Disabled'
    | 'Dislike'
    | 'Download'
    | 'Ellipses'
    | 'EllipsesVertical'
    | 'Envelope'
    | 'EnvelopeOpen'
    | 'Error'
    | 'Expand'
    | 'Gear'
    | 'GiftCard'
    | 'Hamburger'
    | 'Heart'
    | 'HeartOutline'
    | 'Home'
    | 'Info'
    | 'InfoOutline'
    | 'Laptop'
    | 'Lightning'
    | 'Like'
    | 'ListIcon'
    | 'Lock'
    | 'Map'
    | 'Marker'
    | 'MarkerOutline'
    | 'Mobile'
    | 'News'
    | 'Pencil'
    | 'Play'
    | 'Plus'
    | 'PlusSmall'
    | 'Print'
    | 'Question'
    | 'QuestionOutline'
    | 'Refresh'
    | 'RetailMeNotLogo'
    | 'SadFace'
    | 'Search'
    | 'Share'
    | 'Sliders'
    | 'Star'
    | 'StarHalf'
    | 'StarOutline'
    | 'Success'
    | 'SuccessOutline'
    | 'Tag'
    | 'TagAdd'
    | 'Upload';
