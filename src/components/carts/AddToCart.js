import { useContext, useState } from "react";
import axios from "axios";
import customToast from "../common/CustomToast";
import { cartContext } from "../../hoc/MainHoc";

const AddToCart = (props) => {
  const product_id = props.id;
  const LOCAL_STORAGE_KEY = "user";
  const LOCAL_STORAGE_KEY_CART = "cart_count";
  const LOCAL_STORAGE_KEY_CART_AMOUNT = "cart_amount";

  const contextValue = useContext(cartContext);
  const contextCartCount = contextValue.cartCount;
  const contextCartTotal = contextValue.cartTotal;
  const setContextCartCount = contextValue.setCartCount;
  const setContextCartTotal = contextValue.setCartTotal;

  var userLocalData = {
    id: '',
    name: '',
    email: '',
    token: ''
  };
  const localData = localStorage.getItem(LOCAL_STORAGE_KEY);
  // var localCartCount = localStorage.getItem(LOCAL_STORAGE_KEY_CART);

  // const [cartCount, setCartCount] = localCartCount &&  localCartCount || useState(0);
  if(localData != 'undefined') {
    var userLocalData = JSON.parse(localData);
  }

  const [user, setUser] = useState(userLocalData);

  const handleAddToCart = (id) => {
      let data = {
        product_id: id,
        qty: 1,
        user_id: user.id
      };

      // let product_data = JSON.stringify(data);

      axios.post('http://127.0.0.1:8000/api/add-to-cart', data).then((res) => {
        if(res.status === 200) {
          localStorage.setItem(LOCAL_STORAGE_KEY_CART, parseInt(contextCartCount) + 1);
          localStorage.setItem(LOCAL_STORAGE_KEY_CART_AMOUNT, parseInt(contextCartTotal) + 100);
          setContextCartCount((contextCartCount) => parseInt(contextCartCount) + 1);
          setContextCartTotal((contextCartTotal) => parseInt(contextCartTotal) + 100);
          customToast.success("cart added successfuly");
        }
      }).catch((err) => {
        console.log(err);
      });
    }
      
    return (
        <button class="add-to-cart btn btn-primary" type="button" onClick={() => handleAddToCart(product_id)}>add to cart</button>
    )
}

export default AddToCart;