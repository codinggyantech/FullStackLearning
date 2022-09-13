
const express = require('express')
const  routes  = require('./routes/productroutes')
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
const app = express()
const PORT = 9000
//Express config:
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));

//Mongo DB config:
//Configuration for the Database
mongoose.connect("mongodb://127.0.0.1:27017/Products",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
   
}).then(()=>{
    console.log('Connected to MongoDB');
})
//Models and Schema:
/// Schema for products:

 


app.get("/",(req,res)=>{
    res.send("<h1>Welcome to the Basic Express Server</h1>")
})

//Routing of my app:
app.use("/api",routes)


app.listen(PORT,()=>{
    console.log(`the server is running on port ${PORT}  http://localhost:${PORT}`)
})