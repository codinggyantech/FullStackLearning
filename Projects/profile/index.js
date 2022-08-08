/// to add a user:
function addUser(){
    let name = document.getElementById("name").value;
    let desc = document.getElementById("desc").value;
    let userdata ={
        "name":name,
        "desc":desc,
    }
localStorage.setItem("username",JSON.stringify(userdata))
    console.log("add user works",userdata,typeof(userdata))
}