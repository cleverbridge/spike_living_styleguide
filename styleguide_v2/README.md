# Styleguide V1

### How to develope themeable components
(see comments in the example source code)

#### "Flat component"
A "flat component" is a component which doesn't use another component inside. For example:
`````
const Foo = props => <div>I'm a simple component</div>
`````
If you want to make a "flat component" themeable you have to decorate it with the CSS higher-order-component.
`````
import React, { PropTypes } from 'react';
import CSS from 'hoc/Css';  // Import the higher order component

import styles from './button.css'; // Import the default styles

const propTypes = {...};
const defaultProps = {...};

// Use the styleName prop instead of className to add classes to html elements
const Button = ({ type, label }) => (
    <button styleName={`button ${type}`}>
        {label}
    </button>
);

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;
export default CSS(Button, styles); // Export the component with the decorator
`````

#### "Nested component"
A "nested component" is a component which is seperated into more components, to reduce complexity or uses another component from this styleguide.
If you want to make a "nested component" themeable you have to decorate it **and** the child components with the CSS higher-order-component.
Also pass the styles prop to other components from this styleguide. (E.g: the Button component used in this example). 

Basic component:
`````
import React, { PropTypes } from 'react';
import CSS from 'hoc/Css';

import ListItem from './utils/ListItem'; // Import the helper component
import defaultStyles from './dataList.css'; // Import the default styles

const propTypes = {...};

const DataList = ({ data, styles }) => (
<div styleName="data-list">
    {data.map((d, i) => {
        // Enhance the child component with the decorator
        const CSSListItem = CSS(ListItem, defaultStyles);
        // Also pass the custom styles from the props to the child component
        return (<CSSListItem key={i} data={d} styles={styles} />)
    })}
</div>
)

DataList.propTypes = propTypes;
export default CSS(DataList, defaultStyles); // Export the component with the decorator
`````

Child component:
`````
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
        <Button label={`Link to ${data}`} type="secondary" styles={styles} />  // Simply pass the styles prop to the component
      </div>
    </div>
  )
};

ListItem.propTypes = propTypes;
export default ListItem;
`````