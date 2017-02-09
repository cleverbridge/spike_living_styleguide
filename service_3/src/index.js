import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { ThemeProvider } from 'react-css-themr';

const contextTheme = {
  CbButton: require('./themes/button.css'),
  CbDataList: require('./themes/dataList.css'),
};

ReactDOM.render(
  <ThemeProvider theme={contextTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
