const express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectID; 
var {Employee} = require('../model/Employee');

//localhost:3000/employees/

//Get All
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

//Update
router.put('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send('No Records found for the Given ID : ${req.params.id}');

    var emp = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    Employee.findByIdAndUpdate(req.params.id, {$set: emp},{new: true},(err,doc)=>{
        if(!err){
            res.send(doc);
        }else{
            console.log('Error in Employee Update :'+JSON.stringify(err, undefined, 2));
        }
    });
});

//Delete
router.delete('/:id', (req, res)=>{
    if(!ObjectId.isValid(req.params.id))
        return status(400).send('No Records with given ID : ${req.params.id}');
    
    Employee.findByIdAndRemove(req.params.id, (err, doc)=>{
        if(!err){
            res.send(doc);
        }else{
            console.log('Error in Employee Delete :'+JSON.stringify(err, undefined, 2));
        }
    })    
})
 


module.exports = router;