//importing the file module
const fs = require('fs');

//reading file
// console.log('1st line')

// fs.readFile("./abc.txt",(err,data)=>{
//     if(err){
//         console.log("Got Errror");
//         console.log(err);
//     }
//     else{
//         console.log("Got data");
//         console.log(data.toString());

//     }
// })


// console.log("program finish")

//write file
data = "hi new data inserting updating more"
console.log("1st line")
fs.writeFile("data.txt",data,(err)=>{
    console.log("Insdiefile sync")
    if(err){
        console.log("Got Errror");
        console.log(err);
    }
    else{
        console.log("Saved the data")
    }

})
console.log("program finish")
//append file
udata ="updaingt the file with previosue data"
// fs.appendFile("data.txt",udata,(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("data updated successfully"); 
//     }
// })

// delete file

// fs.unlink("abc.txt",(err)=>{
//     if(err){
//         console.log(err)

//     }
//     else{
//         console.log("Deleted the file")

//     }
// })