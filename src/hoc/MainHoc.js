import React, { createContext, useEffect, useState } from 'react'
import Header from '../header/Header'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from '../footer/Footer';
import { useLocation } from 'react-router-dom';
import useAuth from '../shared/hooks/useAuth';

export const cartContext = createContext();

export default function MainHoc(props) {
  const { user, cartCount, cartAmount, isAuth } = useAuth();

  const location = useLocation();
  const [route, setRoute] = useState(location.pathname);
  const [cart_count, setCartCount] = useState(cartCount || 0);
  const [cart_total_amount, setCartTotalAmount] = useState(cartAmount || 0);

  useEffect(() => {
    setRoute(location.pathname);
  }, [location.pathname]);

  const cartData = {
    cartCount: cart_count, 
    setCartCount: setCartCount, 
    cartTotal: cart_total_amount, 
    setCartTotal: setCartTotalAmount
  }

  return (
    <div>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <cartContext.Provider value={cartData}>
          <Header />

          { props.children }
        </cartContext.Provider>
        
        <Footer />
    </div>
  )
}
