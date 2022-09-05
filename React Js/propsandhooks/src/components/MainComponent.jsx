import User from "./User"

const  MainComponent =()=>{
    let myd = "NEW an"
let data = [
    {
        name:"Ram",
        age:22 ,
        course: "C"
    },
    {
        name:"Mohan",
        age:12 ,
        course: "CPP"
    },
    {
        name:"Rakes",
        age:42 ,
        course: "Javascript"
    },
    {
        name:"Mohan",
        age:12 ,
        course: "CPP"
    },
    {
        name:"Mohanumar mishtara",
        age:12 ,
        course: "CPP and Javascript"
    }
]

    return(
     <>
  {/* <User udata = {data[0]} />
  <User udata = {data[1]} />
  <User udata = {data[2]}/> */}
<div className="container flex ">
{ data.map((data)=><User udata={data}  gouthm = {myd} />)}



</div>
 
  
     </>
      
    
    )
  }

export default MainComponent