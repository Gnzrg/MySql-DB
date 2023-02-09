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
      <div className="container-fluid row w-100">
        <div
          className="col-md-3 bg-secondary d-flex flex-column gap-3 pt-3"
          style={{ height: 1100 }}
        >
          <div className="row">
            <div className="col-md-3 fs-3 text-light">
              <i class="bi bi-list-nested"></i>
            </div>
            <div className="col-md-6">
              <NavLink
                to="/"
                className=" text-decoration-none  text-light fs-3"
              >
                Dashboard
              </NavLink>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 fs-3 text-light">
              <i class="bi bi-cart"></i>
            </div>
            <div className="col-md-6">
              <NavLink
                to="/products"
                className=" text-decoration-none  text-light fs-3"
              >
                Products
              </NavLink>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 fs-3 text-light">
              <i class="bi bi-tags"></i>
            </div>
            <div className="col-md-6">
              <NavLink
                to="/category"
                className=" text-decoration-none  text-light fs-3"
              >
                Category
              </NavLink>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 fs-3 text-light">
              <i class="bi bi-people"></i>
            </div>
            <div className="col-md-6">
              <NavLink
                to="/users"
                className=" text-decoration-none text-light fs-3"
              >
                Users
              </NavLink>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 fs-3 text-light">
              <i class="bi bi-list"></i>
            </div>
            <div className="col-md-6">
              <NavLink
                to="/menu"
                className=" text-decoration-none  text-light fs-3"
              >
                Menu
              </NavLink>
            </div>
          </div>
          {/* <ul className="list-unstyled ">
            <li className="pt-3">
              <NavLink
                to="/"
                className=" text-decoration-none  text-light fs-3"
              >
                Dashboard
              </NavLink>
            </li>
            <li className="pt-3">
             
            </li>
            <li className="pt-3">
             
            </li>
            <li className="pt-3 fs-3 text-light ">
              <div>
              
              
              </div>
            
            </li>
            <li className="pt-3">
           
            </li>
          </ul> */}
        </div>
        <div className="col-md-9">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
