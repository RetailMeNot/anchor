# Tooltip

The Tooltip component is a wrapper for any element that needs a tooltip that displays to the user on hover.

## Usage

#### Basic
```jsx
import { Tooltip } from '@retailmenot/anchor';

const basicExample = props => (
  <Tooltip content="Text to show on hover">
    <button>Hover Over Me</button>
  </Tooltip>
);
```

#### Advanced
```jsx
import { Tooltip } from '@retailmenot/anchor';

const advancedExample = props => (
    <Tooltip content="Text to show on hover" position="rightEnd">
      <button>Hover Over Me</button>
    </Tooltip>
);
```

## Props

  * **`position = 'topEnd'`**: Property for the position of the Tooltip.  
  * **`maxWidth = 'auto'`:** Property for the maximum width of the Tooltip.
  * **`wrap`:** Property to control the text wrap of the Tooltip.
  * **`background = 'rgba(0, 0, 0, 0.8)`:** CSS property for the background.
  * **`color = 'white'`:** CSS property for the text color.
  * **`content`:** Property for the text of the Tooltip.

