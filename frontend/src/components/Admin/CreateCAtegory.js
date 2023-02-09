import React from "react";
import { useState } from "react";
import axios from "axios";
export default function CreateCAtegory({ setShow, show, setCatdata }) {
  const [catName, setCatName] = useState("");
  const [catId, setCatId] = useState();

  const Create = () => {
    const TBody = {
      categoryName: catName,
      categoryId: catId,
    };

    // console.log(TBody);

    axios
      .post("http://localhost:8090/api/category", TBody)
      .then((res) => setCatdata(res.data.result));
    setShow(false);
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="w-25 d-flex flex-column gap-3 align-items-center">
        <div className="d-flex justify-content-between">
          <h2>Add Category</h2>
          <button
            className="border border-white bg-white fs-3"
            onClick={() => setShow(!show)}
          >
            <i class="bi bi-x-square"></i>
          </button>
        </div>

        <input
          className="form-control"
          placeholder="Category Name..."
          onChange={(e) => setCatName(e.target.value)}
        />
        <input
          className="form-control"
          type="number"
          placeholder="Category ID..."
          onChange={(e) => setCatId(e.target.value)}
        />
        <button className="btn btn-primary w-50" onClick={Create}>
          Add Category
        </button>
      </div>
    </div>
  );
}
