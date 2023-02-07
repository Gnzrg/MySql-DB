import "./App.css";
import "react-bootstrap";
import AdminLayout from "./components/AdminLayout";
import AdminDashboard from "./components/AdminDashboard";
import AdminProducts from "./components/AdminProducts";
import AdminCategory from "./components/AdminCategory";
import { Routes, Route } from "react-router-dom";
import AdminMenu from "./components/AdminMenu";
import Users from "./components/Users";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<AdminLayout />}>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/products" element={<AdminProducts />} />
          <Route path="/users" element={<Users />} />
          <Route path="/category" element={<AdminCategory />} />
          <Route path="/menu" element={<AdminMenu/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
