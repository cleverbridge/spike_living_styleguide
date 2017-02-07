import React, { PropTypes } from 'react';
import CSS from '../../hoc/Css';

import styles from './notification.css';

const propTypes = {
  type: PropTypes.oneOf(['success', 'info', 'error']),
  children: PropTypes.node,
};

const defaultProps = {
  type: 'info'
};

const Notification = ({ type, children }) => {
  return (
    <div styleName={`notification ${type}`}>
      <div styleName="icon">
        icon
      </div>
      <span styleName="content">
        { children }
      </span>
    </div>
  )
};

Notification.defaultProps = defaultProps;
Notification.propTypes = propTypes;
export default CSS(Notification, styles);