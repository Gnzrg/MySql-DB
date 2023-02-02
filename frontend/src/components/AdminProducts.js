import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function AdminProducts() {
  const [proData, setProData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8090/api/products")
      .then((res) => setProData(res.data.result));
  }, []);

  console.log(proData);
  return (
    <div>
      <h2>Products</h2>
      {proData.map((e) => {
        return (
          <div>
            <h3>{e.productName}</h3>
            <img src={e.img} alt="" />
          </div>
        );
      })}
    </div>
  );
}
