const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db.js');
var EmployeeController = require('./controllers/EmployeeController.js');

var app = express();
app.use(bodyParser.json());

app.listen(3000,() => console.log('Server Started at port : 3000'));


app.use('/employees', EmployeeController);

