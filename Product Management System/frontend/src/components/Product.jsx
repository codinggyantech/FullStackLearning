import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Product = ({product}) => {
  console.log(product)
const navigate = useNavigate()
const deleteProduct = (id)=>{
  axios.delete(`http://localhost:9000/api/products/${id}`)
  .then((resp)=>{alert("Product Deleted")
  navigate("/random")
})
  .catch(e=>console.log(e))
}


  return (
    <>
    <div className="card m-3" style={{width: "18rem"}}>
  <img src={product.img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h2>{product.name}</h2>
    <p className="card-text">{product.desc}.</p>
    <span><b>Rs:{product.price}/-</b></span>
    <span className='bg-warning p-2 rounded'>{product.category}</span>

    <div className='d-flex p-0 '>
    <button className='btn btn-info w-50' >
   <Link to={`/edit/${product._id}`}>Edit Product</Link>
    </button>
    <button className='btn btn-danger w-50' onClick={()=>deleteProduct(product._id)}>
      Delete Product
    </button>
    </div>
  </div>
</div>
    
    </>
  )
}

export default Product