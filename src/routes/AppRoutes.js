import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from '../components/carts/Cart'
import Checkout from '../components/checkouts/Checkout'
import { Blog } from '../components/pages/Blog'
import { Contact } from '../components/pages/Contact'
import { Home } from '../components/pages/Home'
import ProductDetails from '../components/products/ProductDetails'
import ProductList from '../components/products/ProductList'
import Login from '../components/users/Login'
import Logout from '../components/users/Logout'
import Register from '../components/users/Register'
import MainHoc from '../hoc/MainHoc';
import useAuth from '../shared/hooks/useAuth';

export default function () {
  return (
    <div>
        <BrowserRouter>
            <MainHoc>
                <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/sign-in" element={<Login /> } />
                  <Route path="/sign-up" element={<Register />} />
                  <Route path="/shop" element={<ProductList />} />
                  <Route path="/product-details/:id" element={<ProductDetails />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/logout" element={<Logout user={useAuth} />} />
                </Routes>
            </MainHoc>
        </BrowserRouter>
    </div>
  )
}
