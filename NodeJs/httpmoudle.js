const http = require("http")
const url = require("url")
const fs = require("fs")
let PORT = 9998
//Create a server 


let server = http.createServer( (req, res) => {
    // console.log(req)
    let urlOBJ = url.parse(req.url,true)
    console.log(urlOBJ)

// console.log(req.url)

//     res.write("<h1>Welcom to first file served by server </h>")
//     res.end()
        if(req.url =="/"){
        let homedata = fs.readFileSync("./website/home.html")

            // res.write("<h1>Welcom to HOME Page </h>")
            res.write(homedata)
            res.write("bye")
            res.end()
        }
        else if(req.url = "/about"){
            let about = fs.readFileSync("./website/about.html")
            res.write("<h1>Welcom to About Page </h>")
            res.write(about)
            res.write("<a href='/'> Go to home </a>")
            res.end()
        }
       
       
        
    }

);




server.listen(PORT,()=>{
    console.log("server started")
})