import React from "react";

export default function AdminHeader({ data }) {
  return (
    <div className="container-fluid bg-secondary d-flex w-100">
      <div className="col-md-6"></div>
      <div className="nav col-md-6">
        <ul className="d-flex list-unstyled gap-5 align-items-center">
          {data.map((e) => {
            return <li>{e.menuName}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
