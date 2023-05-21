import { Route, Routes, Navigate } from "react-router-dom";

import HomePage from "./pages/Home";
import ShopPage from "./pages/Shop";
import CartPage from "./pages/Cart";
import ProductDetailsPage from "./pages/ProductDetails";
import CheckoutPage from "./pages/Checkout";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";

import Layout from "./components/Layout/Layout";
import PrivateRoute from "./components/Private-route/PrivateRoute";
import AllProducts from "./admin/AllProducts";
import AddProducts from "./admin/AddProducts";
import Dashboard from "./admin/Dashboard";
import Users from "./admin/Users";

import "./App.css";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to={"home"} />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />

        {/* <Route path="/checkout" element={<PrivateRoute />}>
          <Route path="/checkout" element={<CheckoutPage />} />
        </Route> */}

        <Route path="/*" element={<PrivateRoute />}>
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="dashboard/all-products" element={<AllProducts />} />
          <Route path="dashboard/add-product" element={<AddProducts />} />
          <Route path="dashboard/users" element={<Users />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
