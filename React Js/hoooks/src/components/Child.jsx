import React,{useEffect, useState} from 'react'


const Child = () => {
    const [value,setValue]= useState(0)
    const[data,setData]= useState(100)

    useEffect(()=>{
        //function body
console.log("use Efeect workd component came to scrren")

        return ()=>{
            (
                console.log("compment went away from screen")
            )
        } 

       
    },[value])



  return (
    <div>Child
        {value}
        {data}
        
        <button  onClick={()=>{setValue(value+1)}}>update value</button>
        <button  onClick={()=>{setData(data+1)}}>update data</button>
    </div>
    
  )
}

export default Child