// src/routes.js
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/layout';
import PaymentData from './components/payment_data';
import NotFoundPage from './components/not_found_page';

const routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={PaymentData}/>
        <Route path="*" component={NotFoundPage}/>
    </Route>
);

export default routes;