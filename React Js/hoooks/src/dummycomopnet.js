import {useState} from 'react'


function App() {
//  let [i,fun] = useState(0)

console.log("App componnent render")
const [value,setValue]  = useState(0)
const[username,setUsername] = useState("Guest")
 

  // let i  = 0;

  // function inc(){
    
  //   i = i +1
  //   fun(i)
  //   console.log(i)

  // }
  // function dec(){
    
  //   i = i -1
  //   fun(i)
  //   console.log(i)

  // }

 return (
  <>
  i value is {value}
  <h1> {username}</h1>
  <button onClick={()=>{setValue(value+1)}} >Increment</button>
  <button onClick={()=>{setValue(value-1)}} >Decrement</button>
  <button onClick = {()=>{setUsername("Karthik")}} >Login </button>
  </>
 )
}

export default App;
