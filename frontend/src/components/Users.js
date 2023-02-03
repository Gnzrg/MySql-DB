import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import CreateUser from "./CreateUser";
// import UserEdit from "./EditUser";
export default function Users() {
  const [userData, setUserData] = useState([]);
  const [show, setShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [userId, setUserId] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:8090/api/user")
      .then((res) => setUserData(res.data.result));
  }, []);
  const handleShow = () => {
    setShow(!show);
  };
  const Delete = (id) => {
    fetch(`http://localhost:8090/api/user/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  const Edit = (id) => {
    setUserId(id);
    setIsEdit(!isEdit);
    setShow(true);
  };
  return show ? (
    <CreateUser id={userId} show={handleShow} setShow={setShow} />
  ) : (
    <div>
      <div className="w-100 d-flex justify-content-end py-2">
        <button className="btn btn-primary " onClick={handleShow}>
          Create User
        </button>
      </div>
      <table className="w-100">
        <thead>
          <tr>
            <th>№</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>User Type</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((e, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{e.firstName}</td>
                <td>{e.lastName}</td>
                <td>{e.userName}</td>
                <td>{e.userType}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => Delete(e.userId)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => {
                      Edit(e.userId);
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
