/**
 * Events in JS:
 * 1. Mouse Events
 * 2. Keyboard Events
 * 3. Windows Event
 */
console.log("Events")

//Defining a click me function:
// Window function  document functuion 
let pageLoaded = ()=>{
    console.log("your page loaded")
}

function clickme(){
    console.log("Click funtion is called")
}
function clickme2(){
    alert(
        "you have double clicked the button"
    )
}

// selecting the div
let mydiv = document.getElementById("div")

function fun1(){
    console.log("MOuse eneted the div")
    mydiv.innerHTML = "mouse on div"
    mydiv.setAttribute("width","300px !important")
}
function fun2(){
    console.log("MOuse left the div")
    mydiv.innerHTML = "mouse out of div"
    mydiv.removeAttribute("width")
}


let keyup = ()=>{
    // console.log("key is pressed")
    let mi = document.getElementById("name")
    console.log(mi.value)
}
let focu=()=>{
console.log("input in focut")
}
let blur =()=>{
console.log("input out of focus")
}


function valuechange(){
    let mi = document.getElementById("name")
    console.log(mi.value)
}