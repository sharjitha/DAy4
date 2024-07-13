const express=require('express');
const app=new express();
const PORT=4000;
const employeeModel=require('./model/employeeData')
require('./connection');
//to fetch the movie data
app.get('/employees',async(req,res)=>{
    try{
        const data= await employeeModel.find();
        res.send(data)
    } catch(error) {
        console.log(error)
    }
})
app.listen(PORT,()=>{
    console.log('server is running on PORT 5000')
})