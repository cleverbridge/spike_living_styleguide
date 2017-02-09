import React, { PropTypes } from 'react';
import { themr } from 'react-css-themr';

import ListItem from './utils/ListItem';
import defaultTheme from './dataList.css';

const propTypes = {
  data: PropTypes.array,
  buttonPrefix: PropTypes.string,
  theme: PropTypes.object,
};

const DataList = ({ data, buttonPrefix, theme }) => {
  if(!data) {
    return (
      <div className={theme['no-data']}>No Data Available</div>
    )
  }

  return (
    <div className={theme['data-list']}>
      {data.map((d, i) => <ListItem key={i} data={d} buttonPrefix={buttonPrefix} theme={theme} />)}
    </div>
  )
};

DataList.propTypes = propTypes;
export default themr('CbDataList', defaultTheme)(DataList);