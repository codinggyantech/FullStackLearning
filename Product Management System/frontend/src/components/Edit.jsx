import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
  
  const {id} = useParams()
 
 
  const navigate =  useNavigate()
  
  let initialState = {
    "id":1,
    "name":"",
    "desc":"",
    "category":"",
    "price":"",
    "img":"",
  }
  const[formData,setFormData] = useState(initialState)
  const getProduct = (id)=>{
    
    axios.get(`http://localhost:9000/api/products/${id}`)
    .then((resp)=>{console.log(resp)
      setFormData(resp.data.product[0])
    
    
    })
    .catch(e=>console.log(e))

  }
 
  console.log(formData)

  useEffect(()=>{
    getProduct(id)
  },[])
  
  const handleChange =(e)=>{
    setFormData({...formData,[e.target.name] :e.target.value})
  
  }
  
  const updateProduct =(id)=>{
    console.log(formData)
  
    axios.put(`http://localhost:9000/api/products/${id}`,formData)
    .then((resp)=>{alert("product Updated")
    navigate("/")
  })
    .catch(e=>console.log(e))
  }
  return (
    
     
      <div className="container mt-4">
        <h1 className='mt-2'>Edit product</h1>
        <div>
          <div class="form-floating mb-3">
            <input
              type="text"
              name='name'
              value={formData.name}
              onChange={(e)=>handleChange(e)}
              class="form-control"
              placeholder="name" />
            <label for="floatingInput">Name</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              name='desc'
              value={formData.desc}
              onChange={(e)=>handleChange(e)}
              class="form-control"
              placeholder="name" />
            <label for="floatingInput">Desciption</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              name='category'
              value={formData.category}
              onChange={(e)=>handleChange(e)}
              class="form-control"
              placeholder="name" />
            <label for="floatingInput">Category</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="Number"
              name='price'
              value={formData.price}
              onChange={(e)=>handleChange(e)}
              class="form-control"
              placeholder="Price" />
            <label for="floatingInput">Price</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              name='img'
              value={formData.img}
              onChange={(e)=>handleChange(e)}
              class="form-control"
              placeholder="Price" />
            <label for="floatingInput">Product image</label>
          </div>
          <div class="form-floating mb-3">
            <button onClick={()=>updateProduct(id)}>Update product</button>
          </div>
          
        </div>
      </div>
   
  )
}

export default Edit