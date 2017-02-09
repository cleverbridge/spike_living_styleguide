# Styleguide V1

### How to develope themeable components with `themr`

This component library uses [themr](https://github.com/javivelasco/react-css-themr) for easy theming and composition.

Export your component wrapped with `themr`, and provide a defaultTheme to access the theme via the theme prop.
The css classes can be accessed via `theme.CLASSNAME`. That's all!
`````
import React, { PropTypes } from 'react';
import { themr } from 'react-css-themr';

import defaultTheme from './button.css';

const propTypes = {...};

const defaultProps = {...};

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
`````

###Context Theming
Wrap your app with the `themr` theme provider and pass a global theme to style all components with one file.

``````
import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'react-css-themr';
import App from './app'

const contextTheme = {
  CbButton: require('./themes/button.css'),
  CbDataList: require('./themes/dataList.css')
};

const content = (
  <ThemeProvider theme={contextTheme}>
    <App />
  </ThemeProvider>
);

render(content, document.getElementById('app'));
``````