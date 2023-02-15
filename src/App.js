import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import Login from "./components/users/Login";
import Register from "./components/users/Register";
import ProductList from "./components/products/ProductList";
import ProductDetails from "./components/products/ProductDetails";
import Cart from "./components/carts/Cart";
import Checkout from "./components/checkouts/Checkout";
import Logout from "./components/users/Logout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
      <div className="App">
        <AppRoutes />
      </div>
  );
}

export default App;
