'use strict';

import React from 'react';

export default class TranscludedComponent extends React.Component {
    constructor () {
        super();
        this.state = {
            fetched_component: ''
        };
    }

    componentDidMount () {
        fetch('http://localhost:3001', {cache:'no-cache', mode:'cors'})
            .then(response => response.text())
            .then(body => {
                this.setState({fetched_component: body});
            });
    }

    render () {
        if(this.state.fetched_component.length === 0) {
            return <div>Loading...</div>;
        }

        return <div dangerouslySetInnerHTML={{__html: this.state.fetched_component}} />;
    }
}
