import axios from "axios";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import customToast from "../common/CustomToast";

function Logout(props) {
    let user_data = props.user;
    const LOCAL_STORAGE_KEY = "user";
    const LOCAL_STORAGE_KEY_CART = "cart_count";
    const LOCAL_STORAGE_KEY_CART_AMOUNT = "cart_amount";
    let data = [];
    const navigate = useNavigate();

    const handleClick = () => {
        axios.post('http://127.0.0.1:8000/api/logout', data, {
            headers: {
              'Authorization': `Bearer ${user_data.token}`
            }
          }).then((res) => {
            if(res.status === 200) {
                localStorage.removeItem(LOCAL_STORAGE_KEY);
                localStorage.removeItem(LOCAL_STORAGE_KEY_CART);
                localStorage.removeItem(LOCAL_STORAGE_KEY_CART_AMOUNT);
                customToast.success("User logout successfuly");
                navigate('/sign-in');
            }
          }).catch((err) => {
            customToast.error(err);
          });
    }

    return (
        <div class="logout">
            <img src="images/boy.png" alt="avatar" height="25" width="25" />
            <button className="btn btn-sm btn-danger" onClick={handleClick}>Logout</button>
        </div>
    )
}

export default Logout;
