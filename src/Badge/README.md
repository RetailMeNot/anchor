# Badge

The Badge component displays a dot or a circle with a count. It is normally used to indicate pending items (items in cart, unread messages, etc.)

## Usage

There are three sizes:

-   dot (default)
-   small
-   large

`dot` and `small` are meant to be used with an icon. `large` is meant to be used standalone.

### `dot` with an icon

```jsx
import { Badge } from '@retailmenot/anchor';
import { Cart } from '@retailmenot/anchor';

const BadgeDotExample = props => (
    <Badge
        borderColor="primary.base"
        borderColorHover="primary.light"
        offsetBottom={1.2}
        offsetLeft={0.9}
    >
        <Cart scale="lg" />
    </Badge>
);
```

### `small` with an icon

```jsx
import { Badge } from '@retailmenot/anchor';
import { Cart } from '@retailmenot/anchor';

const BadgeSmallExample = props => (
    <Badge
        borderColor="primary.base"
        borderColorHover="primary.light"
        count={1}
        offsetBottom={1.1}
        offsetLeft={0.6}
        size="small"
        textColor="white"
    >
        <Cart scale="lg" />
    </Badge>
);
```

### `large` standalone

```jsx
import { Badge } from '@retailmenot/anchor';

const BadgeLargeStandaloneExample = props => (
    <Badge
        borderColor="primary.base"
        borderColorHover="primary.light"
        count={1}
        offsetBottom={1.1}
        offsetLeft={0.6}
        size="large"
        standalone={true}
        textColor="white"
    >
        <Cart scale="lg" />
    </Badge>
);
```

## Props

-   **`backgroundColor`**: the background color of the Badge
-   **`borderColor`**: the color of the border of the Badge
-   **`borderColorHover`**: the color of the border of the Badge on hover
-   **`children`**: any elements inside the `<Badge></Badge>` tags. This is what we use to pass `<Icon>` components in.
-   **`className`**: additional className to be added to the Badge element
-   **`count = 0`**: the number to be displayed inside the badge
-   **`isParentHovered`**: boolean that reflects whether the parent element is hovered. This is necessary to change the Badge border color when the the Badge itself is not hovered, but the parent is. See code of stories for an example of how to do this.
-   **`overflowCount = 9`**: the maximum count to show in the Badge. Playing with `count` and `overflowCount` with the Storybook knobs is a good way to test this out.
-   **`offsetBottom`**: the absolute positioning in REM from the bottom. Because of the various sizes of icons and Badges, it seemed fitting to make this configurable.
-   **`offsetLeft`**: the absolute position in REM from the left.
-   **`size = 'dot'`**: the size of the badge. Other options besides `dot` are `small` and `large`.
-   **`standalone = false`**: boolean that represents whether the Badge will be alone.
-   **`textColor = white`**: the color of the text of the `count`.
