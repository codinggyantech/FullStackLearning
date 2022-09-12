import React from 'react'
import { Link } from 'react-router-dom'
import { MyNavLinks } from '../siteData'
const NavBar = () => {

  
  return (
    <>
   <div className='nav'>
    {
      MyNavLinks.map((e )=><Link key={e.id} to={e.link}>{e.label}</Link>)
    }
   {/* <Link to="/">Home</Link> 
    <Link to='/about'>About</Link>
   <Link to="/contact">contact</Link> 
    <Link to='/services'>Services</Link> */}
   </div>
    </>
  )
}

export default NavBar