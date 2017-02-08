Button Component.
``````
<div>
    <Button label="Default Button"/>
    <Button label="Secondary Button" type="secondary"/>
    <Button label="Minor Button" type="minor" />
</div>
``````

Custom Styles.
``````
const custom = require('./customStyles.css');
<div>
    <Button styles={custom} label="Default Button"/>
    <Button styles={custom} type="secondary" label="Secondary Button"/>
    <Button styles={custom} type="minor" label="Minor Button"/>
</div>
``````