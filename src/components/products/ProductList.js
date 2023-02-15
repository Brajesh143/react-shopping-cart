import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { FaHeart, FaShoppingCart, FaExpand } from "react-icons/fa";
import AddToCart from "../carts/AddToCart";
import AddToWishlist from "../carts/AddToWishlist";
import Pagination from "../common/Paginate";
import Paginate from "../common/Paginate";

export const currentPageContext = createContext();

function ProductList() {
    const [products, setProducts] = useState([]);
    const [cartAdd, setCartAdd] = useState(false);
    const [totalPage, setTotalPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    const contextValue = {
      current_page: currentPage, 
      set_current_page: setCurrentPage
    }

    useEffect(() => {
      getProducts()
    }, [currentPage]);

    const getProducts = () => {
      var url = 'http://127.0.0.1:8000/api/products';
      if(currentPage > 1) {
        url = 'http://127.0.0.1:8000/api/products?page='+currentPage;
      }
      axios.get(url).then((res) => {
        if(res.status === 200) {
          let productDatas = res.data.products.data;
          setProducts(productDatas);
          setTotalPage(2);
        }
      }).catch((err) => {
          console.log(err);
      });
    }

    return (
      <>
        <div class="container d-flex justify-content-center mt-50 mb-50">
          <div class="row">
          { products && products.map((value, index) => {
                return (
                  <div class="col-md-4 mt-2">
                    <div class="card">
                      <div class="card-body" style={{ height: "190px" }}>
                        <div class="card-img-actions">
                          <img
                            src="https://i.dummyjson.com/data/products/4/thumbnail.jpg"
                            class="card-img img-fluid"
                            width="96"
                            height="350"
                            alt=""
                            style={{ height: "180px" }}
                          />
                        </div>
                      </div>
                      <div class="card-body bg-light text-center">
                        <div class="mb-2">
                          <h6 class="font-weight-semibold mb-2">
                            <Link to={`/product-details/${value.id}`}>
                              {value.name}
                            </Link>
                          </h6>
                          <Link to={`/product-details/${value.id}`}>
                            Fruit
                          </Link>
                        </div>

                        <h3 class="mb-0 font-weight-semibold">$ {value.price}</h3>
                        <div>
                          <i class="fa fa-star star"></i>
                          <i class="fa fa-star star"></i>
                          <i class="fa fa-star star"></i>
                          <i class="fa fa-star star"></i>
                        </div>

                        <div class="text-muted mb-3">34 reviews</div>
                        <AddToCart id={value.id} />
                        <span> </span>
                        <AddToWishlist id={value.id} />
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="text-center">
          <currentPageContext.Provider value={contextValue}>
            <Paginate totalPages={totalPage} />
          </currentPageContext.Provider>
        </div>
      </>
    );
  }

  export default ProductList;  
  