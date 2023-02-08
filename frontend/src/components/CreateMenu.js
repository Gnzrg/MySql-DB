import React from 'react'

export default function CreateMenu({show , setShow  , setData}) {
    function Create(event) {
event.preventDefault();
const data = {
    menuName : event.target.menuName.value,
    link : event.target.menuLink.value,
    position:event.target.position.value
}
fetch("http://localhost:8090/api/menu", {
    method :"POST",
    headers : {"Content-Type" : "application/json"},
    body :JSON.stringify(data)
}).then((res) => res.json())
  .then((data) => setData(data.result))
  setShow(false)
    }
  return (
    <div className='w-75 d-flex flex-column gap-3 '>
        <div className='d-flex  justify-content-end'>
            <button onClick={() => setShow(false)} className="border border-white bg-white">
            <i class="bi bi-x-lg"></i>
            </button>
        </div>
        <div >
            <form onSubmit={Create}>
              <input className='form-control ' placeholder='Menu Name...' name="menuName"/>
              <input className='form-control mt-3' placeholder='Menu Link...' name="menuLink"/>
              <input className='form-control mt-3' placeholder='Menu Position...' name="position"/>
              <button type='submit' className="btn btn-primary w-25 mt-3">Create Menu</button>
            </form>
        </div>
    </div>
  )
}
