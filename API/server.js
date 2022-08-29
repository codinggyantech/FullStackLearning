const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//Configuration for express server
const app = express();
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));

//Configuration for the Database
mongoose.connect("mongodb://127.0.0.1:27017/Employees",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
}).then(()=>{
    console.log('Connected to MongoDB');
})

/// Schema for Employess:
 const employeeSchema = new mongoose.Schema({
    eid:Number,
    ename: String,
    dept: String
 })

 // Modal forEmployees
 const employees = new mongoose.model("Employees",employeeSchema)
 

//Get all Request
app.get("/api/employees",async(req,res) =>{
let allemp = await employees.find()

    res.status(200).json({
        status: "success",
        employeess: allemp
    })
})

// Get Single Employee
app.get("/api/employees/:id",async(req,res) =>{
let allemp = await employees.find({_id:req.params.id})

    res.status(200).json({
        status: "success",
        employeess: allemp
    })
})

//Create a new employee
app.post("/api/employees", async (req,res) =>{
    // var employees = req.body;
    let emp =  await employees.create(req.body)
    // console.log(employees)
    res.status(201).json({
        status: "success",
        employees: emp,
        message: "Employee Created",
    })
})

// updating the emp 
app.put("/api/employees/:id", async (req,res)=>{
    let emp = await employees.findById(req.params.id)
    if(!emp){
        return res.status(404).json({
            message: "Employee Not Found",
        })
    }
    let empUpd = await employees.findByIdAndUpdate(req.params.id,req.body,{

        new: true,
        runValidators: true

    })
    res.status(201).json({
        status: "success",
        messages:"Employee Upldated",
        emp: empUpd
    })
})



//Deleting the Employee
app.delete("/api/employees/:id" ,async(req,res)=>{
    let emp = await employees.deleteOne({_id:req.params.id})
    if(emp.deletedCount ==0){
        return  res.status(404).json({  
            status: "NOT Found",
        messages    : "Such emp dosn't exist",
           
        })
        
    }
    res.status(200).json({  
        status: "success",
        emp: emp
    })

})


app.listen(9898,()=>{
    console.log('Listening on port 9898');
})