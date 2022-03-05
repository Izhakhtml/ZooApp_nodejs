const mongoose = require('mongoose');
const Employees = new mongoose.Schema({
    name:{type:String,required:true},
    role:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:String,required:true},
},
{
    timestamps:true
}) 
module.exports = mongoose.model("Employees",Employees);