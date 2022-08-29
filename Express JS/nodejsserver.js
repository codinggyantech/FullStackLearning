const http = require('http');

http.createServer((req,res)=>{
    if(req.url==="/" && req.method=="GET" ){
        console.log(req.method)
        res.write("hi serverresp")
        res.end()
    }

}).listen(5555,()=>{
    console.log('Listening on port:5555');
})