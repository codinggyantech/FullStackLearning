const express = require('express');
const path = require('path');
const app = express();



app.get("/", function(req, res){
// res.send('Getting request done...')
res.sendFile(path.join(__dirname, 'web/index.html'));
})

app.post("/", function(req, res){


    res.send('Posting request done')
})
app.put("/", function(req, res){
    
    res.send('You are psoting request done')
})
app.delete("/", function(req, res){
    res.send('Delte sussces')
})



app.listen(4545,()=>{
    console.log('Listening on port 4545');
})