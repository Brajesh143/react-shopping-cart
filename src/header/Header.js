import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Logout from '../components/users/Logout';
import useAuth from '../shared/hooks/useAuth'
import "./header.css";
import Cart from "../components/carts/Cart";
import { cartContext } from '../hoc/MainHoc';
import axios from 'axios';
import ProductList from '../components/products/ProductList';

export default function () {
  const { user, cart_count, cart_amount, isAuth } = useAuth();
  const [search, setSearch] = useState('');
  const contextValue = useContext(cartContext);
  const contextCartCount = contextValue.cartCount;
  const contextCartTotal = contextValue.cartTotal;
  const navigate = useNavigate();

  const handleSearchInput = (e) => {
    setSearch(e.target.value);
  }

  const handleSearch = () => {
    let search_data = {
      keyword: search,
    }

    axios.post('http://127.0.0.1:8000/api/product-search', search_data)
    .then((res) => {
      if(res.status === 200) {
        let products = res.data.products.data;
        setSearch('');
        navigate('/shop');
      }
    }).catch((err) => {
      console.log(err);
    });
  }


  return (
    <div class="super_container">
      <header class="header">
        <div class="top_bar">
          <div class="container">
            <div class="row">
              <div class="col d-flex flex-row">
                <div class="top_bar_contact_item">
                  <div class="top_bar_icon">
                    <img
                      src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918577/phone.png"
                      alt=""
                    />
                  </div>
                  +91 9823 132 111
                </div>
                <div class="top_bar_contact_item">
                  <div class="top_bar_icon">
                    <img
                      src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918597/mail.png"
                      alt=""
                    />
                  </div>
                  <a href="mailto:fastsales@gmail.com">
                    contact@bbbootstrap.com
                  </a>
                </div>
                <div class="top_bar_content ml-auto">
                  <div class="top_bar_menu">
                    <ul class="standard_dropdown top_bar_dropdown">
                      <li>
                        <a href="#">
                          English<i class="fas fa-chevron-down"></i>
                        </a>
                        <ul>
                          <li>
                            <a href="#">Italian</a>
                          </li>
                          <li>
                            <a href="#">Spanish</a>
                          </li>
                          <li>
                            <a href="#">Japanese</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          $ US dollar<i class="fas fa-chevron-down"></i>
                        </a>
                        <ul>
                          <li>
                            <a href="#">EUR Euro</a>
                          </li>
                          <li>
                            <a href="#">GBP British Pound</a>
                          </li>
                          <li>
                            <a href="#">JPY Japanese Yen</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  { isAuth === false && 
                    <>
                    <div class="top_bar_user">
                      <div class="user_icon">
                        <img
                          src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918647/user.svg"
                          alt=""
                        />
                      </div>

                      <div>
                        <Link to="/sign-up">Register</Link>
                      </div>
                      <div>
                        <Link to="/sign-in">Sign in</Link>
                      </div>
                    </div>
                    </>
                  }                 
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="header_main">
          <div class="container">
            <div class="row">
              <div class="col-lg-2 col-sm-3 col-3 order-1">
                <div class="logo_container">
                  <div class="logo">
                    <Link to="/home">BBB</Link>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
                <div class="header_search">
                  <div class="header_search_content">
                    <div class="header_search_form_container">
                      {/* <form action="#" class="header_search_form clearfix"> */}
                        <input
                          type="search"
                          required="required"
                          class="header_search_input"
                          placeholder="Search for products..."
                          name="keyword"
                          onChange={(e) => handleSearchInput(e)}
                          value={search}
                        />
                        <div
                          class="custom_dropdown"
                          style={{ display: "none" }}
                        >
                          <div class="custom_dropdown_list">
                            <span class="custom_dropdown_placeholder clc">
                              All Categories
                            </span>
                            <i class="fas fa-chevron-down"></i>
                            <ul class="custom_list clc">
                              <li>
                                <a class="clc" href="#">
                                  All Categories
                                </a>
                              </li>
                              <li>
                                <a class="clc" href="#">
                                  Computers
                                </a>
                              </li>
                              <li>
                                <a class="clc" href="#">
                                  Laptops
                                </a>
                              </li>
                              <li>
                                <a class="clc" href="#">
                                  Cameras
                                </a>
                              </li>
                              <li>
                                <a class="clc" href="#">
                                  Hardware
                                </a>
                              </li>
                              <li>
                                <a class="clc" href="#">
                                  Smartphones
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <button
                          type="button"
                          class="header_search_button trans_300"
                          value="Submit"
                          onClick={handleSearch}
                        >
                          <img
                            src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918770/search.png"
                            alt=""
                          />
                        </button>
                      {/* </form> */}
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 col-9 order-lg-3 order-2 text-lg-left text-right">
              { isAuth === true &&
                <div class="wishlist_cart d-flex flex-row align-items-center justify-content-end">
                  <div class="wishlist d-flex flex-row align-items-center justify-content-end">
                    <div class="wishlist_icon">
                      <img
                        src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918681/heart.png"
                        alt=""
                      />
                    </div>
                    <div class="wishlist_content">
                      <div class="wishlist_text">
                        <Link to="/wishlist">Wishlist</Link>
                      </div>
                      <div class="wishlist_count">10</div>
                    </div>
                  </div>
 
                  <div class="cart">
                    <div class="cart_container d-flex flex-row align-items-center justify-content-end">
                      <div class="cart_icon">
                        <img
                          src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918704/cart.png"
                          alt=""
                        />
                        <div class="cart_count">
                          <span>{contextCartCount}</span>
                        </div>
                      </div>
                      <div class="cart_content">
                        <div class="cart_text">
                          <Link to="/cart">Cart</Link>
                        </div>
                        <div class="cart_price">${contextCartTotal}</div>
                      </div>

                      <div class="cart_content">
                        <div class="cart_text">
                          <Logout user={user} isAuth={isAuth} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              }
              </div>
            </div>
          </div>
        </div>

        <nav class="main_nav">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="main_nav_content d-flex flex-row">
                  <div class="main_nav_menu">
                    <ul class="standard_dropdown main_nav_dropdown">
                      <li>
                        <Link to="/home">
                          Home<i class="fas fa-chevron-down"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/shop">
                          Shop<i class="fas fa-chevron-down"></i>
                        </Link>
                      </li>
                      {/* <li class="hassubs">
                        <a href="#">
                          Laptop<i class="fas fa-chevron-down"></i>
                        </a>
                        <ul>
                          <li>
                            <a href="#">
                              Lenovo<i class="fas fa-chevron-down"></i>
                            </a>
                            <ul>
                              <li>
                                <a href="#">
                                  Lenovo 1<i class="fas fa-chevron-down"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  Lenovo 3<i class="fas fa-chevron-down"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  Lenovo 2<i class="fas fa-chevron-down"></i>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">
                              DELL<i class="fas fa-chevron-down"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              APPLE<i class="fas fa-chevron-down"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              HP<i class="fas fa-chevron-down"></i>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="hassubs">
                        <a href="#">
                          Featured Brands<i class="fas fa-chevron-down"></i>
                        </a>
                        <ul>
                          <li>
                            <a href="#">
                              APPLE<i class="fas fa-chevron-down"></i>
                            </a>
                            <ul>
                              <li>
                                <a href="#">
                                  Laptop<i class="fas fa-chevron-down"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  Mobiles<i class="fas fa-chevron-down"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  Ipads<i class="fas fa-chevron-down"></i>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">
                              Samsung<i class="fas fa-chevron-down"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Lenovo<i class="fas fa-chevron-down"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              DELL<i class="fas fa-chevron-down"></i>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="hassubs">
                        <a href="#">
                          Pages<i class="fas fa-chevron-down"></i>
                        </a>
                        <ul>
                          <li>
                            <a href="shop.html">
                              Shop<i class="fas fa-chevron-down"></i>
                            </a>
                          </li>
                          <li>
                            <a href="product.html">
                              Product<i class="fas fa-chevron-down"></i>
                            </a>
                          </li>
                          <li>
                            <a href="blog.html">
                              Blog<i class="fas fa-chevron-down"></i>
                            </a>
                          </li>
                          <li>
                            <a href="blog_single.html">
                              Blog Post<i class="fas fa-chevron-down"></i>
                            </a>
                          </li>
                          <li>
                            <a href="regular.html">
                              Regular Post<i class="fas fa-chevron-down"></i>
                            </a>
                          </li>
                          <li>
                            <a href="cart.html">
                              Cart<i class="fas fa-chevron-down"></i>
                            </a>
                          </li>
                          <li>
                            <a href="contact.html">
                              Contact<i class="fas fa-chevron-down"></i>
                            </a>
                          </li>
                        </ul>
                      </li> */}
                      <li>
                        <Link to="/blog">
                          Blog<i class="fas fa-chevron-down"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/contact">
                          Contact<i class="fas fa-chevron-down"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div class="menu_trigger_container ml-auto">
                    <div class="menu_trigger d-flex flex-row align-items-center justify-content-end">
                      <div class="menu_burger">
                        <div class="menu_trigger_text">menu</div>
                        <div class="cat_burger menu_burger_inner">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div class="page_menu">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="page_menu_content">
                  <div class="page_menu_search">
                    <form action="#">
                      <input
                        type="search"
                        required="required"
                        class="page_menu_search_input"
                        placeholder="Search for products..."
                      />
                    </form>
                  </div>
                  <ul class="page_menu_nav">
                    <li class="page_menu_item has-children">
                      <a href="#">
                        Language<i class="fa fa-angle-down"></i>
                      </a>
                      <ul class="page_menu_selection">
                        <li>
                          <a href="#">
                            English<i class="fa fa-angle-down"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Italian<i class="fa fa-angle-down"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Spanish<i class="fa fa-angle-down"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Japanese<i class="fa fa-angle-down"></i>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="page_menu_item has-children">
                      <a href="#">
                        Currency<i class="fa fa-angle-down"></i>
                      </a>
                      <ul class="page_menu_selection">
                        <li>
                          <a href="#">
                            US Dollar<i class="fa fa-angle-down"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            EUR Euro<i class="fa fa-angle-down"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            GBP British Pound<i class="fa fa-angle-down"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            JPY Japanese Yen<i class="fa fa-angle-down"></i>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="page_menu_item">
                      <a href="#">
                        Home<i class="fa fa-angle-down"></i>
                      </a>
                    </li>
                    <li class="page_menu_item has-children">
                      <a href="#">
                        Super Deals<i class="fa fa-angle-down"></i>
                      </a>
                      <ul class="page_menu_selection">
                        <li>
                          <a href="#">
                            Super Deals<i class="fa fa-angle-down"></i>
                          </a>
                        </li>
                        <li class="page_menu_item has-children">
                          <a href="#">
                            Menu Item<i class="fa fa-angle-down"></i>
                          </a>
                          <ul class="page_menu_selection">
                            <li>
                              <a href="#">
                                Menu Item<i class="fa fa-angle-down"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Menu Item<i class="fa fa-angle-down"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Menu Item<i class="fa fa-angle-down"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                Menu Item<i class="fa fa-angle-down"></i>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            Menu Item<i class="fa fa-angle-down"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Menu Item<i class="fa fa-angle-down"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Menu Item<i class="fa fa-angle-down"></i>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="page_menu_item has-children">
                      <a href="#">
                        Featured Brands<i class="fa fa-angle-down"></i>
                      </a>
                      <ul class="page_menu_selection">
                        <li>
                          <a href="#">
                            Featured Brands<i class="fa fa-angle-down"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Menu Item<i class="fa fa-angle-down"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Menu Item<i class="fa fa-angle-down"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Menu Item<i class="fa fa-angle-down"></i>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="page_menu_item has-children">
                      <a href="#">
                        Trending Styles<i class="fa fa-angle-down"></i>
                      </a>
                      <ul class="page_menu_selection">
                        <li>
                          <a href="#">
                            Trending Styles<i class="fa fa-angle-down"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Menu Item<i class="fa fa-angle-down"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Menu Item<i class="fa fa-angle-down"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            Menu Item<i class="fa fa-angle-down"></i>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="page_menu_item">
                      <a href="blog.html">
                        blog<i class="fa fa-angle-down"></i>
                      </a>
                    </li>
                    <li class="page_menu_item">
                      <a href="contact.html">
                        contact<i class="fa fa-angle-down"></i>
                      </a>
                    </li>
                  </ul>

                  <div class="menu_contact">
                    <div class="menu_contact_item">
                      <div class="menu_contact_icon">
                        <img src="images/phone_white.png" alt="" />
                      </div>
                      +38 068 005 3570
                    </div>
                    <div class="menu_contact_item">
                      <div class="menu_contact_icon">
                        <img src="images/mail_white.png" alt="" />
                      </div>
                      <a href="mailto:fastsales@gmail.com">
                        fastsales@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>


    // <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    //     <div className="container">
    //     <Link className="navbar-brand" to={"/sign-in"}>
    //         positronX
    //     </Link>
    //     <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    //         <ul className="navbar-nav ml-auto">
    //         <li className="nav-item">
    //             <Link className="nav-link" to={"/sign-in"}>
    //             Login
    //             </Link>
    //         </li>
    //         <li className="nav-item">
    //             <Link className="nav-link" to={"/sign-up"}>
    //             Sign up
    //             </Link>
    //         </li>
    //         <li className="nav-item">
    //             <Link className="nav-link" to={"/shop"}>
    //             Shop
    //             </Link>
    //         </li>
    //         <li className="nav-item">
    //             <Link className="nav-link" to={"/product-details/:id"}>
    //             Product Details
    //             </Link>
    //         </li>
    //         <li className="nav-item">
    //             <Link className="nav-link" to={"/cart"}>
    //             Cart
    //             </Link>
    //         </li>
    //         <li className="nav-item">
    //             <Link className="nav-link" to={"/checkout"}>
    //             Checkout
    //             </Link>
    //         </li>
    //         </ul>
    //     </div>

    //     <div class="cart_icon">
    //         <img
    //         src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918704/cart.png"
    //         alt=""
    //         height="30"
    //         />
    //         <div class="cart_count">
    //         <Link to="/cart"><span>3</span></Link>
    //         </div>
    //     </div>
        
    //     { isAuth && 
    //     <Logout user={user} />
    //     }
    //     </div>
    // </nav>
  )
}
