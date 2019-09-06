# Skeleton

The Skeleton component is intended to show placeholder shapes
while a component loads so that the user knows about what to expect
and understands that the content is loading.

If the Skeleton is set to `loading={false}` it just renders it's children. If `loading={true}`, it hides all of it's children.

## Usage

There are approximately 3 ways to use this component:

### Text

If the Skeleton component's child is a string (or textLength is defined) then it displays long gray bars in place of the text. This is to simulate a line of impending text or a paragraph. The longer the child text (or textLength), the longer the skeleton text.

Skeleton text observes font styles (font-size, line-height, etc) because it is implemented via text characters. This means it's a good idea to give it the same styles that you would give to the text it's meant to simulate.

In practice that means you'll probably want to use it with the Skeleton inside your typographical element like so:

```jsx
<Typography tag="h2">
    <Skeleton>I'm the text the skeleton will cover</Skeleton>
</Typography>
```

Text Skeletons inherit their `display` property because in some situations it is needed to format the text properly (e.g. h1s are `block`s, and spans are `inline` and this makes a difference to text's line-height). If the parent isn't a typographical element, you may need to define the `display` prop manually to get it to look just the way you want.

### Wrapping

The second way to use the Skeleton is by wrapping an element that you want to cover. It's as simple as that. For instance, if you had a fixed size img that was still loading, you could wrap it with a Skeleton and it'd simply take the shape of your image and hide it.

```jsx
<Skeleton>
    <Image width={200} height={120} />
</Skeleton>
```

If the wrapped child has a border-radius, you'll probably want to give the the skeleton the same border-radius (especially if the child is circular, like an avatar).

The Skeleton does not know the display setting of the child it's wrapping, so you may need to set it manually (i.e. if the child is a `block` you'll probably want to set the Skeleton to a block as well, so that it fits in the DOM the same way).

### Custom Shape

You might just want to give the Skeleton specific dimensions to make it take the exact shape you desire.

```jsx
<Skeleton width="100%" height="0.5rem" borderRadius="circular" marginBottom="1rem" />
<Skeleton width="100%" height="0.5rem" borderRadius="circular" marginBottom="1rem" />
<Skeleton width="80%" height="0.5rem" borderRadius="circular" />
```
