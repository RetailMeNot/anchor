# Collapse

The Collapse component allows a user to click on a button and toggle the rendering of its child.

## Usage
   
    import { Collapse } from '@retailmenot/collapse';

    const example = () => (
        <Collapse>
            I will appear and disappear when the rendered button is clicked!
        </Collapse>
    );   
    
## Settings/Props

The component can accept 3 `props`:

* `isOpen` *(boolean)*: Defaults to **`false`**. Determines whether the Collapse component is open or not. Changing the value of this prop will programatticaly open/close the component, thusly not requiring a click event.

* `openText` *(string)*: Defaults to **`'Open'`**. The text that appears on the button as a Call To Action (CTA) to open the collapsed content. If this prop is used and the `closeText` prop is not, `closeText` will use whatever is defined for `openText`. This is useful if you don't actually want the CTA text to change.

* `closeText` *(string)*: Defaults to **`'Close'`**. The text that appears on the button as a CTA to close the displayed content. 

* `openIcon` *(any)*: Defaults to **`<ChevronDown />`** from `Icon`. Accepts any component to render, although realistically sticking to components from `Icon` make the most sense.

* `closeIcon` *(any)*: Defaults to **`<ChevronUp />`** from `Icon`. Accepts any component to render, although realistically sticking to components from `Icon` make the most sense.

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
        
    

