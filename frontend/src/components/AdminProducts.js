import React from "react";
import axios from "axios";
import AddProduct from "./AddProduct";
import { useState, useEffect } from "react";

export default function AdminProducts() {
  const [proData, setProData] = useState([]);
  const [add, setAdd] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8090/api/products")
      .then((res) => setProData(res.data.result));
  }, []);
  const handleChange = () => {
    setAdd(!add);
  };
  const handleDelete = (id) => {
    fetch(`http://localhost:8090/api/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  console.log(proData);
  return add ? (
    <AddProduct handleChange={handleChange} />
  ) : (
    <div>
      <div className="w-100 d-flex justify-content-end">
        <button className="btn btn-primary" onClick={handleChange}>
          Add Product
        </button>
      </div>
      <h2>Products</h2>
      <div className="d-flex flex-wrap ">
        {proData.map((e) => {
          return (
            <div className="col-md-3 border rounded">
              <div>
                <img src={e.img} alt="" />
              </div>
              <h3>{e.productName}</h3>
              <h5>{e.categoryName}</h5>
              <div className="d-flex justify-content-between">
                <div className="d-flex gap-2">
                  <h6>{e.price}</h6>
                  <h6 className="bg-success border rounded text-light px-2">
                    {e.discount}% Sale
                  </h6>
                </div>

                {e.isTrending ? (
                  <h6 className="text-success">Trending</h6>
                ) : (
                  <h6 className="text-danger">Not Trending</h6>
                )}
              </div>
              <div className="w-100 d-flex justify-content-between ">
                <button className="w-25 btn btn-warning">Edit</button>
                <button
                  className="w-25 btn btn-danger"
                  onClick={() => handleDelete(e.productId)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
