import "./App.css";
import "react-bootstrap";
import AdminLayout from "./components/Admin/AdminLayout";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AdminProducts from "./components/Admin/AdminProducts";
import AdminCategory from "./components/Admin/AdminCategory";
import { Routes, Route } from "react-router-dom";
import AdminMenu from "./components/Admin/AdminMenu";
import Users from "./components/Admin/Users";

function App() {
  return (
    <div className="App bg-light">
      <Routes>
        <Route element={<AdminLayout />}>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/products" element={<AdminProducts />} />
          <Route path="/users" element={<Users />} />
          <Route path="/category" element={<AdminCategory />} />
          <Route path="/menu" element={<AdminMenu />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
