import React from "react";

export default function CreateUser({ show }) {
  return (
    <div className="border w-100 py-3 px-3 d-flex justify-content-center rounded">
      <div className="text-end">
        <button className="border border-white bg-white fs-3" onClick={show}>
          <i class="bi bi-x-square"></i>
        </button>
      </div>
      <div className="w-50 d-flex flex-column gap-3">
        <input className="form-control" placeholder="FirstName..." />
        <input className="form-control" placeholder="LastName..." />
        <input className="form-control" placeholder="Username..." />
        <input
          className="form-control"
          type="password    "
          placeholder="Password..."
        />
        <select className="form-control">
          <option value="0">Choose</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select>
        <button className="btn btn-primary w-25" onClick={show}>
          Create User
        </button>
      </div>
    </div>
  );
}
