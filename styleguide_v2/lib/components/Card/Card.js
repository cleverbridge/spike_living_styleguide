import React, { PropTypes, Component } from 'react';
import { themr } from 'react-css-themr';
import Button from '../Button';

import defaultTheme from './theme.css';

const propTypes = {
  theme: PropTypes.object,
  data: PropTypes.object,
  highlighted: PropTypes.bool
};

const defaultProps = {
  highlighted: false,
};

const Card = ({ theme, data, highlighted }) => {
  const { name, services, callTo } = data;
  const hlClass = highlighted && 'highlighted';
  return (
    <div className={`${theme.card} ${theme[hlClass]}`}>
      <div className={theme.name}> {name} </div>
      <ul className={theme.list}>
        {services.map((s, i) => <li key={i} className={theme['list-item']}>{s}</li>)}
      </ul>
      <div className={theme['call-to-action']}>
        <Button label={callTo.label} theme={theme} />
      </div>
    </div>
  )
};

Card.defaultProps = defaultProps;
Card.propTypes = propTypes;
export default themr('CbCard', defaultTheme)(Card);