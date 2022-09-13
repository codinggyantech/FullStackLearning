import React from 'react'
import Products from './Products'

const Home = () => {
  return (
    <div className="container">
        <h1 className='mt-3 text-info'>Welcome to Our Store</h1>
        <hr />
        <Products/>
    </div>
  )
}

export default Home