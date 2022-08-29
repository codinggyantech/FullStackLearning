const { application } = require('express');
const express = require('express');
const path = require('path');


//Ininitailze the application
const app = express();

// Application Router 

app.get("/", (req,res)=>{
    // res.send("Welcom express server updating now live ")
    // console.log(__dirname+".\webfiles\home.html")
    // res.sendFile("./webfiles/home.html")
    res.sendFile(path.join(__dirname, 'webfiles/home.html'));
})
app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname, 'webfiles/about.html'));
})



//Listing to the port:
app.listen(9090,()=>{
    console.log('Listening on port 9090');
})

