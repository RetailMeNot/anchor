# Alert

The alert component is an inline element to communicate the status of an event. 

## Usage

    import { Alert } from '@retailmenot/anchor';

    const example = () => (
        <Alert type="info" message="This is an alert" />
    );

## Settings/Props

The component can accept the following `props`:

* `type` *('success' | 'info' | warning' | 'error')*: Required. Determines the color treatment of the Alert.
* `className` *(string)*: Sets a top-level class on the Alert component.
* `message` *(string)*: Sets the main message of the Alert.
* `description` *(string)*: Sets the secondary content of the Alert.
* `closable` *(boolean)*: Defaults to **`false`**. Determines whether the Alert component is closable or not.
* `icon` *(JSX.Element)*: An Icon to be rendered within the Alert.
* `onClose` *(() => void)*: An event handler that fires when the Alert is closed.

## Dev Notes

This component doesn't have any exceptional behavior.
