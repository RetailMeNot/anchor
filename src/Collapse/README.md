# Icon

All icons are rendered individually by their name, i.e. **`ArrowBack`** or**`Expand`**. 

## Usage
   
    import { ArrowBack } from '@retailmenot/anchor';
    
    const example = props => (
        <ArrowBack />
    );    
    
## Settings/Props

The component can accept 3 `props`:

* `color`: Defaults to **`currentColor`**, a SVG color property that will allow the icon to inherit its parent color. 
However, if a value is passed it will take whatever hex/rgb/rgba value provided.
* `scale`: Defaults to **`md`**. The full range of options are **`'xs', 'sm', 'md', 'lg', 'xl', 'xxl'`**
* `className`: An additional class name. All icons have the **`anchor-icon`** class name in addition to a more specific class.
Ex: **`class="anchor-icon arrow-back"`**.    
        
    

