import React, { PropTypes } from 'react';
import CSS from '../../hoc/Css';

import styles from './button.css';

const propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'minor']),
  label: PropTypes.string,
};

const defaultProps = {
  type: 'primary'
};

const Button = ({ type, label }) => {
  return (
    <button styleName={`button ${type}`}>
      {label}
    </button>
  )
};

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;
export default CSS(Button, styles);