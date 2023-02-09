import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateMenu from "./CreateMenu";

export default function AdminMenu() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8090/api/menu")
      .then((res) => setData(res.data.result));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:8090/api/menu/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => setData(data.result));
  };

  console.log(data);
  return show ? (
    <CreateMenu show={show} setShow={setShow} setData={setData} />
  ) : (
    <div>
      <div className="w-100 pt-3 d-flex justify-content-end">
        <button className="btn btn-primary" onClick={() => setShow(!show)}>
          Add Menu
        </button>
      </div>
      <table className="w-100 ">
        <thead>
          <tr>
            <th>№</th>
            <th>Menu Name</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, index) => {
            return (
              <tr>
                <td className="pt-2">{index + 1}</td>
                <td className="pt-2">{e.menuName}</td>
                <td className="pt-2">{e.link}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(e.id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button className="btn btn-warning">Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
