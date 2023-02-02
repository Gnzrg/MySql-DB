import "./App.css";
import "react-bootstrap";
import AdminLayout from "./components/AdminLayout";
import AdminDashboard from "./components/AdminDashboard";
import AdminProducts from "./components/AdminProducts";
import { Routes, Route } from "react-router-dom";
import Users from "./components/Users";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<AdminLayout />}>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/products" element={<AdminProducts />} />
          <Route path="/users" element={<Users />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
