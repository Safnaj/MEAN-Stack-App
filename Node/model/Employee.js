const mongoose = require('mongoose');

var Employee = mongoose.model('Employee',{
    name: {type: String},
    position: {type: String},
    office: {type: String},
    salary: {type: Number}
},'emp');

module.exports = {Employee};