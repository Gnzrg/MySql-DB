import axios from "axios";
import React, { useState } from "react";

export default function AddProduct({ handleChange }) {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const Create = () => {
    fetch("http://localhost:8090/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        productName: productName,
        price: price,
        img: img,

        /* other product data */
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="w-100 d-flex justify-content-center">
      <div className="w-50 border rounded py-3 px-3">
        <div className="d-flex justify-content-between">
          <h2>Add Product</h2>
          <button
            onClick={handleChange}
            className="border border-white bg-white fs-3"
          >
            {" "}
            <i class="bi bi-x-square"></i>
          </button>
        </div>
        <input
          className="form-control mt-3"
          placeholder="Product Name..."
          onChange={(e) => {
            setProductName(e.target.value);
          }}
        />
        <input className="form-control mt-3" placeholder="Category Name..." />
        <input
          className="form-control mt-3"
          type="number"
          placeholder="Category Name..."
        />
        <input
          className="form-control mt-3"
          placeholder="Price..."
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <input
          className="form-control mt-3"
          type="number"
          placeholder="Discount percent"
        />
        <input
          type="file"
          className="form-control mt-3"
          onChange={(e) => {
            console.log(e.target.value);

            const url = "https://api.cloudinary.com/v1_1/lwvom2iu/upload";
            const formData = new FormData();

            let file = e.target.files[0];
            formData.append("file", file);
            formData.append("api_key", "384825931744178");
            formData.append("folder", "E-Commerce");
            formData.append("upload_preset", "lwvom2iu");

            axios.post(url, formData).then((res) => {
              setImg(res);
            });
          }}
        />
        <select className="form-control mt-3">
          <input />
          <option>isTrending</option>
          <option>True</option>
          <option>True</option>
        </select>
        <button className="btn btn-primary mt-3" onClick={Create}>
          Add
        </button>
      </div>
    </div>
  );
}
