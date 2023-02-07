import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
export default function AdminLayout() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8090/api/category")
      .then((res) => setData(res.data.result));
  }, []);
  console.log(data);
  return (
    <div>
      <div className="container-fluid bg-secondary d-flex justify-content-evenly w-100 align-items-center">
        <h2 className="fw-bold text-light">Admin Page</h2>
        <div className="input-group w-50">
          <input placeholder="Search..." className="form-control bg-white" />
          <button className="btn bg-white">
            <i class="bi bi-search"></i>
          </button>
        </div>
        <button className="btn  btn-warning text-white">Log Out</button>
      </div>
      <div className="container-fluid d-flex w-100">
        <div className="col-md-3 bg-secondary " style={{ height: 1100 }}>
          <ul className="list-unstyled ">
            <li className="pt-3">
              <NavLink
                to="/"
                className=" text-decoration-none  text-light fs-3"
              >
                Dashboard
              </NavLink>
            </li>
            <li className="pt-3">
              <NavLink
                to="/products"
                className=" text-decoration-none  text-light fs-3"
              >
                Products
              </NavLink>
            </li>
            <li className="pt-3">
              <NavLink
                to="/category"
                className=" text-decoration-none  text-light fs-3"
              >
                Category
              </NavLink>
            </li>
            <li className="pt-3">
              <NavLink
                to="/users"
                className=" text-decoration-none  text-light fs-3"
              >
                Users
              </NavLink>
            </li>
            <li className="pt-3">
              <NavLink
                to="/menu"
                className=" text-decoration-none  text-light fs-3"
              >
                Menu
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="col-md-9">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
