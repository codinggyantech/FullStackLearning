const express = require("express");
const { request } = require("http");
const path = require("path");
const app = express();
//static middleware
app.use(express.static(path.join(__dirname, "public" )))

app.get("/home", (req, res) =>{
    res.send("<h1>HOme page </h1>")
})

const middleware =  (req,res,next)=>{
    if(req.query.loggedin == 10){
        next();
    }
    
        res.send(403).json({
            error: "Unauthorized Person Permission denied",

        message: "You are not logged in. Please login"
        })
   


}

app.get("/about",middleware, (req, res) =>{
    // console.log(req.query.loggedin)
    res.send("<h1>About Page </h1>")
})

//middleware
app.use((req,res,next)=>{
    res.send("<h1>Page Not Found</h1>");

})

app.listen(8080,()=>{
    console.log("Listening on port 8080");
})