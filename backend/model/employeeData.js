const mongoose=require('mongoose');
const employeeSchema=mongoose.Schema({
    employeeName:String,
    employeeDepartment:String,
    experience:String,
    salary:Number
})
const employeeData=mongoose.model('movie',employeeSchema);
module.exports=employeeData