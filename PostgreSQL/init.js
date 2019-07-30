
const express = require('express');
const app = express();
const bodyParser = require("body-parser");

const customers = require('./cont'); 
var routes = require('./index');


app.use(bodyParser.json());
app.get('/', routes.index);
app.get('/cont', customers.list);
app.post('/cont/add', customers.add);


app.listen(4000, function () {
    console.log('Server is running.. on Port 4000');
});

console.log("Here!")