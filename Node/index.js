const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const {mongoose} = require('./db.js');
var EmployeeController = require('./controllers/EmployeeController.js');

var app = express();
app.use(bodyParser.json());

//Allows Frontend Server URL
app.use(cors({origin: 'http://localhost:4200'}));

app.listen(3000,() => console.log('Server Started at port : 3000'));

//API url returns controller
app.use('/employees', EmployeeController);

