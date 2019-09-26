# Hero

The Hero component offers two built-in components `Hero.Title` and `Hero.Subtitle`, to compose along with any other desired components (e.g. containers, images, etc).

## Usage

#### Basic

```jsx
import { Hero } from '@retailmenot/anchor';
const { Title, Subtitle } = Hero;

const basicExample = props => (
    <Hero background="blue">
        <Title>Title</Title>
        <Subtitle>My Subtitle</Subtitle>
    </Hero>
);
```

#### Advanced

```jsx
import { Container, SomeImage } from 'my_app/components';
import { Hero } from '@retailmenot/anchor';
const { Title, Subtitle } = Hero;

const advancedExample = props => (
    <Hero align="left" color="neutrals.charcoal.base" minHeight="36rem">
        <Container>
            <Title>Socks with Sandals</Title>
            <Subtitle>The best thing since sliced bread!</Subtitle>
            <Button>Buy Some Today</Button>

            <SomeImage position="right" />
        </Container>
    </Hero>
);
```

## Props

### Hero

-   **`background = 'transparent'`**: css property for defining the Hero's background
-   **`align = 'center'`:** css property for text alignment
-   **`minHeight = '7.5rem'`:** css property for min-height
-   **`color = '#fff'`:** css property for text color
-   **`className`:** Additional className to be added to the Hero element

### Hero.Title / Hero.Subtitle

See `Typography` anchor component.
