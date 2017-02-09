import React, { Component } from 'react';
import Button from '../../styleguide_v2/Button';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Welcome to React</h2>
        <p>
          To get started, edit <code>src/App.js</code> and save to reload.
          <br /><br />
          <Button label="From Styleguide with custom theme" />
          <br /><br />
          <Button label="Secondary" type="secondary" />
          <br /><br />
          <Button label="Minor :(" type="minor" />
        </p>
      </div>
    );
  }
}

export default App;
