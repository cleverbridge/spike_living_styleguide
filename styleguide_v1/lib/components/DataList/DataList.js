import React, { PropTypes } from 'react';
import CSS from '../../hoc/Css';

import ListItem from './utils/ListItem';
import defaultStyles from './dataList.css';

const propTypes = {
  data: PropTypes.array,
  buttonPrefix: PropTypes.string,
  styles: PropTypes.object,
};

const DataList = ({ data, buttonPrefix, styles }) => {
  if(!data) {
    return (
      <div styleName="no-data">No Data Available</div>
    )
  }

  return (
    <div styleName="data-list">
      {data.map((d, i) => {
        const CSSListItem = CSS(ListItem, defaultStyles);
        return (<CSSListItem key={i} data={d} styles={styles} buttonPrefix={buttonPrefix} />)
      })}
    </div>
  )
};

DataList.propTypes = propTypes;
export default CSS(DataList, defaultStyles);