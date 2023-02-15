import { useContext, useState } from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import customToast from "../common/CustomToast";
import axios from "axios";
import { cartContext } from "../../hoc/MainHoc";

const CartUpdate = (props) => {
  const [quant, setQuant] = useState(props.cart_data.qty);
  const cartId = props.cart_id;

  const LOCAL_STORAGE_KEY_CART = "cart_count";
  const LOCAL_STORAGE_KEY_CART_AMOUNT = "cart_amount";

  const contextValue = useContext(cartContext);
  const contextCartCount = contextValue.cartCount;
  const contextCartTotal = contextValue.cartTotal;
  const setContextCartCount = contextValue.setCartCount;
  const setContextCartTotal = contextValue.setCartTotal;

  const handleDecrement = (qty) => {
    cartUpdate(qty - 1);
    setQuant(qty - 1);
    setContextCartCount(parseInt(contextCartCount) - 1);
    setContextCartTotal(parseInt(contextCartTotal) - 100);
    localStorage.setItem(LOCAL_STORAGE_KEY_CART, parseInt(contextCartCount) - 1);
    localStorage.setItem(LOCAL_STORAGE_KEY_CART_AMOUNT, parseInt(contextCartTotal) - 100);
  };

  const handleIncrement = (qty) => {
    cartUpdate(qty + 1);
    setQuant(qty + 1);
    setContextCartCount(parseInt(contextCartCount) + 1);
    setContextCartTotal(parseInt(contextCartTotal) + 100);
    localStorage.setItem(LOCAL_STORAGE_KEY_CART, parseInt(contextCartCount) + 1);
    localStorage.setItem(LOCAL_STORAGE_KEY_CART_AMOUNT, parseInt(contextCartTotal) + 100);
  };

  const cartUpdate = (qty) => {
    let data = {
      qty: qty
    }
    axios.put('http://127.0.0.1:8000/api/cart-update/'+cartId, data)
    .then((res) => {
      if(res.status === 200) {  
        customToast.success("Cart updated successfully");
      }
    }).catch((err) => {
      customToast.error(err)
    })
  }

  return (
    <>
      <FaMinusCircle
        onClick={(e) => handleDecrement(quant)}
      />
      <span> </span>
      {quant}
      <span> </span>
      <FaPlusCircle
        onClick={(e) => handleIncrement(quant)}
      />
    </>
  );
};

export default CartUpdate;
