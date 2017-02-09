import React, { PropTypes } from 'react';
import { themr } from 'react-css-themr';
import Button from '../../styleguide_v2/Button';
import DataList from '../../styleguide_v2/DataList';

import appTheme from './app.css';
const logo = require('./netflix.png');

const propTypes = {
  theme: PropTypes.object,
} ;

const data = ['Basic', 'Standard', 'Premium'];

const App = ({ theme }) => (
  <div className={theme.wrapper}>
    <div className={theme.header}>
      <img role="presentation" src={logo} />
      <h2>Welcome to Netflix</h2>
    </div>
    <p>This is a demo netflix style app to showcase the themeable component library.</p>
    <DataList data={data} buttonPrefix="I want"/>

    <div className={theme['call-to']}>
      <Button label="I like Netflix" />
    </div>
  </div>
);

App.propTypes = propTypes;
export default themr('App', appTheme)(App);
