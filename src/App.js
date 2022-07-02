import "./styles.css";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Booking } from "./pages/Booking";
import { AddProduct } from "./pages/AddProduct";
import { EditProduct } from "./pages/EditProduct";
import { UserBookings } from "./pages/UserBookings";
import { Admin } from "./pages/Admin";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import "antd/dist/antd.css";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/userbookings" element={<UserBookings />} />
          <Route path="/booking/:productId" element={<Booking />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/editproduct/:productId" element={<EditProduct />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export function ProtectedRoute(props) {
  if (localStorage.getItem("user")) {
    return <Outlet {...props} />;
  } else {
    return <Navigate to="/login" />;
  }
}
