import React from 'react';
import { Location } from '@reach/router';

export interface LocationProps {
    pathname: string;
}

// Gatsby now uses @reach/router which makes it so that not every component has access to the location
// prop like it used to in Gatsby 1.x. This HOC adds that prop to the component passed to it.
export function AddLocation(Component: any) {
    return class EnhancedWithLocation extends React.Component {
        render() {
            return (
                <Location>
                    {locationProps => (
                        <Component {...locationProps} {...this.props} />
                    )}
                </Location>
            );
        }
    };
}
