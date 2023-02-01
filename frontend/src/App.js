import "./App.css";
import "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminHeader from "./components/adminHeader";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8090/api/menu")
      .then((res) => setData(res.data.result));
  }, []);
  console.log(data);
  return (
    <div className="App">
      <AdminHeader data={data} />
    </div>
  );
}

export default App;
