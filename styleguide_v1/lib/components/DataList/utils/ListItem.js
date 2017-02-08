import React, { PropTypes } from 'react';

import Button from '../../Button';

const propTypes = {
  data: PropTypes.node,
  buttonPrefix: PropTypes.string,
  styles: PropTypes.object,
};

const defaultProps = {
  buttonPrefix: 'Link to',
};

const ListItem = ({ data, buttonPrefix, styles }) => {
  return (
    <div styleName="list-item">
      <span styleName="content">{ data }</span>
      <div styleName="button">
        <Button label={`${buttonPrefix} ${data}`} type="secondary" styles={styles} />
      </div>
    </div>
  )
};

ListItem.defaultProps = defaultProps;
ListItem.propTypes = propTypes;
export default ListItem;