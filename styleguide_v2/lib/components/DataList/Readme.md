DataList (default):
`````
const data = ['Data 1', 'Data 2', 'Data 3'];
<DataList data={data} />
`````
DataList (no data):
`````
<DataList />
`````

DataList (Custom Styles):
`````
const custom = require('./customStyles.css');

const data = ['Visa', 'Paypal', 'Debit Card'];
<DataList data={data} theme={custom} buttonPrefix="Pay with"/>
`````