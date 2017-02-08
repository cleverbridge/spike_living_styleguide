import React, { PropTypes, Component } from 'react';
import { themr } from 'react-css-themr';

import defaultTheme from './button.css';

const propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'minor']),
  label: PropTypes.string,
  theme: PropTypes.object,
};

const defaultProps = {
  type: 'primary'
};

const Button = ({ type, label, theme }) => {
  return (
    <button className={`${theme.button} ${theme[type]}`}>
      {label}
    </button>
  )
};

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;
export default themr('CbButton', defaultTheme)(Button);