// src/routes.js
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/layout';
import signup from './components/signup';
import NotFoundPage from './components/not_found_page';

const routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={signup}/>
        <Route path="*" component={NotFoundPage}/>
    </Route>
);

export default routes;