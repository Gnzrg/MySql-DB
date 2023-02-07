import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
export default function CreateUser({ show, setShow, id, selectedUser }) {
  const [check, setCheck] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8090/api/user")
      .then((res) => setData(res.data.result));
  }, []);
 

  function Check(event){
   if(event.target.password.value == event.target.rePassword.value){
    setCheck(true)
    setShow(!show)
    console.log(event.target.password.value );
   }
  }

  function Create(event) {
    event.preventDefault();
    const data = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      username: event.target.userName.value,
      password: event.target.password.value,
      rePassword: event.target.rePassword.value,
    };
    console.log(data)
    if(selectedUser){
      fetch(`http://localhost:8090/api/user/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
    else{
    fetch("http://localhost:8090/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    }
  check ? alert("Success")  : alert("Wrong password")
  }




  const style = {
    border: check ? "1px solid green" : "1px solid red",
  };

  return (
    <div className="border w-100 py-3 px-3 d-flex justify-content-center rounded">
      <div className="text-end">
        <button className="border border-white bg-white fs-3" onClick={show}>
          <i class="bi bi-x-square"></i>
        </button>
      </div>
      <form onSubmit={Create} className="w-50 d-flex flex-column gap-3">
        <div >
          <input
            className="form-control"
            placeholder="FirstName..."
            name="firstName"
            defaultValue={selectedUser && selectedUser.firstName}
          />
          <input
            className="form-control"
            placeholder="LastName..."
            name="lastName"
            defaultValue={selectedUser && selectedUser.lastName}
          />
          <input
            className="form-control"
            placeholder="Username..."
            name="userName"
            defaultValue={selectedUser && selectedUser.username}
          />
          <input
            className="form-control"
            type="password    "
            placeholder="Password..."
            name="password"
            defaultValue={selectedUser && selectedUser.password}
          />
          <input
            className="form-control"
            type="password"
            placeholder="Re-Password..."
            name="rePassword"
            defaultValue={selectedUser && selectedUser.rePassword}
            style={style}
          />
          <select
            className="form-control"
            defaultValue={selectedUser && selectedUser.userType}
            name="userType"
          >
            <option value="0">Choose</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
          <button className="btn btn-primary w-25" type="submit">
            Create User
          </button>
        </div>
      </form>
    </div>
  );
}
