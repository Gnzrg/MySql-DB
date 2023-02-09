import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import CreateCAtegory from "./CreateCAtegory";

export default function AdminCategory() {
  const [catData, setCatdata] = useState([]);
  const [show, setShow] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8090/api/category")
      .then((res) => setCatdata(res.data.result));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:8090/api/category/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => setCatdata(data.result));
  };
  return show ? (
    <CreateCAtegory setShow={setShow} show={show} setCatdata={setCatdata} />
  ) : (
    <div>
      <div className="w-100 d-flex justify-content-end pt-2">
        <button className="btn btn-primary" onClick={() => setShow(!show)}>
          Create Category
        </button>
      </div>
      <table className="w-75">
        <thead>
          <tr>
            <th>№</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {catData.map((e, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{e.categoryName}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(e.categoryId)}
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
