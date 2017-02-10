import React, { PropTypes } from 'react';
import { themr } from 'react-css-themr';
import Button from '../../styleguide_v2/Button';
import DataList from '../../styleguide_v2/DataList';
import Card from '../../styleguide_v2/Card';

import appTheme from './app.css';
const logo = require('./netflix.png');

const propTypes = {
  theme: PropTypes.object,
} ;

const basicData = {
  name: 'Basic',
  services: ['Free Streaming', '1 Device', '800x600 Resolution'],
  callTo: {
    label: 'Get Basic'
  }
};
const standardData = {
  name: 'Standard',
  services: ['Free Streaming', '2 Devices', 'Full HD Resolution'],
  callTo: {
    label: 'Get Standard'
  }
};
const premiumData = {
  name: 'Premium',
  services: ['Free Streaming', 'up to 4 Devices', 'OctoHD Resolution'],
  callTo: {
    label: 'Get Premium'
  }
};

const App = ({ theme }) => (
  <div className={theme.wrapper}>
    <div className={theme.header}>
      <img role="presentation" src={logo} />
      <h2>Welcome to Netflix</h2>
    </div>

    <p>This is a demo netflix style app to showcase the themeable component library.</p>

    <div className={theme.plans}>
      <Card data={basicData} />
      <Card data={standardData} highlighted />
      <Card data={premiumData} />
    </div>

    <br />
    You can also grab some DVD's over here: <Button type="secondary" label="DVD Service"/>
  </div>
);

App.propTypes = propTypes;
export default themr('App', appTheme)(App);
