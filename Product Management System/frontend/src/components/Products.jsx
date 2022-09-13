import axios from 'axios'
import React, { useEffect,useState } from 'react'
import Product from './Product'
const Products = () => {
  const[products,setProducts] = useState([])

  const getProducts = ()=>{
    axios.get("http://localhost:9000/api/products")
    .then((resp)=>{console.log(resp)
    setProducts(resp.data.products)
    console.log(products)
    })
    .catch(e=>console.log(e))

  }
useEffect(()=>{
  getProducts()
},[])

  return (
    <>
    
    {
      products.length<=0?<>No Products to Show </>:
      <>
    <div className='d-flex flex-wrap'>
    {
        products?.map((product,index)=><><Product product={product} key={index}/></>)
      }
    </div>
      </>
    }
    
    </>
  )
}

export default Products