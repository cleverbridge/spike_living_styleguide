import React, { PropTypes } from 'react';

import Button from '../../Button';

const propTypes = {
  data: PropTypes.node,
  buttonPrefix: PropTypes.string,
  theme: PropTypes.object,
};

const defaultProps = {
  buttonPrefix: 'Link to',
};

const ListItem = ({ data, buttonPrefix, theme }) => {
  return (
    <div className={theme['list-item']}>
      <span className={theme.content}>{ data }</span>
      <div className={theme.button}>
        <Button label={`${buttonPrefix} ${data}`} type="secondary" theme={theme} />
      </div>
    </div>
  )
};

ListItem.defaultProps = defaultProps;
ListItem.propTypes = propTypes;
export default ListItem;