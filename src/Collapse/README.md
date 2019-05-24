# Collapse

The Collapse component allows a user to click on a button and toggle the rendering of its child.

## Usage

    import { Collapse } from '@retailmenot/anchor';

    const example = () => (
        <Collapse>
            I will appear and disappear when the rendered button is clicked!
        </Collapse>
    );

## Settings/Props

The component can accept the following `props`:

* `isOpen` *(boolean)*: Defaults to **`false`**. Determines whether the Collapse component is open or not. Changing the value of this prop will programatticaly open/close the component, thusly not requiring a click event.

* `openText` *(string)*: Defaults to **`'Open'`**. The text that appears on the button as a Call To Action (CTA) to open the collapsed content. If this prop is used and the `closeText` prop is not, `closeText` will use whatever is defined for `openText`. This is useful if you don't actually want the CTA text to change.

* `closeText` *(string)*: Defaults to **`'Close'`**. The text that appears on the button as a CTA to close the displayed content.

* `openIcon` *(React.ReactElement)*: Defaults to **`<ChevronDown />`** from `Icon`. Accepts any component to render, although realistically sticking to components from `Icon` make the most sense.

* `closeIcon` *(React.ReactElement)*: Defaults to **`<ChevronUp />`** from `Icon`. Accepts any component to render, although realistically sticking to components from `Icon` make the most sense.

    #### `openIcon` and/or `closeIcon` usage

        <Collapse
            openIcon={<ArrowLeft />}
            closeIcon={<ArrowRight />}
        >
            <div>Hello world.</div>
        </Collapse>

* `theme` *('comfortable' | 'compact' | 'none')*: Defaults to **`'comfortable'`**.
    * **comfortable**: has considerable spacing. It is intended to be used for showing/hiding larger pieces of content.
    * **compact**: has much tighter spacing. It is intended to be used for showing/hiding navigation elements.
    * **none**: Applies no styling whatsoever to the component. Useful for when you want complete control of all styling via styled-components/css/etc., but still keep the functionality of the component. The component has many classes in place to try and make it easier to accomplish this.

* `hasBottomBorder`: *(boolean)*: Defaults to **`true`**. Shows/hides the bottom border.

## Dev Notes

**`Collapse`** does have an additional prop, **`toggleFn`** , however it is strongly suggested not to use it. Its sole reason to exist is to allow the **`CollapseGroup`** component to take control of the **`isOpen`** prop. Also of note is the **`hasBottomBorder`** prop.

* `toggleFn`: Whatever function is passed to this prop will be executed when the user clicks the **`.collapse-button`** element. It will not intrinsically toggle the **`isOpen`** prop.

* `hasBottomBorder`: This mostly exists to allow **`CollapseGroup`** to control whether or not a **`Collapse`** child component should show its bottom border. All bottom borders are hidden save for the last child in order to make it look like one unified experience.
<br /><br />

# CollapseGroup

The **`CollapseGroup`** component combines multiple **`Collapse`** components together, allowing a single component to apply props to all children, unifying their appearance, and adding the ability to have accordion functionality.

## Usage

    import { Collapse, CollapseGroup } from '@retailmenot/anchor';

    const example = () => (
        <CollapseGroup theme="compact">
            <Collapse>
                I will appear and disappear when the rendered button is clicked!
            </Collapse>
            <Collapse>
                I will also appear and disappear when the rendered button is clicked!
            </Collapse>
        </CollapseGroup>
    );

## Settings/Props

The component can accept the following `props`:

* `openIcon` *(React.ReactElement)*: No default. Using this prop will apply the setting to all child **`Collapse`** components. Otherwise its functionality is as noted above for **`Collapse`**.

* `closeIcon` *(React.ReactElement)*: No default. Using this prop will apply the setting to all child **`Collapse`** components. Otherwise its functionality is as noted above for **`Collapse`**.

* `theme` *('comfortable' | 'compact' | 'none')*: No default. Using this prop will apply the setting to all child **`Collapse`** components. Otherwise its functionality is as noted above for **`Collapse`**.

* `accordion` *(boolean)*: Defaults to **`false`**. Enables accordion functionality, where only one **`Collapse`** component can be open at a time.

* `openIndex` *(number)*: Defaults to **`0`**. If **`accordion`** is set to **`true`**, this determines which **`Collapse`** component will start in the open state.

## Dev Notes

**`openIndex`** does not have a knob because Storybook does not correctly update the component in realtime. Explicitly setting the value does work, however.