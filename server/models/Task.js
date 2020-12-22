var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var task = new Schema({  

    _id:{type:String,require:true},
    name: {type:String, require:true},
    description:{type:String, require:true},
    status:{type:String, require:false},
    comments:[{username:String,comment:String}],
    belongTo:[String]
});


module.exports = mongoose.model('Task',task);