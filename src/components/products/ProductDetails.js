import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddToCart from "../carts/AddToCart";
import AddToWishlist from "../carts/AddToWishlist";
import "./product.css";
import axios from "axios";

function ProductDetails() {
  const [product, setProduct] = useState({});

  const params = useParams();

  useEffect(() => {
    getProduct()
  }, []);

  const getProduct = () => {
    axios.get('http://127.0.0.1:8000/api/product/'+params.id).then((res) => {
      if(res.status === 200) {
        let productData = res.data.product;
        setProduct(productData);
      }
    }).catch((err) => {
        console.log(err);
    });
  }

    return (
      <div className="container">
        <div class="card">
          <div class="container-fliud">
            <div class="wrapper row">
              <div class="preview col-md-6">
                
                <div class="preview-pic tab-content">
                  <div class="tab-pane active" id="pic-1"><img src="http://placekitten.com/400/252" /></div>
                  <div class="tab-pane" id="pic-2"><img src="http://placekitten.com/400/252" /></div>
                  <div class="tab-pane" id="pic-3"><img src="http://placekitten.com/400/252" /></div>
                  <div class="tab-pane" id="pic-4"><img src="http://placekitten.com/400/252" /></div>
                  <div class="tab-pane" id="pic-5"><img src="http://placekitten.com/400/252" /></div>
                </div>
                <ul class="preview-thumbnail nav nav-tabs">
                  <li class="active"><a data-target="#pic-1" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                  <li><a data-target="#pic-2" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                  <li><a data-target="#pic-3" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                  <li><a data-target="#pic-4" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                  <li><a data-target="#pic-5" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
                </ul>
                
              </div>
              <div class="details col-md-6">
                <h3 class="product-title">{product.name}</h3>
                <div class="rating">
                  <div class="stars">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                  </div>
                  <span class="review-no">41 reviews</span>
                </div>
                <p class="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p>
                <h4 class="price text-center">current price: <span>${product.price}</span></h4>
                <p class="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
                <h5 class="sizes">sizes:
                  <span class="size" data-toggle="tooltip" title="small">s</span>
                  <span class="size" data-toggle="tooltip" title="medium">m</span>
                  <span class="size" data-toggle="tooltip" title="large">l</span>
                  <span class="size" data-toggle="tooltip" title="xtra large">xl</span>
                </h5>
                <h5 class="colors">colors:
                  <span class="color orange"></span>
                  <span class="color green"></span>
                  <span class="color blue"></span>
                </h5>
                <div class="action">
                  <div className="row">
                    <div className="col-md-6">
                      <AddToCart id={product.id} />
                    </div>
                    <div className="col-md-6">
                      <AddToWishlist />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
export default ProductDetails;   