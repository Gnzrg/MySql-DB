import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
export default function AdminDashboard() {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8090/api/products")
      .then((res) => setProductData(res.data.result));
  }, []);
  return (
    <div>
      <table className="w-100">
        <thead>
          <tr>
            <th>№</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Trend</th>
          </tr>
        </thead>
        <tbody>
          {productData.map((e, index) => {
            return (
              <tr>
                <td className="py-3">{index + 1}</td>
                <td className="py-3">{e.productName}</td>
                <td className="py-3">{e.categoryName}</td>
                <td className="py-3">{e.price}</td>
                <td className="py-3">
                  {e.isTrending ? (
                    <button className="btn btn-success">Yes</button>
                  ) : (
                    <button className="btn btn-danger">No</button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
