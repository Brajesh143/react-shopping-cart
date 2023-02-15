import React from 'react'

export default function useAuth() {
    const LOCAL_STORAGE_KEY = "user";
    var userLocalData = {
      id: '',
      name: '',
      email: '',
      token: ''
    };

    var cartCount = 0;
    var cartAmount = 0;
    const LOCAL_STORAGE_KEY_CART = "cart_count";
    const LOCAL_STORAGE_KEY_CART_AMOUNT = "cart_amount";

    const localData = localStorage.getItem(LOCAL_STORAGE_KEY);
    const localCartCount = localStorage.getItem(LOCAL_STORAGE_KEY_CART);
    const localCartAmount = localStorage.getItem(LOCAL_STORAGE_KEY_CART_AMOUNT);

    if(localData != 'undefined') {
      var userLocalData = JSON.parse(localData);
      var cartCount = localCartCount;
      var cartAmount = localCartAmount;
    }
  
    return { user: userLocalData, cartCount: cartCount, cartAmount: cartAmount, isAuth: !!localData };
}
