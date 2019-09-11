const express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectID; 
var {Employee} = require('../model/Employee');

//Get All
//localhost:3000/employees/
router.get('/', (req, res) => {
    Employee.find((err, docs) => {
        if(!err){
            res.send(docs);
        }else{
            console.log('Error in Retrieving Employees :'+JSON.stringify(err, undefined,2));
        }
    });
});

//Get Using ID
router.get('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send('No Records with Given id : ${req.params.id}');
    }
    else{
        Employee.findById(req.params.id, (err,doc)=>{
            if(!err){
                res.send(doc);
            }else{
                console.log('Error in Retrieving Employee : '+JSON.stringify(err, undefined,2));
            }
        });
    }
});

//Insert
//localhost:3000/employees/
router.post('/', (req, res)=>{
    var emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    });
    emp.save((err, doc)=> {
        if(!err){
            res.send(doc);
        }else{
            console.log('Error in Employee Save :' +JSON.stringify(err, undefined, 2));
        }
    });
});
 


module.exports = router;