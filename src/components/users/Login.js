import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { json, useNavigate } from "react-router-dom";
import customToast from "../common/CustomToast";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const [validation, setValidation] = useState({
    email: '',
    password: '',
  });
  const [isSubmit, setIsSubmit] = useState(false);
  // const [isValid, setIsValid] = useState(false);

  const LOCAL_STORAGE_KEY = "user";
  const LOCAL_STORAGE_KEY_CART = "cart_count";
  const LOCAL_STORAGE_KEY_CART_AMOUNT = "cart_amount";

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const checkValidation = () => {
    let valid = {};

    if (!user.email) {
      valid.email = "email field is required";
      // setValidation({...validation, email: "email field is required"});
    } 
    // else {
    //   valid.email = "";
    //   // setValidation({...validation, email: ""});
    // }
    //last Name validation
    if (!user.password) {
      valid.password = "password field is required";
      // setValidation({...validation, password: "password field is required"});
    } 
    // else {
    //   valid.password = "";
    //   // setValidation({...validation, password: ""});
    // }

    setValidation({...valid});

    if(Object.keys(valid).length === 0) {
      // setIsValid(true);
      return true;
    } else {
      // setIsValid(false);
      return false;
    }
  }

  useEffect(() => {
    isSubmit && checkValidation();
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);

    if(checkValidation()) {
    let data = {
      email: user.email,
      password: user.password
    };

    axios
      .post("http://127.0.0.1:8000/api/login", data)
      .then((res) => {
        let userData = res.data.data;
        let cart_count = res.data.cart_count;
        let cart_amount = res.data.total_cart_amount;
        if(res.status === 200) {
          console.log("api data", res.data);
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userData));
          localStorage.setItem(LOCAL_STORAGE_KEY_CART, cart_count)
          localStorage.setItem(LOCAL_STORAGE_KEY_CART_AMOUNT, cart_amount)
          customToast.success("User loggedin successfully");
          setUser({
            email: '',
            password: ''
          });
          navigate('/shop');
        }
      })
      .catch((err) => {
        customToast.error(err);
      });
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
          <h3>Sign In</h3>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter email"
              name="email"
              autoComplete="none"
              value={user.email}
              onChange={(e) => handleInput(e)}
            />
            {validation.email && <p style={{color: "red"}}>{validation.email}</p>}
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
              value={user.password}
              onChange={(e) => handleInput(e)}
            />
            {validation.password && <p style={{color: "red" }}>{validation.password}</p>}
          </div>
          <div className="d-grid">
            <button type="button" onClick={handleSubmit} className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-center">
            Don't have account<a href="/sign-up">register?</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
