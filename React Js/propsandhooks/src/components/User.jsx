import React from 'react'
import Course from './Course'

const User = ({udata,gouthm}) => {
    // console.log(props.udata.name)
    console.log(udata)
    let {name,age,course} =udata
  return (
    <>
    <div class="card m-3 w-100 ">
  <div class="card-body">
  <div>User {name}</div>
    <p>age : {age} {gouthm}</p>
    <Course mycourse={course}   />
  </div>
</div>
    
   
   
    </>
  )
}

export default User

