import customToast from "../common/CustomToast";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../hoc/MainHoc";
import { useContext } from "react";

const RemoveCart = (props) => {
  const navigate = useNavigate();  
  const LOCAL_STORAGE_KEY_CART = "cart_count";
  const LOCAL_STORAGE_KEY_CART_AMOUNT = "cart_amount";

  const contextValue = useContext(cartContext);
  const contextCartCount = contextValue.cartCount;
  const contextCartTotal = contextValue.cartTotal;
  const setContextCartCount = contextValue.setCartCount;
  const setContextCartTotal = contextValue.setCartTotal;

  const handleRemoveCart = (id, qty) => {
    axios.delete('http://127.0.0.1:8000/api/cart-delete/'+id)
    .then((res) => {
      if(res.status === 200) {
        setContextCartCount(parseInt(contextCartCount) - qty);
        setContextCartTotal(parseInt(contextCartTotal) - (100 * qty));
        localStorage.setItem(LOCAL_STORAGE_KEY_CART, parseInt(contextCartCount) - qty);
        localStorage.setItem(LOCAL_STORAGE_KEY_CART_AMOUNT, parseInt(contextCartTotal) - (100 * qty));
        navigate("/cart");
        customToast.success("Cart deleted successfully");
      }
    }).catch((err) => {
      customToast.error(err)
    })
  }

  return <FaTrashAlt onClick={(e) => handleRemoveCart(props.cart_data.id, props.cart_data.qty)} style={{ color: "red" }} />;
};

export default RemoveCart;
