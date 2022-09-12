import React, { useState } from 'react'

const Contact = () => {
const[ name,setName] = useState("")
const[pwd,setPwd] = useState("")
const[state,setState] = useState("")

console.log(state)
function login(){
    console.log(name,pwd)
    //u can call backend api to check details
}

  return (
    

<>
<input type="text" name="" id=""  onChange={(e)=>setName(e.target.value)}/>
<input type="password" name='' id=''onChange={(e)=>setPwd(e.target.value)}/>
<select onChange={(e)=>setState(e.target.value)}>
    <option defaultValue="">Select</option>
    <option value="HR">HR</option>
    <option value="AP">Ap</option>
    <option value="TS">TS</option>
</select>


<button onClick={login}>Login</button>

<form onSubmit={(e)=> {
e.preventDefault()
login()
}}>
<input type="text" name="" id=""  onChange={(e)=>setName(e.target.value)}/>
<input type="password" name='' id=''onChange={(e)=>setPwd(e.target.value)}/>
<button type='submit'>Submit</button>
</form>

</>


  )
}

export default Contact