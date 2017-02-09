import React, { PropTypes, Component } from 'react';
import { themr } from 'react-css-themr';

import defaultTheme from './button.css';

const propTypes = {
  /**
   * Type of the button. Defines the styling
   */
  type: PropTypes.oneOf(['primary', 'secondary', 'minor']),
  /**
   * Text which will be displayed inside
   */
  label: PropTypes.string,
  /**
   * Theme passed via themr
   */
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