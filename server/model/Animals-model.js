const mongoose = require('mongoose');
const Animals = new mongoose.Schema({
    name:{type:String,required:true},
    dateOfBirth:{type:String,required:true},
    cageNumber:{type:Number,required:true},
    gender:{type:String,required:true},
    type:{type:String,required:true},
},
{timestamps:true}
)
module.exports = mongoose.model("Animals",Animals);