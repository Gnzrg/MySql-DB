import React from 'react'

export default function AddProduct({handleChange}) {
  return (
    <div className='w-100 d-flex justify-content-center'>
        <div className='w-50 border rounded py-3 px-3' >
          <div className='d-flex justify-content-between'>
            <h2>Add Product</h2>
            <button onClick={handleChange} className="border border-white bg-white fs-3">  <i class="bi bi-x-square"></i></button>
          </div>
          <input className='form-control mt-3' placeholder='Product Name...'/>
          <input className='form-control mt-3' placeholder='Category Name...'/>
          <input className='form-control mt-3' type="number" placeholder='Category Name...'/>
          <input className='form-control mt-3' placeholder='Price...'/>
          <input className='form-control mt-3' type="number" placeholder='Discount percent'/>
          <select className='form-control mt-3'>
           <option>isTrending</option>
           <option>True</option>
           <option>True</option>
          </select>
          <button className='btn btn-primary mt-3' onClick={handleChange}>Add</button>
        </div>
        
    </div>
  )
}
