import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

export default CSS = (Composed, styles) => class CSS extends Component {
  render() {
    const combinedStyles = Object.assign({}, styles, this.props.styles);
    const Css = CSSModules(Composed, combinedStyles, { allowMultiple: true, errorWhenNotFound: false });
    return <Css {...this.props} styles={combinedStyles} />;
  }
};