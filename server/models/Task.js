var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var task = new Schema({  

    _id:{type:String,require:true},
    name: {type:String, require:true},
    description:{type:String, require:true},
    status:{type:String, require:false},
    comment:{type:Array, require:false},
    belongTo:{type:Array,require:false}
});


module.exports = mongoose.model('Task',task);