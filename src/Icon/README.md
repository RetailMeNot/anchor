# Icon

The Icon component is actually an object which holds all Icon components. 
Trying to render `<Icon />` will result in an error, but for example, `<Icon.ArrowBack />` would not.

## Usage
    import { Icon } from '@retailmenot/anchor';
    
    const example = props => (
        <Icon.ArrowBack />
    );
    
Alternatively, each icon can be imported individually.
    
    import { IconArrowBack } from '@retailmenot/anchor';
    
    const example = props => (
        <IconArrowBack />
    );    
    
## Settings/Props

The component can accept 3 `props`:

* `color`: Defaults to **`#222`** but if passed it will take whatever hex/rgb/rgba value provided.
* `scale`: Defaults to **`md`**. The full range of options are **`'xs', 'sm', 'md', 'lg', 'xl', 'xxl'`**
* `className`: An additional class name. All icons have the **`anchor-icon`** class name in addition to a more specific class.
Ex: **`class="anchor-icon arrow-back"`**.    
        
    

