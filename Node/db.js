const mongoose = require('mongoose');
const url = "mongodb://localhost:27017/MeanStack";

//DbConnection
mongoose.connect(url,{ useUnifiedTopology: true, useNewUrlParser: true}, (err)=>{
    if(!err){
        console.log('MongoDB Connection Succeeded..!');
    }else{
        console.log('Error in DB Connection : '+ err);
    }
});

module.exports = mongoose; 

//Video 29.33