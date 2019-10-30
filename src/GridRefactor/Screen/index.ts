import React, { PureComponent } from 'react';

export class Screen extends PureComponent {
    constructor(props: any) {
        super(props);
        this.screenSize = this.screenSize.bind(this);
        this.state = {
            width: 0,
        };
    }

    componentWillMount() {
        if (window && window.innerWidth) {
            this.setState({ width: window.innerWidth });
        }
    }

    screenSize() {

    }

    render() {
        return null;
    }
}
