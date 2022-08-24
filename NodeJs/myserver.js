const http = require("http");

//create a server

http.createServer((request ,response)=>{
    response.writeHead(200,{'Content-Type': 'text/html'})
    response.writeHead(200,{'UserName': 'Bablu'})
    response.write("Welcome to the Server!");
    response.end()

}).listen(8999,()=>{
    console.log("Server listining on 8080")
})

