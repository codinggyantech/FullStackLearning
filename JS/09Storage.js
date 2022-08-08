/**
 * Local Storage : setItem , getItem ,clear
 * Session Storage : setItem , getItem ,clear
 * 
 * 
 * //set item 
 * localStorage.setItem('key','value')
 * localStorage.getItem('key')
 * localStorage.clear()
 * 
 * 
 */

// document.getElementById("loggedin").innerHTML = sessionStorage.getItem("username")

let data = [];
function clickme(){
    let frd = document.getElementById("frds").value 
    data.push(frd)
console.log(data)
objtostring = JSON.stringify(data)

localStorage.setItem("frds",objtostring)
}


function databack (){
   let data = localStorage.getItem("frds")
   stringtoobj = JSON.parse(data)
   console.log("data back",data,typeof(data))
   console.log("data back",stringtoobj,typeof(stringtoobj))
}
databack()