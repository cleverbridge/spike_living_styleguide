Notification
``````
<div>
    <Notification>
        Ich bin eine default Notification! Yo!
    </Notification>
    
    <Notification type="success">
        Ich bin erfolgreich!
    </Notification>
    
    <Notification type="error">
        Ich bin blöd!
    </Notification>
</div>
``````

Notification custom styles
``````
const custom = require('./customStyles.css');
<div>
    <Notification styles={custom}>
        Ich bin eine default Notification! Yo!
    </Notification>
    
    <Notification type="success" styles={custom}>
        Ich bin erfolgreich!
    </Notification>
    
    <Notification type="error" styles={custom}>
        Ich bin blöd!
    </Notification>
</div>
``````