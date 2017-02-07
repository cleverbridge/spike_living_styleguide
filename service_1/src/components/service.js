'use strict';

import React from 'react';

export default class Service extends React.Component {
    render () {
        const name = this.props.name;

        return <span>{name}</span>;
    }
}