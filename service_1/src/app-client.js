'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/app_routes';

window.onload = () => {
    ReactDOM.render(<AppRoutes/>, document.getElementById('main'));
};