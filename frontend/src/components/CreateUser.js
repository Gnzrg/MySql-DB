import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
export default function CreateUser({ show, setShow, id }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [userType, setUserType] = useState("");
  const [password, setPassword] = useState("");
  // const [id, setId] = useState(id);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8090/api/user")
      .then((res) => setData(res.data.result));
  }, []);
  const Create = (id) => {
    data.map((e) => {
      if (id == e.userId) {
        fetch(`http://localhost:8090/api/user/${id}`, {
          method: "PUT" /* or PATCH */,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            username: username,
            password: password,
            userType: userType,
          }),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
      } else {
        fetch("http://localhost:8090/api/user", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            username: username,
            password: password,
            userType: userType,
          }),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
        setShow(!show);
      }
    });
  };
  return (
    <div className="border w-100 py-3 px-3 d-flex justify-content-center rounded">
      <div className="text-end">
        <button className="border border-white bg-white fs-3" onClick={show}>
          <i class="bi bi-x-square"></i>
        </button>
      </div>
      <div className="w-50 d-flex flex-column gap-3">
        <input
          className="form-control"
          // placeholder="FirstName..."
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          value={firstName}
        />
        <input
          className="form-control"
          // placeholder="LastName..."
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          value={lastName}
        />
        <input
          className="form-control"
          // placeholder="Username..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          value={username}
        />
        <input
          className="form-control"
          type="password    "
          // placeholder="Password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <select
          className="form-control"
          onChange={(e) => {
            setUserType(e.target.value);
          }}
          value={userType}
        >
          <option value="0">Choose</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
        <button className="btn btn-primary w-25" onClick={Create}>
          Create User
        </button>
      </div>
    </div>
  );
}
