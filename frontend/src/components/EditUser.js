import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
export default function EditUser({ id }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [userType, setUserType] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8090/api/user")
      .then((res) => setUserData(res.data.result));
  }, []);
  const handleEdit = () => {
    fetch(`http://localhost:8090/api/user${id}`, {
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
  };

  userData.map((e) => {
    if (e.userId == id) {
      setFirstName(e.firstName);
      setUsername(e.username);
      setUserType(e.userType);
      setPassword(e.password);
      setLastName(e.lastName);
    }
  });
  return (
    <div>
      <div>
        <h2>Edit User</h2>
        <input
          className="form-control"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <input
          className="form-control"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <input
          className="form-control"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          className="form-control"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <select
          className="form-control"
          onChange={(e) => {
            setUserType(e.target.value);
          }}
        >
          <option value={userType}>{userType}</option>
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>
        <button onClick={handleEdit}>Add</button>
      </div>
    </div>
  );
}
