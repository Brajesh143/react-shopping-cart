import axios from "axios";
import React, { useEffect, useState } from "react";
import customToast from "../common/CustomToast";
import AddToWishlist from "./AddToWishlist";
import "./cart.css";
import CartUpdate from "./CartUpdate";
import RemoveCart from "./RemoveCart";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Cart() {
  const LOCAL_STORAGE_KEY = "user";
  var userLocalData = {
    id: '',
    name: '',
    email: '',
    token: ''
  };
  const localData = localStorage.getItem(LOCAL_STORAGE_KEY);
  if(localData != 'undefined') {
    var userLocalData = JSON.parse(localData);
  }

  const [user, setUser] = useState(userLocalData);
  const [carts, setCarts] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    getCartData();
  }, []);

  const getCartData = () => {
    let data = {
      user_id: user.id
    }

    axios.post('http://127.0.0.1:8000/api/cart-list', data)
    .then((res) => {
      if(res.status === 200) {
        let cartData = res.data.carts;
        setCarts(cartData);
        setCartCount(res.data.cart_count);
      }
    }).catch((err) => {
      customToast.error(err)
    })
  }


  return (
    <div class="container-fluid">
      <div class="row">
        <aside class="col-lg-9">
          <div class="card">
            <div class="table-responsive">
              <table class="table table-borderless table-shopping-cart">
                <thead class="text-muted">
                  <tr class="small text-uppercase">
                    <th scope="col">Product</th>
                    <th scope="col" width="120">
                      Quantity
                    </th>
                    <th scope="col" width="120">
                      Price
                    </th>
                    <th
                      scope="col"
                      class="text-right d-none d-md-block"
                      width="200"
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  {carts &&
                    carts.map((cart, key) => {
                      return (
                        <tr>
                          <td>
                            <figure class="itemside align-items-center">
                              <div class="aside">
                                <img
                                  src="https://i.imgur.com/1eq5kmC.png"
                                  class="img-sm"
                                  alt=""
                                />
                              </div>
                              <figcaption class="info">
                                {" "}
                                <Link to={`/product-details/${cart.product.id}`}>
                                  {cart.product.name}
                                </Link>
                                <p class="text-muted small">
                                  SIZE: L <br /> Brand: MAXTRA
                                </p>
                              </figcaption>
                            </figure>
                          </td>
                          <td>
                            <CartUpdate cart_data={cart} cart_id={cart.id} />
                          </td>
                          <td>
                            <div class="price-wrap">
                              {" "}
                              <var class="price">${cart.product.price * cart.qty}</var>{" "}
                              <small class="text-muted">
                                {" "}
                                ${cart.product.price} each{" "}
                              </small>{" "}
                            </div>
                          </td>
                          <td class="text-right d-none d-md-block">
                            {/* <WishList /> */}
                            <AddToWishlist />
                            <span> </span>
                            <RemoveCart cart_data={cart} />
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </aside>
        <aside class="col-lg-3">
          <div class="card mb-3">
            <div class="card-body">
              <form>
                <div class="form-group">
                  {" "}
                  <label>Have coupon?</label>
                  <div class="input-group">
                    {" "}
                    <input
                      type="text"
                      class="form-control coupon"
                      name=""
                      placeholder="Coupon code"
                    />{" "}
                    <span class="input-group-append">
                      {" "}
                      <button class="btn btn-primary btn-apply coupon">
                        Apply
                      </button>{" "}
                    </span>{" "}
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <dl class="dlist-align">
                <dt>Total price:</dt>
                {/* <dd class="text-right ml-3">$ {cartList.total}</dd> */}
              </dl>
              <dl class="dlist-align">
                <dt>Discount:</dt>
                <dd class="text-right text-danger ml-3">
                  {/* - $ {cartList.total - cartList.discountedTotal} */}
                </dd>
              </dl>
              <dl class="dlist-align">
                <dt>Total:</dt>
                <dd class="text-right text-dark b ml-3">
                  {/* <strong>$ {cartList.discountedTotal}</strong> */}
                </dd>
              </dl>
              <hr />{" "}
              <a
                href="#"
                class="btn btn-out btn-primary btn-square btn-main"
                data-abc="true"
              >
                {" "}
                Make Purchase{" "}
              </a>{" "}
              <a
                href="#"
                class="btn btn-out btn-success btn-square btn-main mt-2"
                data-abc="true"
              >
                Continue Shopping
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Cart;
