import React, { useEffect, useState } from 'react'
import pokemon from 'pokemon'
const Home = () => {
  console.log(pokemon)
  const [pokedata,setPokedata] = useState([])

  useEffect(()=>{
    let data = pokemon.all()
  console.log("data",data)
  setPokedata(data)
  },[])
  // 
  return (
    <div>Homehi {pokedata?.map((e,index)=>{
      return(
        <div key={index}>
      <h1>{e}</h1>
        </div>
      )
    })}</div>

  )
}

export default Home