import React, { PropTypes } from 'react';

import Button from '../../Button';

const propTypes = {
  data: PropTypes.node,
  styles: PropTypes.object,
};

const ListItem = ({ data, styles }) => {
  return (
    <div styleName="list-item">
      <span styleName="content">{ data }</span>
      <div styleName="button">
        <Button label={`Link to ${data}`} type="secondary" styles={styles} />
      </div>
    </div>
  )
};

ListItem.propTypes = propTypes;
export default ListItem;