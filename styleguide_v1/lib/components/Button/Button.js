import React, { PropTypes } from 'react';
import CSS from '../../hoc/Css';

import styles from './button.css';

const propTypes = {
  type: PropTypes.oneOf(['small', 'normal', 'large'])
};

const defaultProps = {
  type: 'normal'
};

const Button = ({ type }) => {
  return (
    <button styleName={`button ${type}`}>
      Test
    </button>
  )
};

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;
export default CSS(Button, styles);