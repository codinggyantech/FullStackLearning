console.log("Welcome to the Clock")


function showTime(){
    let d = new Date();
    // console.log(d)
    // console.log("Getting hours",d.getHours())
    // console.log("Getting Minutes",d.getMinutes())
    // console.log("Getting Seconds",d.getSeconds())
    let hh = d.getHours();
    let mm = d.getMinutes();
    let ss = d.getSeconds()
    // console.log(hh,":",mm,":",ss)
    let time = `${hh}:${mm}:${ss}`
    // console.log(time)
    document.getElementById("displayTime").innerHTML = time;
  
}
showTime()
 let c = setInterval(showTime,1000)

