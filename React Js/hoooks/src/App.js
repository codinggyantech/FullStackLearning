import React, { useState } from 'react'
import Child from './components/Child'

const App = () => {
  // const [showchild,setShowchild]= useState(true)

  const [ loggedin,setloggedin ] = useState(true)




  return (
    <>
    

    {
      loggedin ? <> loggged in user  </> :<>please log in</>
    }


    { loggedin && <>
   <h1> Welcome to the React Dashboard</h1>
    
    </>}

    {loggedin || loggeinRole === 'admin' && <></>}
    {/* <div>App/Dashboard</div> */}
    {/* <button onClick={()=>setShowchild(!showchild)}>Toogle child componet</button> */}
{/* {
  showchild && <Child />
} */}
    </>
  )
}

export default App