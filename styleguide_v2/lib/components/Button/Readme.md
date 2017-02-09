Button (default)
``````
<div>
    <Button label="Default Button"/>
    <Button label="Secondary Button" type="secondary"/>
    <Button label="Minor Button" type="minor" />
</div>
``````

Button (Custom Amazon Theme).
``````
const custom = require('./customStyles.css');
<div>
    <Button theme={custom} label="Default Button"/>
    <Button theme={custom} type="secondary" label="Secondary Button"/>
    <Button theme={custom} type="minor" label="Minor Button"/>
</div>
``````